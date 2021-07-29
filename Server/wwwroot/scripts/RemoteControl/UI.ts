﻿import { RCBrowserSockets } from "./RCBrowserSockets.js";
import { MainRc } from "./Main.js";
import { PopupMessage } from "../UI.js";
import { RemoteControlMode } from "../Enums/RemoteControlMode.js";
import { Point } from "../Models/Point.js";
import { GetDistanceBetween, ConvertUInt8ArrayToBase64 } from "../Utilities.js";
import { CursorInfo } from "../Models/CursorInfo.js";

export var AudioButton = document.getElementById("audioButton") as HTMLButtonElement;
export var MenuButton = document.getElementById("menuButton") as HTMLButtonElement;
export var MenuFrame = document.getElementById("menuFrame") as HTMLDivElement;
export var SessionIDInput = document.getElementById("sessionIDInput") as HTMLInputElement;
export var ConnectButton = document.getElementById("connectButton") as HTMLButtonElement;
export var RequesterNameInput = document.getElementById("nameInput") as HTMLInputElement;
export var StatusMessage = document.getElementById("statusMessage") as HTMLDivElement;
export var ScreenViewer = document.getElementById("screenViewer") as HTMLCanvasElement;
export var ScreenViewerWrapper = document.getElementById("screenViewerWrapper") as HTMLDivElement;
export var Screen2DContext = ScreenViewer.getContext("2d");
export var HorizontalBars = document.querySelectorAll(".horizontal-button-bar");
export var ConnectBox = document.getElementById("connectBox") as HTMLDivElement;
export var ScreenSelectBar = document.getElementById("screenSelectBar") as HTMLDivElement;
export var QualityBar = document.getElementById("qualityBar") as HTMLDivElement;
export var QualitySlider = document.getElementById("qualityRangeInput") as HTMLInputElement;
export var AutoQualityAdjustCheckBox = document.getElementById("autoAdjustQualityCheckBox") as HTMLInputElement;
export var ActionsBar = document.getElementById("actionsBar") as HTMLDivElement;
export var ViewBar = document.getElementById("viewBar") as HTMLDivElement;
export var ChangeScreenButton = document.getElementById("changeScreenButton") as HTMLButtonElement;
export var QualityButton = document.getElementById("qualityButton") as HTMLButtonElement;
export var FitToScreenButton = document.getElementById("fitToScreenButton") as HTMLButtonElement;
export var BlockInputButton = document.getElementById("blockInputButton") as HTMLButtonElement;
export var DisconnectButton = document.getElementById("disconnectButton") as HTMLButtonElement;
export var FileTransferInput = document.getElementById("fileTransferInput") as HTMLInputElement;
export var FileTransferProgress = document.getElementById("fileTransferProgress") as HTMLProgressElement;
export var KeyboardButton = document.getElementById("keyboardButton") as HTMLButtonElement;
export var InviteButton = document.getElementById("inviteButton") as HTMLButtonElement;
export var FileTransferButton = document.getElementById("fileTransferButton") as HTMLButtonElement;
export var CtrlAltDelButton = document.getElementById("ctrlAltDelButton") as HTMLButtonElement;
export var TouchKeyboardTextArea = document.getElementById("touchKeyboardTextArea") as HTMLTextAreaElement;
export var ClipboardTransferBar = document.getElementById("clipboardTransferBar") as HTMLDivElement;
export var ClipboardTransferTextArea = document.getElementById("clipboardTransferTextArea") as HTMLTextAreaElement;
export var ClipboardTransferButton = document.getElementById("clipboardTransferButton") as HTMLButtonElement;
export var ClipboardTransferTypeCheckbox = document.getElementById("clipboardTransferTypeCheckbox") as HTMLInputElement;
export var ConnectionP2PIcon = document.getElementById("connectionP2PIcon") as HTMLElement;
export var ConnectionRelayedIcon = document.getElementById("connectionRelayedIcon") as HTMLElement;

var lastPointerMove = Date.now();
var isDragging: boolean;
var currentPointerDevice: string;
var currentTouchCount: number;
var cancelNextViewerClick: boolean;
var isPinchZooming: boolean;
var startPinchPoint1: Point;
var startPinchPoint2: Point;
var lastPinchDistance: number;
var isMenuButtonDragging: boolean;
var startMenuDraggingY: number;
var startLongPressTimeout: number;

