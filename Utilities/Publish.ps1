<#
.SYNOPSIS
   Publishes the Remotely client.
.DESCRIPTION
   Publishes the Remotely client.
   For automated deployments, supply the following arguments: -hostname example.com -rid win10-x64 -outdir path\to\dir
.COPYRIGHT
   Copyright �  2018 Translucency Software.  All rights reserved.
.EXAMPLE
   Run it from the Utilities folder (located in the solution directory).
   Or run "powershell -f PublishClients.ps1 -hostname example.com -rid win10-x64 -outdir path\to\dir
#>
$ErrorActionPreference = "Stop"
$Year = (Get-Date).Year.ToString()
$Month = (Get-Date).Month.ToString().PadLeft(2, "0")
$Day = (Get-Date).Day.ToString().PadLeft(2, "0")
$Hour = (Get-Date).Hour.ToString().PadLeft(2, "0")
$Minute = (Get-Date).Minute.ToString().PadLeft(2, "0")
$CurrentVersion = "$Year.$Month.$Day.$Hour$Minute"
$ArgList = New-Object -TypeName System.Collections.ArrayList
$HostName = ""
$OutDir = ""
# RIDs are described here: https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
$RID = ""


function Replace-LineInFile($FilePath, $MatchPattern, $ReplaceLineWith, $MaxCount = -1){
    [string[]]$Content = Get-Content -Path $FilePath
    $Count = 0
    for ($i = 0; $i -lt $Content.Length; $i++)
    {
        if ($Content[$i] -ne $null -and $Content[$i].Contains($MatchPattern)) {
            $Content[$i] = $ReplaceLineWith
            $Count++
        }
        if ($MaxCount -gt 0 -and $Count -ge $MaxCount) {
            break
        }
    }
    ($Content | Out-String).Trim() | Out-File -FilePath $FilePath -Force -Encoding utf8
}

if ($args.Count -eq 0){
    $Options = Read-Host "Select Args: [C]ore, [D]esktop Caster, and/or [S]erver (e.g. 'c,d,s')?"
    foreach ($option in $Options.Split(",")){
        $ArgList.Add($option.ToLower().Trim())
    }
    if ([string]::IsNullOrWhiteSpace($HostName)) {
        $HostName = Read-Host "Host Name"
    }

    if ($ArgList.Contains("s")){
        if ([string]::IsNullOrWhiteSpace($OutDir)) {
            $OutDir = Read-Host "Server Out Dir"
        }
        if ([string]::IsNullOrWhiteSpace($RID)) {
            $RID = Read-Host "Server Runtime ID"
        }
    }
}
else {
    $ArgList.Add("c")
    $ArgList.Add("d")
    $ArgList.Add("s")
    for ($i = 0; $i -lt $args.Count; $i++)
    { 
        $arg = $args[$i].ToString().ToLower()
        if ($arg.Contains("hostname")) {
            $HostName = $args[$i+1]
        }
        elseif ($arg.Contains("outdir")){
            $OutDir = $args[$i+1]
        }
        elseif ($arg.Contains("rid")){
            $RID = $args[$i+1]
        }
    }
}

Set-Location -Path (Get-Item -Path $PSScriptRoot).Parent.FullName


if ($ArgList.Contains("c")) {
    # Clear publish folders.
	if ((Test-Path -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x64\publish") -eq $true) {
		Get-ChildItem -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x64\publish" | Remove-Item -Force -Recurse
	}
	if ((Test-Path -Path  ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x86\publish" ) -eq $true) {
		Get-ChildItem -Path  ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x86\publish" | Remove-Item -Force -Recurse
	}
	if ((Test-Path -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\linux-x64\publish") -eq $true) {
		Get-ChildItem -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\linux-x64\publish" | Remove-Item -Force -Recurse
	}

    Push-Location -Path ".\Remotely_Agent"

    # Publish Core clients.
    dotnet publish /p:Version=$CurrentVersion /p:FileVersion=$CurrentVersion --runtime win10-x64 --configuration Release
    dotnet publish /p:Version=$CurrentVersion /p:FileVersion=$CurrentVersion --runtime win10-x86 --configuration Release
    dotnet publish /p:Version=$CurrentVersion /p:FileVersion=$CurrentVersion --runtime linux-x64 --configuration Release

    Pop-Location

    # Compress Core clients.
    Push-Location -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x64\publish"
    Compress-Archive -Path ".\*" -DestinationPath "Remotely-Win10-x64.zip" -CompressionLevel Optimal -Force
    while ((Test-Path -Path ".\Remotely-Win10-x64.zip") -eq $false){
        Start-Sleep -Seconds 1
    }
    Pop-Location
    Move-Item -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x64\publish\Remotely-Win10-x64.zip" -Destination ".\Remotely_Server\wwwroot\Downloads\Remotely-Win10-x64.zip" -Force

    Push-Location -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x86\publish"
    Compress-Archive -Path ".\*" -DestinationPath "Remotely-Win10-x86.zip" -CompressionLevel Optimal -Force
    while ((Test-Path -Path ".\Remotely-Win10-x86.zip") -eq $false){
        Start-Sleep -Seconds 1
    }
    Pop-Location
    Move-Item -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\win10-x86\publish\Remotely-Win10-x86.zip" -Destination ".\Remotely_Server\wwwroot\Downloads\Remotely-Win10-x86.zip" -Force

    Push-Location -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\linux-x64\publish"
    Compress-Archive -Path ".\*" -DestinationPath "Remotely-Linux.zip" -CompressionLevel Optimal -Force
    while ((Test-Path -Path ".\Remotely-Linux.zip") -eq $false){
        Start-Sleep -Seconds 1
    }
    Pop-Location
    Move-Item -Path ".\Remotely_Agent\bin\Release\netcoreapp2.2\linux-x64\publish\Remotely-Linux.zip" -Destination ".\Remotely_Server\wwwroot\Downloads\Remotely-Linux.zip" -Force

}

if ($ArgList.Contains("d")) {
    # Build remote control clients.
    Push-Location -Path ".\Remotely_Desktop\"

    if ((Test-Path -Path ".\bin\Release\") -eq $true) {
		Get-ChildItem -Path ".\bin\Release\" | Remove-Item -Force -Recurse
	}

}

if ($ArgList.Contains("s") -and $OutDir.Length -gt 0) {
    if ((Test-Path -Path $OutDir) -eq $false){
        New-Item -Path $OutDir -ItemType Directory
    }
    Push-Location -Path ".\Remotely_Server\"
    dotnet publish /p:Version=$CurrentVersion /p:FileVersion=$CurrentVersion --runtime $RID --configuration Release --output $OutDir
    Pop-Location
}