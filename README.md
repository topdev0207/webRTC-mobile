# Remotely
A remote control and remote scripting solution, built with .NET Core, SignalR Core, and WebRTC.

[![Build Status](https://dev.azure.com/translucency/Remotely/_apis/build/status/Remotely-ReleaseBuild?branchName=master)](https://dev.azure.com/translucency/Remotely/_build/latest?definitionId=17&branchName=master)
![GitHub Build](https://github.com/lucent-sea/Remotely/workflows/GitHub%20Build/badge.svg)


## Donations
If this project has benefited you in some way, or if you just want to show appreciation, please consider donating to a charity.

Suggested Charities: https://www.givewell.org/charities/top-charities

You can also sponsor the project as a way of saying "thank you".  But if you have to pick between the two, please choose a charity.  Your money will have a much greater impact on their lives than it would mine.

[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Sponsor-brightgreen)](https://github.com/sponsors/lucent-sea)

[![PayPal Link](https://img.shields.io/badge/PayPal-Donate-brightgreen)](https://www.paypal.me/translucency)


## Project Links
Public Server: https://app.remotely.one  
Website: https://remotely.one  
Subreddit: https://www.reddit.com/r/remotely_app/  

![image](https://user-images.githubusercontent.com/20995508/113913261-f7002a00-9790-11eb-81b3-c36fb8aa536d.png)


## Disclaimer
Hosting a Remotely server requires building and running an ASP.NET Core web app behind IIS (Windows), Nginx (Ubuntu), or Caddy Server (any OS).  It's expected that the person deploying and maintaining the server is familiar with this process.

It's *highly* encouraged that you get comfortable building and deploying from source.  This allows you to hard-code your server's hostname into the desktop client and the installer, which makes for a better experience for the end user.  I've tried to make this as easy as possible using the GitHub Actions workflows mentioned below.  You can begin using these immediately, or use them as a reference for creating your own customized build process.  You can also use Azure Pipelines for free (which I personally use).

## Build Instructions (GitHub)
GitHub Actions allows you to build and deploy Remotely for free from their cloud servers.  The definitions for the build processes are located in `/.github/workflows/` folder.

After forking the repo, follow the instructions in the workflow YML file.  The easiest workflow to use is the Build.yml worfklow, and I'd recommend starting with that one.  It will produce a build artifact (ZIP package) identical to what was on the Releases page, only the clients will have your server URL hard-coded.

### Instructions for using the Build workflow:
- Fork the repo if you haven't already.
- If you've already forked the repo, you need to keep your repo updated with mine.  This doesn't happen automatically.
  - On the GitHub page for your repo, you'll see a message that says, "This branch is ## commits behind lucent-sea:master".
  - Click the "Pull request" link next to it.
  - On the next page, click the "switching the base" link.  Now it's pulling from my repo into yours.
  - Create and complete the pull request to update your repo.
- Now go to the Actions tab.
- Click the "Build" workflow.
- Click "Run workflow".
- Enter the Server URL where your Remotely app will be running (e.g. https://app.remotely.one).
- If you're going to host on Windows, change the Server Runtime Identifier to `win-x64`.
- Click "Run workflow".
- When it's finished, there will be a build artifact for download that contains the server and clients.


## Hosting a Server (Windows)
- Download the ZIP file and extract the files to the location where your site will be hosted (e.g. `/var/www/remotely`).
- Run the install script located in the folder (e.g. `Ubuntu_Server_Install.sh`).
- In the site's content directory, make a copy of the `appsettings.json` file and name it `appsettings.Production.json`.
  - The server will use this new file for reading/writing its settings, and it won't be overwritten by future ugprades.
* Download and install the latest .NET Runtime (not the SDK) with the Hosting Bundle.
	* Link: https://dotnet.microsoft.com/download/dotnet-core/current/runtime
	* This includes the Hosting Bundle for Windows, which allows you to run ASP.NET Core in IIS.
	* Important: If you installed .NET Runtime before installing all the required IIS features, you may need to run a repair on the .NET Runtime installation.
* By default, SQLite is used for the database.
    * The "Remotely.db" database file is automatically created in the root folder of your site.
	* You can browse and modify the contents using [DB Browser for SQLite](https://sqlitebrowser.org/).
* If the site will be public-facing, configure your bindings in IIS.
* An SSL certificate for HTTPS is recommended.  You can install one for free using Let's Encrypt.
	* Resources: https://letsencrypt.org/, https://certifytheweb.com/
* Documentation for hosting in IIS can be found here: https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis
* There is no default account.  You must create the first one via the Register page, which will create an account that is both a server and organization admin.

## Hosting a Server (Ubuntu)
* **IMPORTANT**: Recently, the default web server was switched from Nginx to Caddy Server.  They cannot both be used on the same box.  If you want to continue using Nginx, you'll need to set up the configuration manually.  See the `Example_Nginx_Config.txt` file in the `Utilities` folder for an example.
* Ubuntu 20.04, 19.04, and 18.04 have been tested.
* Change values in appsettings.json for your environment.  Make a copy named `appsettings.Production.json` (see Configuration section below).
* Documentation for hosting behind Nginx can be found here: https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx
* There is no default account.  You must create the first one via the Register page, which will create an account that is both a server and organization admin.

## Upgrading
* To upgrade a server, do any of the below to copy the new Server application files.
	* Run one of the GitHub Actions workflows, then copy the ZIP contents to the site's content folder.
	* Build from source as described above and `rsync`/`robocopy` the output files to the server directory.
	* Build from source and deploy to IIS (e.g. `dotnet publish /p:PublishProfile=MyProfile`)
* For Linux, you'll need to restart the Remotely service in systemd after overwriting the files.
* For Windows, you'll need to shut down the site's Application Pool in IIS before copying the files.
	* Windows won't let you overwrite files that are in use.
* The only things that shouldn't be overwritten are the database DB file (if using SQLite) and the `appsettings.Production.json`.  These files should never exist in the publish output.

## Hosting Scenarios
There are countless ways to host an ASP.NET Core app, and I can't document or automate all of them.  For hosting scenarios aside from the above two, please refer to Microsoft's documentation.
- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/


## Build and Debug Instructions (Windows 10)  
The following steps will configure your Windows 10 machine for building the Remotely server and clients.
* Install Visual Studio 2019.
    * Link: https://visualstudio.microsoft.com/downloads/
	* You only need the below Individual Components for building:
	    * .NET SDK (latest version).
		* MSBuild (which auto-selects Roslyn compilers).
		* NuGet targets and build tasks.
		* .NET Framework 4.8 SDK.
	    * For debugging and development, you'll need all relevant workloads.
* Install Git for Windows.
    * Link: https://git-scm.com/downloads
* Clone the git repository: `git clone https://github.com/lucent-sea/remotely`
* When debugging, the agent will use a pre-defined device ID and connect to https://localhost:5001.
* In development environment, the server will assign all connecting agents to the first organization.
* The above two allow you to debug the agent and server together, and see your device in the list.

## Admin Accounts
The first account created will be an admin for both the server and the organization that's created for the account.

An organization admin has access to the Organization page and server log entries specific to his/her organization.  A server admin has access to the Server Config page and can see server log entries that don't belong to an organization. 


## Branding
Within the Account section, there is a tab for branding, which will apply to the quick support clients and Windows installer.

However, the clients will need to have been built from source with the server URL hard-coded in the apps for them to be able to retrieve the branding info.

## Configuration
The following settings are available in appsettings.json, under the ApplicationOptions section.

When deployed to production, the application will use the `appsettings.Production.json` file, if it's present. To retain your settings between upgrades, copy your `appsettings.json` file to `appsettings.Production.json` on your production server, then make your configuration changes.

Likewise, `appsettings.Development.json` can be used while developing in Visual Studio to override the other.

Whenever there's a reference to `appsettings.json` in this document, it refers to whichever file is currently being used.

For more information on configuring ASP.NET Core, see https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/.

* AllowApiLogin: Whether to allow logging in via the API controller.  API access tokens are recommended over this approach.
* BannedDevices: An array of device IDs, names, or IP addresses to ban.  When they try to connect, an uninstall command will immediately be sent back.
* DataRetentionInDays: How long logs and other data will be kept on the server.  Set to -1 to retain indefinitely (not recommended).
* DBProvider: Determines which of the three connection strings (at the top) will be used.  The appropriate DB provider for the database type is automatically loaded in code.
* EnableWindowsEventLog: Whether to also add server log entries to the Windows Event Log.
* EnforceAttendedAccess: Clients will be prompted to allow unattended remote control attempts.
* IceServers: The ICE (STUN/TURN) servers to use for WebRTC.
* KnownProxies: If your reverse proxy is on a different machine and is forwarding requests to the Remotely server, you will need to add the IP of the reverse proxy server to this array.
* MaxOrganizationCount: By default, one organization can exist on the server, which is created automatically when the first account is registered.  Afterward, self-registration will be disabled.
    * Set this to -1 or increase it to a specific number to allow multi-tenancy.
* RedirectToHttps: Whether ASP.NET Core will redirect all traffic from HTTP to HTTPS.  This is independent of Caddy, Nginx, and IIS configurations that do the same.
* RemoteControlNotifyUsers: Whether to show a notification to the end user when an unattended remote control session starts.
* RemoteControlSessionLimit: How many concurrent remote control sessions are allowed per organization.
* RemoteControlRequiresAuthentication: Whether the remote control page requires authentication to establish a connection.
* Require2FA: Require users to set up 2FA before they can use the main app.
* Smpt*: SMTP settings for auto-generated system emails (such as registration and password reset).
* Theme: The color theme to use for the site.  Values are "Light" or "Dark".  This can also be configured per-user in Account - Options.
* TrustedCorsOrigins: For cross-origin API requests via JavaScript.  The websites listed in this array with be allowed to make requests to the API.  This does not grant authentication, which is still required on most endpoints.
* UseHsts: Whether ASP.NET Core will use HTTP Strict Transport Security.
* UseWebRtc: Attempt to create a peer-to-peer connection via WebRTC for screen sharing.
    * Only works on Windows agents.


## Changing the Database
By default, Remotely uses a SQLite database.  When first run, it creates a file as specified for the SQLite connection string in appsettings.json.

You can change database by changing `DBProvider` in `ApplicationOptions` to `SQLServer` or `PostgreSQL`.  Be sure to set the connection string for the new database provider in the server's `appsettings.Production.json`.

## Logging
* On clients, logs are kept in %temp%\Remotely_Logs.log.
	* For the Agent running as a Windows service, this maps to C:\Windows\Temp\Remotely_Logs.log.
* On the server, some event information is explicitly written to the EventLogs table in the database.
* Built-in ASP.NET Core logs are written to the console (stdout).  You can redirect this to a file if desired.
	* In IIS, this can be done in the web.config file by setting stdoutLogEnabled to true.
* On Windows Servers, the above logs can also be written to the Windows Event Log.
	* This is enabled in appsettings.json by setting EnableWindowsEventLog to true.
* You can configure logging levels and other settings in appsetttings.json.
	* More information: https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/

## Remote Control Client Requirements
* Windows: Only the latest version of Windows 10 is tested.  Windows 7 and 8.1 should work, though performance will be reduced on Windows 7.
	* Windows 2016/2019 should work as well, but isn't tested regularly.
* Linux: Only Ubuntu 18.04+ is tested.
* For the Ubuntu's "quick support" client, you must first install the following dependencies:
    * libx11-dev
	* libxrandr-dev
    * libc6-dev
    * libgdiplus
    * libxtst-dev
    * xclip

## Remote Control on Mobile
Ideally, you'd be doing remote control from an actual computer or laptop.  However, I've tried to make the remote control at least somewhat usable from a mobile device.  Here are the controls:
* Left-click: Single tap
* Right-click: Tap and hold
* Click-and-drag: Tap and hold with one finger, tap and release a second finger (without pinch-zooming)
	* The click-and-drag operation will begin where finger one is held.

## End User Support Page
There's a page at `/GetSupport` where end users can request support.  When the form is submitted, an alert appears on the main page, above the grid.

A shortcut to this page is placed in the `\Program Files\Remotely\` folder.  You can copy it anywhere you like.  You can also have it copied to the desktop automatically by using the `-supportshortcut` switch on the installer.
	
## .NET Deployments
* .NET has two methods of deployment: framework-dependent and self-contained.
	* Framework-dependent deployments require the .NET runtime to be installed on the target computers.  It must be the same version that was used to build the app.
	* Self-contained deployments include a copy of the runtime, so you don't need to install it on the target computers.  As a result, the total file size is much larger.
* .NET uses runtime identifiers that are targeted when building.
	* Link: https://docs.microsoft.com/en-us/dotnet/core/rid-catalog


## Shortcut Keys
There are a few shortcut keys available when using the console.
* / : Slash will open the autocomplete for selecting the current command mode.  The names are configurable in the Account - Options page.
* Up/Down: Use arrow up/down to cycle through input history.
* Ctrl + Up/Down: Scroll the console output window.
* Ctrl + Q: Clear the output window.
* Esc: Close the autocomplete window.


## API and Integrations
Remotely has a basic API, which can be browsed at https://app.remotely.one/swagger (or your own server instance).  Most endpoints require authentication via an API access token, which can be created by going to Account - API Access.

When accessing the API from the browser on another website, you'll need to set up CORS in appsettings by adding the website origin URL to the TrustedCorsOrigins array.  If you're not familiar with how CORS works, I recommend reading up on it before proceeding.  For example, if I wanted to create a login form on https://lucency.co that logged into the Remotely API, I'd need to add "https://lucency.co" to the TrustedCorsOrigins.

The API key and secret must be added to the request's Authorization header in the following format: [ApiKey]:[ApiSecret]

Below is an example API request:

	POST https://localhost:5001/API/Scripting/ExecuteCommand/PSCore/f2b0a595-5ea8-471b-975f-12e70e0f3497 HTTP/1.1
	Content-Type: application/json
	Authorization: 31fb288d-af97-4ce1-ae7b-ceebb98281ac:HLkrKaZGExYvozSPvcACZw9awKkhHnNK
	User-Agent: PostmanRuntime/7.22.0
	Accept: */*
	Cache-Control: no-cache
	Host: localhost:5001
	Accept-Encoding: gzip, deflate, br
	Content-Length: 12
	Connection: close

	Get-Location

Below are examples of using the cookie-based login API (JavaScript):

	// Log in with one request, then launch remote control with another.
	fetch("https://localhost:5001/api/Login/", {
		method: "post",
		credentials: "include",
		mode: "cors",
		body: '{"Email":"email@example.com", "Password":"P@ssword1"}',
		headers: {
			"Content-Type": "application/json",
		}
	}).then(response=>{
		if (response.ok) {
			fetch("https://localhost:44351/api/RemoteControl/b68c24b0-2c67-4524-ad28-dadea7a576a4", {
				method: "get",
				credentials: "include",
				mode: "cors"
			}).then(response=>{
				if (response.ok) {
					response.text().then(url=>{
						window.open(url);
					})
				}
			})
		}
	})

	// Log in and launch remote control in the same request.
	fetch("https://localhost:5001/api/RemoteControl/", {
		method: "post",
		credentials: "include",
		mode: "cors",
		body: '{"Email":"email@example.com", "Password":"P@ssword1", "DeviceID":"b68c24b0-2c67-4524-ad28-dadea7a576a4"}',
		headers: {
			"Content-Type": "application/json",
		}
	}).then(response=>{
		if (response.ok) {
			response.text().then(url=>{
				window.open(url);
			})
		}
	})

## Alerts
The Alerts API gives you the ability to add monitoring and alerting functionality to your device endpoints.  This feature is intended to add basic RMM-type functionality without diverging too far from Remotely's primary purpose.

Alerts can be set up to show a notification on the Remotely website, send an email, and/or perform a separate API request.

To use Alerts, you'd first need to make an API token (or multiple tokens) for your devices to use.  Then create a scheduled task or some other recurring script to do the work.  Below is an example of how to use PowerShell to create a Scheduled Job that checks the disk space on a daily schedule.

```
$Trigger = New-JobTrigger -Daily -At "5 AM"
$Option = New-ScheduledJobOption -RequireNetwork

Register-ScheduledJob -ScriptBlock {
    $OsDrive = Get-PSDrive -Name C
    $FreeSpace = $OsDrive.Free / ($OsDrive.Used + $OsDrive.Free)
    if ($FreeSpace -lt .1) {
        Invoke-WebRequest -Uri "https://localhost:5001/api/Alerts/Create/" -Method Post -Headers @{ 
            Authorization="3e9d8273-1dc1-4303-bd50-7a133e36b9b7:S+82XKZdvg278pSFHWtUklqHENuO5IhH"
        } -Body @"
            {
                "AlertDeviceID": "f2b0a595-5ea8-471b-975f-12e70e0f3497",
                "AlertMessage": "Low hard drive space. Free Space: $([Math]::Round($FreeSpace * 100))%",
                "ApiRequestBody": null,
                "ApiRequestHeaders": null,
                "ApiRequestMethod": null,
                "ApiRequestUrl": null,
                "EmailBody": "Low hard drive space for device Maker.",
                "EmailSubject": "Hard Drive Space Alert",
                "EmailTo": "translucency_software@outlook.com",
                "ShouldAlert": true,
                "ShouldEmail": true,
                "ShouldSendApiRequest": false
            }
"@ -ContentType "application/json"
    }
} -Name "Check OS Drive Space" -Trigger $Trigger -ScheduledJobOption $Option
```