export function ApplyInputHandlers(sockets: RCBrowserSockets) {
    AudioButton.addEventListener("click", (ev) => {
        AudioButton.classList.toggle("toggled");
        var toggleOn = AudioButton.classList.contains("toggled");
        sockets.SendToggleAudio(toggleOn);
    });
    ChangeScreenButton.addEventListener("click", (ev) => {
        closeAllHorizontalBars("screenSelectBar");
        ScreenSelectBar.classList.toggle("open");
    });
    ClipboardTransferButton.addEventListener("click", (ev) => {
        closeAllHorizontalBars("clipboardTransferBar");
        ClipboardTransferBar.classList.toggle("open");
    });
    ClipboardTransferTextArea.addEventListener("input", (ev) => {
        if (ClipboardTransferTextArea.value.length == 0) {
            return;
        }
        sockets.SendClipboardTransfer(ClipboardTransferTextArea.value, ClipboardTransferTypeCheckbox.checked);
        ClipboardTransferTextArea.blur();
        PopupMessage("Clipboard sent!");
    });
    ConnectButton.addEventListener("click", (ev) => {
        MainRc.ConnectToClient();
    });
    CtrlAltDelButton.addEventListener("click", (ev) => {
        if (!MainRc.ServiceID) {
            ShowMessage("Not available for this session.");
            return;
        }
        closeAllHorizontalBars(null);
        MainRc.RCBrowserSockets.SendCtrlAltDel();
    });
    DisconnectButton.addEventListener("click", (ev) => {
        ConnectButton.removeAttribute("disabled");
        MainRc.RCBrowserSockets.Connection.stop();
        if (location.search.includes("fromApi=true")) {
            window.close();
        }
    });
    document.querySelectorAll("#sessionIDInput, #nameInput").forEach(x => {
        x.addEventListener("keypress", (ev: KeyboardEvent) => {
            if (ev.key.toLowerCase() == "enter") {
                MainRc.ConnectToClient();
            }
        })
    });
    FileTransferButton.addEventListener("click", (ev) => {
        FileTransferInput.click();
    });
    FileTransferInput.addEventListener("change", (ev) => {
        uploadFiles(FileTransferInput.files);
    });
    FitToScreenButton.addEventListener("click", (ev) => {
        FitToScreenButton.classList.toggle("toggled");
        if (FitToScreenButton.classList.contains("toggled")) {
            ScreenViewer.style.removeProperty("max-width");
            ScreenViewer.style.removeProperty("max-height");
        }
        else {
            ScreenViewer.style.maxWidth = "unset";
            ScreenViewer.style.maxHeight = "unset";
        }
    });
    BlockInputButton.addEventListener("click", (ev) => {
        var button = ev.currentTarget as HTMLButtonElement;
        button.classList.toggle("toggled");
        if (button.classList.contains("toggled")) {
            MainRc.RCBrowserSockets.SendToggleBlockInput(true);
        }
        else {
            MainRc.RCBrowserSockets.SendToggleBlockInput(false);
        }
    });
    InviteButton.addEventListener("click", (ev) => {
        var url = "";
        if (MainRc.Mode == RemoteControlMode.Normal) {
            url = `${location.origin}${location.pathname}?sessionID=${MainRc.ClientID}`;
        }
        else {
            url = `${location.origin}${location.pathname}?clientID=${MainRc.ClientID}&serviceID=${MainRc.ServiceID}`;
        }
        MainRc.ClipboardWatcher.SetClipboardText(url);
        PopupMessage("Link copied to clipboard.");
    });
    KeyboardButton.addEventListener("click", (ev) => {
        closeAllHorizontalBars(null);
        TouchKeyboardTextArea.focus();
        TouchKeyboardTextArea.setSelectionRange(TouchKeyboardTextArea.value.length, TouchKeyboardTextArea.value.length);
        MenuFrame.classList.remove("open");
        MenuButton.classList.remove("open");
    });
    MenuButton.addEventListener("click", (ev) => {
        if (isMenuButtonDragging) {
            isMenuButtonDragging = false;
            return;
        }
        MenuFrame.classList.toggle("open");
        MenuButton.classList.toggle("open");
        closeAllHorizontalBars(null);
    });
    MenuButton.addEventListener("mousedown", (ev) => {
        isMenuButtonDragging = false;
        startMenuDraggingY = ev.clientY;
        window.addEventListener("mousemove", moveMenuButton);
        window.addEventListener("mouseup", removeMouseButtonWindowListeners);
        window.addEventListener("mouseleave", removeMouseButtonWindowListeners);
    });
    MenuButton.addEventListener("touchmove", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        MenuButton.style.top = `${ev.touches[0].clientY}px`;
    });
    QualityButton.addEventListener("click", (ev) => {
        closeAllHorizontalBars("qualityBar");
        QualityBar.classList.toggle("open");
    })
    QualitySlider.addEventListener("change", (ev) => {
        sockets.SendQualityChange(Number(QualitySlider.value));
    });
    AutoQualityAdjustCheckBox.addEventListener("change", ev => {
        sockets.SendAutoQualityAdjust(AutoQualityAdjustCheckBox.checked);
    });
    ScreenViewer.addEventListener("pointermove", function (e) {
        currentPointerDevice = e.pointerType;
    });
    ScreenViewer.addEventListener("pointerdown", function (e) {
        currentPointerDevice = e.pointerType;
    });
    ScreenViewer.addEventListener("pointerenter", function (e) {
        currentPointerDevice = e.pointerType;
    });
    ScreenViewer.addEventListener("mousemove", function (e) {
        e.preventDefault();
        if (Date.now() - lastPointerMove < 25) {
            return;
        }
        lastPointerMove = Date.now();
        var percentX = e.offsetX / ScreenViewer.clientWidth;
        var percentY = e.offsetY / ScreenViewer.clientHeight;
        sockets.SendMouseMove(percentX, percentY);
    });
    ScreenViewer.addEventListener("mousedown", function (e) {
        if (currentPointerDevice == "touch") {
            return;
        }
        if (e.button != 0 && e.button != 2) {
            return;
        }
        e.preventDefault();
        var percentX = e.offsetX / ScreenViewer.clientWidth;
        var percentY = e.offsetY / ScreenViewer.clientHeight;
        sockets.SendMouseDown(e.button, percentX, percentY);
    });
    ScreenViewer.addEventListener("mouseup", function (e) {
        if (currentPointerDevice == "touch") {
            return;
        }
        if (e.button != 0 && e.button != 2) {
            return;
        }
        e.preventDefault();
        var percentX = e.offsetX / ScreenViewer.clientWidth;
        var percentY = e.offsetY / ScreenViewer.clientHeight;
        sockets.SendMouseUp(e.button, percentX, percentY);
    });

    ScreenViewer.addEventListener("click", function (e) {
        if (cancelNextViewerClick) {
            cancelNextViewerClick = false;
            return;
        }
        if (currentPointerDevice == "mouse") {
            e.preventDefault();
            e.stopPropagation();
        }
        else if (currentPointerDevice == "touch" && currentTouchCount == 0) {
            var percentX = e.offsetX / ScreenViewer.clientWidth;
            var percentY = e.offsetY / ScreenViewer.clientHeight;
            sockets.SendTap(percentX, percentY);
        }
    });

    ScreenViewer.addEventListener("touchstart", function (e) {
        currentTouchCount = e.touches.length;

        if (currentTouchCount == 1) {
            startLongPressTimeout = window.setTimeout(() => {
                var percentX = e.touches[0].pageX / ScreenViewer.clientWidth;
                var percentY = e.touches[0].pageY / ScreenViewer.clientHeight;
                sockets.SendMouseDown(2, percentX, percentY);
                sockets.SendMouseUp(2, percentX, percentY);
            }, 1000);
        }

        if (currentTouchCount > 1) {
            cancelNextViewerClick = true;
        }
        if (currentTouchCount == 2) {
            startPinchPoint1 = { X: e.touches[0].pageX, Y: e.touches[0].pageY, IsEmpty: false };
            startPinchPoint2 = { X: e.touches[1].pageX, Y: e.touches[1].pageY, IsEmpty: false };
            lastPinchDistance = GetDistanceBetween(startPinchPoint1.X,
                startPinchPoint1.Y,
                startPinchPoint2.X,
                startPinchPoint2.Y);
        }
        isDragging = false;
        KeyboardButton.removeAttribute("hidden");
        var focusedInput = document.querySelector("input:focus") as HTMLInputElement;
        if (focusedInput) {
            focusedInput.blur();
        }
    });

    ScreenViewer.addEventListener("touchmove", function (e) {
        currentTouchCount = e.touches.length;

        clearTimeout(startLongPressTimeout);
        
        var percentX = (e.touches[0].pageX - ScreenViewer.getBoundingClientRect().left) / ScreenViewer.clientWidth;
        var percentY = (e.touches[0].pageY - ScreenViewer.getBoundingClientRect().top) / ScreenViewer.clientHeight;

        if (e.touches.length == 2) {
            var pinchPoint1 = { X: e.touches[0].pageX, Y: e.touches[0].pageY, IsEmpty: false };
            var pinchPoint2 = { X: e.touches[1].pageX, Y: e.touches[1].pageY, IsEmpty: false };
            var pinchDistance = GetDistanceBetween(pinchPoint1.X,
                pinchPoint1.Y,
                pinchPoint2.X,
                pinchPoint2.Y);

            if (Math.abs(pinchDistance - lastPinchDistance) > 5) {
                isPinchZooming = true;
                if (FitToScreenButton.classList.contains("toggled")) {
                    FitToScreenButton.click();
                }
                var currentWidth = ScreenViewer.clientWidth;
                var currentHeight = ScreenViewer.clientHeight;

                var currentWidthPercent = Number(ScreenViewer.style.width.slice(0, -1));
                var newWidthPercent = Math.max(100, currentWidthPercent + (pinchDistance - lastPinchDistance));
                ScreenViewer.style.width = String(newWidthPercent) + "%";

                var heightChange = ScreenViewer.clientHeight - currentHeight;
                var widthChange = ScreenViewer.clientWidth - currentWidth;
                var scrollPercentX = ScreenViewerWrapper.scrollLeft  / (ScreenViewerWrapper.scrollWidth - ScreenViewerWrapper.clientWidth);
                var scrollPercentY = ScreenViewerWrapper.scrollTop / (ScreenViewerWrapper.scrollHeight - ScreenViewerWrapper.clientHeight);
                ScreenViewerWrapper.scrollBy(widthChange * scrollPercentX, heightChange * scrollPercentY);

                lastPinchDistance = pinchDistance;
            }
            return;
        }
        else if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            sockets.SendMouseMove(percentX, percentY);
        }
    });
    ScreenViewer.addEventListener("touchend", function (e) {
        currentTouchCount = e.touches.length;

        clearTimeout(startLongPressTimeout);

        if (e.touches.length == 1 && !isPinchZooming) {
            isDragging = true;
            var percentX = (e.touches[0].pageX - ScreenViewer.getBoundingClientRect().left) / ScreenViewer.clientWidth;
            var percentY = (e.touches[0].pageY - ScreenViewer.getBoundingClientRect().top) / ScreenViewer.clientHeight;
            sockets.SendMouseMove(percentX, percentY);
            sockets.SendMouseDown(0, percentX, percentY);
            return;
        }

        if (currentTouchCount == 0) {
            cancelNextViewerClick = false;
            isPinchZooming = false;
            startPinchPoint1 = null;
            startPinchPoint2 = null;
        }

        if (isDragging) {
            var percentX = (e.changedTouches[0].pageX - ScreenViewer.getBoundingClientRect().left) / ScreenViewer.clientWidth;
            var percentY = (e.changedTouches[0].pageY - ScreenViewer.getBoundingClientRect().top) / ScreenViewer.clientHeight;
            sockets.SendMouseUp(0, percentX, percentY);
        }

        isDragging = false;
    });
    ScreenViewer.addEventListener("contextmenu", (ev) => {
        ev.preventDefault();
    });
    ScreenViewer.addEventListener("wheel", function (e) {
        e.preventDefault();
        sockets.SendMouseWheel(e.deltaX, e.deltaY);
    });
    TouchKeyboardTextArea.addEventListener("input", (ev) => {
        if (TouchKeyboardTextArea.value.length == 1) {
            sockets.SendKeyPress("Backspace");
        }
        else if (TouchKeyboardTextArea.value.endsWith("\n")) {
            sockets.SendKeyPress("Enter");
        }
        else if (TouchKeyboardTextArea.value.endsWith(" ")) {
            sockets.SendKeyPress(" ");
        }
        else {
            var input = TouchKeyboardTextArea.value.trim().substr(1);
            for (var i = 0; i < input.length; i++) {
                var character = input.charAt(i);
                var sendShift = character.match(/[A-Z~!@#$%^&*()_+{}|<>?]/);
                if (sendShift) {
                    sockets.SendKeyDown("Shift");
                }

                sockets.SendKeyPress(character);

                if (sendShift) {
                    sockets.SendKeyUp("Shift");
                }
            }
        }
        
        window.setTimeout(() => {
            TouchKeyboardTextArea.value = " #";
            TouchKeyboardTextArea.setSelectionRange(TouchKeyboardTextArea.value.length, TouchKeyboardTextArea.value.length);
        });
    });
    window.addEventListener("keydown", function (e) {
        if (document.querySelector("input:focus") || document.querySelector("textarea:focus")) {
            return;
        }
        e.preventDefault();
        sockets.SendKeyDown(e.key);
    });
    window.addEventListener("keyup", function (e) {
        if (document.querySelector("input:focus") || document.querySelector("textarea:focus")) {
            return;
        }
        e.preventDefault();
        sockets.SendKeyUp(e.key);
    });

    window.ondragover = function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    };
    window.ondrop = function (e) {
        e.preventDefault();
        if (e.dataTransfer.files.length < 1) {
            return;
        }
        uploadFiles(e.dataTransfer.files);
    };
}

