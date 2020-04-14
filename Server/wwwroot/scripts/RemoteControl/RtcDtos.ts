import { BinaryDto } from "./BinaryDto.js";
import { BinaryDtoType } from "../Enums/BinaryDtoType.js";
import { CursorInfo } from "../Models/CursorInfo.js";

export class AutoQualityAdjustDto implements BinaryDto {
    constructor(isOn: boolean) {
        this.IsOn = isOn;
    }

    IsOn: boolean;
    DtoType: BinaryDtoType = BinaryDtoType.AutoQualityAdjust;
}


export interface AudioSampleDto extends BinaryDto {
    Buffer: Uint8Array;
}

export interface CaptureFrameDto extends BinaryDto {
    EndOfFrame: boolean;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    ImageBytes: Uint8Array;
    ImageQuality: number;
}

export interface ClipboardTextDto extends BinaryDto {
    ClipboardText: string;
}


export class ClipboardTransferDto implements BinaryDto {
    constructor(text: string, typeText:boolean) {
        this.Text = text;
        this.TypeText = typeText;
    }

    Text: string;
    TypeText: boolean;
    DtoType: BinaryDtoType = BinaryDtoType.ClipboardTransfer;
}


export class CtrlAltDelDto implements BinaryDto {
    DtoType: BinaryDtoType = BinaryDtoType.CtrlAltDel;
}

export interface CursorChangeDto extends BinaryDto {
    CursorInfo: CursorInfo;
}

export class KeyDownDto implements BinaryDto {
    constructor(key: string) {
        this.Key = key;
    }

    Key: string;
    DtoType: BinaryDtoType = BinaryDtoType.KeyDown;
}

export class KeyPressDto implements BinaryDto {
    constructor(key: string) {
        this.Key = key;
    }

    Key: string;
    DtoType: BinaryDtoType = BinaryDtoType.KeyPress;
}

export class KeyUpDto implements BinaryDto {
    constructor(key: string) {
        this.Key = key;
    }

    Key: string;
    DtoType: BinaryDtoType = BinaryDtoType.KeyUp;
}

export interface MachineNameDto extends BinaryDto {
    MachineName: string;
}

export class MouseDownDto implements BinaryDto {
    constructor(button: number, percentX: number, percentY: number) {
        this.Button = button;
        this.PercentX = percentX;
        this.PercentY = percentY;
    }

    Button: number;
    PercentX: number;
    PercentY: number;
    DtoType: BinaryDtoType = BinaryDtoType.MouseDown;
}

export class MouseMoveDto implements BinaryDto {
    constructor(percentX: number, percentY: number) {
        this.PercentX = percentX;
        this.PercentY = percentY;
    }

    PercentX: number;
    PercentY: number;
    DtoType: BinaryDtoType = BinaryDtoType.MouseMove;
}

export class MouseUpDto implements BinaryDto {
    constructor(button: number, percentX: number, percentY: number) {
        this.Button = button;
        this.PercentX = percentX;
        this.PercentY = percentY;
    }

    Button: number;
    PercentX: number;
    PercentY: number;
    DtoType: BinaryDtoType = BinaryDtoType.MouseUp;
}

export class MouseWheelDto implements BinaryDto {
    constructor(deltaX: number, deltaY: number) {
        this.DeltaX = deltaX;
        this.DetlaY = deltaY;
    }

    DeltaX: number;
    DetlaY: number;
    DtoType: BinaryDtoType = BinaryDtoType.MouseWheel;
}

export class QualityChangeDto implements BinaryDto {
    constructor(qualityLevel: number) {
        this.QualityLevel = qualityLevel;
    }

    QualityLevel: number;
    DtoType: BinaryDtoType = BinaryDtoType.QualityChange;
}

export interface ScreenDataDto extends BinaryDto {
    DisplayNames: string[];
    SelectedScreen: string;
}

export interface ScreenSizeDto extends BinaryDto {
    Width: number;
    Height: number;
}

export class SelectScreenDto implements BinaryDto {
    constructor(displayName: string) {
        this.DisplayName = displayName;
    }

    DisplayName: string;
    DtoType: BinaryDtoType = BinaryDtoType.SelectScreen;
}

export class TapDto implements BinaryDto {
    constructor(percentX: number, percentY: number) {
        this.PercentX = percentX;
        this.PercentY = percentY;
    }

    PercentX: number;
    PercentY: number;
    DtoType: BinaryDtoType = BinaryDtoType.Tap;
}

export class ToggleAudioDto implements BinaryDto {
    constructor(toggleOn: boolean) {
        this.ToggleOn = toggleOn;
    }

    ToggleOn: boolean;
    DtoType: BinaryDtoType = BinaryDtoType.ToggleAudio;
}

export class ToggleBlockInputDto implements BinaryDto {
    constructor(toggleOn: boolean) {
        this.ToggleOn = toggleOn;
    }

    ToggleOn: boolean;
    DtoType: BinaryDtoType = BinaryDtoType.ToggleBlockInput;
}