export function Prompt(promptMessage: string): Promise<string> {
    return new Promise((resolve, reject) => {
        var modalDiv = document.createElement("div");
        modalDiv.classList.add("modal-prompt");

        var messageDiv = document.createElement("div");
        messageDiv.innerHTML = promptMessage;

        var responseInput = document.createElement("input");

        var buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons-footer");

        var cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Cancel";

        var okButton = document.createElement("button");
        okButton.innerHTML = "OK";

        buttonsDiv.appendChild(okButton);
        buttonsDiv.appendChild(cancelButton);
        modalDiv.appendChild(messageDiv);
        modalDiv.appendChild(responseInput);
        modalDiv.appendChild(buttonsDiv);

        document.body.appendChild(modalDiv);

        okButton.onclick = () => {
            modalDiv.remove();
            resolve(responseInput.value);
        }

        cancelButton.onclick = () => {
            modalDiv.remove();
            resolve(null);
        }
    });
}

export function SetScreenSize(width: number, height: number) {
    ScreenViewer.width = width;
    ScreenViewer.height = height;
    Screen2DContext.clearRect(0, 0, width, height);
}

export function ShowMessage(message: string) {
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("float-message");
    messageDiv.innerHTML = message;
    document.body.appendChild(messageDiv);
    window.setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

export function UpdateCursor(cursor: CursorInfo) {
    if (cursor.CssOverride) {
        ScreenViewer.style.cursor = cursor.CssOverride;
    }
    else if (cursor.ImageBytes.byteLength == 0) {
        ScreenViewer.style.cursor = "default";
    }
    else {
        var base64 = ConvertUInt8ArrayToBase64(cursor.ImageBytes);
        ScreenViewer.style.cursor = `url('data:image/png;base64,${base64}') ${cursor.HotSpot.X} ${cursor.HotSpot.Y}, default`;
    }
}

export function UpdateDisplays(selectedDisplay: string, displayNames: string[]) {
    ScreenSelectBar.innerHTML = "";
    for (let i = 0; i < displayNames.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = `Monitor ${i}`;
        button.classList.add("horizontal-bar-button");
        if (displayNames[i] == selectedDisplay) {
            button.classList.add("toggled");
        }
        ScreenSelectBar.appendChild(button);
        button.onclick = (ev: MouseEvent) => {
            this.SendSelectScreen(displayNames[i]);
            document.querySelectorAll("#screenSelectBar .horizontal-bar-button").forEach(button => {
                button.classList.remove("toggled");
            });
            (ev.currentTarget as HTMLButtonElement).classList.add("toggled");
        };
    }
}

function uploadFiles(fileList: FileList) {
    ShowMessage("File upload started...");
    FileTransferProgress.value = 0;
    FileTransferProgress.parentElement.removeAttribute("hidden");

    var strPath = "/API/FileSharing/";
    var fd = new FormData();
    for (var i = 0; i < fileList.length; i++) {
        fd.append('fileUpload' + i, fileList[i]);
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', strPath, true);
    xhr.addEventListener("load", function () {
        FileTransferProgress.parentElement.setAttribute("hidden", "hidden");
        if (xhr.status === 200) {
            ShowMessage("File upload completed.");
            MainRc.RCBrowserSockets.SendSharedFileIDs(xhr.responseText);
        }
        else {
            ShowMessage("File upload failed.");
        }
    });
    xhr.addEventListener("error", () => {
        FileTransferProgress.parentElement.setAttribute("hidden", "hidden");
        ShowMessage("File upload failed.");
    });
    xhr.addEventListener("progress", function (e) {
        FileTransferProgress.value = isFinite(e.loaded / e.total) ? e.loaded / e.total : 0;
    });
    xhr.send(fd);
  
}

function closeAllHorizontalBars(exceptBarId: string) {
    HorizontalBars.forEach(x => {
        if (x.id != exceptBarId) {
            x.classList.remove('open');
        }
    })
}

function moveMenuButton(ev: MouseEvent) {
    if (Math.abs(ev.clientY - startMenuDraggingY) > 5) {
        if (ev.clientY < 0 || ev.clientY > window.innerHeight) {
            return;
        }
        isMenuButtonDragging = true;
        MenuButton.style.top = `${ev.clientY}px`;
    }
}

function removeMouseButtonWindowListeners(ev: MouseEvent) {
    window.removeEventListener("mousemove", moveMenuButton);
    window.removeEventListener("mouseup", removeMouseButtonWindowListeners);
    window.removeEventListener("mouseleave", removeMouseButtonWindowListeners);
}