import { ConsoleCommand } from "../Models/ConsoleCommand.js";
import { Parameter } from "../Models/Parameter.js";
var commands = [
    new ConsoleCommand(`Add-BCDataCacheExtension`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-BitLockerKeyProtector`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-DnsClientNrptRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-EtwTraceProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-InitiatorIdToMaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventNetworkAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventPacketCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventVFPProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventVmNetworkAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventVmSwitch`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventVmSwitchProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetEventWFPCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetIPHttpsCertBinding`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetLbfoTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetLbfoTeamNic`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetNatExternalAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetNatStaticMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NetSwitchTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-NodeKeys`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-OdbcDsn`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-PartitionAccessPath`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-PhysicalDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-Printer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-PrinterDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-PrinterPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-StorageFaultDomain`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-TargetPortToMaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-VirtualDiskToMaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-VpnConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-VpnConnectionRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-VpnConnectionTriggerApplication`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-VpnConnectionTriggerDnsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-VpnConnectionTriggerTrustedNetwork`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`AddDscResourceProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`AddDscResourcePropertyFromMetadata`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Backup-BitLockerKeyProtector`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`BackupToAAD-BitLockerKeyProtector`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Block-FileShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Block-SmbShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`CheckResourceFound`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-AssignedAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-BCCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-BitLockerAutoUnlock`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-Disk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-DnsClientCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-FileStorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-PcsvDeviceLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-StorageDiagnosticInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Close-SmbOpenFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Close-SmbSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Compress-Archive`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Configuration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Connect-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-MOFInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetIPsecMainModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetIPsecPhase1AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetIPsecPhase2AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetIPsecQuickModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-FileShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-MMAppPrelaunch`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-StorageSubSystem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-BC`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-BCDowngrading`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-BCServeOnBattery`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-BitLocker`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-BitLockerAutoUnlock`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-DAManualEntryPointSelection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-MMAgent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterBinding`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterChecksumOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterEncapsulatedPacketTaskOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterIPsecOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterLso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterPacketDirect`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterPowerManagement`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterQos`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterRdma`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterRsc`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterRss`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterSriov`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterUso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetAdapterVmq`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetDnsTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetIPHttpsProfile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetNatTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetworkSwitchEthernetPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetworkSwitchFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-NetworkSwitchVlan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-OdbcPerfCounter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PhysicalDiskIdentification`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PnpDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PSTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PSWSManCombinedTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-SmbDelegation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-StorageEnclosureIdentification`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-StorageEnclosurePower`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-StorageHighAvailability`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-StorageMaintenanceMode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-WdacBidTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-WSManTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disconnect-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Dismount-DiskImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BCDistributed`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BCDowngrading`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BCHostedClient`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BCHostedServer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BCLocal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BCServeOnBattery`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BitLocker`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-BitLockerAutoUnlock`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-DAManualEntryPointSelection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-MMAgent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterBinding`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterChecksumOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterEncapsulatedPacketTaskOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterIPsecOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterLso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterPacketDirect`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterPowerManagement`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterQos`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterRdma`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterRsc`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterRss`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterSriov`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterUso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetAdapterVmq`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetDnsTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetIPHttpsProfile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetNatTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetworkSwitchEthernetPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetworkSwitchFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-NetworkSwitchVlan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-OdbcPerfCounter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PhysicalDiskIdentification`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PnpDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PSTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PSWSManCombinedTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-SmbDelegation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-StorageEnclosureIdentification`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-StorageEnclosurePower`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-StorageHighAvailability`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-StorageMaintenanceMode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-WdacBidTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-WSManTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Expand-Archive`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-BCCachePackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-BCSecretKey`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-Command`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-DSCResource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-Module`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-NetRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-RoleCapability`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-Script`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Flush-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Generate-VersionInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppBackgroundTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxLastError`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AssignedAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AutologgerConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCClientConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCContentServerConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCDataCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCDataCacheExtension`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCHashCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCHostedCacheServerConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCNetworkConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BCStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-BitLockerVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ClusteredScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-CompatibleVersionAddtionaPropertiesStr`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ComplexResourceQualifier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ConfigurationErrorCount`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DAClientExperienceConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DAConnectionStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DAEntryPointTableItem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DedupProperties`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Disk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DiskImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DiskStorageNodeView`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClient`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClientCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClientGlobalSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClientNrptGlobal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClientNrptPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClientNrptRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DnsClientServerAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DscResource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DSCResourceModules`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-EncryptedPassword`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-EtwTraceProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-FileIntegrity`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-FileShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-FileShareAccessControlEntry`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-FileStorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-InitiatorId`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-InitiatorPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-InnerMostErrorRecord`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-InstalledModule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-InstalledScript`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-LogProperties`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MMAgent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MofInstanceName`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MofInstanceText`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpComputerStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpComputerStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpThreat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpThreat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpThreatCatalog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpThreatCatalog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpThreatDetection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MpThreatDetection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NCSIPolicyConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Net6to4Configuration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterAdvancedProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterBinding`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterChecksumOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterEncapsulatedPacketTaskOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterHardwareInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterIPsecOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterLso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterPacketDirect`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterPowerManagement`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterQos`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterRdma`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterRsc`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterRss`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterSriov`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterSriovVf`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterStatistics`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterUso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterVmq`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterVMQQueue`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetAdapterVPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetCompartment`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetConnectionProfile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetDnsTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetDnsTransitionMonitoring`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventNetworkAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventPacketCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventVFPProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventVmNetworkAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventVmSwitch`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventVmSwitchProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetEventWFPCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallAddressFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallApplicationFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallInterfaceFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallInterfaceTypeFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallPortFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallProfile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallSecurityFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallServiceFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetFirewallSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPHttpsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPHttpsState`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPInterface`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecDospSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecMainModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecMainModeSA`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecPhase1AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecPhase2AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecQuickModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecQuickModeSA`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPv4Protocol`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIPv6Protocol`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetIsatapConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetLbfoTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetLbfoTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetLbfoTeamNic`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNatExternalAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNatGlobal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNatSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNatStaticMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNatTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNatTransitionMonitoring`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetNeighbor`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetOffloadGlobalSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetPrefixPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetQosPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetSwitchTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetSwitchTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetTCPConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetTCPSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetTeredoConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetTeredoState`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetTransportFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetUDPEndpoint`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetUDPSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetworkSwitchEthernetPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetworkSwitchFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetworkSwitchGlobalData`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NetworkSwitchVlan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-OdbcDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-OdbcDsn`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-OdbcPerfCounter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-OffloadDataTransferSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Partition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PartitionSupportedSize`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PcsvDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PcsvDeviceLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PhysicalDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PhysicalDiskStorageNodeView`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PhysicalExtent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PhysicalExtentAssociation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PnpDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PnpDeviceProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PositionInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PrintConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Printer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PrinterDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PrinterPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PrinterProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PrintJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSCurrentConfigurationNode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSDefaultConfigurationDocument`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSMetaConfigDocumentInstVersionInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSMetaConfigurationProcessed`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSRepository`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSTopConfigurationName`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PublicKeyFromFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PublicKeyFromStore`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ResiliencySetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ScheduledTaskInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbBandWidthLimit`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbClientConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbClientNetworkInterface`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbDelegation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbGlobalMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbMultichannelConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbMultichannelConstraint`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbOpenFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbServerConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbServerNetworkInterface`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SmbWitnessClient`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StartApps`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageAdvancedProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageChassis`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageDiagnosticInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageEnclosure`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageEnclosureStorageNodeView`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageEnclosureVendorData`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageExtendedStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageFaultDomain`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageFileServer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageFirmwareInformation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageHealthAction`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageHealthReport`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageHealthSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageHistory`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageNode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StoragePool`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageRack`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageReliabilityCounter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageScaleUnit`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageSite`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageSubSystem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-StorageTierSupportedSize`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SupportedClusterSizes`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SupportedFileSystems`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TargetPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TargetPortal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-VirtualDiskSupportedSize`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-VolumeCorruptionCount`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-VolumeScrubPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-VpnConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-VpnConnectionTrigger`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WdacBidTrace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsUpdateLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WUAVersion`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WUIsPendingReboot`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WULastInstallationDate`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WULastScanSuccessDate`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`GetCompositeResource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`GetImplementingModulePath`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`GetModule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`GetPatterns`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`GetResourceFromKeyword`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`GetSyntax`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Grant-FileShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Grant-SmbShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Hide-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-BCCachePackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-BCSecretKey`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ImportCimAndScriptKeywordsFromModule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ImportClassResourcesFromModule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Initialize-ConfigurationRuntimeState`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Initialize-Disk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Install-Module`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Install-Script`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Install-WUUpdates`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`IsHiddenResource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`IsPatternMatched`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Lock-BitLocker`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Mount-DiskImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Move-SmbWitnessClient`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-AutologgerConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-DAEntryPointTableItem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-DscChecksum`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-EapConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-FileShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-MaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetAdapterAdvancedProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetEventSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPHttpsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecDospSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecMainModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecPhase1AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecPhase2AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecQuickModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetLbfoTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetNat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetNatTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetNeighbor`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetQosPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetSwitchTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetTransportFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetworkSwitchVlan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Partition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ScheduledTaskAction`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ScheduledTaskPrincipal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ScheduledTaskSettingsSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ScheduledTaskTrigger`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ScriptFileInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-SmbGlobalMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-SmbMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-SmbMultichannelConstraint`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-SmbShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-StorageFileServer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-StoragePool`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-StorageSubsystemVirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-StorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-VirtualDiskClone`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-VirtualDiskSnapshot`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-VpnServerAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Node`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Open-NetGPO`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Optimize-StoragePool`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Optimize-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`PSConsoleHostReadLine`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Publish-BCFileContent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Publish-BCWebContent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Publish-Module`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Publish-Script`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Read-PrinterNfcTag`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ReadEnvironmentFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-ClusteredScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-DnsClient`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-PSRepository`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-StorageSubsystem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-AutologgerConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-BCDataCacheExtension`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-BitLockerKeyProtector`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-DAEntryPointTableItem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-DnsClientNrptRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-EtwTraceProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-FileShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-InitiatorId`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-InitiatorIdFromMaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-MaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-MpThreat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-MpThreat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetAdapterAdvancedProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventNetworkAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventPacketCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventVFPProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventVmNetworkAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventVmSwitch`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventVmSwitchProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetEventWFPCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPHttpsCertBinding`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPHttpsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecDospSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecMainModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecMainModeSA`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecPhase1AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecPhase2AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecQuickModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecQuickModeSA`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetLbfoTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetLbfoTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetLbfoTeamNic`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetNat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetNatExternalAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetNatStaticMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetNatTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetNeighbor`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetQosPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetSwitchTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetSwitchTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetTransportFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetworkSwitchEthernetPortIPAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-NetworkSwitchVlan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-OdbcDsn`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Partition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PartitionAccessPath`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PhysicalDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Printer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PrinterDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PrinterPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PrintJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-SmbBandwidthLimit`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-SmbGlobalMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-SmbMapping`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-SmbMultichannelConstraint`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-SmbShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-StorageFaultDomain`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-StorageFileServer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-StorageHealthIntent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-StorageHealthSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-StoragePool`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-StorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-TargetPortFromMaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VirtualDiskFromMaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VpnConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VpnConnectionRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VpnConnectionTriggerApplication`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VpnConnectionTriggerDnsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-VpnConnectionTriggerTrustedNetwork`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-DAEntryPointTableItem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-MaskingSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPHttpsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPsecMainModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPsecPhase1AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPsecPhase2AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPsecQuickModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetLbfoTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-NetSwitchTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-Printer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Repair-FileIntegrity`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Repair-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Repair-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-BC`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-DAClientExperienceConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-DAEntryPointTableItem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-NCSIPolicyConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-Net6to4Configuration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-NetAdapterAdvancedProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-NetDnsTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-NetIPHttpsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-NetIsatapConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-NetTeredoConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-PhysicalDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Reset-StorageReliabilityCounter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resize-Partition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resize-StorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resize-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Restart-NetAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Restart-PcsvDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Restart-PrintJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Restore-NetworkSwitchConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resume-BitLocker`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resume-PrintJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Revoke-FileShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Revoke-SmbShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-Module`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-NetGPO`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-NetworkSwitchConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-Script`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Send-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-AssignedAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-BCAuthentication`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-BCCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-BCDataCacheEntryMaxAge`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-BCMinSMBLatency`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-BCSecretKey`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-ClusteredScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DAClientExperienceConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DAEntryPointTableItem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Disk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DnsClient`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DnsClientGlobalSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DnsClientNrptGlobal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DnsClientNrptRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DnsClientServerAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-EtwTraceProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-FileIntegrity`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-FileShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-FileStorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-InitiatorPort`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-LogProperties`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-MMAgent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-MpPreference`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NCSIPolicyConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Net6to4Configuration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterAdvancedProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterBinding`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterChecksumOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterEncapsulatedPacketTaskOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterIPsecOffload`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterLso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterPacketDirect`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterPowerManagement`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterQos`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterRdma`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterRsc`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterRss`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterSriov`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterUso`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetAdapterVmq`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetConnectionProfile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetDnsTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetEventPacketCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetEventProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetEventSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetEventVFPProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetEventVmSwitchProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetEventWFPCaptureProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallAddressFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallApplicationFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallInterfaceFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallInterfaceTypeFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallPortFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallProfile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallSecurityFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallServiceFilter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetFirewallSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPHttpsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPInterface`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecDospSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecMainModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecMainModeRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecPhase1AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecPhase2AuthSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecQuickModeCryptoSet`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPv4Protocol`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIPv6Protocol`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetIsatapConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetLbfoTeam`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetLbfoTeamMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetLbfoTeamNic`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetNat`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetNatGlobal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetNatTransitionConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetNeighbor`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetOffloadGlobalSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetQosPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetRoute`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetTCPSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetTeredoConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetUDPSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetworkSwitchEthernetPortIPAddress`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetworkSwitchPortMode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetworkSwitchPortProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NetworkSwitchVlanProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NodeExclusiveResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NodeManager`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NodeResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NodeResourceSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-OdbcDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-OdbcDsn`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Partition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PcsvDeviceBootConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PcsvDeviceNetworkConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PcsvDeviceUserPassword`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PhysicalDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PrintConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Printer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PrinterProperty`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSCurrentConfigurationNode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSDefaultConfigurationDocument`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSMetaConfigDocInsProcessedBeforeMeta`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSMetaConfigVersionInfoV2`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSRepository`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSTopConfigurationName`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-ResiliencySetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-SmbBandwidthLimit`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-SmbClientConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-SmbPathAcl`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-SmbServerConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-SmbShare`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StorageFileServer`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StorageHealthSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StoragePool`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StorageProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StorageSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StorageSubSystem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StorageTier`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Volume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VolumeScrubPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VpnConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VpnConnectionIPsecConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VpnConnectionProxy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VpnConnectionTriggerDnsConfiguration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-VpnConnectionTriggerTrustedNetwork`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Show-NetFirewallRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Show-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Show-StorageHistory`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Show-VirtualDisk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-AppBackgroundTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-AutologgerConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-MpScan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-MpScan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-MpWDOScan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-MpWDOScan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-NetEventSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-PcsvDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-StorageDiagnosticLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-Trace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-WUScan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-NetEventSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-PcsvDevice`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-StorageDiagnosticLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-StorageJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-Trace`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`StrongConnect`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Suspend-BitLocker`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Suspend-PrintJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Sync-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-ConflictingResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-ModuleReloadRequired`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-MofInstanceText`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-NetConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-NodeManager`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-NodeResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-NodeResourceSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-ScriptFileInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ThrowError`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unblock-FileShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unblock-SmbShareAccess`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Uninstall-Module`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Uninstall-Script`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unlock-BitLocker`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-AppBackgroundTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-ClusteredScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-PSRepository`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-ScheduledTask`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-StorageSubsystem`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-AutologgerConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-ConfigurationDocumentRef`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-ConfigurationErrorCount`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-DependsOn`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-Disk`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-EtwTraceSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-HostStorageCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-LocalConfigManager`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-Module`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-ModuleManifest`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-ModuleVersion`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-MpSignature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-MpSignature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-NetIPsecRule`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-Script`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-ScriptFileInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-SmbMultichannelConnection`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-StorageFirmware`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-StoragePool`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-StorageProviderCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateNoCircleInNodeResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateNodeExclusiveResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateNodeManager`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateNodeResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateNodeResourceSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateNoNameNodeResources`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ValidateUpdate-ConfigurationData`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Log`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-MetaConfigFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-NodeMOFFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-PrinterNfcTag`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-VolumeCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`WriteFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-AppxPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-AppxProvisionedPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-AppxVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-Content`, [
        new Parameter(`AsByteStream`, `Specifies that the content should be read as a stream of bytes. This parameter was introduced in PowerShell 6.0.


A warning occurs when you use the AsByteStream parameter with the Encoding parameter. The AsByteStream parameter ignores any encoding and the output is returned as a stream of bytes.`, `SwitchParameter`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


Encoding is a dynamic parameter that the FileSystem provider adds to the "Add-Content" cmdlet. This parameter works only in file system drives.


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Overrides the read-only attribute, allowing you to add content to a read-only file. For example, Force will override the read-only attribute or create directories to complete a file path, but it will not attempt to change file permissions.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`NoNewline`, `Indicates that this cmdlet does not add a new line or carriage return to the content.


The string representations of the input objects are concatenated to form the output. No spaces or newlines are inserted between the output strings. No newline is added after the last output string.`, `SwitchParameter`),
        new Parameter(`PassThru`, `Returns an object representing the added content. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the items that receive the additional content. Wildcard characters are permitted. The paths must be paths to items, not to containers. For example, you must specify a path to one or more files, not a path to a directory. If you specify multiple paths, use commas to separate the paths.`, `String[]`),
        new Parameter(`Stream`, `Specifies an alternative data stream for content. If the stream does not exist, this cmdlet creates it. Wildcard characters are not supported. Stream is a dynamic parameter that the FileSystem provider adds to "Add-Content". This parameter works only in file system drives.


You can use the "Add-Content" cmdlet to change the content of the Zone.Identifier alternate data stream. However, we do not recommend this as a way to eliminate security checks that block files that are downloaded from the Internet. If you verify that a downloaded file is safe, use the "Unblock-File" cmdlet.


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`Value`, `Specifies the content to be added. Type a quoted string, such as **This data is for internal use only , or specify an object that contains content, such as the DateTime** object that "Get-Date" generates.


You cannot specify the contents of a file by typing its path, because the path is just a string. You can use a "Get-Content" command to get the content and pass it to the Value parameter.`, `Object[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Adds content to the specified items, such as adding words to a file.`, `Add-Content [-Value] <Object[]> [-AsByteStream] [-Credential <PSCredential>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-NoNewline] [-PassThru] [-Stream <String>] [-Confirm] [-WhatIf] [<CommonParameters>]

Add-Content [-Path] <String[]> [-Value] <Object[]> [-AsByteStream] [-Credential <PSCredential>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-NoNewline] [-PassThru] [-Stream <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-History`, [
        new Parameter(`InputObject`, `Specifies an array of entries to add to the history as HistoryInfo object to the session history. You can use this parameter to submit a HistoryInfo object, such as the ones that are returned by the Get-History , Import-Clixml, or Import-Csv cmdlets, to Add-History .`, `PSObject[]`),
        new Parameter(`Passthru`, `Indicates that this cmdlet returns a history object for each history entry. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
    ], `Appends entries to the session history.`, `Add-History [[-InputObject] <PSObject[]>] [-Passthru] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-LocalGroupMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-Member`, [
        new Parameter(`Force`, `Indicates that this cmdlet adds a new member even the object has a custom member with the same name. You cannot use the Force parameter to replace a standard member of a type.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the object to which the new member is added. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`MemberType`, `Specifies the type of the member to add. This parameter is required. The acceptable values for this parameter are:


- NoteProperty


- AliasProperty


- ScriptProperty


- CodeProperty


- ScriptMethod


- CodeMethod




For information about these values, see PSMemberTypes Enumeration (/dotnet/api/system.management.automation.psmembertypes)in the MSDN library.

Not all objects have every type of member. If you specify a member type that the object does not have, PowerShell returns an error.`, `PSMemberTypes`),
        new Parameter(`Name`, `Specifies the name of the member that this cmdlet adds.`, `String`),
        new Parameter(`NotePropertyMembers`, `Specifies a hash table or ordered dictionary of note property names and values. Type a hash table or dictionary in which the keys are note property names and the values are note property values.


For more information about hash tables and ordered dictionaries in PowerShell, see about_Hash_Tables (../Microsoft.PowerShell.Core/About/about_Hash_Tables.md).


This parameter was introduced in Windows PowerShell 3.0.`, `IDictionary`),
        new Parameter(`NotePropertyName`, `Specifies the note property name.


Use this parameter with the NotePropertyValue parameter. This parameter is optional.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`NotePropertyValue`, `Specifies the note property value.


Use this parameter with the NotePropertyName parameter. This parameter is optional.


This parameter was introduced in Windows PowerShell 3.0.`, `Object`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.


For most objects, "Add-Member" adds the new members to the input object. However, when the input object is a string, "Add-Member" cannot add the member to the input object. For these objects, use the PassThru parameter to create an output object.


In Windows PowerShell 2.0, "Add-Member" added members only to the PSObject wrapper of objects, not to the object. Use the PassThru parameter to create an output object for any object that has a PSObject wrapper.`, `SwitchParameter`),
        new Parameter(`SecondValue`, `Specifies optional additional information about AliasProperty , ScriptProperty , CodeProperty , or CodeMethod members.


If used when adding an AliasProperty , this parameter must be a data type. A conversion to the specified data type is added to the value of the AliasProperty .


For example, if you add an AliasProperty that provides an alternate name for a string property, you can also specify a SecondValue parameter of System.Int32 to indicate that the value of that string property should be converted to an integer when accessed by using the corresponding AliasProperty .


You can use the SecondValue parameter to specify an additional ScriptBlock when adding a ScriptProperty member. The first ScriptBlock , specified in the Value parameter, is used to get the value of a variable. The second ScriptBlock , specified in the SecondValue parameter, is used to set the value of a variable.`, `Object`),
        new Parameter(`Value`, `Specifies the initial value of the added member. If you add an AliasProperty , CodeProperty , ScriptProperty or CodeMethod member, you can supply optional, additional information by using the SecondValue parameter.`, `Object`),
        new Parameter(`TypeName`, `Specifies a name for the type.


When the type is a class in the System namespace or a type that has a type accelerator, you can enter the short name of the type. Otherwise, the full type name is required. This parameter is effective only when the InputObject is a PSObject .


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
    ], `Adds custom properties and methods to an instance of a PowerShell object.`, `Add-Member [-NotePropertyMembers] <IDictionary> [-Force] -InputObject <PSObject> [-PassThru] [-TypeName <String>] [<CommonParameters>]

Add-Member [-NotePropertyName] <String> [-NotePropertyValue] <Object> [-Force] -InputObject <PSObject> [-PassThru] [-TypeName <String>] [<CommonParameters>]

Add-Member [-MemberType] {AliasProperty | CodeProperty | Property | NoteProperty | ScriptProperty | Properties | PropertySet | Method | CodeMethod | ScriptMethod | Methods | ParameterizedProperty | MemberSet | Event | Dynamic | All} [-Name] <String> [[-Value] <Object>] [[-SecondValue] <Object>] [-Force] -InputObject <PSObject> [-PassThru] [-TypeName <String>] [<CommonParameters>]

Add-Member -InputObject <PSObject> [-PassThru] [-TypeName <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-Type`, [
        new Parameter(`AssemblyName`, `Specifies the name of an assembly that includes the types. "Add-Type" takes the types from the specified assembly. This parameter is required when you're creating types based on an assembly name.


Enter the full or simple name, also known as the partial name, of an assembly. Wildcard characters are permitted in the assembly name. If you enter a simple or partial name, "Add-Type" resolves it to the full name, and then uses the full name to load the assembly.


This parameter doesn't accept a path or a file name. To enter the path to the assembly dynamic-link library (DLL) file, use the Path parameter.`, `String[]`),
        new Parameter(`CompilerOptions`, `Specifies the options for the source code compiler. These options are sent to the compiler without revision.


This parameter allows you to direct the compiler to generate an executable file, embed resources, or set command-line options, such as the "/unsafe" option.


You can't use the CompilerOptions and ReferencedAssemblies parameters in the same command.`, `String[]`),
        new Parameter(`IgnoreWarnings`, `Ignores compiler warnings. Use this parameter to prevent "Add-Type" from handling compiler warnings as errors.`, `SwitchParameter`),
        new Parameter(`Language`, `Specifies the language that is used in the source code. The acceptable value for this parameter is CSharp .`, `Language`),
        new Parameter(`LiteralPath`, `Specifies the path to source code files or assembly DLL files that contain the types. Unlike Path , the value of the LiteralPath parameter is used exactly as it's typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`MemberDefinition`, `Specifies new properties or methods for the class. "Add-Type" generates the template code that is required to support the properties or methods.


On Windows, you can use this feature to make Platform Invoke (P/Invoke) calls to unmanaged functions in PowerShell.`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the class to create. This parameter is required when generating a type from a member definition.


The type name and namespace must be unique within a session. You can't unload a type or change it. To change the code for a type, you must change the name or start a new PowerShell session. Otherwise, the command fails.`, `String`),
        new Parameter(`Namespace`, `Specifies a namespace for the type.


If this parameter isn't included in the command, the type is created in the Microsoft.PowerShell.Commands.AddType.AutoGeneratedTypes namespace. If the parameter is included in the command with an empty string value or a value of "$Null", the type is generated in the global namespace.`, `String`),
        new Parameter(`OutputAssembly`, `Generates a DLL file for the assembly with the specified name in the location. Enter an optional path and file name. Wildcard characters are permitted. By default, "Add-Type" generates the assembly only in memory.`, `String`),
        new Parameter(`OutputType`, `Specifies the output type of the output assembly. By default, no output type is specified. This parameter is valid only when an output assembly is specified in the command. For more information about the values, see OutputAssemblyType Enumeration (/dotnet/api/microsoft.powershell.commands.outputassemblytype).


The acceptable values for this parameter are as follows:


- ConsoleApplication


- Library


- WindowsApplication`, `OutputAssemblyType`),
        new Parameter(`PassThru`, `Returns a System.Runtime object that represents the types that were added. By default, this cmdlet doesn't generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to source code files or assembly DLL files that contain the types.


If you submit source code files, "Add-Type" compiles the code in the files and creates an in-memory assembly of the types. The file name extension specified in the value of Path determines the compiler that "Add-Type" uses.


If you submit an assembly file, "Add-Type" takes the types from the assembly. To specify an in-memory assembly or the global assembly cache, use the AssemblyName parameter.`, `String[]`),
        new Parameter(`ReferencedAssemblies`, `Specifies the assemblies upon which the type depends. By default, "Add-Type" references "System.dll" and "System.Management.Automation.dll". The assemblies that you specify by using this parameter are referenced in addition to the default assemblies.


Beginning in PowerShell 6, ReferencedAssemblies doesn't include the default .NET assemblies. You must include a specific reference to them in the value passed to this parameter.


You can't use the CompilerOptions and ReferencedAssemblies parameters in the same command.`, `String[]`),
        new Parameter(`TypeDefinition`, `Specifies the source code that contains the type definitions. Enter the source code in a string or here-string, or enter a variable that contains the source code. For more information about here-strings, see about_Quoting_Rules (../Microsoft.PowerShell.Core/about/about_Quoting_Rules.md).


Include a namespace declaration in your type definition. If you omit the namespace declaration, your type might have the same name as another type or the shortcut for another type, causing an unintentional overwrite. For example, if you define a type called Exception , scripts that use Exception as the shortcut for System.Exception will fail.`, `String`),
        new Parameter(`UsingNamespace`, `Specifies other namespaces that are required for the class. This is much like the C# keyword, "Using".


By default, "Add-Type" references the System namespace. When the MemberDefinition parameter is used, "Add-Type" also references the System.Runtime.InteropServices namespace by default. The namespaces that you add by using the UsingNamespace parameter are referenced in addition to the default namespaces.`, `String[]`),
    ], `Adds a Microsoft .NET Core class to a PowerShell session.`, `Add-Type -AssemblyName <String[]> [-IgnoreWarnings] [-PassThru] [<CommonParameters>]

Add-Type [-TypeDefinition] <String> [-CompilerOptions <String[]>] [-IgnoreWarnings] [-Language {CSharp}] [-OutputAssembly <String>] [-OutputType {ConsoleApplication | Library | WindowsApplication}] [-PassThru] [-ReferencedAssemblies <String[]>] [<CommonParameters>]

Add-Type [-Name] <String> [-MemberDefinition] <String[]> [-CompilerOptions <String[]>] [-IgnoreWarnings] [-Language {CSharp}] [-Namespace <String>] [-OutputAssembly <String>] [-OutputType {ConsoleApplication | Library | WindowsApplication}] [-PassThru] [-ReferencedAssemblies <String[]>] [-UsingNamespace <String[]>] [<CommonParameters>]

Add-Type [-Path] <String[]> [-CompilerOptions <String[]>] [-IgnoreWarnings] [-OutputAssembly <String>] [-OutputType {ConsoleApplication | Library | WindowsApplication}] [-PassThru] [-ReferencedAssemblies <String[]>] [<CommonParameters>]

Add-Type [-CompilerOptions <String[]>] [-IgnoreWarnings] -LiteralPath <String[]> [-OutputAssembly <String>] [-OutputType {ConsoleApplication | Library | WindowsApplication}] [-PassThru] [-ReferencedAssemblies <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-WindowsCapability`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-WindowsDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Add-WindowsPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-Content`, [
        new Parameter(`Stream`, `Specifies an alternative data stream for content. If the stream does not exist, this cmdlet creates it. Wildcard characters are not supported.


Stream is a dynamic parameter that the FileSystem provider adds to "Clear-Content". This parameter works only in file system drives.


You can use the "Clear-Content" cmdlet to change the content of the Zone.Identifier alternate data stream. However, we do not recommend this as a way to eliminate security checks that block files that are downloaded from the Internet. If you verify that a downloaded file is safe, use the "Unblock-File" cmdlet.`, `String`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. To impersonate another > user, or elevate your credentials when running this cmdlet, use Invoke-Command.`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, strings that this cmdlet omits from the path to the content. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcards are permitted.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter in the provider's format or language. The value of this parameter qualifies the Path parameter. The syntax of the filter, including the use of wildcards, depends on the provider. Filters are more efficient than other parameters, because the provider applies them when retrieving the objects, rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, content that this cmdlet clears. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcards are permitted.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies the paths to the items from which content is deleted. Unlike the Path parameter, the value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell having PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the paths to the items from which content is deleted. Wildcards are permitted. The paths must be paths to items, not to containers. For example, you must specify a path to one or more files, not a path to a directory. Wildcards are permitted. This parameter is required, but the parameter name ("Path") is optional.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes the contents of an item, but does not delete the item.`, `Clear-Content [-Stream <String>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Clear-Content [-Path] <String[]> [-Stream <String>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-History`, [
        new Parameter(`CommandLine`, `Deletes command history from a PowerShell session. The string must be an exact match or use wildcards to match commands in the PowerShell session history displayed by "Get-History". If you enter more than one string, "Clear-History" deletes commands that match any of the strings. The CommandLine parameter can be used with Count .


For strings with a space, use single quotations. For more information, see about_Quoting_Rules (About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Count`, `Specifies the number of history entries that "Clear-History" deletes. Commands are deleted in order, beginning with the oldest entry in the history.


The Count and Id parameters can be used together. The Count parameter specifies the number of commands to delete, inclusive of the specified Id . Beginning at the specified Id , commands are deleted in reverse sequential order. For example, if the Id is 30 and the Count is 10, "Clear-History" deletes items 21 through 30.


The Count and CommandLine parameters can be used together. Count specifies the number of commands to delete that match CommandLine parameter value. The commands are deleted in sequential order.`, `Int`),
        new Parameter(`Id`, `Specifies the command history Id that "Clear-History" deletes. To display Id numbers, use the "Get-History" cmdlet. The Id numbers are sequential and commands keep their Id number throughout a PowerShell session. The Id parameter can be used with Count and Newest .`, `Int[]`),
        new Parameter(`Newest`, `When the Newest parameter is used, "Clear-History" deletes the newest entries in the history. By default, "Clear-History" deletes the oldest entries in the history.


The Newest parameter can be used with Id and Count . The Count parameter specifies the number of commands to delete, inclusive of the specified Id . Beginning at the specified Id , commands are deleted in sequential order. For example, if the Id is 30 and the Count is 10, "Clear-History" deletes items 30 through 39.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the "Clear-History" cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the "Clear-History" cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes entries from the PowerShell command history.`, `Clear-History [[-Count] <Int>] [-CommandLine <String[]>] [-Newest] [-Confirm] [-WhatIf] [<CommonParameters>]

Clear-History [[-Id] <Int[]>] [[-Count] <Int>] [-Newest] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-Item`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Indicates that the cmdlet clears items that cannot otherwise be changed, such as read- only aliases. The cmdlet cannot clear constants. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md). The cmdlet cannot override security restrictions, even when the Force parameter is used.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Path`, `Specifies the path to the items being cleared. Wildcard characters are permitted. This parameter is required, but the parameter name Path is optional.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Clears the contents of an item, but does not delete the item.`, `Clear-Item [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Clear-Item [-Path] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Indicates that this cmdlet deletes properties from items that cannot otherwise be accessed by the user. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the property to be cleared, such as the name of a registry value. Wildcard characters are permitted.`, `String`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the property being cleared. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Clears the value of a property but does not delete the property.`, `Clear-ItemProperty [-Name] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Clear-ItemProperty [-Path] <String[]> [-Name] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-Tpm`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-Variable`, [
        new Parameter(`Exclude`, `Specifies an array of items that this cmdlet omits in the operation. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcards are permitted.`, `String[]`),
        new Parameter(`Force`, `Allows the cmdlet to clear a variable even if it is read-only. Even using the Force parameter, the cmdlet cannot clear constants.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies an array of items that this cmdlet includes in the operation. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcards are permitted.`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the variable to be cleared. Wildcards are permitted. This parameter is required, but the parameter name ("Name") is optional.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Scope`, `Specifies the scope in which this alias is valid.


The acceptable values for this parameter are:


- Global


- Local


- Script




You can also use a number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent). Local is the default. For more information, see about_Scopes.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes the value of a variable.`, `Clear-Variable [-Name] <String[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-PassThru] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Clear-WindowsCorruptMountPoint`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Compare-Object`, [
        new Parameter(`CaseSensitive`, `Indicates that comparisons should be case-sensitive.`, `SwitchParameter`),
        new Parameter(`Culture`, `Specifies the culture to use for comparisons.`, `String`),
        new Parameter(`DifferenceObject`, `Specifies the objects that are compared to the reference objects.`, `PSObject[]`),
        new Parameter(`ExcludeDifferent`, `Indicates that this cmdlet displays only the characteristics of compared objects that are equal. The differences between the objects are discarded.


Use ExcludeDifferent with IncludeEqual to display only the lines that match between the reference and difference objects.


If ExcludeDifferent is specified without IncludeEqual , there's no output.`, `SwitchParameter`),
        new Parameter(`IncludeEqual`, `IncludeEqual displays the matches between the reference and difference objects.


By default, the output also includes the differences between the reference and difference objects.`, `SwitchParameter`),
        new Parameter(`PassThru`, `When you use the PassThru parameter, "Compare-Object" omits the PSCustomObject wrapper around the compared objects and returns the differing objects, unchanged.`, `SwitchParameter`),
        new Parameter(`Property`, `Specifies an array of properties of the reference and difference objects to compare.`, `Object[]`),
        new Parameter(`ReferenceObject`, `Specifies an array of objects used as a reference for comparison.`, `PSObject[]`),
        new Parameter(`SyncWindow`, `Specifies the number of adjacent objects that "Compare-Object" inspects while looking for a match in a collection of objects. "Compare-Object" examines adjacent objects when it doesn't find the object in the same position in a collection. The default value is "[Int32]::MaxValue", which means that "Compare-Object" examines the entire object collection.`, `Int32`),
    ], `Compares two sets of objects.`, `Compare-Object [-ReferenceObject] <PSObject[]> [-DifferenceObject] <PSObject[]> [-CaseSensitive] [-Culture <String>] [-ExcludeDifferent] [-IncludeEqual] [-PassThru] [-Property <Object[]>] [-SyncWindow <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Confirm-SecureBootUEFI`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Connect-PSSession`, [
        new Parameter(`AllowRedirection`, `Indicates that this cmdlet allows redirection of this connection to an alternate URI.


When you use the ConnectionURI parameter, the remote destination can return an instruction to redirect to a different URI. By default, PowerShell does not redirect connections, but you can use this parameter to allow it to redirect the connection.


You can also limit the number of times the connection is redirected by changing the MaximumConnectionRedirectionCount session option value. Use the MaximumRedirection parameter of the New-PSSessionOption cmdlet or set the MaximumConnectionRedirectionCount property of the $PSSessionOption preference variable. The default value is 5.`, `SwitchParameter`),
        new Parameter(`ApplicationName`, `Specifies the name of an application. This cmdlet connects only to sessions that use the specified application.


Enter the application name segment of the connection URI. For example, in the following connection URI, the application name is WSMan: "http://localhost:5985/WSMAN". The application name of a session is stored in the Runspace.ConnectionInfo.AppName property of the session.


The value of this parameter is used to select and filter sessions. It does not change the application that the session uses.`, `String`),
        new Parameter(`Authentication`, `Specifies the mechanism that is used to authenticate user credentials in the command to reconnect to the disconnected session. The acceptable values for this parameter are:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential




The default value is Default.


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (https://msdn.microsoft.com/library/system.management.automation.runspaces.authenticationmechanism)in the MSDN library.

Caution: Credential Security Support Provider (CredSSP) authentication, in which the user's credentials are passed to a remote computer to be authenticated, is designed for commands that require authentication on more than one resource, such as accessing a remote network share. This mechanism increases the security risk of the remote operation. If the remote computer is compromised, the credentials that are passed to it can be used to control the network session.`, `AuthenticationMechanism`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to connect to the disconnected session. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts. They do not work with domain accounts.


To get a certificate thumbprint, use a Get-Item or Get-ChildItem command in the PowerShell Cert: drive.`, `String`),
        new Parameter(`ComputerName`, `Specifies the computers on which the disconnected sessions are stored. Sessions are stored on the computer that is at the server-side or receiving end of a connection. The default is the local computer.


Type the NetBIOS name, an IP address, or a fully qualified domain name of one computer. Wildcard characters are not permitted. To specify the local computer, type the computer name, localhost, or a dot (.)`, `String[]`),
        new Parameter(`ConfigurationName`, `Connects only to sessions that use the specified session configuration.


Enter a configuration name or the fully qualified resource URI for a session configuration. If you specify only the configuration name, the following schema URI is prepended: "http://schemas.microsoft.com/powershell". The configuration name of a session is stored in the ConfigurationName property of the session.


The value of this parameter is used to select and filter sessions. It does not change the session configuration that the session uses.


For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `String`),
        new Parameter(`ConnectionUri`, `Specifies the URIs of the connection endpoints for the disconnected sessions.


The URI must be fully qualified. The format of this string is as follows:


"<Transport>://<ComputerName>:<Port>/<ApplicationName>"


The default value is as follows:


"http://localhost:5985/WSMAN"


If you do not specify a connection URI, you can use the UseSSL and Port parameters to specify the connection URI values.


Valid values for the Transport segment of the URI are HTTP and HTTPS. If you specify a connection URI with a Transport segment, but do not specify a port, the session is created with standards ports: 80 for HTTP and 443 for HTTPS. To use the default ports for PowerShell remoting, specify port 5985 for HTTP or 5986 for HTTPS.


If the destination computer redirects the connection to a different URI, PowerShell prevents the redirection unless you use the AllowRedirection parameter in the command.`, `Uri[]`),
        new Parameter(`Credential`, `Specifies a user account that has permission to connect to the disconnected session. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`Id`, `Specifies the IDs of the disconnected sessions. The Id parameter works only when the disconnected session was previously connected to the current session.


This parameter is valid, but not effective, when the session is stored on the local computer, but was not connected to the current session.`, `Int32[]`),
        new Parameter(`InstanceId`, `Specifies the instance IDs of the disconnected sessions.


The instance ID is a GUID that uniquely identifies a PSSession on a local or remote computer.


The instance ID is stored in the InstanceID property of the PSSession .`, `Guid[]`),
        new Parameter(`Name`, `Specifies the friendly names of the disconnected sessions.`, `String[]`),
        new Parameter(`Port`, `Specifies the network port on the remote computer that is used to reconnect to the session. To connect to a remote computer, the remote computer must be listening on the port that the connection uses. The default ports are 5985, which is the WinRM port for HTTP, and 5986, which is the WinRM port for HTTPS.


Before using an alternate port, you must configure the WinRM listener on the remote computer to listen at that port. To configure the listener, type the following two commands at the PowerShell prompt:


"Remove-Item -Path WSMan:\\Localhost\\listener\\listener* -Recurse"


"New-Item -Path WSMan:\\Localhost\\listener -Transport http -Address * -Port <port-number>"


Do not use the Port parameter unless you must. The port that is set in the command applies to all computers or sessions on which the command runs. An alternate port setting might prevent the command from running on all computers.`, `Int32`),
        new Parameter(`Session`, `Specifies the disconnected sessions. Enter a variable that contains the PSSession objects or a command that creates or gets the PSSession objects, such as a Get-PSSession command.`, `PSSession[]`),
        new Parameter(`SessionOption`, `Specifies advanced options for the session. Enter a SessionOption object, such as one that you create by using the New-PSSessionOption cmdlet, or a hash table in which the keys are session option names and the values are session option values.


The default values for the options are determined by the value of the $PSSessionOption preference variable, if it is set. Otherwise, the default values are established by options set in the session configuration.


The session option values take precedence over default values for sessions set in the $PSSessionOption preference variable and in the session configuration. However, they do not take precedence over maximum values, quotas or limits set in the session configuration.


For a description of the session options that includes the default values, see New-PSSessionOption. For information about the $PSSessionOption preference variable, see about_Preference_Variables (About/about_Preference_Variables.md). For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `PSSessionOption`),
        new Parameter(`ThrottleLimit`, `Specifies the maximum number of concurrent connections that can be established to run this command. If you omit this parameter or enter a value of 0, the default value, 32, is used.


The throttle limit applies only to the current command, not to the session or to the computer.`, `Int32`),
        new Parameter(`UseSSL`, `Indicates that this cmdlet uses the Secure Sockets Layer (SSL) protocol to connect to the disconnected session. By default, SSL is not used.


WS-Management encrypts all PowerShell content transmitted over the network. The UseSSL parameter is an additional protection that sends the data across an HTTPS connection instead of an HTTP connection.


If you use this parameter, but SSL is not available on the port that is used for the command, the command fails.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Reconnects to disconnected sessions.`, `Connect-PSSession [-ConnectionUri] <Uri[]> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] -InstanceId <Guid[]> [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession [-ConnectionUri] <Uri[]> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-Name <String[]>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] -ComputerName <String[]> [-ConfigurationName <String>] [-Credential <PSCredential>] -InstanceId <Guid[]> [-Port <Int32>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-UseSSL] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] -ComputerName <String[]> [-ConfigurationName <String>] [-Credential <PSCredential>] [-Name <String[]>] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-UseSSL] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession [-Id] <Int32[]> [-ThrottleLimit <Int32>] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession -InstanceId <Guid[]> [-ThrottleLimit <Int32>] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession [-Name <String[]>] [-ThrottleLimit <Int32>] [-Confirm] [-WhatIf] [<CommonParameters>]

Connect-PSSession [-Session] <PSSession[]> [-ThrottleLimit <Int32>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Connect-WSMan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Convert-Path`, [
        new Parameter(`LiteralPath`, `Specifies, as a string array, the path to be converted. The value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the PowerShell path to be converted.`, `String[]`),
    ], `Converts a path from a PowerShell path to a PowerShell provider path.`, `Convert-Path -LiteralPath <String[]> [<CommonParameters>]

Convert-Path [-Path] <String[]> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertFrom-Csv`, [
        new Parameter(`Delimiter`, `Specifies the delimiter that separates the property values in the CSV strings. The default is a comma (,).


Enter a character, such as a colon (:). To specify a semicolon (;) enclose it in single quotation marks.


If you specify a character other than the actual string delimiter in the file, "ConvertFrom-Csv" cannot create the objects from the CSV strings and will return the CSV strings.`, `Char`),
        new Parameter(`Header`, `Specifies an alternate column header row for the imported string. The column header determines the property names of the objects created by "ConvertFrom-Csv".


Enter column headers as a comma-separated list. Do not enclose the header string in quotation marks. Enclose each column header in single quotation marks.


If you enter fewer column headers than there are data columns, the remaining data columns are discarded. If you enter more column headers than there are data columns, the additional column headers are created with empty data columns.


When using the Header parameter, omit the column header string from the CSV strings. Otherwise, this cmdlet creates an extra object from the items in the header row.`, `String[]`),
        new Parameter(`InputObject`, `Specifies the CSV strings to be converted to objects. Enter a variable that contains the CSV strings or type a command or expression that gets the CSV strings. You can also pipe the CSV strings to "ConvertFrom-Csv".`, `PSObject[]`),
        new Parameter(`UseCulture`, `Uses the list separator for the current culture as the item delimiter. To find the list separator for a culture, use the following command: "(Get-Culture).TextInfo.ListSeparator".`, `SwitchParameter`),
    ], `Converts object properties in comma-separated value (CSV) format into CSV versions of the original objects.`, `ConvertFrom-Csv [-InputObject] <PSObject[]> [[-Delimiter] <Char>] [-Header <String[]>] [<CommonParameters>]

ConvertFrom-Csv [-InputObject] <PSObject[]> [-Header <String[]>] -UseCulture [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertFrom-Json`, [
        new Parameter(`AsHashtable`, `Converts the JSON to a hash table object. This switch was introduced in PowerShell 6.0. There are several scenarios where it can overcome some limitations of the "ConvertFrom-Json" cmdlet.


- If the JSON contains a list with keys that only differ in casing. Without the switch, those keys   would be seen as identical keys and therefore only the last one would get used. - If the JSON contains a key that is an empty string. Without the switch, the cmdlet would throw an   error since a "PSCustomObject" does not allow for that but a hash table does. An example use case  where this can occurs are "project.lock.json" files. - Hash tables can be processed faster for certain data structures.`, `SwitchParameter`),
        new Parameter(`Depth`, `Gets or sets the maximum depth the JSON input is allowed to have. By default, it is 1024.


This parameter was introduced in PowerShell 6.2.`, `Int32`),
        new Parameter(`InputObject`, `Specifies the JSON strings to convert to JSON objects. Enter a variable that contains the string, or type a command or expression that gets the string. You can also pipe a string to "ConvertFrom-Json".


The InputObject parameter is required, but its value can be an empty string. When the input object is an empty string, "ConvertFrom-Json" does not generate any output. The InputObject value cannot be "$null".`, `String`),
    ], `Converts a JSON-formatted string to a custom object or a hash table.`, `ConvertFrom-Json [-InputObject] <String> [-AsHashtable] [-Depth <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertFrom-Markdown`, [
        new Parameter(`AsVT100EncodedString`, `Specifies if the output should be encoded as a string with VT100 escape codes.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the object to be converted. When an object of type System.String is specified, the string is converted. When an object of type System.IO.FileInfo is specified, the contents of the file specified by the object are converted. Objects of any other type result in an error.`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies a path to the file to be converted.`, `String[]`),
        new Parameter(`Path`, `Specifies a path to the file to be converted.`, `String[]`),
    ], `Convert the contents of a string or a file to a MarkdownInfo object.`, `ConvertFrom-Markdown [-AsVT100EncodedString] -InputObject <PSObject> [<CommonParameters>]

ConvertFrom-Markdown [-AsVT100EncodedString] -LiteralPath <String[]> [<CommonParameters>]

ConvertFrom-Markdown [-Path] <String[]> [-AsVT100EncodedString] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertFrom-SddlString`, [
        new Parameter(`Sddl`, `Specifies the string representing the security descriptor in SDDL syntax.`, `String`),
        new Parameter(`Type`, `Specifies the type of rights that SDDL string represents.


The acceptable values for this parameter are:


- FileSystemRights


- RegistryRights


- ActiveDirectoryRights


- MutexRights


- SemaphoreRights


- CryptoKeyRights


- EventWaitHandleRights




By default cmdlet uses file system rights.

CryptoKeyRights and ActiveDirectoryRights are not supported in PowerShell Core.`, `Object`),
    ], `Converts a SDDL string to a custom object.`, `ConvertFrom-SddlString [-Sddl] <String> [-Type {FileSystemRights | RegistryRights | ActiveDirectoryRights | MutexRights | SemaphoreRights | CryptoKeyRights | EventWaitHandleRights}] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertFrom-SecureString`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertFrom-StringData`, [
        new Parameter(`StringData`, `Specifies the string to be converted. You can use this parameter or pipe a string to "ConvertFrom-StringData". The parameter name is optional.


The value of this parameter must be a string that contains one or more key-value pairs. Each key-value pair must be on a separate line, or each pair must be separated by newline characters ("n).


You can include comments in the string, but the comments cannot be on the same line as a key-value pair. "ConvertFrom-StringData" ignores single-line comments. The "#" character must be the first non-whitespace character on the line. All characters on the line after the "#" are ignored. The comments are not included in the hash table.


A here-string is a string consisting of one or more lines. Quotation marks within the here-string are interpreted literally as part of the string data. For more information, see about_Quoting_Rules (../Microsoft.PowerShell.Core/About/about_Quoting_Rules.md).`, `String`),
    ], `Converts a string containing one or more key and value pairs to a hash table.`, `ConvertFrom-StringData [-StringData] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-Csv`, [
        new Parameter(`Delimiter`, `Specifies the delimiter to separate the property values in CSV strings. The default is a comma (","). Enter a character, such as a colon (":"). To specify a semicolon (";") enclose it in single quotation marks.`, `Char`),
        new Parameter(`IncludeTypeInformation`, `When this parameter is used the first line of the output contains #TYPE followed by the fully qualified name of the object type. For example, #TYPE System.Diagnostics.Process .


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the objects that are converted to CSV strings. Enter a variable that contains the objects or type a command or expression that gets the objects. You can also pipe objects to "ConvertTo-CSV".`, `PSObject`),
        new Parameter(`NoTypeInformation`, `Removes the #TYPE information header from the output. This parameter became the default in PowerShell 6.0 and is included for backwards compatibility.`, `SwitchParameter`),
        new Parameter(`UseCulture`, `Uses the list separator for the current culture as the item delimiter. To find the list separator for a culture, use the following command: "(Get-Culture).TextInfo.ListSeparator".`, `SwitchParameter`),
    ], `Converts objects into a series of character-separated value (CSV) strings.`, `ConvertTo-Csv [-InputObject] <PSObject> [[-Delimiter] <Char>] [-IncludeTypeInformation] [-NoTypeInformation] [<CommonParameters>]

ConvertTo-Csv [-InputObject] <PSObject> [-IncludeTypeInformation] [-NoTypeInformation] [-UseCulture] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-Html`, [
        new Parameter(`As`, `Determines whether the object is formatted as a table or a list. Valid values are Table and List. The default value is Table.


The Table value generates an HTML table that resembles the PowerShell table format. The header row displays the property names. Each table row represents an object and displays the object's values for each property.


The List value generates a two-column HTML table for each object that resembles the PowerShell list format. The first column displays the property name; the second column displays the property value.`, `String`),
        new Parameter(`Body`, `Specifies the text to add after the opening <BODY> tag. By default, there is no text in that position.`, `String[]`),
        new Parameter(`Charset`, `Specifies text to add to the opening <charset> tag. By default, there is no text in that position.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`CssUri`, `Specifies the Uniform Resource Identifier (URI) of the cascading style sheet (CSS) that is applied to the HTML file. The URI is included in a style sheet link in the output.`, `Uri`),
        new Parameter(`Fragment`, `Generates only an HTML table. The HTML, HEAD, TITLE, and BODY tags are omitted.`, `SwitchParameter`),
        new Parameter(`Head`, `Specifies the content of the <HEAD> tag. The default is <title>HTML TABLE</title>. If you use the Head parameter, the Title parameter is ignored.`, `String[]`),
        new Parameter(`InputObject`, `Specifies the objects to be represented in HTML. Enter a variable that contains the objects or type a command or expression that gets the objects.


If you use this parameter to submit multiple objects, such as all of the services on a computer, ConvertTo-Html creates a table that displays the properties of a collection or of an array of objects ( System.Object []). To create a table of the individual objects, use the pipeline operator to pipe the objects to ConvertTo-Html .`, `PSObject`),
        new Parameter(`Meta`, `Specifies text to add to the opening <meta> tag. By default, there is no text in that position.


This parameter was introduced in PowerShell 6.0.`, `Hashtable`),
        new Parameter(`PostContent`, `Specifies text to add after the closing </TABLE> tag. By default, there is no text in that position.`, `String[]`),
        new Parameter(`PreContent`, `Specifies text to add before the opening <TABLE> tag. By default, there is no text in that position.`, `String[]`),
        new Parameter(`Property`, `Includes the specified properties of the objects in the HTML. The value of the Property parameter can be a new calculated property. To create a calculated property, use a hash table. Valid keys are:


- Label <string> (unlike with Select-Object or Format-Table, the Name key is not supported)


- Expression <string> or <script block>`, `Object[]`),
        new Parameter(`Title`, `Specifies a title for the HTML file, that is, the text that appears between the <TITLE> tags.`, `String`),
        new Parameter(`Transitional`, `Changes the DOCTYPE to XHTML Transitional DTD Default DOCTYPE is XHTML Strict DTD


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
    ], `Converts Microsoft .NET Framework objects into HTML that can be displayed in a Web browser.`, `ConvertTo-Html [[-Property] <Object[]>] [[-Head] <String[]>] [[-Title] <String>] [[-Body] <String[]>] [-As {Table | List}] [-Charset <String>] [-CssUri <Uri>] [-InputObject <PSObject>] [-Meta <Hashtable>] [-PostContent <String[]>] [-PreContent <String[]>] [-Transitional] [<CommonParameters>]

ConvertTo-Html [[-Property] <Object[]>] [-As {Table | List}] [-Fragment] [-InputObject <PSObject>] [-PostContent <String[]>] [-PreContent <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-Json`, [
        new Parameter(`AsArray`, `Outputs the object in array brackets, even if the input is a single object.`, `SwitchParameter`),
        new Parameter(`Compress`, `Omits white space and indented formatting in the output string.`, `SwitchParameter`),
        new Parameter(`Depth`, `Specifies how many levels of contained objects are included in the JSON representation. The default value is 2.`, `Int32`),
        new Parameter(`EnumsAsStrings`, `Provides an alternative serialization option that converts all enumerations to their string representation.`, `SwitchParameter`),
        new Parameter(`EscapeHandling`, `Controls how certain characters are escaped in the resulting JSON output. By default, only control characters (like newline) are escaped.


Acceptable values are:


- Default - Only control characters are escaped.


- EscapeNonAscii - All non-ASCII and control characters are escaped.


- EscapeHtml - HTML ("<", ">", "&", "'", """) and control characters are escaped.




This parameter was introduced in PowerShell 6.2.`, `NewtonSoft.Json.StringEscapeHandling`),
        new Parameter(`InputObject`, `Specifies the objects to convert to JSON format. Enter a variable that contains the objects, or type a command or expression that gets the objects. You can also pipe an object to "ConvertTo-Json".


The InputObject parameter is required, but its value can be null ("$null") or an empty string. When the input object is "$null", "ConvertTo-Json" does not generate any output. When the input object is an empty string, "ConvertTo-Json" returns an empty string.`, `Object`),
    ], `Converts an object to a JSON-formatted string.`, `ConvertTo-Json [-InputObject] <Object> [-AsArray] [-Compress] [-Depth <Int32>] [-EnumsAsStrings] [-EscapeHandling <NewtonSoft.Json.StringEscapeHandling>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-ProcessMitigationPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-SecureString`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-TpmOwnerAuth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ConvertTo-Xml`, [
        new Parameter(`As`, `Determines the output format. The acceptable values for this parameter are:


- String. Returns a single string. - Stream. Returns an array of strings. - Document. Returns an XmlDocument object.


The default value is Document.`, `String`),
        new Parameter(`Depth`, `Specifies how many levels of contained objects are included in the XML representation. The default value is 1.


For example, if the object's properties also contain objects, to save an XML representation of the properties of the contained objects, you must specify a depth of 2.


The default value can be overridden for the object type in the Types.ps1xml files. For more information, see about_Types.ps1xml.`, `Int32`),
        new Parameter(`InputObject`, `Specifies the object to be converted. Enter a variable that contains the objects, or type a command or expression that gets the objects. You can also pipe objects to ConvertTo-XML .`, `PSObject`),
        new Parameter(`NoTypeInformation`, `Omits the Type attribute from the object nodes.`, `SwitchParameter`),
    ], `Creates an XML-based representation of an object.`, `ConvertTo-Xml [-InputObject] <PSObject> [-As {Stream | String | Document}] [-Depth <Int32>] [-NoTypeInformation] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-Item`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Container`, `Indicates that this cmdlet preserves container objects during the copy operation. By default, the Container parameter is set to True .`, `SwitchParameter`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Destination`, `Specifies the path to the new location. The default is the current directory.


To rename the item being copied, specify a new name in the value of the Destination parameter.`, `String`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they're retrieved.`, `String`),
        new Parameter(`Force`, `Indicates that this cmdlet copies items that can't otherwise be changed, such as copying over a read-only file or alias.`, `SwitchParameter`),
        new Parameter(`FromSession`, `Specifies the PSSession object from which a remote file is being copied. When you use this parameter, the Path and LiteralPath parameters refer to the local path on the remote machine.`, `PSSession`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it's typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`PassThru`, `Returns an object that represents the item with which you're working. By default, this cmdlet doesn't generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies, as a string array, the path to the items to copy. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Recurse`, `Indicates that this cmdlet does a recursive copy.`, `SwitchParameter`),
        new Parameter(`ToSession`, `Specifies the PSSession object to which a remote file is being copied. When you use this parameter, the Destination parameter refers to the local path on the remote machine.`, `PSSession`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Copies an item from one location to another.`, `Copy-Item [[-Destination] <String>] [-Confirm] [-Container] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-FromSession <PSSession>] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Recurse] [-ToSession <PSSession>] [-WhatIf] [<CommonParameters>]

Copy-Item [-Path] <String[]> [[-Destination] <String>] [-Confirm] [-Container] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-FromSession <PSSession>] [-Include <String[]>] [-PassThru] [-Recurse] [-ToSession <PSSession>] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Copy-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Destination`, `Specifies the path to the destination location.`, `String`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation. Implementation varies from provider to provider.


For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the property to be copied.`, `String`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies, as a string array, the path to the property to be copied. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Copies a property and value from a specified location to another location.`, `Copy-ItemProperty [-Destination] <String> [-Name] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Copy-ItemProperty [-Path] <String[]> [-Destination] <String> [-Name] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-Job`, [
        new Parameter(`Id`, `Specifies the ID number of a running job. To get the ID number of a job, run the Get-Job cmdlet.`, `Int32`),
        new Parameter(`InstanceId`, `Specifies the instance ID GUID of a running job. To get the InstanceId of a job, run the Get-Job cmdlet, piping the results into a Format- * cmdlet, as shown in the following example:


"Get-Job | Format-List -Property Id,Name,InstanceId,State"`, `Guid`),
        new Parameter(`Job`, `Specifies a running job object. The simplest way to use this parameter is to save the results of a Get-Job command that returns the running job that you want to debug in a variable, and then specify the variable as the value of this parameter.`, `Job`),
        new Parameter(`Name`, `Specifies a job by the friendly name of the job. When you start a job, you can specify a job name by adding the JobName parameter, in cmdlets such as Invoke-Command and Start-Job.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Debugs a running background, remote, or PowerShell Workflow job.`, `Debug-Job [-Id] <Int32> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Job [-InstanceId] <Guid> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Job [-Job] <Job> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Job [-Name] <String> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-Process`, [
        new Parameter(`Id`, `Specifies the process IDs of the processes to be debugged. The Id parameter name is optional.


To find the process ID of a process, type "Get-Process".`, `Int32[]`),
        new Parameter(`InputObject`, `Specifies the process objects that represent processes to be debugged. Enter a variable that contains the process objects or a command that gets the process objects, such as the Get-Process cmdlet. You can also pipe process objects to this cmdlet.`, `Process[]`),
        new Parameter(`Name`, `Specifies the names of the processes to be debugged. If there is more than one process with the same name, this cmdlet attaches a debugger to all processes with that name. The Name parameter is optional.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Debugs one or more processes running on the local computer.`, `Debug-Process [-Id] <Int32[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Process -InputObject <Process[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Process [-Name] <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Debug-Runspace`, [
        new Parameter(`Id`, `Specifies the ID number of a runspace. You can run "Get-Runspace" to show runspace IDs.`, `Int32`),
        new Parameter(`InstanceId`, `Specifies a runspace by its instance ID, a GUID that you can show by running "Get-Runspace".`, `Guid`),
        new Parameter(`Name`, `Specifies a runspace by its name. You can run "Get-Runspace" to show the names of runspaces.`, `String`),
        new Parameter(`Runspace`, `Specifies a runspace object. The simplest way to provide a value for this parameter is to specify a variable that contains the results of a filtered "Get-Runspace" command.`, `Runspace`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Starts an interactive debugging session with a runspace.`, `Debug-Runspace [-Id] <Int32> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Runspace [-InstanceId] <Guid> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Runspace [-Name] <String> [-Confirm] [-WhatIf] [<CommonParameters>]

Debug-Runspace [-Runspace] <Runspace> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Delete-DeliveryOptimizationCache`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-AppBackgroundTaskDiagnosticLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-ExperimentalFeature`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Name`, `The name or names of the experimental features to disable.`, `String[]`),
        new Parameter(`Scope`, `Determines which "powershell.config.json" to update whether it affects all users or just the current user.`, `ConfigScope`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Disable an experimental feature on startup of new instance of PowerShell.`, `Disable-ExperimentalFeature [-Name] <String[]> [-Confirm] [-Scope {AllUsers | CurrentUser}] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PSBreakpoint`, [
        new Parameter(`Breakpoint`, `Specifies the breakpoints to disable. Enter a variable that contains breakpoint objects or a command that gets breakpoint objects, such as a Get-PSBreakpoint command. You can also pipe breakpoint objects to the Disable-PSBreakpoint cmdlet.`, `Breakpoint[]`),
        new Parameter(`Id`, `Disables the breakpoints with the specified breakpoint IDs. Enter the IDs or a variable that contains the IDs. You cannot pipe IDs to Disable-PSBreakpoint .`, `Int32[]`),
        new Parameter(`PassThru`, `Returns an object representing the enabled breakpoints. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Disables the breakpoints in the current console.`, `Disable-PSBreakpoint [-Breakpoint] <Breakpoint[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Disable-PSBreakpoint [-Id] <Int32[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PSRemoting`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Prevents remote users from running commands in PowerShell on the local computer.`, `Disable-PSRemoting [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-PSSessionConfiguration`, [
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies an array of names of session configurations to disable. Enter one or more configuration names. Wildcard characters are permitted. You can also pipe a string that contains a configuration name or a session configuration object to "Disable-PSSessionConfiguration".


If you omit this parameter, "Disable-PSSessionConfiguration" disables the Microsoft.PowerShell session configuration.`, `String[]`),
        new Parameter(`NoServiceRestart`, `Used to prevent the restart of the WSMan service. It is not necessary to restart the service to disable the configuration.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Disables session configurations on the local computer.`, `Disable-PSSessionConfiguration [[-Name] <String[]>] [-Force] [-NoServiceRestart] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-RunspaceDebug`, [
        new Parameter(`AppDomainName`, ``, `String[]`),
        new Parameter(`ProcessName`, ``, `String`),
        new Parameter(`Runspace`, ``, `Runspace[]`),
        new Parameter(`RunspaceId`, ``, `Int32[]`),
        new Parameter(`RunspaceInstanceId`, ``, `Guid[]`),
        new Parameter(`RunspaceName`, ``, `String[]`),
    ], `Disables debugging on one or more runspaces, and releases any pending debugger stop.`, `Disable-RunspaceDebug [[-ProcessName] <String>] [[-AppDomainName] <String[]>] [<CommonParameters>]

Disable-RunspaceDebug [-Runspace] <Runspace[]> [<CommonParameters>]

Disable-RunspaceDebug [-RunspaceId] <Int32[]> [<CommonParameters>]

Disable-RunspaceDebug [-RunspaceInstanceId] <Guid[]> [<CommonParameters>]

Disable-RunspaceDebug [[-RunspaceName] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-TpmAutoProvisioning`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-WindowsErrorReporting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-WindowsOptionalFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disable-WSManCredSSP`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disconnect-PSSession`, [
        new Parameter(`Id`, `Disconnects from sessions with the specified session ID. Type one or more IDs (separated by commas), or use the range operator (..) to specify a range of IDs.


To get the ID of a session, use the "Get-PSSession" cmdlet. The instance ID is stored in the ID property of the session.`, `Int32[]`),
        new Parameter(`IdleTimeoutSec`, `Changes the idle timeout value of the disconnected PSSession. Enter a value in seconds. The minimum value is 60 (1 minute).


The idle timeout determines how long the disconnected PSSession is maintained on the remote computer. When the timeout expires, the PSSession is deleted.


Disconnected PSSessions are considered to be idle from the moment that they are disconnected, even if commands are running in the disconnected session.


The default value for the idle timeout of a session is set by the value of the IdleTimeoutMs property of the session configuration. The default value is 7200000 milliseconds (2 hours).


The value of this parameter takes precedence over the value of the IdleTimeout property of the $PSSessionOption preference variable and the default idle timeout value in the session configuration. However, this value cannot exceed the value of the MaxIdleTimeoutMs property of the session configuration. The default value of MaxIdleTimeoutMs is 12 hours (43200000 milliseconds).`, `Int32`),
        new Parameter(`InstanceId`, `Disconnects from sessions with the specified instance IDs.


The instance ID is a GUID that uniquely identifies a session on a local or remote computer. The instance ID is unique, even across multiple sessions on multiple computers.


To get the instance ID of a session, use the "Get-PSSession" cmdlet. The instance ID is stored in the InstanceID property of the session.`, `Guid[]`),
        new Parameter(`Name`, `Disconnects from sessions with the specified friendly names. Wildcards are permitted.


To get the friendly name of a session, use the "Get-PSSession" cmdlet. The friendly name is stored in the Name property of the session.`, `String[]`),
        new Parameter(`Session`, `Disconnects from the specified PSSessions. Enter PSSession objects, such as those that the "New-PSSession" cmdlet returns. You can also pipe a PSSession object to "Disconnect-PSSession".


The "Get-PSSession" cmdlet can get all PSSessions that terminate at a remote computer, including PSSessions that are disconnected and PSSessions that are connected to other sessions on other computers. "Disconnect-PSSession" disconnects only PSSession that are connected to the current session. If you pipe other PSSessions to "Disconnect-PSSession", the "Disconnect-PSSession" command fails.`, `PSSession[]`),
        new Parameter(`ThrottleLimit`, `Sets the throttle limit for the "Disconnect-PSSession" command.


The throttle limit is the maximum number of concurrent connections that can be established to run this command. If you omit this parameter or enter a value of 0, the default value, 32, is used.


The throttle limit applies only to the current command, not to the session or to the computer.`, `Int32`),
        new Parameter(`OutputBufferingMode`, `Determines how command output is managed in the disconnected session when the output buffer is full. The default value is Block .


If the command in the disconnected session is returning output and the output buffer fills, the value of this parameter effectively determines whether the command continues to run while the session is disconnected. A value of Block suspends the command until the session is reconnected. A value of Drop allows the command to complete, although data might be lost. When using the Drop value, redirect the command output to a file on disk.


Valid values are:


- Block : When the output buffer is full, execution is suspended until the buffer is clear. - Drop : When the output buffer is full, execution continues. As new output is saved, the oldest   output is discarded. - None : No output buffering mode is specified. The value of the OutputBufferingMode property   of the session configuration is used for the disconnected session.`, `OutputBufferingMode`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Disconnects from a session.`, `Disconnect-PSSession [-Id] <Int32[]> [-IdleTimeoutSec <Int32>] [-ThrottleLimit <Int32>] [-OutputBufferingMode <OutputBufferingMode>] [-Confirm] [-WhatIf] [<CommonParameters>]

Disconnect-PSSession [-IdleTimeoutSec <Int32>] -InstanceId <Guid[]> [-ThrottleLimit <Int32>] [-OutputBufferingMode <OutputBufferingMode>] [-Confirm] [-WhatIf] [<CommonParameters>]

Disconnect-PSSession [-IdleTimeoutSec <Int32>] -Name <String[]> [-ThrottleLimit <Int32>] [-OutputBufferingMode <OutputBufferingMode>] [-Confirm] [-WhatIf] [<CommonParameters>]

Disconnect-PSSession [-Session] <PSSession[]> [-IdleTimeoutSec <Int32>] [-ThrottleLimit <Int32>] [-OutputBufferingMode <OutputBufferingMode>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Disconnect-WSMan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Dismount-AppxVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Dismount-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-AppBackgroundTaskDiagnosticLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-ExperimentalFeature`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Name`, `The name or names of the experimental features to enable.`, `String[]`),
        new Parameter(`Scope`, `Determines which "powershell.config.json" to update whether it affects all users or just the current user.`, `ConfigScope`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Enable an experimental feature on startup of new instance of PowerShell.`, `Enable-ExperimentalFeature [-Name] <String[]> [-Confirm] [-Scope {AllUsers | CurrentUser}] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PSBreakpoint`, [
        new Parameter(`Breakpoint`, `Specifies the breakpoints to enable. Provide a variable containing breakpoints or a command that gets breakpoint objects, such as "Get-PSBreakpoint". You can also pipe breakpoint objects to "Enable-PSBreakpoint".`, `Breakpoint[]`),
        new Parameter(`Id`, `Specifies the Id numbers of the breakpoints to enable. The default value is all breakpoints. Provide the Id by number or in a variable. You can't pipe Id numbers to "Enable-PSBreakpoint". To find the Id of a breakpoint, use the "Get-PSBreakpoint" cmdlet.`, `Int32[]`),
        new Parameter(`PassThru`, `Returns an object representing the breakpoint being enabled. By default, this cmdlet doesn't generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Enables the breakpoints in the current console.`, `Enable-PSBreakpoint [-Breakpoint] <Breakpoint[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Enable-PSBreakpoint [-Id] <Int32[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PSRemoting`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`SkipNetworkProfileCheck`, `Indicates that this cmdlet enables remoting on client versions of the Windows operating system when the computer is on a public network. This parameter enables a firewall rule for public networks that allows remote access only from computers in the same local subnet.


This parameter does not affect server versions of the Windows operating system, which, by default, have a local subnet firewall rule for public networks. If the local subnet firewall rule is disabled on a server version, "Enable-PSRemoting" re-enables it, regardless of the value of this parameter.


To remove the local subnet restriction and enable remote access from all locations on public networks, use the "Set-NetFirewallRule" cmdlet in the NetSecurity module.


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Configures the computer to receive remote commands.`, `Enable-PSRemoting [-Confirm] [-Force] [-SkipNetworkProfileCheck] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-PSSessionConfiguration`, [
        new Parameter(`Force`, `Indicates that the cmdlet does not prompt you for confirmation, and restarts the WinRM service without prompting. Restarting the service makes the configuration change effective.


To prevent a restart and suppress the restart prompt, use the NoServiceRestart parameter.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies the names of session configurations to enable. Enter one or more configuration names. Wildcard characters are permitted.


You can also pipe a string that contains a configuration name or a session configuration object to "Enable-PSSessionConfiguration".


If you omit this parameter, "Enable-PSSessionConfiguration" enables the Microsoft.PowerShell session configuration.`, `String[]`),
        new Parameter(`NoServiceRestart`, `Indicates that the cmdlet does not restart the service.`, `SwitchParameter`),
        new Parameter(`SecurityDescriptorSddl`, `Specifies a security descriptor with which this cmdlet replaces the security descriptor on the session configuration.


If you omit this parameter, "Enable-PSSessionConfiguration" only deletes the deny all item from the security descriptor.`, `String`),
        new Parameter(`SkipNetworkProfileCheck`, `Indicates that this cmdlet enables the session configuration when the computer is on a public network. This parameter enables a firewall rule for public networks that allows remote access only from computers in the same local subnet. By default, "Enable-PSSessionConfiguration" fails on a public network.


This parameter is designed for client versions of the Windows operating system. Server versions of the Windows operating system have a local subnet firewall rule for public networks. However, if the local subnet firewall rule is disabled on a server version of the Windows operating system, this parameter re-enables it.


To remove the local subnet restriction and enable remote access from all locations on public networks, use the "Set-NetFirewallRule" cmdlet in the NetSecurity module. For more information, see "Enable-PSRemoting".


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Enables the session configurations on the local computer.`, `Enable-PSSessionConfiguration [[-Name] <String[]>] [-Force] [-NoServiceRestart] [-SecurityDescriptorSddl <String>] [-SkipNetworkProfileCheck] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-RunspaceDebug`, [
        new Parameter(`AppDomainName`, ``, `String[]`),
        new Parameter(`BreakAll`, ``, `SwitchParameter`),
        new Parameter(`ProcessName`, ``, `String`),
        new Parameter(`Runspace`, ``, `Runspace[]`),
        new Parameter(`RunspaceId`, ``, `Int32[]`),
        new Parameter(`RunspaceInstanceId`, ``, `Guid[]`),
        new Parameter(`RunspaceName`, ``, `String[]`),
    ], `Enables debugging on runspaces where any breakpoint is preserved until a debugger is attached.`, `Enable-RunspaceDebug [[-ProcessName] <String>] [[-AppDomainName] <String[]>] [<CommonParameters>]

Enable-RunspaceDebug [[-RunspaceName] <String[]>] [[-BreakAll]] [<CommonParameters>]

Enable-RunspaceDebug [-Runspace] <Runspace[]> [[-BreakAll]] [<CommonParameters>]

Enable-RunspaceDebug [-RunspaceId] <Int32[]> [[-BreakAll]] [<CommonParameters>]

Enable-RunspaceDebug [-RunspaceInstanceId] <Guid[]> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-TpmAutoProvisioning`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-WindowsErrorReporting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-WindowsOptionalFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enable-WSManCredSSP`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enter-PSHostProcess`, [
        new Parameter(`AppDomainName`, `Specifies an application domain name to connect to if omitted, uses DefaultAppDomain . Use "Get-PSHostProcessInfo" to display the application domain names.`, `String`),
        new Parameter(`HostProcessInfo`, `Specifies a PSHostProcessInfo object that can be connected to with PowerShell. Use "Get-PSHostProcessInfo" to get the object.`, `PSHostProcessInfo`),
        new Parameter(`Id`, `Specifies a process by the process ID. To get a process ID, run the "Get-Process" cmdlet.`, `Int32`),
        new Parameter(`Name`, `Specifies a process by the process name. To get a process name, run the "Get-Process" cmdlet. You can also get process names from the Properties dialog box of a process in Task Manager.`, `String`),
        new Parameter(`Process`, `Specifies a process by the process object. The simplest way to use this parameter is to save the results of a "Get-Process" command that returns process that you want to enter in a variable, and then specify the variable as the value of this parameter.`, `Process`),
        new Parameter(`CustomPipeName`, `Gets or sets the custom named pipe name to connect to. This is usually used in conjunction with "pwsh -CustomPipeName".


This parameter was introduced in PowerShell 6.2.`, `String`),
    ], `Connects to and enters into an interactive session with a local process.`, `Enter-PSHostProcess [-Id] <Int32> [[-AppDomainName] <String>] [<CommonParameters>]

Enter-PSHostProcess [-Process] <Process> [[-AppDomainName] <String>] [<CommonParameters>]

Enter-PSHostProcess [-Name] <String> [[-AppDomainName] <String>] [<CommonParameters>]

Enter-PSHostProcess [-HostProcessInfo] <PSHostProcessInfo> [[-AppDomainName] <String>] [<CommonParameters>]

Enter-PSHostProcess -CustomPipeName <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Enter-PSSession`, [
        new Parameter(`AllowRedirection`, `Allows redirection of this connection to an alternate Uniform Resource Identifier (URI). By default, redirection is not allowed.


When you use the ConnectionURI parameter, the remote destination can return an instruction to redirect to a different URI. By default, PowerShell does not redirect connections, but you can use this parameter to allow it to redirect the connection.


You can also limit the number of times the connection is redirected by changing the MaximumConnectionRedirectionCount session option value. Use the MaximumRedirection parameter of the New-PSSessionOption cmdlet or set the MaximumConnectionRedirectionCount property of the $PSSessionOption preference variable. The default value is 5.`, `SwitchParameter`),
        new Parameter(`ApplicationName`, `Specifies the application name segment of the connection URI. Use this parameter to specify the application name when you are not using the ConnectionURI parameter in the command.


The default value is the value of the $PSSessionApplicationName preference variable on the local computer. If this preference variable is not defined, the default value is WSMAN. This value is appropriate for most uses. For more information, see about_Preference_Variables (About/about_Preference_Variables.md).


The WinRM service uses the application name to select a listener to service the connection request. The value of this parameter should match the value of the URLPrefix property of a listener on the remote computer.`, `String`),
        new Parameter(`Authentication`, `Specifies the mechanism that is used to authenticate the user's credentials. The acceptable values for this parameter are:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential




The default value is Default.


CredSSP authentication is available only in Windows Vista, Windows Server 2008, and later versions of the Windows operating system.


For more information about the values of this parameter, see AuthenticationMechanism Enum (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).

Caution: Credential Security Support Provider (CredSSP) authentication, in which the user's credentials are passed to a remote computer to be authenticated, is designed for commands that require authentication on more than one resource, such as accessing a remote network share. This mechanism increases the security risk of the remote operation. If the remote computer is compromised, the credentials that are passed to it can be used to control the network session.`, `AuthenticationMechanism`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to perform this action. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts; they do not work with domain accounts.


To get a certificate, use the Get-Item or Get-ChildItem command in the PowerShell Cert: drive.`, `String`),
        new Parameter(`ComputerName`, `Specifies a computer name. This cmdlet starts an interactive session with the specified remote computer. Enter only one computer name. The default is the local computer.


Type the NetBIOS name, the IP address, or the fully qualified domain name of the computer. You can also pipe a computer name to Enter-PSSession .


To use an IP address in the value of the ComputerName parameter, the command must include the Credential parameter. Also, the computer must be configured for HTTPS transport or the IP address of the remote computer must be included in the WinRM TrustedHosts list on the local computer. For instructions for adding a computer name to the TrustedHosts list, see "How to Add a Computer to the Trusted Host List" in about_Remote_Troubleshooting (About/about_Remote_Troubleshooting.md).


Note: In Windows Vista and later versions of the Windows operating system, to include the local computer in the value of the ComputerName parameter, you must start PowerShell with the Run as administrator option.`, `String`),
        new Parameter(`ConfigurationName`, `Specifies the session configuration that is used for the interactive session.


Enter a configuration name or the fully qualified resource URI for a session configuration. If you specify only the configuration name, the following schema URI is prepended: "http://schemas.microsoft.com/powershell".


When used with SSH, this specifies the subsystem to use on the target as defined in sshd_config. The default value for SSH is the "powershell" subsystem.


The session configuration for a session is located on the remote computer. If the specified session configuration does not exist on the remote computer, the command fails.


The default value is the value of the $PSSessionConfigurationName preference variable on the local computer. If this preference variable is not set, the default is Microsoft.PowerShell. For more information, see about_Preference_Variables (About/about_Preference_Variables.md).`, `String`),
        new Parameter(`ConnectionUri`, `Specifies a URI that defines the connection endpoint for the session. The URI must be fully qualified. The format of this string is as follows:


<Transport>://<ComputerName>:<Port>/<ApplicationName>


The default value is as follows:


"http://localhost:5985/WSMAN"


If you do not specify a ConnectionURI , you can use the UseSSL , ComputerName , Port , and ApplicationName parameters to specify the ConnectionURI values.


Valid values for the Transport segment of the URI are HTTP and HTTPS. If you specify a connection URI with a Transport segment, but do not specify a port, the session is created by using standards ports: 80 for HTTP and 443 for HTTPS. To use the default ports for PowerShell remoting, specify port 5985 for HTTP or 5986 for HTTPS.


If the destination computer redirects the connection to a different URI, PowerShell prevents the redirection unless you use the AllowRedirection parameter in the command.`, `Uri`),
        new Parameter(`ContainerId`, `Specifies the ID of a container.`, `String`),
        new Parameter(`Credential`, `Specifies a user account that has permission to perform this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`EnableNetworkAccess`, `Indicates that this cmdlet adds an interactive security token to loopback sessions. The interactive token lets you run commands in the loopback session that get data from other computers. For example, you can run a command in the session that copies XML files from a remote computer to the local computer.


A loopback session is a PSSession that originates and ends on the same computer. To create a loopback session, omit the ComputerName parameter or set its value to . (dot), localhost, or the name of the local computer.


By default, loopback sessions are created by using a network token, which might not provide sufficient permission to authenticate to remote computers.


The EnableNetworkAccess parameter is effective only in loopback sessions. If you use EnableNetworkAccess when you create a session on a remote computer, the command succeeds, but the parameter is ignored.


You can also allow remote access in a loopback session by using the CredSSP value of the Authentication parameter, which delegates the session credentials to other computers.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`HostName`, `Specifies a computer name for a Secure Shell (SSH) based connection. This is similar to the ComputerName parameter except that the connection to the remote computer is made using SSH rather than Windows WinRM. This parameter supports specifying the user name and/or port as part of the host name parameter value using the form "user@hostname:port". The user name and/or port specified as part of the host name takes precedence over the "-UserName" and "-Port" parameters, if specified. This allows passing multiple computer names to this parameter where some have specific user names and/or ports, while others use the user name and/or port from the "-UserName" and "-Port" parameters.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`Id`, `Specifies the ID of an existing session. Enter-PSSession uses the specified session for the interactive session.


To find the ID of a session, use the Get-PSSession cmdlet.`, `Int32`),
        new Parameter(`InstanceId`, `Specifies the instance ID of an existing session. Enter-PSSession uses the specified session for the interactive session.


The instance ID is a GUID. To find the instance ID of a session, use the Get-PSSession cmdlet. You can also use the Session , Name , or ID parameters to specify an existing session. Or, you can use the ComputerName parameter to start a temporary session.`, `Guid`),
        new Parameter(`KeyFilePath`, `Specifies a key file path used by Secure Shell (SSH) to authenticate a user on a remote computer.


SSH allows user authentication to be performed via private/public keys as an alternative to basic password authentication. If the remote computer is configured for key authentication then this parameter can be used to provide the key that identifies the user.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`Name`, `Specifies the friendly name of an existing session. Enter-PSSession uses the specified session for the interactive session.


If the name that you specify matches more than one session, the command fails. You can also use the Session , InstanceID , or ID parameters to specify an existing session. Or, you can use the ComputerName parameter to start a temporary session.


To establish a friendly name for a session, use the Name parameter of the New-PSSession cmdlet.`, `String`),
        new Parameter(`Port`, `Specifies the network port on the remote computer that is used for this command.


In PowerShell 6.0 this parameter was inlcuded in the HostName parameter set which supports Secure Shell (SSH) connections. WinRM (ComputerName parameter set) To connect to a remote computer, the remote computer must be listening on the port that the connection uses. The default ports are 5985, which is the WinRM port for HTTP, and 5986, which is the WinRM port for HTTPS.


Before using an alternate port, you must configure the WinRM listener on the remote computer to listen at that port. Use the following commands to configure the listener:


"1. winrm delete winrm/config/listener?Address=*+Transport=HTTP"


"2. winrm create winrm/config/listener?Address=*+Transport=HTTP @{Port="<port-number>"}"


Do not use the Port parameter unless you must. The port setting in the command applies to all computers or sessions on which the command runs. An alternate port setting might prevent the command from running on all computers. SSH (HostName parameter set) To connect to a remote computer, the remote computer must be configured with the SSH service (SSHD) and must be listening on the port that the connection uses. The default port for SSH is 22.`, `Int32`),
        new Parameter(`RunAsAdministrator`, `Indicates that the PSSession runs as administrator.`, `SwitchParameter`),
        new Parameter(`Session`, `Specifies a PowerShell session ( PSSession ) to use for the interactive session. This parameter takes a session object. You can also use the Name , InstanceID , or ID parameters to specify a PSSession .


Enter a variable that contains a session object or a command that creates or gets a session object, such as a New-PSSession or Get-PSSession command. You can also pipe a session object to Enter-PSSession . You can submit only one PSSession by using this parameter. If you enter a variable that contains more than one PSSession , the command fails.


When you use Exit-PSSession or the EXIT keyword, the interactive session ends, but the PSSession that you created remains open and available for use.`, `PSSession`),
        new Parameter(`SessionOption`, `Sets advanced options for the session. Enter a SessionOption object, such as one that you create by using the New-PSSessionOption cmdlet, or a hash table in which the keys are session option names and the values are session option values.


The default values for the options are determined by the value of the $PSSessionOption preference variable, if it is set. Otherwise, the default values are established by options set in the session configuration.


The session option values take precedence over default values for sessions set in the $PSSessionOption preference variable and in the session configuration. However, they do not take precedence over maximum values, quotas or limits set in the session configuration.


For a description of the session options, including the default values, see New-PSSessionOption . For information about the $PSSessionOption preference variable, see about_Preference_Variables (About/about_Preference_Variables.md). For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `PSSessionOption`),
        new Parameter(`SSHTransport`, `Indicates that the remote connection is established using Secure Shell (SSH).


By default PowerShell uses Windows WinRM to connect to a remote computer. This switch forces PowerShell to use the HostName parameter set for establishing an SSH based remote connection.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`Subsystem`, `Specifies the SSH subsystem used for the new PSSession .


This specifies the subsystem to use on the target as defined in sshd_config. The subsystem starts a specific version of PowerShell with predefined parameters. If the specified subsystem does not exist on the remote computer, the command fails.


If this parameter is not used, the default is the 'powershell' subsystem.`, `String`),
        new Parameter(`UserName`, `Specifies the user name for the account used to create a session on the remote computer. User authentication method will depend on how Secure Shell (SSH) is configured on the remote computer.


If SSH is configured for basic password authentication then you will be prompted for the user password.


If SSH is configured for key based user authentication then a key file path can be provided via the KeyFilePath parameter and no password prompt will occur. Note that if the client user key file is located in an SSH known location then the KeyFilePath parameter is not needed for key based authentication, and user authentication will occur automatically based on the user name. See SSH documentation about key based user authentication for more information.


This is not a required parameter.  If no UserName parameter is specified then the current log on user name is used for the connection.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`UseSSL`, `Indicates that this cmdlet uses the Secure Sockets Layer (SSL) protocol to establish a connection to the remote computer. By default, SSL is not used.


WS-Management encrypts all PowerShell content transmitted over the network. The UseSSL parameter is an additional protection that sends the data across an HTTPS connection instead of an HTTP connection.


If you use this parameter, but SSL is not available on the port that is used for the command, the command fails.`, `SwitchParameter`),
        new Parameter(`VMId`, `Specifies the ID of a virtual machine.`, `Guid`),
        new Parameter(`VMName`, `Specifies the name of a virtual machine.`, `String`),
    ], `Starts an interactive session with a remote computer.`, `Enter-PSSession [[-ConnectionUri] <Uri>] [[-Credential] <PSCredential>] [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-EnableNetworkAccess] [-SessionOption <PSSessionOption>] [<CommonParameters>]

Enter-PSSession [-ComputerName] <String> [[-Credential] <PSCredential>] [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-EnableNetworkAccess] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-UseSSL] [<CommonParameters>]

Enter-PSSession [-VMId] <Guid> [[-Credential] <PSCredential>] [-ConfigurationName <String>] [<CommonParameters>]

Enter-PSSession [-VMName] <String> [[-Credential] <PSCredential>] [-ConfigurationName <String>] [<CommonParameters>]

Enter-PSSession [-ContainerId] <String> [-ConfigurationName <String>] [-RunAsAdministrator] [<CommonParameters>]

Enter-PSSession [-HostName] <String> [-KeyFilePath <String>] [-Port <Int32>] [-SSHTransport {true}] [-UserName <String>] [<CommonParameters>]

Enter-PSSession [[-Id] <Int32>] [<CommonParameters>]

Enter-PSSession [-InstanceId <Guid>] [<CommonParameters>]

Enter-PSSession [-Name <String>] [<CommonParameters>]

Enter-PSSession [[-Session] <PSSession>] [<CommonParameters>]

Enter-PSSession [-Subsystem <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Exit-PSHostProcess`, [], `Closes an interactive session with a local process.`, `Exit-PSHostProcess [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Exit-PSSession`, [], `Ends an interactive session with a remote computer.`, `Exit-PSSession [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Expand-WindowsCustomDataImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Expand-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-Alias`, [
        new Parameter(`Append`, `Indicates that this cmdlet appends the output to the specified file, rather than overwriting the existing contents of that file.`, `SwitchParameter`),
        new Parameter(`As`, `Specifies the output format. CSV is the default. The acceptable values for this parameter are:


- CSV. Comma-separated value (CSV) format. - Script. Creates a "Set-Alias" command for each exported alias. If you name the output file with a .ps1 file name extension, you can run it as a script to add the aliases to any session.`, `ExportAliasFormat`),
        new Parameter(`Description`, `Specifies the description of the exported file. The description appears as a comment at the top of the file, following the header information.`, `String`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.


Overwrites the output file, even if the read-only attribute is set on the file.


By default, "Export-Alias" overwrites files without warning, unless the read-only or hidden attribute is set or the NoClobber parameter is used in the command. The NoClobber parameter takes precedence over the Force parameter when both are used in a command.


The Force parameter cannot force "Export-Alias" to overwrite files with the hidden attribute.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies the path to the output file. Unlike Path , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`Name`, `Specifies the names as an array of the aliases to export. Wildcards are permitted.


By default, "Export-Alias" exports all aliases in the session or scope.`, `String[]`),
        new Parameter(`NoClobber`, `Indicates that this cmdlet prevents "Export-Alias" from overwriting any files, even if the Force parameter is used in the command.


If the NoClobber parameter is omitted, "Export-Alias" will overwrite an existing file without warning, unless the read-only attribute is set on the file. NoClobber takes precedence over the Force parameter, which permits "Export-Alias" to overwrite a file with the read-only attribute. NoClobber does not prevent the Append parameter from adding content to an existing file.`, `SwitchParameter`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the output file. Wildcards are permitted, but the resulting path value must resolve to a single file name.`, `String`),
        new Parameter(`Scope`, `Specifies the scope from which the aliases should be exported. The acceptable values for this parameter are:


- Global


- Local


- Script


- A number relative to the current scope (0 through the number of scopes where 0 is the current scope and 1 is its parent)




The default value is Local. For more information, see about_Scopes.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Exports information about currently defined aliases to a file.`, `Export-Alias [[-Name] <String[]>] [-Append] [-As {Csv | Script}] [-Description <String>] [-Force] -LiteralPath <String> [-NoClobber] [-PassThru] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]

Export-Alias [-Path] <String> [[-Name] <String[]>] [-Append] [-As {Csv | Script}] [-Description <String>] [-Force] [-NoClobber] [-PassThru] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-BinaryMiLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-Clixml`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Depth`, `Specifies how many levels of contained objects are included in the XML representation. The default value is "2".


The default value can be overridden for the object type in the "Types.ps1xml" files. For more information, see about_Types.ps1xml (../Microsoft.PowerShell.Core/About/about_Types.ps1xml.md).`, `Int32`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.


Causes the cmdlet to clear the read-only attribute of the output file if necessary. The cmdlet will attempt to reset the read-only attribute when the command completes.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the object to be converted. Enter a variable that contains the objects, or type a command or expression that gets the objects. You can also pipe objects to "Export-Clixml".`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies the path to the file where the XML representation of the object will be stored. Unlike Path , the value of the LiteralPath parameter is used exactly as it's typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`NoClobber`, `Indicates that the cmdlet doesn't overwrite the contents of an existing file. By default, if a file exists in the specified path, "Export-Clixml" overwrites the file without warning.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the file where the XML representation of the object will be stored.`, `String`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Creates an XML-based representation of an object or objects and stores it in a file.`, `Export-Clixml [-Confirm] [-Depth <Int32>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Force] -InputObject <PSObject> -LiteralPath <String> [-NoClobber] [-WhatIf] [<CommonParameters>]

Export-Clixml [-Path] <String> [-Confirm] [-Depth <Int32>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Force] -InputObject <PSObject> [-NoClobber] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-Counter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-Csv`, [
        new Parameter(`Append`, `Use this parameter so that "Export-CSV" adds CSV output to the end of the specified file. Without this parameter, "Export-CSV" replaces the file contents without warning.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Delimiter`, `Specifies a delimiter to separate the property values. The default is a comma (","). Enter a character, such as a colon (":"). To specify a semicolon (";"), enclose it in quotation marks.`, `Char`),
        new Parameter(`Encoding`, `Specifies the encoding for the exported CSV file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Force`, `This parameter allows "Export-Csv" to overwrite files with the Read Only attribute.


When Force and Append parameters are combined, objects that contain mismatched properties can be written to a CSV file. Only the properties that match are written to the file. The mismatched properties are discarded.`, `SwitchParameter`),
        new Parameter(`IncludeTypeInformation`, `When this parameter is used the first line of the CSV output contains #TYPE followed by the fully qualified name of the object type. For example, #TYPE System.Diagnostics.Process .


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the objects to export as CSV strings. Enter a variable that contains the objects or type a command or expression that gets the objects. You can also pipe objects to "Export-CSV".`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies the path to the CSV output file. Unlike Path , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, use single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`NoClobber`, `Use this parameter so that "Export-CSV" does not overwrite an existing file. By default, if the file exists in the specified path, "Export-CSV" overwrites the file without warning.`, `SwitchParameter`),
        new Parameter(`NoTypeInformation`, `Removes the #TYPE information header from the output. This parameter became the default in PowerShell 6.0 and is included for backwards compatibility.`, `SwitchParameter`),
        new Parameter(`Path`, `A required parameter that specifies the location to save the CSV output file.`, `String`),
        new Parameter(`UseCulture`, `Uses the list separator for the current culture as the item delimiter. To find the list separator for a culture, use the following command: "(Get-Culture).TextInfo.ListSeparator".`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Prevents the cmdlet from being processed or making changes. The output shows what would happen if the cmdlet were run.`, `SwitchParameter`),
    ], `Converts objects into a series of comma-separated value (CSV) strings and saves the strings to a file.`, `Export-Csv [[-Path] <String>] [[-Delimiter] <Char>] [-Append] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Force] [-IncludeTypeInformation] -InputObject <PSObject> [-LiteralPath <String>] [-NoClobber] [-NoTypeInformation] [-Confirm] [-WhatIf] [<CommonParameters>]

Export-Csv [[-Path] <String>] [-Append] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Force] [-IncludeTypeInformation] -InputObject <PSObject> [-LiteralPath <String>] [-NoClobber] [-NoTypeInformation] [-UseCulture] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-FormatData`, [
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`IncludeScriptBlock`, `Indicates whether script blocks in the format data are exported.


Because script blocks contain code and can be used maliciously, they are not exported by default.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the format data objects to be exported. Enter a variable that contains the objects or a command that gets the objects, such as a Get-FormatData command. You can also pipe the objects from Get-FormatData to Export-FormatData .`, `ExtendedTypeDefinition[]`),
        new Parameter(`LiteralPath`, `Specifies a location for the output file. Unlike the Path parameter, the value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`NoClobber`, `Indicates that the cmdlet does not overwrite existing files. By default, Export-FormatData overwrites files without warning unless the file has the read-only attribute.


To direct Export-FormatData to overwrite read-only files, use the Force parameter.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies a location for the output file. Enter a path (optional) and file name with a format.ps1xml file name extension. If you omit the path, Export-FormatData creates the file in the current directory.


If you use a file name extension other than .ps1xml, the Update-FormatData cmdlet will not recognize the file.


If you specify an existing file, Export-FormatData overwrites the file without warning, unless the file has the read-only attribute. To overwrite a read-only file, use the Force parameter. To prevent files from being overwritten, use the NoClobber parameter.`, `String`),
    ], `Saves formatting data from the current session in a formatting file.`, `Export-FormatData [-Force] [-IncludeScriptBlock] -InputObject <ExtendedTypeDefinition[]> -LiteralPath <String> [-NoClobber] [<CommonParameters>]

Export-FormatData [-Force] [-IncludeScriptBlock] -InputObject <ExtendedTypeDefinition[]> [-NoClobber] -Path <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-ModuleMember`, [
        new Parameter(`Alias`, `Specifies the aliases that are exported from the script module file. Enter the alias names. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Cmdlet`, `Specifies the cmdlets that are exported from the script module file. Enter the cmdlet names. Wildcard characters are permitted.


You cannot create cmdlets in a script module file, but you can import cmdlets from a binary module into a script module and re-export them from the script module.`, `String[]`),
        new Parameter(`Function`, `Specifies the functions that are exported from the script module file. Enter the function names. Wildcard characters are permitted. You can also pipe function name strings to Export-ModuleMember .`, `String[]`),
        new Parameter(`Variable`, `Specifies the variables that are exported from the script module file. Enter the variable names, without a dollar sign. Wildcard characters are permitted.`, `String[]`),
    ], `Specifies the module members that are exported.`, `Export-ModuleMember [[-Function] <String[]>] [-Alias <String[]>] [-Cmdlet <String[]>] [-Variable <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-PSSession`, [
        new Parameter(`AllowClobber`, `Exports the specified commands, even if they have the same names as commands in the current session.


If you export a command with the same name as a command in the current session, the exported command hides or replaces the original commands. For more information, see about_Command_Precedence (../Microsoft.PowerShell.Core/About/about_Command_Precedence.md).`, `SwitchParameter`),
        new Parameter(`ArgumentList`, `Exports the variant of the command that results from using the specified arguments (parameter values).


For example, to export the variant of the "Get-Item" command in the certificate (Cert:) drive in the PSSession in "$S", type "export-pssession -session $S -command get-item -argumentlist cert:".`, `Object[]`),
        new Parameter(`Certificate`, `Specifies the client certificate that is used to sign the format files (*.Format.ps1xml) or script module files (.psm1) in the module that "Export-PSSession" creates. Enter a variable that contains a certificate or a command or expression that gets the certificate.


To find a certificate, use the "Get-PfxCertificate" cmdlet or use the "Get-ChildItem" cmdlet in the Certificate (Cert:) drive. If the certificate is not valid or does not have sufficient authority, the command fails.`, `X509Certificate2`),
        new Parameter(`CommandName`, `Exports only the commands with the specified names or name patterns. Wildcards are permitted. Use CommandName or its alias, Name .


By default, "Export-PSSession" exports all commands from the PSSession except for commands that have the same names as commands in the current session. This prevents commands from being hidden or replaced by commands in the current session. To export all commands, even those that hide or replace other commands, use the AllowClobber parameter.


If you use the CommandName parameter, the formatting files for the commands are not exported unless you use the FormatTypeName parameter. Similarly, if you use the FormatTypeName parameter, no commands are exported unless you use the CommandName parameter.`, `String[]`),
        new Parameter(`CommandType`, `Exports only the specified types of command objects. Use CommandType or its alias, Type .


The acceptable values for this parameter are as follows:


- Alias. All PowerShell aliases in the current session.


- All. All command types. It is the equivalent of "Get-Command -Name *".


- Application. All files other than PowerShell files in paths listed in the Path environment


variable ("$env:path"), including .txt, .exe, and .dll files. - Cmdlet. The cmdlets in the current session. Cmdlet is the default.


- Configuration. A PowerShell configuration. For more information, see about_Session_Configurations (../Microsoft.PowerShell.Core/About/about_Session_Configurations.md). - ExternalScript. All .ps1 files in the paths listed in the Path environment variable   ("$env:path"). - Filter and Function. All PowerShell functions.


- Script. Script blocks in the current session.


- Workflow. A PowerShell workflow. For more information, see about_Workflows (/powershell/module/psworkflow/about/about_workflows?view=powershell-5.1).`, `CommandTypes`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Force`, `Overwrites one or more existing output files, even if the file has the read-only attribute.`, `SwitchParameter`),
        new Parameter(`FormatTypeName`, `Exports formatting instructions only for the specified Microsoft .NET Framework types. Enter the type names. By default, "Export-PSSession" exports formatting instructions for all .NET Framework types that are not in the System.Management.Automation namespace.


The value of this parameter must be the name of a type that is returned by a "Get-FormatData" command in the session from which the commands are being imported. To get all of the formatting data in the remote session, type "*".


If you use the FormatTypeName parameter, no commands are exported unless you use the CommandName parameter.


If you use the CommandName parameter, the formatting files for the commands are not exported unless you use the FormatTypeName parameter.`, `String[]`),
        new Parameter(`FullyQualifiedModule`, `Specifies modules with names that are specified in the form of ModuleSpecification objects. See the Remarks section of ModuleSpecification Constructor (Hashtable) (https://msdn.microsoft.com/library/jj136290).


For example, the FullyQualifiedModule parameter accepts a module name that is specified in either of these formats:


"@{ModuleName = "modulename"; ModuleVersion = "version_number"}"


"@{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"}" ModuleName and ModuleVersion are required, but Guid is optional. You cannot specify the FullyQualifiedModule parameter in the same command as a Module parameter; the two parameters are mutually exclusive.`, `ModuleSpecification[]`),
        new Parameter(`Module`, `Exports only the commands in the specified PowerShell snap-ins and modules. Enter the snap-in and module names. Wildcards are not permitted.


For more information, see "Import-Module" and about_PSSnapins (/powershell/module/microsoft.powershell.core/about/about_pssnapins?view=powershell-5.1).`, `String[]`),
        new Parameter(`OutputModule`, `Specifies an optional path and name for the module created by "Export-PSSession". The default path is "$home\\Documents\\WindowsPowerShell\\Modules". This parameter is required.


If the module subdirectory or any of the files that "Export-PSSession" creates already exist, the command fails. To overwrite existing files, use the Force parameter.`, `String`),
        new Parameter(`Session`, `Specifies the PSSession from which the commands are exported. Enter a variable that contains a session object or a command that gets a session object, such as a "Get-PSSession" command. This parameter is required.`, `PSSession`),
    ], `Exports commands from another session and saves them in a PowerShell module.`, `Export-PSSession [-Session] <PSSession> [-OutputModule] <String> [[-CommandName] <String[]>] [[-FormatTypeName] <String[]>] [-AllowClobber] [-ArgumentList <Object[]>] [-Certificate <X509Certificate2>] [-CommandType {Alias | All | Application | Cmdlet | Configuration | ExternalScript | Filter | Function | Script | Workflow}] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Force] [-FullyQualifiedModule <ModuleSpecification[]>] [-Module <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-StartLayout`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-StartLayoutEdgeAssets`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-WindowsCapabilitySource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-WindowsDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Export-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-Package`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Find-PackageProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`ForEach-Object`, [
        new Parameter(`ArgumentList`, `Specifies an array of arguments to a method call.


This parameter was introduced in Windows PowerShell 3.0.`, `Object[]`),
        new Parameter(`Begin`, `Specifies a script block that runs before this cmdlet processes any input objects.`, `ScriptBlock`),
        new Parameter(`End`, `Specifies a script block that runs after this cmdlet processes all input objects.`, `ScriptBlock`),
        new Parameter(`InputObject`, `Specifies the input objects. "ForEach-Object" runs the script block or operation statement on each input object. Enter a variable that contains the objects, or type a command or expression that gets the objects.


When you use the InputObject parameter with "ForEach-Object", instead of piping command results to "ForEach-Object", the InputObject value is treated as a single object. This is true even if the value is a collection that is the result of a command, such as "-InputObject (Get-Process)". Because InputObject cannot return individual properties from an array or collection of objects, we recommend that if you use "ForEach-Object" to perform operations on a collection of objects for those objects that have specific values in defined properties, you use "ForEach-Object" in the pipeline, as shown in the examples in this topic.`, `PSObject`),
        new Parameter(`MemberName`, `Specifies the property to get or the method to call.


Wildcard characters are permitted, but work only if the resulting string resolves to a unique value. If, for example, you run "Get-Process | ForEach -MemberName Name", and more than one member exists with a name that contains the string Name, such as the ProcessName and Name * properties, the command fails.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`Process`, `Specifies the operation that is performed on each input object. Enter a script block that describes the operation.`, `ScriptBlock[]`),
        new Parameter(`RemainingScripts`, `Specifies all script blocks that are not taken by the Process parameter.


This parameter was introduced in Windows PowerShell 3.0.`, `ScriptBlock[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Performs an operation against each item in a collection of input objects.`, `ForEach-Object [-MemberName] <String> [-ArgumentList <Object[]>] [-InputObject <PSObject>] [-Confirm] [-WhatIf] [<CommonParameters>]

ForEach-Object [-Process] <ScriptBlock[]> [-Begin <ScriptBlock>] [-End <ScriptBlock>] [-InputObject <PSObject>] [-RemainingScripts <ScriptBlock[]>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-Custom`, [
        new Parameter(`Depth`, `Specifies the number of columns in the display.`, `Int32`),
        new Parameter(`DisplayError`, `Displays errors at the command line. This parameter is rarely used, but can be used as a debugging aid when you are formatting expressions in a "Format-Custom" command, and the expressions do not appear to be working.`, `SwitchParameter`),
        new Parameter(`Expand`, `Formats the collection object, as well as the objects in the collection. This parameter is designed to format objects that support the ICollection (System.Collections) interface. The default value is EnumOnly .


Valid values are:


- EnumOnly: Displays the properties of the objects in the collection.


- CoreOnly: Displays the properties of the collection object.


- Both: Displays the properties of the collection object and the properties of objects in the collection.`, `String`),
        new Parameter(`Force`, `Directs the cmdlet to display all of the error information. Use with the DisplayError or ShowError parameters. By default, when an error object is written to the error or display streams, only some of the error information is displayed.`, `SwitchParameter`),
        new Parameter(`GroupBy`, `Formats the output in groups based on a shared property or value. Enter an expression or a property of the output.


The value of the GroupBy parameter can be a new calculated property. To create a calculated, property, use a hash table. Valid keys are:


- Name (or Label) <string>


- Expression <string> or <script block>


- FormatString <string>`, `Object`),
        new Parameter(`InputObject`, `Specifies the objects to be formatted. Enter a variable that contains the objects or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`Property`, `Specifies the object properties that appear in the display and the order in which they appear. Wildcards are permitted.


If you omit this parameter, the properties that appear in the display depend on the object being displayed. The parameter name ("Property") is optional. You cannot use the Property and View parameters in the same command.


The value of the Property parameter can be a new calculated property. To create a calculated property, use a hash table. Valid keys are:


- Expression <string> or <script block>


- Depth <int32>`, `Object[]`),
        new Parameter(`ShowError`, `Sends errors through the pipeline. This parameter is rarely used, but can be used as a debugging aid when you are formatting expressions in a "Format-Custom" command, and the expressions do not appear to be working.`, `SwitchParameter`),
        new Parameter(`View`, `Specifies the name of an alternate format or "view." If you omit this parameter, "Format-Custom" uses a default custom view. You cannot use the Property and View parameters in the same command.`, `String`),
    ], `Uses a customized view to format the output.`, `Format-Custom [[-Property] <Object[]>] [-Depth <Int32>] [-DisplayError] [-Expand {CoreOnly | EnumOnly | Both}] [-Force] [-GroupBy <Object>] [-InputObject <PSObject>] [-ShowError] [-View <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-Hex`, [
        new Parameter(`Encoding`, `Specifies the encoding of the output. This only applies to "[string]" input. The parameter has no effect on numeric types. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`InputObject`, `Used for pipeline input. Pipeline input supports only certain scalar types and "[system.io.fileinfo]" instances for piping from "Get-ChildItem".


The supported scalar types are:


- "[string]", "[char]"


- "[byte]", "[sbyte]"


- "[int16]", "[uint16]", "[short]", "[ushort]"


- "[int]", "[uint]", "[int32]", "[uint32]",


- "[long]", "[ulong]", "[int64]", "[uint64]"


- "[single]", "[float]", "[double]"`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies the complete path to a file. The value of LiteralPath is used exactly as it is typed. This parameter does not accept wildcard characters. To specify multiple paths to files, separate the paths with a comma. If the LiteralPath parameter includes escape characters, enclose the path in single quotation marks. PowerShell does not interpret any characters in a single quoted string as escape sequences. For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Path`, `Specifies the path to files. Use a dot (".") to specify the current location. The wildcard character (" ") is accepted and can be used to specify all the items in a location. If the Path * parameter includes escape characters, enclose the path in single quotation marks. To specify multiple paths to files, separate the paths with a comma.`, `String[]`),
        new Parameter(`Raw`, `This parameter no longer does anything. It is retained for script compatibility.`, `SwitchParameter`),
        new Parameter(`Offset`, `This represents the number of bytes to skip from being part of the hex output.


This parameter was introduced in PowerShell 6.2.`, `Int64`),
        new Parameter(`Count`, `This represents the number of bytes to include in the hex output.


This parameter was introduced in PowerShell 6.2.`, `Int64`),
    ], `Displays a file or other input as hexadecimal.`, `Format-Hex [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] -InputObject <PSObject> [-Raw] [-Offset <Int64>] [-Count <Int64>] [<CommonParameters>]

Format-Hex -LiteralPath <String[]> [-Offset <Int64>] [-Count <Int64>] [<CommonParameters>]

Format-Hex [-Path] <String[]> [-Offset <Int64>] [-Count <Int64>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-List`, [
        new Parameter(`DisplayError`, `Indicates that this cmdlet displays errors at the command line. This parameter is rarely used, but can be used as a debugging aid when you are formatting expressions in a "Format-List" command, and the expressions do not appear to be working.`, `SwitchParameter`),
        new Parameter(`Expand`, `Specifies the formatted collection object, as well as the objects in the collection. This parameter is designed to format objects that support the ICollection (System.Collections) interface. The default value is EnumOnly. The acceptable values for this parameter are:


- EnumOnly. Displays the properties of the objects in the collection.


- CoreOnly. Displays the properties of the collection object.


- Both. Displays the properties of the collection object and the properties of objects in the


collection.`, `String`),
        new Parameter(`Force`, `Indicates that this cmdlet displays all of the error information. Use with the DisplayError or ShowError parameter. By default, when an error object is written to the error or display streams, only some of the error information is displayed.`, `SwitchParameter`),
        new Parameter(`GroupBy`, `Specifies the output in groups based on a shared property or value. Enter an expression or a property of the output.


The value of the GroupBy parameter can be a new calculated property. To create a calculated, property, use a hash table. Valid keys are:


- Name (or Label) <string>


- Expression <string> or <script block>


- FormatString <string>`, `Object`),
        new Parameter(`InputObject`, `Specifies the objects to be formatted. Enter a variable that contains the objects or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`Property`, `Specifies the object properties that appear in the display and the order in which they appear. Wildcards are permitted.


If you omit this parameter, the properties that appear in the display depend on the object being displayed. The parameter name "Property" is optional. You cannot use the Property and View parameters in the same command.


The value of the Property parameter can be a new calculated property. To create a calculated property, use a hash table. Valid keys are:


- Name (or Label) <string>


- Expression <string> or <script block>


- FormatString <string>`, `Object[]`),
        new Parameter(`ShowError`, `Indicates that the cmdlet sends errors through the pipeline. This parameter is rarely used, but can be used as a debugging aid when you are formatting expressions in a "Format-List" command, and the expressions do not appear to be working.`, `SwitchParameter`),
        new Parameter(`View`, `Specifies the name of an alternate list format or view. You cannot use the Property and View parameters in the same command.`, `String`),
    ], `Formats the output as a list of properties in which each property appears on a new line.`, `Format-List [[-Property] <Object[]>] [-DisplayError] [-Expand {CoreOnly | EnumOnly | Both}] [-Force] [-GroupBy <Object>] [-InputObject <PSObject>] [-ShowError] [-View <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-SecureBootUEFI`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-Table`, [
        new Parameter(`AutoSize`, `Indicates that the cmdlet adjusts the column size and number of columns based on the width of the data. By default, the column size and number are determined by the view.`, `SwitchParameter`),
        new Parameter(`DisplayError`, `Indicates that the cmdlet displays errors on the command line. This parameter can be used as a debugging aid when you're formatting expressions in a "Format-Table" command and need to troubleshoot the expressions.`, `SwitchParameter`),
        new Parameter(`Expand`, `Specifies the format of the collection object and the objects in the collection. This parameter is designed to format objects that support the ICollection (/dotnet/api/system.collections.icollection)( System.Collections (/dotnet/api/system.collections))interface. The default value is EnumOnly . The acceptable values for this parameter are as follows:


- EnumOnly : Displays the properties of the objects in the collection. - CoreOnly : Displays the properties of the collection object. - Both : Displays the properties of the collection object and the properties of objects in the   collection.`, `String`),
        new Parameter(`Force`, `Indicates that the cmdlet directs the cmdlet to display all the error information. Use with the DisplayError or ShowError parameter. By default, when an error object is written to the error or display streams, only some of the error information is displayed.`, `SwitchParameter`),
        new Parameter(`GroupBy`, `Specifies sorted output in separate tables based on a property value. For example, you can use GroupBy to list services in separate tables based on their status.


Enter an expression or a property. The GroupBy parameter expects that the objects are sorted. Use the "Sort-Object" cmdlet before using "Format-Table" to group the objects.


The value of the GroupBy parameter can be a new calculated property. To create a calculated, property, use a hash table. The valid keys are as follows:


- Name (or Label) = "<string>"


- Expression = "<string>" or "<script block>"


- FormatString = "<string>"`, `Object`),
        new Parameter(`HideTableHeaders`, `Omits the column headings from the table.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the objects to format. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`Property`, `Specifies the object properties that appear in the display and the order in which they appear. Type one or more property names, separated by commas, or use a hash table to display a calculated property. Wildcards are permitted.


If you omit this parameter, the properties that appear in the display depend on the first object's properties. For example, if the first object has PropertyA and PropertyB but subsequent objects have PropertyA , PropertyB , and PropertyC , then only the PropertyA and PropertyB headers will display.


The Property parameter is optional. You can't use the Property and View parameters in the same command.


The value of the Property parameter can be a new calculated property. To create a calculated property, use a hash table. The valid keys are as follows:


- Name (or Label) = "<string>"


- Expression = "<string>" or "<script block>"


- FormatString = "<string>"


- Width = "<int32>"


- Alignment = value can be Left, Center, or Right`, `Object[]`),
        new Parameter(`RepeatHeader`, `Repeats displaying the header of a table after every screen full. The repeated header is useful when the output is piped to a pager such as "less" or "more" or paging with a screen reader.`, `SwitchParameter`),
        new Parameter(`ShowError`, `This parameter sends errors through the pipeline. This parameter can be used as a debugging aid when you're formatting expressions in a "Format-Table" command and need to troubleshoot the expressions.`, `SwitchParameter`),
        new Parameter(`View`, `Beginning in PowerShell 6, the default views are defined in PowerShell "C#" source code. The "*.format.ps1xml" files from PowerShell 5.1 and earlier versions don't exist in PowerShell 6 and later versions.


The View parameter lets you specify an alternate format or custom view for the table. You can use the default PowerShell views or create custom views. For more information about how to create a custom view, see about_Format.ps1xml (../Microsoft.PowerShell.Core/About/about_Format.ps1xml.md).


The alternate and custom views for the View parameter must use the table format, otherwise, "Format-Table" fails. If the alternate view is a list, use the "Format-List" cmdlet. If the alternate view isn't a list or a table, use the "Format-Custom" cmdlet.


You can't use the Property and View parameters in the same command.`, `String`),
        new Parameter(`Wrap`, `Displays text that exceeds the column width on the next line. By default, text that exceeds the column width is truncated.`, `SwitchParameter`),
    ], `Formats the output as a table.`, `Format-Table [[-Property] <Object[]>] [-AutoSize] [-DisplayError] [-Expand {CoreOnly | EnumOnly | Both}] [-Force] [-GroupBy <Object>] [-HideTableHeaders] [-InputObject <PSObject>] [-RepeatHeader] [-ShowError] [-View <String>] [-Wrap] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Format-Wide`, [
        new Parameter(`AutoSize`, `Adjusts the column size and number of columns based on the width of the data. By default, the column size and number are determined by the view. You cannot use the AutoSize and Column parameters in the same command.`, `SwitchParameter`),
        new Parameter(`Column`, `Specifies the number of columns in the display. You cannot use the AutoSize and Column parameters in the same command.`, `Int32`),
        new Parameter(`DisplayError`, `Displays errors at the command line. This parameter is rarely used, but can be used as a debugging aid when you are formatting expressions in a "Format-Wide" command, and the expressions do not appear to be working.`, `SwitchParameter`),
        new Parameter(`Expand`, `Formats the collection object, as well as the objects in the collection. This parameter is designed to format objects that support the ICollection (System.Collections) interface. The default value is EnumOnly .


Valid values are:


- EnumOnly: Displays the properties of the objects in the collection.


- CoreOnly: Displays the properties of the collection object.


- Both: Displays the properties of the collection object and the properties of objects in the


collection.`, `String`),
        new Parameter(`Force`, `Indicates that this cmdlet overrides restrictions that prevent the command from succeeding, just so the changes do not compromise security. For example, Force will override the read-only attribute or create directories to complete a file path, but it will not attempt to change file permissions.`, `SwitchParameter`),
        new Parameter(`GroupBy`, `Formats the output in groups based on a shared property or value. Enter an expression or a property of the output.


The value of the GroupBy parameter can be a new calculated property. To create a calculated, property, use a hash table. The acceptable values for this parameter are:


- Name (or Label) <string>


- Expression <string> or <script block>


- FormatString <string>`, `Object`),
        new Parameter(`InputObject`, `Specifies the objects to format. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`Property`, `Specifies the object properties that appear in the display and the order in which they appear. Wildcards are permitted.


If you omit this parameter, the properties that appear in the display depend on the object being displayed. The parameter name "Property" is optional. You cannot use the Property and View parameters in the same command.


The value of the Property parameter can be a new calculated property. To create a calculated property, use a hash table. Valid keys are:


- Expression <string> or <script block>


- FormatString <string>`, `Object`),
        new Parameter(`ShowError`, `Sends errors through the pipeline. This parameter is rarely used, but can be used as a debugging aid when you are formatting expressions in a "Format-Wide" command, and the expressions do not appear to be working.`, `SwitchParameter`),
        new Parameter(`View`, `Specifies the name of an alternate table format or view. You cannot use the Property and View parameters in the same command.`, `String`),
    ], `Formats objects as a wide table that displays only one property of each object.`, `Format-Wide [[-Property] <Object>] [-AutoSize] [-Column <Int32>] [-DisplayError] [-Expand {CoreOnly | EnumOnly | Both}] [-Force] [-GroupBy <Object>] [-InputObject <PSObject>] [-ShowError] [-View <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Acl`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Alias`, [
        new Parameter(`Definition`, `Gets the aliases for the specified item. Enter the name of a cmdlet, function, script, file, or executable file.


This parameter is called Definition , because it searches for the item name in the Definition property of the alias object.`, `String[]`),
        new Parameter(`Exclude`, `Omits the specified items. The value of this parameter qualifies the Name and Definition parameters. Enter a name, a definition, or a pattern, such as "s*". Wildcards are permitted.`, `String[]`),
        new Parameter(`Name`, `Specifies the aliases that this cmdlet gets. Wildcards are permitted. By default, "Get-Alias" retrieves all aliases defined for the current session. The parameter name Name is optional. You can also pipe alias names to "Get-Alias".`, `String[]`),
        new Parameter(`Scope`, `Specifies the scope for which this cmdlet gets aliases. The acceptable values for this parameter are:


- Global


- Local


- Script


- A number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent)




Local is the default. For more information, see about_Scopes.`, `String`),
    ], `Gets the aliases for the current session.`, `Get-Alias [-Definition <String[]>] [-Exclude <String[]>] [-Scope <String>] [<CommonParameters>]

Get-Alias [[-Name] <String[]>] [-Exclude <String[]>] [-Scope <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxDefaultVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxPackageManifest`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxProvisionedPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AppxVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-AuthenticodeSignature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ChildItem`, [
        new Parameter(`Attributes`, `Gets files and folders with the specified attributes. This parameter supports all attributes and lets you specify complex combinations of attributes.


For example, to get non-system files (not directories) that are encrypted or compressed, type:


"Get-ChildItem -Attributes !Directory+!System+Encrypted, !Directory+!System+Compressed"


To find files and folders with commonly used attributes, use the Attributes parameter. Or, the parameters Directory , File , Hidden , ReadOnly , and System .


The Attributes parameter supports the following properties:


- Archive - Compressed - Device - Directory - Encrypted - Hidden - IntegrityStream - Normal - NoScrubData - NotContentIndexed - Offline - ReadOnly - ReparsePoint - SparseFile - System - Temporary For a description of these attributes, see the FileAttributes Enumeration (/dotnet/api/system.io.fileattributes).


To combine attributes, use the following operators:


- "!" (NOT)


- "+" (AND)


- "," (OR)




Do not use spaces between an operator and its attribute. Spaces are accepted after commas.


For common attributes, use the following abbreviations:


- "D" (Directory)


- "H" (Hidden)


- "R" (Read-only)

- "S" (System)`, `System.Management.Automation.FlagsExpression^1[System.IO.FileAttributes]`),
        new Parameter(`Depth`, `This parameter was added in PowerShell 5.0 and enables you to control the depth of recursion. By default, "Get-ChildItem" displays the contents of the parent directory. The Depth parameter determines the number of subdirectory levels that are included in the recursion and displays the contents.


For example, "Depth 2" includes the Path parameter's directory, first level of subdirectories, and second level of subdirectories. By default directory names and file names are included in the output.


> [!NOTE] > On a Windows computer from PowerShell or cmd.exe , you can display a graphical view of a > directory structure with the tree.com command.`, `UInt32`),
        new Parameter(`Directory`, `To get a list of directories, use the Directory parameter or the Attributes parameter with the Directory property. You can use the Recurse parameter with Directory .`, `SwitchParameter`),
        new Parameter(`Exclude`, `Specifies, as a string array, a property or property that this cmdlet excludes from the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt" or "A ". Wildcard characters are accepted.


A trailing asterisk (" ") in the Path * parameter is optional. For example, "-Path C:\\Test\\Logs" or "-Path C:\\Test\\Logs\ ". If a trailing asterisk (" ") is included, the command recurses into the Path parameter's subdirectories. Without the asterisk (" "), the contents of the Path * parameter are displayed. More details are included in Example 5 and the Notes section.`, `String[]`),
        new Parameter(`File`, `To get a list of files, use the File parameter. You can use the Recurse parameter with File .`, `SwitchParameter`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved. The filter string is passed to the .NET API to enumerate files. That API only supports "*" and "?" wildcards.`, `String`),
        new Parameter(`FollowSymlink`, `By default, the "Get-ChildItem" cmdlet displays symbolic links to directories found during recursion, but does not recurse into them. Use the FollowSymlink parameter to search the directories that target those symbolic links. The FollowSymlink is a dynamic parameter and is supported only in the FileSystem provider.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`Force`, `Allows the cmdlet to get items that cannot otherwise not be accessed by the user, such as hidden or system files. The Force parameter does not override security restrictions. Implementation varies among providers. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Hidden`, `To get only hidden items, use the Hidden parameter or the Attributes parameter with the Hidden property. By default, "Get-ChildItem" does not display hidden items. Use the Force parameter to get hidden items.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Gets only the names of the items in the location. The output is a string object that can be sent down the pipeline to other commands. Wildcards are permitted.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies a path to one or more locations. Wildcards are accepted. The default location is the current directory (".").`, `String[]`),
        new Parameter(`ReadOnly`, `To get only read-only items, use the ReadOnly parameter or the Attributes parameter ReadOnly property.`, `SwitchParameter`),
        new Parameter(`Recurse`, `Gets the items in the specified locations and in all child items of the locations.`, `SwitchParameter`),
        new Parameter(`System`, `Gets only system files and directories. To get only system files and folders, use the System parameter or Attributes parameter System property.`, `SwitchParameter`),
    ], `Gets the items and child items in one or more specified locations.`, `Get-ChildItem [[-Filter] <String>] [-Attributes {Archive | Compressed | Device | Directory | Encrypted | Hidden | IntegrityStream | Normal | NoScrubData | NotContentIndexed | Offline | ReadOnly | ReparsePoint | SparseFile | System | Temporary}] [-Depth <UInt32>] [-Directory] [-Exclude <String[]>] [-File] [-FollowSymlink] [-Force] [-Hidden] [-Include <String[]>] -LiteralPath <String[]> [-Name] [-ReadOnly] [-Recurse] [-System] [<CommonParameters>]

Get-ChildItem [[-Path] <String[]>] [[-Filter] <String>] [-Attributes {Archive | Compressed | Device | Directory | Encrypted | Hidden | IntegrityStream | Normal | NoScrubData | NotContentIndexed | Offline | ReadOnly | ReparsePoint | SparseFile | System | Temporary}] [-Depth <UInt32>] [-Directory] [-Exclude <String[]>] [-File] [-FollowSymlink] [-Force] [-Hidden] [-Include <String[]>] [-Name] [-ReadOnly] [-Recurse] [-System] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-CimAssociatedInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-CimClass`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-CimInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-CimSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-CmsMessage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Command`, [
        new Parameter(`All`, `Indicates that this cmdlet gets all commands, including commands of the same type that have the same name. By default, "Get-Command" gets only the commands that run when you type the command name.


For more information about the method that PowerShell uses to select the command to run when multiple commands have the same name, see about_Command_Precedence (About/about_Command_Precedence.md). For information about module-qualified command names and running commands that do not run by default because of a name conflict, see about_Modules (About/about_Modules.md).


This parameter was introduced in Windows PowerShell 3.0.


In Windows PowerShell 2.0, "Get-Command" gets all commands by default.`, `SwitchParameter`),
        new Parameter(`ArgumentList`, `Specifies an array of arguments. This cmdlet gets information about a cmdlet or function when it is used with the specified parameters ("arguments"). The alias for ArgumentList is Args .


To detect dynamic parameters that are available only when certain other parameters are used, set the value of ArgumentList to the parameters that trigger the dynamic parameters.


To detect the dynamic parameters that a provider adds to a cmdlet, set the value of the ArgumentList parameter to a path in the provider drive, such as WSMan:, HKLM:, or Cert:. When the command is a PowerShell provider cmdlet, enter only one path in each command. The provider cmdlets return only the dynamic parameters for the first path the value of ArgumentList . For information about the provider cmdlets, see about_Providers (About/about_Providers.md).`, `Object[]`),
        new Parameter(`CommandType`, `Specifies the types of commands that this cmdlet gets. Enter one or more command types. Use CommandType or its alias, Type . By default, "Get-Command" gets all cmdlets, functions, and aliases.


The acceptable values for this parameter are:


- Alias. Gets the aliases of all PowerShell commands. For more information, see about_Aliases (About/about_Aliases.md). - All. Gets all command types. This parameter value is the equivalent of "Get-Command *".


- Application. Gets non-PowerShell files in paths listed in the Path environment   variable ($env:path), including .txt, .exe, and .dll files. For more information about the Path environment variable, see about_Environment_Variables. - Cmdlet. Gets all cmdlets.


- ExternalScript. Gets all .ps1 files in the paths listed in the Path environment variable   ($env:path). - Filter and Function. Gets all PowerShell advanced and simple functions and filters.


- Script. Gets all script blocks. To get PowerShell scripts (.ps1 files), use the ExternalScript


value.`, `CommandTypes`),
        new Parameter(`FullyQualifiedModule`, `Specifies modules with names that are specified in the form of ModuleSpecification objects, described in the Remarks section of ModuleSpecification Constructor (Hashtable) (/dotnet/api/microsoft.powershell.commands.modulespecification.-ctor?view=powershellsdk-1.1.0#Microsoft_PowerShell_Commands_ModuleSpecification__ctor_System_Collections_Hashtable_). For example, the FullyQualifiedModule parameter accepts a module name that is specified in one of the following formats:


- "@{ModuleName = "modulename"; ModuleVersion = "version_number"}"


- "@{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"}" ModuleName and ModuleVersion are required, but Guid is optional.


You cannot specify the FullyQualifiedModule parameter in the same command as a Module parameter. The two parameters are mutually exclusive.`, `ModuleSpecification[]`),
        new Parameter(`ListImported`, `Indicates that this cmdlet gets only commands in the current session.


Starting in PowerShell 3.0, by default, "Get-Command" gets all installed commands, including, but not limited to, the commands in the current session. In PowerShell 2.0, it gets only commands in the current session.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Module`, `Specifies an array of modules. This cmdlet gets the commands that came from the specified modules. Enter the names of modules or module objects.


This parameter takes string values, but the value of this parameter can also be a PSModuleInfo object, such as the objects that the "Get-Module" and "Import-PSSession" cmdlets return.`, `String[]`),
        new Parameter(`Name`, `Specifies an array of names. This cmdlet gets only commands that have the specified name. Enter a name or name pattern. Wildcard characters are permitted.


To get commands that have the same name, use the All parameter. When two commands have the same name, by default, "Get-Command" gets the command that runs when you type the command name.`, `String[]`),
        new Parameter(`Noun`, `Specifies an array of command nouns. This cmdlet gets commands, which include cmdlets, functions, and aliases, that have names that include the specified noun. Enter one or more nouns or noun patterns. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`ParameterName`, `Specifies an array of parameter names. This cmdlet gets commands in the session that have the specified parameters. Enter parameter names or parameter aliases. Wildcard characters are supported.


The ParameterName and ParameterType parameters search only commands in the current session.


This parameter was introduced in Windows PowerShell 3.0.`, `String[]`),
        new Parameter(`ParameterType`, `Specifies an array of parameter names. This cmdlet gets commands in the session that have parameters of the specified type. Enter the full name or partial name of a parameter type. Wildcard characters are supported.


The ParameterName and ParameterType parameters search only commands in the current session.


This parameter was introduced in Windows PowerShell 3.0.`, `PSTypeName[]`),
        new Parameter(`ShowCommandInfo`, `Indicates that this cmdlet displays command information.


This parameter was introduced in Windows PowerShell 5.0.`, `SwitchParameter`),
        new Parameter(`Syntax`, `Indicates that this cmdlet gets only the following specified data about the command:


- Aliases. Gets the standard name.


- Cmdlets. Gets the syntax.


- Functions and filters. Gets the function definition.


- Scripts and applications or files. Gets the path and filename.`, `SwitchParameter`),
        new Parameter(`TotalCount`, `Specifies the number of commands to get. You can use this parameter to limit the output of a command.`, `Int32`),
        new Parameter(`UseFuzzyMatching`, `Indicates using a fuzzy matching algorithm when finding commands. The order of the output is from closest match to least likely match. Wildcards should not be used with fuzzy matching as it will attempt to match commands that may contain those wildcard characters.`, `SwitchParameter`),
        new Parameter(`Verb`, `Specifies an array of command verbs. This cmdlet gets commands, which include cmdlets, functions, and aliases, that have names that include the specified verb. Enter one or more verbs or verb patterns. Wildcard characters are permitted.`, `String[]`),
    ], `Gets all commands.`, `Get-Command [[-Name] <String[]>] [[-ArgumentList] <Object[]>] [-All] [-CommandType {Alias | Function | Filter | Cmdlet | ExternalScript | Application | Script | Workflow | Configuration | All}] [-FullyQualifiedModule <ModuleSpecification[]>] [-ListImported] [-Module <String[]>] [-ParameterName <String[]>] [-ParameterType <PSTypeName[]>] [-ShowCommandInfo] [-Syntax] [-TotalCount <Int32>] [-UseFuzzyMatching] [<CommonParameters>]

Get-Command [-Noun <String[]>] [-Verb <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ComputerInfo`, [
        new Parameter(`Property`, `Specifies, as a string array, the computer properties in which this cmdlet displays.`, `String[]`),
    ], `Gets a consolidated object of system and operating system properties.`, `Get-ComputerInfo [[-Property] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Content`, [
        new Parameter(`Path`, `Specifies the path to an item where "Get-Content" gets the content. Wildcard characters are permitted. The paths must be paths to items, not to containers. For example, you must specify a path to one or more files, not a path to a directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`ReadCount`, `Specifies how many lines of content are sent through the pipeline at a time. The default value is 1. A value of 0 (zero) sends all of the content at one time.


This parameter does not change the content displayed, but it does affect the time it takes to display the content. As the value of ReadCount increases, the time it takes to return the first line increases, but the total time for the operation decreases. This can make a perceptible difference in large items.`, `Int64`),
        new Parameter(`TotalCount`, `Specifies the number of lines from the beginning of a file or other item. The default is -1 (all lines).


You can use the TotalCount parameter name or its aliases, First or Head .`, `Int64`),
        new Parameter(`Tail`, `Specifies the number of lines from the end of a file or other item. You can use the Tail parameter name or its alias, Last . This parameter was introduced in PowerShell 3.0.`, `Int32`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter.


Enter a path element or pattern, such as "*.txt". Wildcard characters are permitted.


The Exclude parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Force`, `Force will override a read-only attribute or create directories to complete a file path. The Force parameter does not attempt to change file permissions or override security restrictions.`, `SwitchParameter`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Delimiter`, `Specifies the delimiter that "Get-Content" uses to divide the file into objects while it reads. The default is "\\n", the end-of-line character. When reading a text file, "Get-Content" returns a collection of string objects, each of which ends with an end-of-line character. When you enter a delimiter that does not exist in the file, "Get-Content" returns the entire file as a single, undelimited object.


You can use this parameter to split a large file into smaller files by specifying a file separator, as the delimiter. The delimiter is preserved (not discarded) and becomes the last item in each file section. Delimiter is a dynamic parameter that the FileSystem provider adds to the "Get-Content" cmdlet. This parameter works only in file system drives.


> [!NOTE] > Currently, when the value of the Delimiter parameter is an empty string, "Get-Content" does > not return anything. This is a known issue. To force "Get-Content" to return the entire file as > a single, undelimited string. Enter a value that does not exist in the file.`, `String`),
        new Parameter(`Wait`, `Keeps the file open after all existing lines have been output. While waiting, "Get-Content" checks the file once each second and outputs new lines if present. You can interrupt Wait by pressing CTRL+C . Waiting also ends if the file gets deleted, in which case a non-terminating error is reported. Wait is a dynamic parameter that the FileSystem provider adds to the "Get-Content" cmdlet. This parameter works only in file system drives. Wait cannot be combined with Raw .`, `SwitchParameter`),
        new Parameter(`Raw`, `Ignores newline characters and returns the entire contents of a file in one string with the newlines preserved. By default, newline characters in a file are used as delimiters to separate the input into an array of strings. This parameter was introduced in PowerShell 3.0. Raw is a dynamic parameter that the FileSystem provider adds to the "Get-Content" cmdlet This parameter works only in file system drives.`, `SwitchParameter`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Encoding is a dynamic parameter that the FileSystem provider adds to the "Get-Content" cmdlet. This parameter is available only in file system drives.


When reading from and writing to binary files, use the AsByteStream parameter and a value of 0 for the ReadCount parameter. A ReadCount value of 0 reads the entire file in a single read operation. The default ReadCount value, 1, reads one byte in each read operation and converts each byte into a separate object, which causes errors when you use the "Set-Content" cmdlet to write the bytes to a file unless you use AsByteStream parameter.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Stream`, `Gets the contents of the specified alternate NTFS file stream from the file. Enter the stream name. Wildcards are not supported. Stream is a dynamic parameter that the FileSystem provider adds to the "Get-Content" cmdlet. This parameter works only in file system drives on Windows systems. This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`AsByteStream`, `Specifies that the content should be read as a stream of bytes. The AsByteStream parameter was introduced in Windows PowerShell 6.0.


A warning occurs when you use the AsByteStream parameter with the Encoding parameter. The AsByteStream parameter ignores any encoding and the output is returned as a stream of bytes.`, `SwitchParameter`),
    ], `Gets the content of the item at the specified location.`, `Get-Content [-Path] <String[]> [-ReadCount <Int64>] [-TotalCount <Int64>] [-Tail <Int32>] [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-Force] [-Credential <PSCredential>] [-Delimiter <String>] [-Wait] [-Raw] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Stream <String>] [-AsByteStream] [<CommonParameters>]

Get-Content -LiteralPath <String[]> [-ReadCount <Int64>] [-TotalCount <Int64>] [-Tail <Int32>] [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-Force] [-Credential <PSCredential>] [-Delimiter <String>] [-Wait] [-Raw] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Stream <String>] [-AsByteStream] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Counter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Credential`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Culture`, [
        new Parameter(`ListAvailable`, `Retrieves all cultures supported by the current operating system.


This parameter was introduced in PowerShell 6.2.`, `SwitchParameter`),
        new Parameter(`Name`, `Retrieve a specific culture based on the name.


This parameter was introduced in PowerShell 6.2.`, `String[]`),
        new Parameter(`NoUserOverrides`, `Ignore user changes for current culture.


This parameter was introduced in PowerShell 6.2.`, `SwitchParameter`),
    ], `Gets the current culture set in the operating system.`, `Get-Culture [-ListAvailable] [<CommonParameters>]

Get-Culture [-Name <String[]>] [-NoUserOverrides] [<CommonParameters>]

Get-Culture [-NoUserOverrides] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DAPolicyChange`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Date`, [
        new Parameter(`Date`, `Specifies a date and time. Time is optional and if not specified, returns 00:00:00.


Enter the date and time in a format that is standard for the system locale.


For example, in US English:


"Get-Date -Date "6/25/2019 12:30:22"" returns Tuesday, June 25, 2019 12:30:22`, `DateTime`),
        new Parameter(`Day`, `Specifies the day of the month that is displayed. Enter a value from 1 to 31.


If the specified value is greater than the number of days in a month, PowerShell adds the number of days to the month. For example, "Get-Date -Month 2 -Day 31" displays March 3 , not February 31 .`, `Int32`),
        new Parameter(`DisplayHint`, `Determines which elements of the date and time are displayed.


The accepted values are as follows:


- Date : displays only the date - Time : displays only the time - DateTime : displays the date and time`, `DisplayHintType`),
        new Parameter(`Format`, `Displays the date and time in the Microsoft .NET Framework format indicated by the format specifier. The Format parameter outputs a String object.


For a list of available .NET format specifiers, see Custom date and time format strings (/dotnet/standard/base-types/custom-date-and-time-format-strings?view=netframework-4.8).


When the Format parameter is used, "Get-Date" only gets the DateTime object's properties necessary to display the date. As a result, some of the properties and methods of DateTime objects might not be available.


Starting in PowerShell 5.0, you can use the following additional formats as values for the Format parameter.


- FileDate . A file or path-friendly representation of the current date in local time. The format   is "yyyyMMdd" (case-sensitive, using a 4-digit year, 2-digit month, and 2-digit day). For example:   20190627.


- FileDateUniversal . A file or path-friendly representation of the current date in universal   time (UTC). The format is "yyyyMMddZ" (case-sensitive, using a 4-digit year, 2-digit month,   2-digit day, and the letter "Z" as the UTC indicator). For example: 20190627Z.


- FileDateTime . A file or path-friendly representation of the current date and time in local   time, in 24-hour format. The format is "yyyyMMddTHHmmssffff" (case-sensitive, using a 4-digit   year, 2-digit month, 2-digit day, the letter "T" as a time separator, 2-digit hour, 2-digit   minute, 2-digit second, and 4-digit millisecond). For example: 20190627T0840107271.


- FileDateTimeUniversal . A file or path-friendly representation of the current date and time in   universal time (UTC), in 24-hour format. The format is "yyyyMMddTHHmmssffffZ" (case-sensitive,   using a 4-digit year, 2-digit month, 2-digit day, the letter "T" as a time separator, 2-digit   hour, 2-digit minute, 2-digit second, 4-digit millisecond, and the letter "Z" as the UTC   indicator). For example: 20190627T1540500718Z.`, `String`),
        new Parameter(`Hour`, `Specifies the hour that is displayed. Enter a value from 0 to 23.`, `Int32`),
        new Parameter(`Millisecond`, `Specifies the milliseconds in the date. Enter a value from 0 to 999.


This parameter was introduced in PowerShell 3.0.`, `Int32`),
        new Parameter(`Minute`, `Specifies the minute that is displayed. Enter a value from 0 to 59.`, `Int32`),
        new Parameter(`Month`, `Specifies the month that is displayed. Enter a value from 1 to 12.`, `Int32`),
        new Parameter(`Second`, `Specifies the second that is displayed. Enter a value from 0 to 59.`, `Int32`),
        new Parameter(`UFormat`, `Displays the date and time in UNIX format. The UFormat parameter outputs a string object. UFormat specifiers are preceded by a percent sign ("%"), for example, "%m", "%d", and "%Y". The Notes (#notes)section contains a table of valid UFormat specifiers .


When the UFormat parameter is used, "Get-Date" only gets the DateTime object's properties necessary to display the date. As a result, some of the properties and methods of DateTime objects might not be available.`, `String`),
        new Parameter(`Year`, `Specifies the year that is displayed. Enter a value from 1 to 9999.`, `Int32`),
    ], `Gets the current date and time.`, `Get-Date [[-Date] <DateTime>] [-Day <Int32>] [-DisplayHint {Date | Time | DateTime}] [-Format <String>] [-Hour <Int32>] [-Millisecond <Int32>] [-Minute <Int32>] [-Month <Int32>] [-Second <Int32>] [-Year <Int32>] [<CommonParameters>]

Get-Date [[-Date] <DateTime>] [-Day <Int32>] [-DisplayHint {Date | Time | DateTime}] [-Hour <Int32>] [-Millisecond <Int32>] [-Minute <Int32>] [-Month <Int32>] [-Second <Int32>] [-UFormat <String>] [-Year <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DeliveryOptimizationLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DeliveryOptimizationPerfSnap`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DeliveryOptimizationPerfSnapThisMonth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DeliveryOptimizationStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DOConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DODownloadMode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DOPercentageMaxBackgroundBandwidth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-DOPercentageMaxForegroundBandwidth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Event`, [
        new Parameter(`EventIdentifier`, `Specifies the event identifiers for which this cmdlet gets events.`, `Int32`),
        new Parameter(`SourceIdentifier`, `Specifies source identifiers for which this cmdlet gets events. The default is all events in the event queue. Wildcards are not permitted.`, `String`),
    ], `Gets the events in the event queue.`, `Get-Event [-EventIdentifier] <Int32> [<CommonParameters>]

Get-Event [[-SourceIdentifier] <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-EventSubscriber`, [
        new Parameter(`Force`, `Indicates that this cmdlet gets all event subscribers, including subscribers for events that are hidden by using the SupportEvent parameter of Register-ObjectEvent, Register-WmiEvent, and Register-EngineEvent.`, `SwitchParameter`),
        new Parameter(`SourceIdentifier`, `Specifies the SourceIdentifier property value that gets only the event subscribers. By default, Get-EventSubscriber gets all event subscribers in the session. Wildcards are not permitted. This parameter is case-sensitive.`, `String`),
        new Parameter(`SubscriptionId`, `Specifies the subscription identifier that this cmdlet gets. By default, Get-EventSubscriber gets all event subscribers in the session.`, `Int32`),
    ], `Gets the event subscribers in the current session.`, `Get-EventSubscriber [[-SourceIdentifier] <String>] [[-Force]] [<CommonParameters>]

Get-EventSubscriber [-SubscriptionId] <Int32> [[-Force]] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ExecutionPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ExperimentalFeature`, [
        new Parameter(`Name`, `Name or names of specific experimental features to return.`, `String[]`),
    ], `Gets experimental features.`, `Get-ExperimentalFeature [[-Name] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-FileHash`, [
        new Parameter(`Algorithm`, `Specifies the cryptographic hash function to use for computing the hash value of the contents of the specified file. A cryptographic hash function includes the property that it is not possible to find two distinct inputs that generate the same hash values. Hash functions are commonly used with digital signatures and for data integrity. The acceptable values for this parameter are:


- SHA1


- SHA256


- SHA384


- SHA512


- MD5




If no value is specified, or if the parameter is omitted, the default value is SHA256.

For security reasons, MD5 and SHA1, which are no longer considered secure, should only be used for simple change validation, and should not be used to generate hash values for files that require protection from attack or tampering.`, `String`),
        new Parameter(`InputStream`, `Specifies the input stream.`, `Stream`),
        new Parameter(`LiteralPath`, `Specifies the path to a file. Unlike the Path parameter, the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose the path in single quotation marks. Single quotation marks instruct PowerShell not to interpret characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the path to one or more files as an array. Wildcard characters are permitted.`, `String[]`),
    ], `Computes the hash value for a file by using a specified hash algorithm.`, `Get-FileHash [-InputStream] <Stream> [[-Algorithm] {SHA1 | SHA256 | SHA384 | SHA512 | MD5}] [<CommonParameters>]

Get-FileHash [-LiteralPath] <String[]> [[-Algorithm] {SHA1 | SHA256 | SHA384 | SHA512 | MD5}] [<CommonParameters>]

Get-FileHash [-Path] <String[]> [[-Algorithm] {SHA1 | SHA256 | SHA384 | SHA512 | MD5}] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-FormatData`, [
        new Parameter(`PowerShellVersion`, `Specify the version of PowerShell this cmdlet gets for the formatting data. Enter a two digit number separated by a period.`, `Version`),
        new Parameter(`TypeName`, `Specifies the type names that this cmdlet gets for the formatting data. Enter the type names. Wildcards are permitted.`, `String[]`),
    ], `Gets the formatting data in the current session.`, `Get-FormatData [[-TypeName] <String[]>] [-PowerShellVersion <Version>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Help`, [
        new Parameter(`Category`, `Displays help only for items in the specified category and their aliases. Conceptual articles are in the HelpFile category.


The acceptable values for this parameter are as follows:


- Alias


- Cmdlet


- Provider


- General


- FAQ


- Glossary


- HelpFile


- ScriptCommand


- Function


- Filter


- ExternalScript


- All


- DefaultHelp


- Workflow


- DscResource


- Class


- Configuration`, `String[]`),
        new Parameter(`Component`, `Displays commands with the specified component value, such as Exchange . Enter a component name. Wildcard characters are permitted. This parameter has no effect on displays of conceptual ( About_ ) help.`, `String[]`),
        new Parameter(`Detailed`, `Adds parameter descriptions and examples to the basic help display. This parameter is effective only when the help files are installed on the computer. It has no effect on displays of conceptual ( About_ ) help.`, `SwitchParameter`),
        new Parameter(`Examples`, `Displays only the name, synopsis, and examples. To display only the examples, type "(Get-Help <cmdlet-name>).Examples".


This parameter is effective only when the help files are installed on the computer. It has no effect on displays of conceptual ( About_ ) help.`, `SwitchParameter`),
        new Parameter(`Full`, `Displays the entire help article for a cmdlet. Full includes parameter descriptions and attributes, examples, input and output object types, and additional notes.


This parameter is effective only when the help files are installed on the computer. It has no effect on displays of conceptual ( About_ ) help.`, `SwitchParameter`),
        new Parameter(`Functionality`, `Displays help for items with the specified functionality. Enter the functionality. Wildcard characters are permitted. This parameter has no effect on displays of conceptual ( About_ ) help.`, `String[]`),
        new Parameter(`Name`, `Gets help about the specified command or concept. Enter the name of a cmdlet, function, provider, script, or workflow, such as "Get-Member", a conceptual article name, such as "about_Objects", or an alias, such as "ls". Wildcard characters are permitted in cmdlet and provider names, but you can't use wildcard characters to find the names of function help and script help articles.


To get help for a script that isn't located in a path that's listed in the "$env:Path" environment variable, type the script's path and file name.


If you enter the exact name of a help article, "Get-Help" displays the article contents.


If you enter a word or word pattern that appears in several help article titles, "Get-Help" displays a list of the matching titles.


If you enter a word that doesn't match any help article titles, "Get-Help" displays a list of articles that include that word in their contents.


The names of conceptual articles, such as "about_Objects", must be entered in English, even in non-English versions of PowerShell.`, `String`),
        new Parameter(`Online`, `Displays the online version of a help article in the default browser. This parameter is valid only for cmdlet, function, workflow, and script help articles. You can't use the Online parameter with "Get-Help" in a remote session.


For information about supporting this feature in help articles that you write, see about_Comment_Based_Help (./About/about_Comment_Based_Help.md), and Supporting Online Help (/powershell/scripting/developer/module/supporting-online-help), and Writing Help for PowerShell Cmdlets (/powershell/scripting/developer/help/writing-help-for-windows-powershell-cmdlets).`, `SwitchParameter`),
        new Parameter(`Parameter`, `Displays only the detailed descriptions of the specified parameters. Wildcards are permitted. This parameter has no effect on displays of conceptual ( About_ ) help.`, `String`),
        new Parameter(`Path`, `Gets help that explains how the cmdlet works in the specified provider path. Enter a PowerShell provider path.


This parameter gets a customized version of a cmdlet help article that explains how the cmdlet works in the specified PowerShell provider path. This parameter is effective only for help about a provider cmdlet and only when the provider includes a custom version of the provider cmdlet help article in its help file. To use this parameter, install the help file for the module that includes the provider.


To see the custom cmdlet help for a provider path, go to the provider path location and enter a "Get-Help" command or, from any path location, use the Path parameter of "Get-Help" to specify the provider path. You can also find custom cmdlet help online in the provider help section of the help articles.


For more information about PowerShell providers, see about_Providers (./About/about_Providers.md).`, `String`),
        new Parameter(`Role`, `Displays help customized for the specified user role. Enter a role. Wildcard characters are permitted.


Enter the role that the user plays in an organization. Some cmdlets display different text in their help files based on the value of this parameter. This parameter has no effect on help for the core cmdlets.`, `String[]`),
    ], `Displays information about PowerShell commands and concepts.`, `Get-Help [[-Name] <String>] [-Category {Alias | Cmdlet | Provider | General | FAQ | Glossary | HelpFile | ScriptCommand | Function | Filter | ExternalScript | All | DefaultHelp | Workflow | DscResource | Class | Configuration}] [-Component <String[]>] -Detailed [-Functionality <String[]>] [-Path <String>] [-Role <String[]>] [<CommonParameters>]

Get-Help [[-Name] <String>] [-Category {Alias | Cmdlet | Provider | General | FAQ | Glossary | HelpFile | ScriptCommand | Function | Filter | ExternalScript | All | DefaultHelp | Workflow | DscResource | Class | Configuration}] [-Component <String[]>] -Examples [-Functionality <String[]>] [-Path <String>] [-Role <String[]>] [<CommonParameters>]

Get-Help [[-Name] <String>] [-Category {Alias | Cmdlet | Provider | General | FAQ | Glossary | HelpFile | ScriptCommand | Function | Filter | ExternalScript | All | DefaultHelp | Workflow | DscResource | Class | Configuration}] [-Component <String[]>] [-Full] [-Functionality <String[]>] [-Path <String>] [-Role <String[]>] [<CommonParameters>]

Get-Help [[-Name] <String>] [-Category {Alias | Cmdlet | Provider | General | FAQ | Glossary | HelpFile | ScriptCommand | Function | Filter | ExternalScript | All | DefaultHelp | Workflow | DscResource | Class | Configuration}] [-Component <String[]>] [-Functionality <String[]>] -Online [-Path <String>] [-Role <String[]>] [<CommonParameters>]

Get-Help [[-Name] <String>] [-Category {Alias | Cmdlet | Provider | General | FAQ | Glossary | HelpFile | ScriptCommand | Function | Filter | ExternalScript | All | DefaultHelp | Workflow | DscResource | Class | Configuration}] [-Component <String[]>] [-Functionality <String[]>] -Parameter <String> [-Path <String>] [-Role <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-History`, [
        new Parameter(`Count`, `Specifies the number of the most recent history entries that this cmdlet gets. By, default, Get-History gets all entries in the session history. If you use both the Count and Id parameters in a command, the display ends with the command that is specified by the Id parameter.


In Windows PowerShell 2.0, by default, Get-History gets the 32 most recent entries.`, `Int32`),
        new Parameter(`Id`, `Specifies an array of the IDs of entries in the session history. Get-History gets only specified entries. If you use both the Id and Count parameters in a command, Get-History gets the most recent entries ending with the entry specified by the Id parameter.`, `Int64[]`),
    ], `Gets a list of the commands entered during the current session.`, `Get-History [[-Id] <Int64[]>] [[-Count] <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Host`, [], `Gets an object that represents the current host program.`, `Get-Host [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Item`, [
        new Parameter(`Stream`, `Gets the specified alternate NTFS file stream from the file. Enter the stream name. Wildcards are supported. To get all streams, use an asterisk ("*"). This parameter is not valid on folders. Stream is a dynamic parameter that the FileSystem provider adds to the "Get-Item" cmdlet. This parameter works only in file system drives.`, `String[]`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Indicates that this cmdlet gets items that cannot otherwise be accessed, such as hidden items. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md). Even using the Force parameter, the cmdlet cannot override security restrictions.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Path`, `Specifies the path to an item. This cmdlet gets the item at the specified location. Wildcard characters are permitted. This parameter is required, but the parameter name Path is optional.


Use a dot (".") to specify the current location. Use the wildcard character ("*") to specify all the items in the current location.`, `String[]`),
    ], `Gets the item at the specified location.`, `Get-Item [-Stream <String[]>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [<CommonParameters>]

Get-Item [-Path] <String[]> [-Stream <String[]>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the property or properties to retrieve. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Path`, `Specifies the path to the item or items. Wildcard characters are permitted.`, `String[]`),
    ], `Gets the properties of a specified item.`, `Get-ItemProperty [[-Name] <String[]>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] -LiteralPath <String[]> [<CommonParameters>]

Get-ItemProperty [-Path] <String[]> [[-Name] <String[]>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ItemPropertyValue`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the property or properties to retrieve. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Path`, `Specifies the path to the item or items. Wildcard characters are permitted.`, `String[]`),
    ], `Gets the value for one or more properties of a specified item.`, `Get-ItemPropertyValue [-Name] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] -LiteralPath <String[]> [<CommonParameters>]

Get-ItemPropertyValue [[-Path] <String[]>] [-Name] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Job`, [
        new Parameter(`After`, `Gets completed jobs that ended after the specified date and time. Enter a DateTime object, such as one returned by the Get-Date cmdlet or a string that can be converted to a DateTime object, such as "Dec 1, 2012 2:00 AM" or "11/06".


This parameter works only on custom job types, such as workflow jobs and scheduled jobs, that have an EndTime property. It does not work on standard background jobs, such as those created by using the Start-Job cmdlet. For information about support for this parameter, see the help topic for the job type.


This parameter was introduced in Windows PowerShell 3.0.`, `DateTime`),
        new Parameter(`Before`, `Gets completed jobs that ended before the specified date and time. Enter a DateTime object.


This parameter works only on custom job types, such as workflow jobs and scheduled jobs, that have an EndTime property. It does not work on standard background jobs, such as those created by using the Start-Job cmdlet. For information about support for this parameter, see the help topic for the job type.


This parameter was introduced in Windows PowerShell 3.0.`, `DateTime`),
        new Parameter(`ChildJobState`, `Gets only the child jobs that have the specified state. The acceptable values for this parameter are:


- NotStarted


-  Running


-  Completed


- Failed


- Stopped


- Blocked


- Suspended


- Disconnected


- Suspending


- Stopping




By default, Get-Job does not get child jobs. By using the IncludeChildJob parameter, Get-Job gets all child jobs. If you use the ChildJobState parameter, the IncludeChildJob parameter has no effect.

This parameter was introduced in Windows PowerShell 3.0.`, `JobState`),
        new Parameter(`Command`, `Specifies an array of commands as strings. This cmdlet gets the jobs that include the specified commands. The default is all jobs. You can use wildcard characters to specify a command pattern.`, `String[]`),
        new Parameter(`Filter`, `Specifies a hash table of conditions. This cmdlet gets jobs that satisfy all of the conditions. Enter a hash table where the keys are job properties and the values are job property values.


This parameter works only on custom job types, such as workflow jobs and scheduled jobs. It does not work on standard background jobs, such as those created by using the Start-Job cmdlet. For information about support for this parameter, see the help topic for the job type.


This parameter was introduced in Windows PowerShell 3.0.`, `Hashtable`),
        new Parameter(`HasMoreData`, `Indicates whether this cmdlet gets only jobs that have the specified HasMoreData property value. The HasMoreData property indicates whether all job results have been received in the current session. To get jobs that have more results, specify a value of $True. To get jobs that do not have more results, specify a value of $False.


To get the results of a job, use the Receive-Job cmdlet.


When you use the Receive-Job cmdlet, it deletes from its in-memory, session-specific storage the results that it returned. When it has returned all results of the job in the current session, it sets the value of the HasMoreData property of the job to $False) to indicate that it has no more results for the job in the current session. Use the Keep parameter of Receive-Job to prevent Receive-Job from deleting results and changing the value of the HasMoreData property. For more information, type "Get-Help Receive-Job".


The HasMoreData property is specific to the current session. If results for a custom job type are saved outside of the session, such as the scheduled job type, which saves job results on disk, you can use the Receive-Job cmdlet in a different session to get the job results again, even if the value of HasMoreData is $False. For more information, see the help topics for the custom job type.


This parameter was introduced in Windows PowerShell 3.0.`, `Boolean`),
        new Parameter(`Id`, `Specifies an array of IDs of jobs that this cmdlet gets.


The ID is an integer that uniquely identifies the job in the current session. It is easier to remember and to type than the instance ID, but it is unique only in the current session. You can type one or more IDs separated by commas. To find the ID of a job, type "Get-Job" without parameters.`, `Int32[]`),
        new Parameter(`IncludeChildJob`, `Indicates that this cmdlet returns child jobs, in addition to parent jobs.


This parameter is especially useful for investigating workflow jobs, for which Get-Job returns a container parent job, and job failures, because the reason for the failure is saved in a property of the child job.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`InstanceId`, `Specifies an array of instance IDs of jobs that this cmdlet gets. The default is all jobs.


An instance ID is a GUID that uniquely identifies the job on the computer. To find the instance ID of a job, use Get-Job .`, `Guid[]`),
        new Parameter(`Name`, `Specifies an array of instance friendly names of jobs that this cmdlet gets. Enter a job name, or use wildcard characters to enter a job name pattern. By default, Get-Job gets all jobs in the current session.`, `String[]`),
        new Parameter(`Newest`, `Specifies a number of jobs to get. This cmdlet gets the jobs that ended most recently.


The Newest parameter does not sort or return the newest jobs in end-time order. To sort the output, use the Sort-Object cmdlet.


This parameter was introduced in Windows PowerShell 3.0.`, `Int32`),
        new Parameter(`State`, `Specifies a job state. This cmdlet gets only jobs in the specified state. The acceptable values for this parameter are:


- NotStarted


- Running


- Completed


- Failed


- Stopped


- Blocked


- Suspended


- Disconnected


- Suspending


- Stopping




By default, Get-Job gets all the jobs in the current session.

For more information about job states, see JobState Enumeration (https://msdn.microsoft.com/library/system.management.automation.jobstate)in the MSDN library.`, `JobState`),
    ], `Gets PowerShell background jobs that are running in the current session.`, `Get-Job [[-Id] <Int32[]>] [-After <DateTime>] [-Before <DateTime>] [-ChildJobState {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint}] [-HasMoreData <Boolean>] [-IncludeChildJob] [-Newest <Int32>] [<CommonParameters>]

Get-Job [-InstanceId] <Guid[]> [-After <DateTime>] [-Before <DateTime>] [-ChildJobState {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint}] [-HasMoreData <Boolean>] [-IncludeChildJob] [-Newest <Int32>] [<CommonParameters>]

Get-Job [-Name] <String[]> [-After <DateTime>] [-Before <DateTime>] [-ChildJobState {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint}] [-HasMoreData <Boolean>] [-IncludeChildJob] [-Newest <Int32>] [<CommonParameters>]

Get-Job [-State] {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint} [-After <DateTime>] [-Before <DateTime>] [-ChildJobState {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint}] [-HasMoreData <Boolean>] [-IncludeChildJob] [-Newest <Int32>] [<CommonParameters>]

Get-Job [-After <DateTime>] [-Before <DateTime>] [-ChildJobState {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint}] [-Command <String[]>] [-HasMoreData <Boolean>] [-IncludeChildJob] [-Newest <Int32>] [<CommonParameters>]

Get-Job [-Filter] <Hashtable> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-LocalGroup`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-LocalGroupMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Location`, [
        new Parameter(`PSDrive`, `Specifies the current location in the specified PowerShell drive that this cmdlet gets in the operation.


For instance, if you are in the Certificate: drive, you can use this parameter to find your current location in the C: drive.`, `String[]`),
        new Parameter(`PSProvider`, `Specifies the current location in the drive supported by the PowerShell provider that this cmdlet gets in the operation.


If the specified provider supports more than one drive, this cmdlet returns the location on the most recently accessed drive.


For example, if you are in the C: drive, you can use this parameter to find your current location in the drives of the PowerShellRegistry provider.`, `String[]`),
        new Parameter(`Stack`, `Indicates that this cmdlet displays the locations in the current location stack.


To display the locations in a different location stack, use the StackName parameter. For information about location stacks, see the Notes.`, `SwitchParameter`),
        new Parameter(`StackName`, `Specifies, as a string array, the named location stacks. Enter one or more location stack names.


To display the locations in the current location stack, use the Stack parameter. To make a location stack the current location stack, use the Set-Location parameter. For information about location stacks, see the Notes.


This cmdlet cannot display the locations in the unnamed default stack unless it is the current stack.`, `String[]`),
    ], `Gets information about the current working location or a location stack.`, `Get-Location [-PSDrive <String[]>] [-PSProvider <String[]>] [<CommonParameters>]

Get-Location [-Stack] [-StackName <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-MarkdownOption`, [], `Get-MarkdownOption [<CommonParameters>]`, `syntaxItem
----------
{@{name=Get-MarkdownOption; CommonParameters=True; parameter=System.Object[]}}`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Member`, [
        new Parameter(`Force`, `Adds the intrinsic members (PSBase, PSAdapted, PSObject, PSTypeNames) and the compiler-generated get_ and set_ methods to the display. By default, Get-Member gets these properties in all views other than Base and Adapted, but it does not display them.


The following list describes the properties that are added when you use the Force parameter:


- PSBase:  The original properties of the .NET Framework object without extension or adaptation. These are the properties defined for the object class and listed in MSDN.


- PSAdapted. The properties and methods defined in the PowerShell extended type system.


- PSExtended. The properties and methods that were added in the Types.ps1xml files or by using the Add-Member cmdlet.


- PSObject. The adapter that converts the base object to a PowerShell PSObject object. - PSTypeNames. A list of object types that describe the object, in order of specificity. When formatting the object, PowerShell searches for the types in the Format.ps1xml files in the PowerShell installation directory ($pshome). It uses the formatting definition for the first type that it finds.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the object whose members are retrieved.


Using the InputObject parameter is not the same as piping an object to Get-Member . The differences are as follows:


- When you pipe a collection of objects to Get-Member , Get-Member gets the members of the individual objects in the collection, such as the properties of each string in an array of strings. - When you use InputObject to submit a collection of objects, Get-Member gets the members of the collection, such as the properties of the array in an array of strings.`, `PSObject`),
        new Parameter(`MemberType`, `Specifies the member type that this cmdlet gets. The default is All.


The acceptable values for this parameter are:


- AliasProperty


- CodeProperty


- Property


- NoteProperty


- ScriptProperty


- Properties


- PropertySet


- Method


- CodeMethod


- ScriptMethod


- Methods


- ParameterizedProperty


- MemberSet


- Event


- Dynamic


- All




For information about these values, see PSMemberTypes Enumeration (https://msdn.microsoft.com/library/system.management.automation.psmembertypes)in the MSDN library.


Not all objects have every type of member. If you specify a member type that the object does not have, PowerShell returns a null value.

To get related types of members, such as all extended members, use the View parameter. If you use the MemberType parameter with the Static or View parameters, Get-Member gets the members that belong to both sets.`, `PSMemberTypes`),
        new Parameter(`Name`, `Specifies the names of one or more properties or methods of the object. Get-Member gets only the specified properties and methods.


If you use the Name parameter with the MemberType , View , or Static parameter, Get-Member gets only the members that satisfy the criteria of all parameters.


To get a static member by name, use the Static parameter with the Name parameter.`, `String[]`),
        new Parameter(`Static`, `Indicates that this cmdlet gets only the static properties and methods of the object.


Static properties and methods are defined on the class of objects, not on any particular instance of the class.


If you use the Static parameter with the View parameter, the View parameter is ignored. If you use the Static parameter with the MemberType parameter, Get-Member gets only the members that belong to both sets.`, `SwitchParameter`),
        new Parameter(`View`, `Specifies that this cmdlet gets only particular types properties and methods. Specify one or more of the values. The default is Adapted, Extended.


The acceptable values for this parameter are:


- Base.  Gets only the original properties and methods of the .NET Framework object (without extension or adaptation).


- Adapted.  Gets only the properties and methods defined in the PowerShell extended type system.


- Extended. Gets only the properties and methods that were added in the Types.ps1xml files or by using the Add-Member cmdlet.


- All. Gets the members in the Base, Adapted, and Extended views.




The View parameter determines the members retrieved, not just the display of those members.

To get particular member types, such as script properties, use the MemberType parameter. If you use the MemberType and View parameters in the same command, Get-Member gets the members that belong to both sets. If you use the Static and View parameters in the same command, the View parameter is ignored.`, `PSMemberViewTypes`),
    ], `Gets the properties and methods of objects.`, `Get-Member [[-Name] <String[]>] [-Force] [-InputObject <PSObject>] [-MemberType {AliasProperty | CodeProperty | Property | NoteProperty | ScriptProperty | Properties | PropertySet | Method | CodeMethod | ScriptMethod | Methods | ParameterizedProperty | MemberSet | Event | Dynamic | All}] [-Static] [-View {Extended | Adapted | Base | All}] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Module`, [
        new Parameter(`All`, `Indicates that this cmdlet gets all modules in each module folder, including nested modules, manifest (.psd1) files, script module (.psm1) files, and binary module (.dll) files. Without this parameter, "Get-Module" gets only the default module in each module folder.`, `SwitchParameter`),
        new Parameter(`CimNamespace`, `Specifies the namespace of an alternate CIM provider that exposes CIM modules. The default value is the namespace of the Module Discovery WMI provider.


Use this parameter to get CIM modules from computers and devices that are not running the Windows operating system.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`CimResourceUri`, `Specifies an alternate location for CIM modules. The default value is the resource URI of the Module Discovery WMI provider on the remote computer.


Use this parameter to get CIM modules from computers and devices that are not running the Windows operating system.


This parameter was introduced in Windows PowerShell 3.0.`, `Uri`),
        new Parameter(`CimSession`, `Specifies a CIM session on the remote computer. Enter a variable that contains the CIM session or a command that gets the CIM session, such as a Get-CimSession (https://docs.microsoft.com/powershell/module/cimcmdlets/get-cimsession)command.


"Get-Module" uses the CIM session connection to get modules from the remote computer. When you import the module by using the "Import-Module" cmdlet and use the commands from the imported module in the current session, the commands actually run on the remote computer.


You can use this parameter to get modules from computers and devices that are not running the Windows operating system, and computers that have PowerShell, but do not have PowerShell remoting enabled.


The CimSession parameter gets all modules in the CIMSession . However, you can import only CIM-based and Cmdlet Definition XML (CDXML)-based modules.`, `CimSession`),
        new Parameter(`FullyQualifiedName`, `Specifies names of modules in the form of ModuleSpecification objects. These objects are described in the Remarks section of ModuleSpecification Constructor (Hashtable) (https://msdn.microsoft.com/library/jj136290)in the MSDN library. For example, the FullyQualifiedName parameter accepts a module name that is specified in the following formats:


- @{ModuleName = "modulename"; ModuleVersion = "version_number"}


- @{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"} ModuleName and ModuleVersion are required, but Guid is optional.


You cannot specify the FullyQualifiedName parameter in the same command as a Name parameter.`, `ModuleSpecification[]`),
        new Parameter(`ListAvailable`, `Indicates that this cmdlet gets all installed modules. "Get-Module" gets modules in paths listed in the PSModulePath environment variable. Without this parameter, "Get-Module" gets only the modules that are both listed in the PSModulePath environment variable, and that are loaded in the current session. ListAvailable does not return information about modules that are not found in the PSModulePath environment variable, even if those modules are loaded in the current session.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies names or name patterns of modules that this cmdlet gets. Wildcard characters are permitted. You can also pipe the names to "Get-Module". You cannot specify the FullyQualifiedName parameter in the same command as a Name parameter. Name cannot accept a module GUID as a value. To return modules by specifying a GUID, use FullyQualifiedName instead.`, `String[]`),
        new Parameter(`PSSession`, `Gets the modules in the specified user-managed PowerShell session ( PSSession ). Enter a variable that contains the session, a command that gets the session, such as a "Get-PSSession" command, or a command that creates the session, such as a "New-PSSession" command.


When the session is connected to a remote computer, you must specify the ListAvailable parameter.


A "Get-Module" command that uses the PSSession parameter is equivalent to using the "Invoke-Command" cmdlet to run a "Get-Module -ListAvailable" command in a PSSession .


This parameter was introduced in Windows PowerShell 3.0.`, `PSSession`),
        new Parameter(`Refresh`, `Indicates that this cmdlet refreshes the cache of installed commands. The command cache is created when the session starts. It enables the "Get-Command" cmdlet to get commands from modules that are not imported into the session.


This parameter is designed for development and testing scenarios in which the contents of modules have changed since the session started.


When you specify the Refresh parameter in a command, you must specify ListAvailable .


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`PSEdition`, `Gets the modules that support specified edition of PowerShell.


The acceptable values for this parameter are:


- Desktop


- Core




The Get-Module cmdlet checks CompatiblePSEditions property of PSModuleInfo object for the specified value and returns only those modules that have it set.

> [!NOTE] > - Desktop Edition: Built on .NET Framework, applies to Windows PowerShell 5.1 and below on > most Windows editions. > - Core Edition: Built on .NET Core, applies to PowerShell Core 6.0 and above, as well as some > editions of Windows PowerShell 5.1 built for Windows IoT and Windows Nanoserver. > > The edition of the current PowerShell session can be found with the "$PSEdition" variable.`, `String`),
        new Parameter(`SkipEditionCheck`, `Skips the check of the "CompatiblePSEditions" field.


By default, Get-Module will omit modules in the "%windir%\\System32\\WindowsPowerShell\\v1.0\\Modules" directory that do not specify "Core" in the "CompatiblePSEditions" field. When this switch is set, modules without "Core" will be included, so that modules under the Windows PowerShell module path that are incompatible with PowerShell Core will be returned.


On macOS and Linux, this parameter does nothing.


See about_PowerShell_Editions (About/about_PowerShell_Editions.md)for more information.`, `SwitchParameter`),
    ], `Gets the modules that have been imported or that can be imported into the current session.`, `Get-Module [[-Name] <String[]>] [-All] [-FullyQualifiedName <ModuleSpecification[]>] [<CommonParameters>]

Get-Module [[-Name] <String[]>] [-All] [-FullyQualifiedName <ModuleSpecification[]>] [-ListAvailable] [-Refresh] [-PSEdition <String>] [-SkipEditionCheck] [<CommonParameters>]

Get-Module [[-Name] <String[]>] [-CimNamespace <String>] [-CimResourceUri <Uri>] -CimSession <CimSession> [-FullyQualifiedName <ModuleSpecification[]>] [-ListAvailable] [-Refresh] [-SkipEditionCheck] [<CommonParameters>]

Get-Module [[-Name] <String[]>] [-FullyQualifiedName <ModuleSpecification[]>] [-ListAvailable] -PSSession <PSSession> [-Refresh] [-PSEdition <String>] [-SkipEditionCheck] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-NonRemovableAppsPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Package`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PackageProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PackageSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PfxCertificate`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Process`, [
        new Parameter(`FileVersionInfo`, `Indicates that this cmdlet gets the file version information for the program that runs in the process.


On Windows Vista and later versions of Windows, you must open PowerShell with the Run as administrator option to use this parameter on processes that you do not own.


To get file version information for a process on a remote computer, use the "Invoke-Command" cmdlet.


Using this parameter is equivalent to getting the MainModule.FileVersionInfo property of each process object. When you use this parameter, "Get-Process" returns a FileVersionInfo object System.Diagnostics.FileVersionInfo , not a process object. So, you cannot pipe the output of the command to a cmdlet that expects a process object, such as "Stop-Process".`, `SwitchParameter`),
        new Parameter(`Id`, `Specifies one or more processes by process ID (PID). To specify multiple IDs, use commas to separate the IDs. To find the PID of a process, type "Get-Process".`, `Int32[]`),
        new Parameter(`IncludeUserName`, `Indicates that the UserName value of the Process object is returned with results of the command.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies one or more process objects. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `Process[]`),
        new Parameter(`Module`, `Indicates that this cmdlet gets the modules that have been loaded by the processes.


On Windows Vista and later versions of Windows, you must open PowerShell with the Run as administrator option to use this parameter on processes that you do not own.


To get the modules that have been loaded by a process on a remote computer, use the "Invoke-Command" cmdlet.


This parameter is equivalent to getting the Modules property of each process object. When you use this parameter, this cmdlet returns a ProcessModule object System.Diagnostics.ProcessModule , not a process object. So, you cannot pipe the output of the command to a cmdlet that expects a process object, such as "Stop-Process".


When you use both the Module and FileVersionInfo parameters in the same command, this cmdlet returns a FileVersionInfo object with information about the file version of all modules.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies one or more processes by process name. You can type multiple process names (separated by commas) and use wildcard characters. The parameter name ("Name") is optional.`, `String[]`),
    ], `Gets the processes that are running on the local computer.`, `Get-Process [[-Name] <String[]>] [-FileVersionInfo] [-Module] [<CommonParameters>]

Get-Process [-FileVersionInfo] -Id <Int32[]> [-Module] [<CommonParameters>]

Get-Process [-FileVersionInfo] -InputObject <Process[]> [-Module] [<CommonParameters>]

Get-Process -Id <Int32[]> -IncludeUserName [<CommonParameters>]

Get-Process [[-Name] <String[]>] -IncludeUserName [<CommonParameters>]

Get-Process -IncludeUserName -InputObject <Process[]> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-ProcessMitigation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSBreakpoint`, [
        new Parameter(`Command`, `Specifies an array of command breakpoints that are set on the specified command names. Enter the command names, such as the name of a cmdlet or function.`, `String[]`),
        new Parameter(`Id`, `Specifies the breakpoint IDs that this cmdlet gets. Enter the IDs in a comma-separated list. You can also pipe breakpoint IDs to Get-PSBreakpoint .`, `Int32[]`),
        new Parameter(`Script`, `Specifies an array of scripts that contain the breakpoints. Enter the path (optional) and names of one or more script files. If you omit the path, the default location is the current directory.`, `String[]`),
        new Parameter(`Type`, `Specifies an array of breakpoint types that this cmdlet gets. Enter one or more types. The acceptable values for this parameter are:


- Line


- Command


- Variable




You can also pipe breakpoint types to Get-PSBreakPoint .`, `BreakpointType[]`),
        new Parameter(`Variable`, `Specifies an array of variable breakpoints that are set on the specified variable names. Enter the variable names without dollar signs.`, `String[]`),
    ], `Gets the breakpoints that are set in the current session.`, `Get-PSBreakpoint -Command <String[]> [-Script <String[]>] [<CommonParameters>]

Get-PSBreakpoint [-Id] <Int32[]> [<CommonParameters>]

Get-PSBreakpoint [-Script <String[]>] [<CommonParameters>]

Get-PSBreakpoint [-Script <String[]>] -Variable <String[]> [<CommonParameters>]

Get-PSBreakpoint [-Type] {Line | Variable | Command} [-Script <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSCallStack`, [], `Displays the current call stack.`, `Get-PSCallStack [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSDrive`, [
        new Parameter(`LiteralName`, `Specifies the name of the drive.


The value of LiteralName is used exactly as it is typed. No characters are interpreted as wildcards. If the name includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Name`, `Specifies, as a string array, the name or name of drives that this cmdlet gets in the operation. Type the drive name or letter without a colon (:).`, `String[]`),
        new Parameter(`PSProvider`, `Specifies, as a string array, the PowerShell provider. This cmdlet gets only the drives supported by this provider. Type the name of a provider, such as FileSystem, Registry, or Certificate.`, `String[]`),
        new Parameter(`Scope`, `Specifies the scope in which this cmdlet gets the drives.


The acceptable values for this parameter are:


- Global


- Local


- Script


- a number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent).


"Local" is the default. For more information, see about_Scopes (../Microsoft.PowerShell.Core/about/about_Scopes.md).`, `String`),
    ], `Gets drives in the current session.`, `Get-PSDrive [-LiteralName] <String[]> [-PSProvider <String[]>] [-Scope <String>] [<CommonParameters>]

Get-PSDrive [[-Name] <String[]>] [-PSProvider <String[]>] [-Scope <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSHostProcessInfo`, [
        new Parameter(`Id`, `Specifies a process by the process ID. To get a process ID, run the "Get-Process" cmdlet.`, `Int32[]`),
        new Parameter(`Name`, `Specifies a process by the process name. To get a process name, run the "Get-Process" cmdlet.`, `String[]`),
        new Parameter(`Process`, `Specifies a process by the process object. The simplest way to use this parameter is to save the results of a "Get-Process" command that returns process that you want to enter in a variable, and then specify the variable as the value of this parameter.`, `Process[]`),
    ], `Gets process information about the PowerShell host.`, `Get-PSHostProcessInfo [-Id] <Int32[]> [<CommonParameters>]

Get-PSHostProcessInfo [[-Name] <String[]>] [<CommonParameters>]

Get-PSHostProcessInfo [-Process] <Process[]> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSProvider`, [
        new Parameter(`PSProvider`, `Specifies the name or names of the PowerShell providers about which this cmdlet gets information.`, `String[]`),
    ], `Gets information about the specified PowerShell provider.`, `Get-PSProvider [[-PSProvider] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSReadLineKeyHandler`, [
        new Parameter(`Bound`, `Include functions that are bound.`, `SwitchParameter`),
        new Parameter(`Unbound`, `Include functions that are unbound.`, `SwitchParameter`),
    ], `Gets the key bindings for the PSReadLine module.`, `Get-PSReadLineKeyHandler [-Bound] [-Unbound] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSReadLineOption`, [], `Returns the values for the options that can be configured.`, `Get-PSReadLineOption [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSSession`, [
        new Parameter(`AllowRedirection`, `Indicates that this cmdlet allows redirection of this connection to an alternate Uniform Resource Identifier (URI). By default, PowerShell does not redirect connections.


This parameter configures the temporary connection that is created to run a Get-PSSession command with the ConnectionUri parameter.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`ApplicationName`, `Specifies the name of an application. This cmdlet connects only to sessions that use the specified application.


Enter the application name segment of the connection URI. For example, in the following connection URI, the application name is WSMan: "http://localhost:5985/WSMAN". The application name of a session is stored in the Runspace.ConnectionInfo.AppName property of the session.


The value of this parameter is used to select and filter sessions. It does not change the application that the session uses.`, `String`),
        new Parameter(`Authentication`, `Specifies the mechanism that is used to authenticate credentials for the session in which the Get-PSSession command runs.


This parameter configures the temporary connection that is created to run a Get-PSSession command with the ComputerName or ConnectionUri parameter.


The acceptable values for this parameter are:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential.




The default value is Default.


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (https://msdn.microsoft.com/library/system.management.automation.runspaces.authenticationmechanism)in the MSDN library.


CAUTION: Credential Security Support Provider (CredSSP) authentication, in which the user's credentials are passed to a remote computer to be authenticated, is designed for commands that require authentication on more than one resource, such as accessing a remote network share. This mechanism increases the security risk of the remote operation. If the remote computer is compromised, the credentials that are passed to it can be used to control the network session.

This parameter was introduced in Windows PowerShell 3.0.`, `AuthenticationMechanism`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to create the session in which the Get-PSSession command runs. Enter the certificate thumbprint of the certificate.


This parameter configures the temporary connection that is created to run a Get-PSSession command with the ComputerName or ConnectionUri parameter.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts; they do not work with domain accounts.


To get a certificate thumbprint, use a Get-Item or Get-ChildItem command in the PowerShell Cert: drive.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`ComputerName`, `Specifies an array of names of computers. Gets the sessions that connect to the specified computers. Wildcard characters are not permitted. There is no default value.


Beginning in Windows PowerShell 3.0, PSSession objects are stored on the computers at the remote end of each connection. To get the sessions on the specified computers, PowerShell creates a temporary connection to each computer and runs a Get-PSSession command.


Type the NetBIOS name, an IP address, or a fully-qualified domain name of one or more computers. To specify the local computer, type the computer name, localhost, or a dot (.).


Note: This parameter gets sessions only from computers that run Windows PowerShell 3.0 or later versions of PowerShell. Earlier versions do not store sessions.`, `String[]`),
        new Parameter(`ConfigurationName`, `Specifies the name of a configuration. This cmdlet gets only to sessions that use the specified session configuration.


Enter a configuration name or the fully qualified resource URI for a session configuration. If you specify only the configuration name, the following schema URI is prepended: http://schemas.microsoft.com/powershell. The configuration name of a session is stored in the ConfigurationName property of the session.


The value of this parameter is used to select and filter sessions. It does not change the session configuration that the session uses.


For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `String`),
        new Parameter(`ConnectionUri`, `Specifies a URI that defines the connection endpoint for the temporary session in which the Get-PSSession command runs. The URI must be fully qualified.


This parameter configures the temporary connection that is created to run a Get-PSSession command with the ConnectionUri parameter.


The format of this string is:


<Transport>://<ComputerName>:<Port>/<ApplicationName>


The default value is: http://localhost:5985/WSMAN.


If you do not specify a ConnectionUri , you can use the UseSSL , ComputerName , Port , and ApplicationName parameters to specify the ConnectionURI values. Valid values for the Transport segment of the URI are HTTP and HTTPS. If you specify a connection URI with a Transport segment, but do not specify a port, the session is created with standards ports: 80 for HTTP and 443 for HTTPS. To use the default ports for PowerShell remoting, specify port 5985 for HTTP or 5986 for HTTPS.


If the destination computer redirects the connection to a different URI, PowerShell prevents the redirection unless you use the AllowRedirection parameter in the command.


This parameter was introduced in Windows PowerShell 3.0.


This parameter gets sessions only from computers that run Windows PowerShell 3.0 or later versions of Windows PowerShell or PowerShell Core. Earlier versions do not store sessions.`, `Uri[]`),
        new Parameter(`ContainerId`, `Specifies an array of IDs of containers. This cmdlet starts an interactive session with each of the specified containers. To see the containers that are available to you, use the Get-Container cmdlet.`, `String[]`),
        new Parameter(`Credential`, `Specifies a user credential. This cmdlet runs the command with the permissions of the specified user. Specify a user account that has permission to connect to the remote computer and run a "Get-PSSession" command. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).


This parameter configures to the temporary connection that is created to run a "Get-PSSession" command with the ComputerName or ConnectionUri parameter.


This parameter was introduced in Windows PowerShell 3.0.`, `PSCredential`),
        new Parameter(`Id`, `Specifies an array of session IDs. This cmdlet gets only the sessions with the specified IDs. Type one or more IDs, separated by commas, or use the range operator (..) to specify a range of IDs. You cannot use the ID parameter together with the ComputerName parameter.


An ID is an integer that uniquely identifies the user-managed sessions in the current session. It is easier to remember and type than the InstanceId , but it is unique only within the current session. The ID of a session is stored in the ID property of the session.`, `Int32[]`),
        new Parameter(`InstanceId`, `Specifies an array of instance IDs of sessions. This cmdlet gets only the sessions with the specified instance IDs.


The instance ID is a GUID that uniquely identifies a session on a local or remote computer. The InstanceID is unique, even when you have multiple sessions running in PowerShell.


The instance ID of a session is stored in the InstanceID property of the session.`, `Guid[]`),
        new Parameter(`Name`, `Specifies an array of session names. This cmdlet gets only the sessions that have the specified friendly names. Wildcard characters are permitted.


The friendly name of a session is stored in the Name property of the session.`, `String[]`),
        new Parameter(`Port`, `Specifies the specified network port that is used for the temporary connection in which the Get-PSSession command runs. To connect to a remote computer, the remote computer must be listening on the port that the connection uses. The default ports are 5985, which is the WinRM port for HTTP, and 5986, which is the WinRM port for HTTPS.


Before using an alternate port, you must configure the WinRM listener on the remote computer to listen at that port. To configure the listener, type the following two commands at the PowerShell prompt:


"Remove-Item -Path WSMan:\\Localhost\\listener\\listener* -Recurse"


"New-Item -Path WSMan:\\Localhost\\listener -Transport http -Address * -Port <port-number>"


This parameter configures to the temporary connection that is created to run a Get-PSSession command with the ComputerName or ConnectionUri parameter.


Do not use the Port parameter unless you must. The Port set in the command applies to all computers or sessions on which the command runs. An alternate port setting might prevent the command from running on all computers.


This parameter was introduced in Windows PowerShell 3.0.`, `Int32`),
        new Parameter(`SessionOption`, `Specifies advanced options for the session. Enter a SessionOption object, such as one that you create by using the New-PSSessionOption cmdlet, or a hash table in which the keys are session option names and the values are session option values.


The default values for the options are determined by the value of the $PSSessionOption preference variable, if it is set. Otherwise, the default values are established by options set in the session configuration.


The session option values take precedence over default values for sessions set in the $PSSessionOption preference variable and in the session configuration. However, they do not take precedence over maximum values, quotas or limits set in the session configuration.


For a description of the session options, including the default values, see "New-PSSessionOption". For information about the "$PSSessionOption" preference variable, see about_Preference_Variables (About/about_Preference_Variables.md). For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `PSSessionOption`),
        new Parameter(`State`, `Specifies a session state. This cmdlet gets only sessions in the specified state. The acceptable values for this parameter are: All, Opened, Disconnected, Closed, and Broken. The default value is All.


The session state value is relative to the current sessions. Sessions that were not created in the current sessions and are not connected to the current session have a state of Disconnected even when they are connected to a different session.


The state of a session is stored in the State property of the session.


This parameter was introduced in Windows PowerShell 3.0.`, `SessionFilterState`),
        new Parameter(`ThrottleLimit`, `Specifies the maximum number of concurrent connections that can be established to run the Get-PSSession command. If you omit this parameter or enter a value of 0 (zero), the default value, 32, is used. The throttle limit applies only to the current command, not to the session or to the computer.


This parameter was introduced in Windows PowerShell 3.0.`, `Int32`),
        new Parameter(`UseSSL`, `Indicates that this cmdlet uses the Secure Sockets Layer (SSL) protocol to establish the connection in which the Get-PSSession command runs. By default, SSL is not used. If you use this parameter, but SSL is not available on the port used for the command, the command fails.


This parameter configures the temporary connection that is created to run a Get-PSSession command with the ComputerName parameter.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`VMId`, `Specifies an array of ID of virtual machines. This cmdlet starts an interactive session with each of the specified virtual machines. To see the virtual machines that are available to you, use the following command:


"Get-VM | Select-Object -Property Name, ID"`, `Guid[]`),
        new Parameter(`VMName`, `Specifies an array of names of virtual machines. This cmdlet starts an interactive session with each of the specified virtual machines. To see the virtual machines that are available to you, use the Get-VM cmdlet.`, `String[]`),
    ], `Gets the PowerShell sessions on local and remote computers.`, `Get-PSSession [-ConnectionUri] <Uri[]> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-Name <String[]>] [-SessionOption <PSSessionOption>] [-State {All | Opened | Disconnected | Closed | Broken}] [-ThrottleLimit <Int32>] [<CommonParameters>]

Get-PSSession [-ConnectionUri] <Uri[]> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-InstanceId <Guid[]>] [-SessionOption <PSSessionOption>] [-State {All | Opened | Disconnected | Closed | Broken}] [-ThrottleLimit <Int32>] [<CommonParameters>]

Get-PSSession [-ComputerName] <String[]> [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-Name <String[]>] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-State {All | Opened | Disconnected | Closed | Broken}] [-ThrottleLimit <Int32>] [-UseSSL] [<CommonParameters>]

Get-PSSession [-ComputerName] <String[]> [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-InstanceId <Guid[]>] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-State {All | Opened | Disconnected | Closed | Broken}] [-ThrottleLimit <Int32>] [-UseSSL] [<CommonParameters>]

Get-PSSession [-ConfigurationName <String>] [-InstanceId <Guid[]>] [-State {All | Opened | Disconnected | Closed | Broken}] -VMName <String[]> [<CommonParameters>]

Get-PSSession [-ConfigurationName <String>] -ContainerId <String[]> [-Name <String[]>] [-State {All | Opened | Disconnected | Closed | Broken}] [<CommonParameters>]

Get-PSSession [-ConfigurationName <String>] -ContainerId <String[]> [-InstanceId <Guid[]>] [-State {All | Opened | Disconnected | Closed | Broken}] [<CommonParameters>]

Get-PSSession [-ConfigurationName <String>] [-Name <String[]>] [-State {All | Opened | Disconnected | Closed | Broken}] -VMId <Guid[]> [<CommonParameters>]

Get-PSSession [-ConfigurationName <String>] [-InstanceId <Guid[]>] [-State {All | Opened | Disconnected | Closed | Broken}] -VMId <Guid[]> [<CommonParameters>]

Get-PSSession [-ConfigurationName <String>] [-Name <String[]>] [-State {All | Opened | Disconnected | Closed | Broken}] -VMName <String[]> [<CommonParameters>]

Get-PSSession [-Id] <Int32[]> [<CommonParameters>]

Get-PSSession [-InstanceId <Guid[]>] [<CommonParameters>]

Get-PSSession [-Name <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSSessionCapability`, [
        new Parameter(`ConfigurationName`, `Specifies the constrained session configuration (endpoint) that you are inspecting.`, `String`),
        new Parameter(`Full`, `Indicates that this cmdlet returns the entire initial session state for the specified user at the specified constrained endpoint.`, `SwitchParameter`),
        new Parameter(`Username`, `Specifies the user whose capabilities you are inspecting.`, `String`),
    ], `Gets the capabilities of a specific user on a constrained session configuration.`, `Get-PSSessionCapability [-ConfigurationName] <String> [-Username] <String> [-Full] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-PSSessionConfiguration`, [
        new Parameter(`Force`, `Suppresses the prompt to restart the WinRM service, if the service is not already running.`, `SwitchParameter`),
        new Parameter(`Name`, `Gets only the session configurations with the specified name or name pattern. Enter one or more session configuration names. Wildcards are permitted.`, `String[]`),
    ], `Gets the registered session configurations on the computer.`, `Get-PSSessionConfiguration [[-Name] <String[]>] [-Force] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Random`, [
        new Parameter(`Count`, `Specifies the number of random objects or numbers to return. The default is 1.


When used with "InputObject", if the value of Count exceeds the number of objects in the collection, "Get-Random" returns all of the objects in random order.`, `Int32`),
        new Parameter(`InputObject`, `Specifies a collection of objects. "Get-Random" gets randomly selected objects in random order from the collection up to the number specified by Count . Enter the objects, a variable that contains the objects, or a command or expression that gets the objects. You can also pipe a collection of objects to "Get-Random".`, `Object[]`),
        new Parameter(`Maximum`, `Specifies a maximum value for the random number. "Get-Random" returns a value that is less than the maximum (not equal). Enter an integer, a double-precision floating-point number, or an object that can be converted to an integer or double, such as a numeric string ("100").


The value of Maximum must be greater than (not equal to) the value of Minimum . If the value of Maximum or Minimum is a floating-point number, "Get-Random" returns a randomly selected floating-point number.


On a 64-bit computer, if the value of Minimum is a 32-bit integer, the default value of Maximum is Int32.MaxValue .


If the value of Minimum is a double (a floating-point number), the default value of Maximum is Double.MaxValue . Otherwise, the default value is Int32.MaxValue .`, `Object`),
        new Parameter(`Minimum`, `Specifies a minimum value for the random number. Enter an integer, a double-precision floating-point number, or an object that can be converted to an integer or double, such as a numeric string ("100"). The default value is 0 (zero).


The value of Minimum must be less than (not equal to) the value of Maximum . If the value of Maximum or Minimum is a floating-point number, "Get-Random" returns a randomly selected floating-point number.`, `Object`),
        new Parameter(`SetSeed`, `Specifies a seed value for the random number generator. This seed value is used for the current command and for all subsequent "Get-Random" commands in the current session until you use SetSeed again or close the session. You cannot reset the seed to its default value.


The SetSeed parameter is not required. By default, "Get-Random" uses the RandomNumberGenerator() (/dotnet/api/system.security.cryptography.randomnumbergenerator)method to generate a seed value. Because SetSeed results in non-random behavior, it is typically used only when trying to reproduce behavior, such as when debugging or analyzing a script that includes "Get-Random" commands.`, `Int32`),
    ], `Gets a random number, or selects objects randomly from a collection.`, `Get-Random [-InputObject] <Object[]> [-Count <Int32>] [-SetSeed <Int32>] [<CommonParameters>]

Get-Random [[-Maximum] <Object>] [-Minimum <Object>] [-SetSeed <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Runspace`, [
        new Parameter(`Id`, ``, `Int32[]`),
        new Parameter(`InstanceId`, ``, `Guid[]`),
        new Parameter(`Name`, ``, `String[]`),
    ], `Gets active runspaces within a PowerShellhost process.`, `Get-Runspace [-Id] <Int32[]> [<CommonParameters>]

Get-Runspace [-InstanceId] <Guid[]> [<CommonParameters>]

Get-Runspace [[-Name] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-RunspaceDebug`, [
        new Parameter(`AppDomainName`, ``, `String[]`),
        new Parameter(`ProcessName`, ``, `String`),
        new Parameter(`Runspace`, ``, `Runspace[]`),
        new Parameter(`RunspaceId`, ``, `Int32[]`),
        new Parameter(`RunspaceInstanceId`, ``, `Guid[]`),
        new Parameter(`RunspaceName`, ``, `String[]`),
    ], `Shows runspace debugging options.`, `Get-RunspaceDebug [[-ProcessName] <String>] [[-AppDomainName] <String[]>] [<CommonParameters>]

Get-RunspaceDebug [-Runspace] <Runspace[]> [<CommonParameters>]

Get-RunspaceDebug [-RunspaceId] <Int32[]> [<CommonParameters>]

Get-RunspaceDebug [-RunspaceInstanceId] <Guid[]> [<CommonParameters>]

Get-RunspaceDebug [[-RunspaceName] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SecureBootPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-SecureBootUEFI`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Service`, [
        new Parameter(`DependentServices`, `Indicates that this cmdlet gets only the services that depend upon the specified service.`, `SwitchParameter`),
        new Parameter(`DisplayName`, `Specifies, as a string array, the display names of services to be retrieved. Wildcards are permitted.`, `String[]`),
        new Parameter(`Exclude`, `Specifies, as a string array, a service or services that this cmdlet excludes from the operation. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcards are permitted.`, `String[]`),
        new Parameter(`Include`, `Specifies, as a string array, a service or services that this cmdlet includes in the operation. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcards are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies ServiceController objects representing the services to be retrieved. Enter a variable that contains the objects, or type a command or expression that gets the objects. You can pipe a service object to this cmdlet.`, `ServiceController[]`),
        new Parameter(`Name`, `Specifies the service names of services to be retrieved. Wildcards are permitted.`, `String[]`),
        new Parameter(`RequiredServices`, `Indicates that this cmdlet gets only the services that this service requires. This parameter gets the value of the ServicesDependedOn property of the service.`, `SwitchParameter`),
    ], `Gets the services on the computer.`, `Get-Service [-DependentServices] -DisplayName <String[]> [-Exclude <String[]>] [-Include <String[]>] [-RequiredServices] [<CommonParameters>]

Get-Service [-DependentServices] [-Exclude <String[]>] [-Include <String[]>] [-InputObject <ServiceController[]>] [-RequiredServices] [<CommonParameters>]

Get-Service [[-Name] <String[]>] [-DependentServices] [-Exclude <String[]>] [-Include <String[]>] [-RequiredServices] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TimeZone`, [
        new Parameter(`Id`, `Specifies, as a string array, the ID or IDs of the time zones that this cmdlet gets.`, `String[]`),
        new Parameter(`ListAvailable`, `Indicates that this cmdlet gets all available time zones.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies, as a string array, the name or names of the time zones that this cmdlet gets.`, `String[]`),
    ], `Gets the current time zone or a list of available time zones.`, `Get-TimeZone -Id <String[]> [<CommonParameters>]

Get-TimeZone -ListAvailable [<CommonParameters>]

Get-TimeZone [[-Name] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Tpm`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TpmEndorsementKeyInfo`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TpmSupportedFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TraceSource`, [
        new Parameter(`Name`, `Specifies the trace sources to get. Wildcards are permitted. The parameter name Name is optional.`, `String[]`),
    ], `Gets PowerShell components that are instrumented for tracing.`, `Get-TraceSource [[-Name] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TroubleshootingPack`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-TypeData`, [
        new Parameter(`TypeName`, `Specifies type data as an array only for the types with the specified names. By default, Get-TypeData gets all types in the session.


Enter type names or a name patterns. Full names, or name patterns with wildcard characters are required, even for types in the System namespace. Wildcards are supported and the parameter name TypeName is optional. You can also pipe type names to Get-TypeData .`, `String[]`),
    ], `Gets the extended type data in the current session.`, `Get-TypeData [[-TypeName] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-UICulture`, [], `Gets the current UI culture settings in the operating system.`, `Get-UICulture [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Unique`, [
        new Parameter(`AsString`, `Indicates that this cmdlet uses the data as a string. Without this parameter, data is treated as an object, so when you submit a collection of objects of the same type to "Get-Unique", such as a collection of files, it returns just one (the first). You can use this parameter to find the unique values of object properties, such as the file names.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies input for "Get-Unique". Enter a variable that contains the objects or type a command or expression that gets the objects.


This cmdlet treats the input submitted by using InputObject as a collection. it does not enumerate individual items in the collection. Because the collection is a single item, input submitted by using InputObject is always returned unchanged.`, `PSObject`),
        new Parameter(`OnType`, `Indicates that this cmdlet returns only one object of each type.`, `SwitchParameter`),
    ], `Returns unique items from a sorted list.`, `Get-Unique [-AsString] [-InputObject <PSObject>] [<CommonParameters>]

Get-Unique [-InputObject <PSObject>] [-OnType] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Uptime`, [
        new Parameter(`Since`, `Cause the cmdlet to return a DateTime object representing the last time that the operating system was booted.`, `SwitchParameter`),
    ], `Get the TimeSpan since last boot.`, `Get-Uptime [-Since] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Variable`, [
        new Parameter(`Exclude`, `Specifies an array of items that this cmdlet excludes from the operation. Wildcards are permitted.`, `String[]`),
        new Parameter(`Include`, `Specifies an array of items upon which the cmdlet will act, excluding all others. Wildcards are permitted.`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the variable. Wildcards are permitted. You can also pipe a variable name to "Get-Variable".`, `String[]`),
        new Parameter(`Scope`, `Specifies the variables in the scope.The acceptable values for this parameter are:


- Global - Local - Script - A number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent) Local is the default. For more information, see about_Scopes (../Microsoft.PowerShell.Core/About/about_Scopes.md).`, `String`),
        new Parameter(`ValueOnly`, `Indicates that this cmdlet gets only the value of the variable.`, `SwitchParameter`),
    ], `Gets the variables in the current console.`, `Get-Variable [[-Name] <String[]>] [-Exclude <String[]>] [-Include <String[]>] [-Scope <String>] [-ValueOnly] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-Verb`, [
        new Parameter(`Verb`, `Gets only the specified verbs. Enter the name of a verb or a name pattern. Wildcards are allowed.`, `String[]`),
        new Parameter(`Group`, `Gets only the specified groups. Enter the name of a group. Wildcards are not allowed.


This parameter was introduced in PowerShell 6.0.`, `String[]`),
    ], `Gets approved PowerShell verbs.`, `Get-Verb [[-Group] <String[]>] [[-Verb] {Common | Communications | Data | Diagnostic | Lifecycle | Other | Security}] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WheaMemoryPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WIMBootEntry`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinAcceptLanguageFromLanguageListOptOut`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinCultureFromLanguageListOptOut`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinDefaultInputMethodOverride`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsCapability`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsDeveloperLicense`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsEdition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsErrorReporting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsImageContent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsOptionalFeature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WindowsSearchSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinEvent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinHomeLocation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinLanguageBarOption`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinSystemLocale`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinUILanguageOverride`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WinUserLanguageList`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WSManCredSSP`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Get-WSManInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Group-Object`, [
        new Parameter(`AsHashTable`, `Indicates that this cmdlet returns the group as a hash table. The keys of the hash table are the property values by which the objects are grouped. The values of the hash table are the objects that have that property value.


By itself, the AsHashTable parameter returns each hash table in which each key is an instance of the grouped object. When used with the AsString parameter, the keys in the hash table are strings.`, `SwitchParameter`),
        new Parameter(`AsString`, `Indicates that this cmdlet converts the hash table keys to strings. By default, the hash table keys are instances of the grouped object. This parameter is valid only when used with the AsHashTable parameter.`, `SwitchParameter`),
        new Parameter(`CaseSensitive`, `Indicates that this cmdlet makes the grouping case-sensitive. Without this parameter, the property values of objects in a group might have different cases.`, `SwitchParameter`),
        new Parameter(`Culture`, `Specifies the culture to use when comparing strings.`, `String`),
        new Parameter(`InputObject`, `Specifies the objects to group. Enter a variable that contains the objects, or type a command or expression that gets the objects.


When you use the InputObject parameter to submit a collection of objects to "Group-Object", "Group-Object" receives one object that represents the collection. As a result, it creates a single group with that object as its member.


To group the objects in a collection, pipe the objects to "Group-Object".`, `PSObject`),
        new Parameter(`NoElement`, `Indicates that this cmdlet omits the members of a group from the results.`, `SwitchParameter`),
        new Parameter(`Property`, `Specifies the properties for grouping. The objects are arranged into groups based on the value of the specified property.


The value of the Property parameter can be a new calculated property. To create a calculated, property, create a hash table with an Expression key that specifies a string or script block value.`, `Object[]`),
    ], `Groups objects that contain the same value for specified properties.`, `Group-Object [[-Property] <Object[]>] [-AsHashTable] [-AsString] [-CaseSensitive] [-Culture <String>] [-InputObject <PSObject>] [-NoElement] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-Alias`, [
        new Parameter(`Force`, `Allows the cmdlet to import an alias that is already defined or is read only. You can use the following command to display information about the currently-defined aliases:


"Get-Alias | Select-Object Name, Options"


If the corresponding alias is read-only, it will be displayed in the value of the Options property.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies the path to a file that includes exported alias information. Unlike the Path parameter, the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to a file that includes exported alias information. Wildcards are allowed but they must resolve to a single name.`, `String`),
        new Parameter(`Scope`, `Specifies the scope into which the aliases are imported. The acceptable values for this parameter are:


- Global


- Local


- Script


- A number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent)




The default is Local. For more information, see about_Scopes.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Imports an alias list from a file.`, `Import-Alias [-Force] -LiteralPath <String> [-PassThru] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]

Import-Alias [-Path] <String> [-Force] [-PassThru] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-BinaryMiLog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-Clixml`, [
        new Parameter(`First`, `Gets only the specified number of objects. Enter the number of objects to get.`, `UInt64`),
        new Parameter(`IncludeTotalCount`, `Reports the total number of objects in the data set followed by the selected objects. If the cmdlet can't determine the total count, it displays Unknown total count . The integer has an Accuracy property that indicates the reliability of the total count value. The value of Accuracy ranges from "0.0" to "1.0" where "0.0" means that the cmdlet couldn't count the objects, "1.0" means that the count is exact, and a value between "0.0" and "1.0" indicates an increasingly reliable estimate.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies the path to the XML files. Unlike Path , the value of the LiteralPath parameter is used exactly as it's typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the path to the XML files.`, `String[]`),
        new Parameter(`Skip`, `Ignores the specified number of objects and then gets the remaining objects. Enter the number of objects to skip.`, `UInt64`),
    ], `Imports a CLIXML file and creates corresponding objects in PowerShell.`, `Import-Clixml [-First <UInt64>] [-IncludeTotalCount] -LiteralPath <String[]> [-Skip <UInt64>] [<CommonParameters>]

Import-Clixml [-Path] <String[]> [-First <UInt64>] [-IncludeTotalCount] [-Skip <UInt64>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-Counter`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-Csv`, [
        new Parameter(`Delimiter`, `Specifies the delimiter that separates the property values in the CSV file. The default is a comma (,).


Enter a character, such as a colon (:). To specify a semicolon (;) enclose it in single quotation marks.


If you specify a character other than the actual string delimiter in the file, "Import-Csv" cannot create the objects from the CSV strings and will return the CSV strings.`, `Char`),
        new Parameter(`Encoding`, `Specifies the encoding for the imported CSV file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Header`, `Specifies an alternate column header row for the imported file. The column header determines the property names of the objects created by "Import-Csv".


Enter column headers as a comma-separated list. Do not enclose the header string in quotation marks. Enclose each column header in single quotation marks.


If you enter fewer column headers than there are data columns, the remaining data columns are discarded. If you enter more column headers than there are data columns, the additional column headers are created with empty data columns.


When using the Header parameter, delete the original header row from the CSV file. Otherwise, "Import-Csv" creates an extra object from the items in the header row.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies the path to the CSV file to import. Unlike Path , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the path to the CSV file to import. You can also pipe a path to "Import-Csv".`, `String[]`),
        new Parameter(`UseCulture`, `Uses the list separator for the current culture as the item delimiter. To find the list separator for a culture, use the following command: "(Get-Culture).TextInfo.ListSeparator".`, `SwitchParameter`),
    ], `Creates table-like custom objects from the items in a comma-separated value (CSV) file.`, `Import-Csv [-Path] <String[]> [[-Delimiter] <Char>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Header <String[]>] [<CommonParameters>]

Import-Csv [[-Delimiter] <Char>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Header <String[]>] -LiteralPath <String[]> [<CommonParameters>]

Import-Csv [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Header <String[]>] -LiteralPath <String[]> -UseCulture [<CommonParameters>]

Import-Csv [-Path] <String[]> [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Header <String[]>] -UseCulture [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-LocalizedData`, [
        new Parameter(`BaseDirectory`, `Specifies the base directory where the .psd1 files are located. The default is the directory where the script is located. Import-LocalizedData searches for the .psd1 file for the script in a language-specific subdirectory of the base directory.`, `String`),
        new Parameter(`BindingVariable`, `Specifies the variable into which the text strings are imported. Enter a variable name without a dollar sign ($).


In Windows PowerShell 2.0, this parameter is required. In Windows PowerShell 3.0, this parameter is optional. If you omit this parameter, Import-LocalizedData returns a hash table of the text strings. The hash table is passed down the pipeline or displayed at the command line.


When using Import-LocalizedData to replace default text strings specified in the DATA section of a script, assign the DATA section to a variable and enter the name of the DATA section variable in the value of the BindingVariable parameter. Then, when Import-LocalizedData saves the imported content in the BindingVariable , the imported data will replace the default text strings. If you are not specifying default text strings, you can select any variable name.`, `String`),
        new Parameter(`FileName`, `Specifies the name of the data file (.psd1) to be imported. Enter a file name. You can specify a file name that does not include its .psd1 file name extension, or you can specify the file name including the .psd1 file name extension.


The FileName parameter is required when Import-LocalizedData is not used in a script. Otherwise, the parameter is optional and the default value is the base name of the script. You can use this parameter to direct Import-LocalizedData to search for a different .psd1 file.


For example, if the FileName is omitted and the script name is FindFiles.ps1, Import-LocalizedData searches for the FindFiles.psd1 data file.`, `String`),
        new Parameter(`SupportedCommand`, `Specifies cmdlets and functions that generate only data.


Use this parameter to include cmdlets and functions that you have written or tested. For more information, see about_Script_Internationalization.`, `String[]`),
        new Parameter(`UICulture`, `Specifies an alternate UI culture. The default is the value of the $PsUICulture automatic variable. Enter a UI culture in <language>-<region> format, such as en-US, de-DE, or ar-SA.


The value of the UICulture parameter determines the language-specific subdirectory (within the base directory) from which Import-LocalizedData gets the .psd1 file for the script.


The cmdlet searches for a subdirectory with the same name as the value of the UICulture parameter or the $PsUICulture automatic variable, such as de-DE or ar-SA. If it cannot find the directory, or the directory does not contain a .psd1 file for the script, it searches for a subdirectory with the name of the language code, such as de or ar. If it cannot find the subdirectory or .psd1 file, the command fails and the data is displayed in the default language specified in the script.`, `String`),
    ], `Imports language-specific data into scripts and functions based on the UI culture that is selected for the operating system.`, `Import-LocalizedData [[-BindingVariable] <String>] [[-UICulture] <String>] [-BaseDirectory <String>] [-FileName <String>] [-SupportedCommand <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-Module`, [
        new Parameter(`Alias`, `Specifies the aliases that this cmdlet imports from the module into the current session. Enter a comma-separated list of aliases. Wildcard characters are permitted.


Some modules automatically export selected aliases into your session when you import the module. This parameter lets you select from among the exported aliases.`, `String[]`),
        new Parameter(`ArgumentList`, `Specifies an array of arguments, or parameter values, that are passed to a script module during the "Import-Module" command. This parameter is valid only when you are importing a script module.


You can also refer to the ArgumentList parameter by its alias, args . For more information, see about_Aliases (About/about_Aliases.md).`, `Object[]`),
        new Parameter(`AsCustomObject`, `Indicates that this cmdlet returns a custom object with members that represent the imported module members. This parameter is valid only for script modules.


When you use the AsCustomObject parameter, "Import-Module" imports the module members into the session and then returns a PSCustomObject object instead of a PSModuleInfo object. You can save the custom object in a variable and use dot notation to invoke the members.`, `SwitchParameter`),
        new Parameter(`Assembly`, `Specifies an array of assembly objects. This cmdlet imports the cmdlets and providers implemented in the specified assembly objects. Enter a variable that contains assembly objects or a command that creates assembly objects. You can also pipe an assembly object to "Import-Module".


When you use this parameter, only the cmdlets and providers implemented by the specified assemblies are imported. If the module contains other files, they are not imported, and you might be missing important members of the module. Use this parameter for debugging and testing the module, or when you are instructed to use it by the module author.`, `Assembly[]`),
        new Parameter(`CimNamespace`, `Specifies the namespace of an alternate CIM provider that exposes CIM modules. The default value is the namespace of the Module Discovery WMI provider.


Use this parameter to import CIM modules from computers and devices that are not running a Windows operating system.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`CimResourceUri`, `Specifies an alternate location for CIM modules. The default value is the resource URI of the Module Discovery WMI provider on the remote computer.


Use this parameter to import CIM modules from computers and devices that are not running a Windows operating system.


This parameter was introduced in Windows PowerShell 3.0.`, `Uri`),
        new Parameter(`CimSession`, `Specifies a CIM session on the remote computer. Enter a variable that contains the CIM session or a command that gets the CIM session, such as a Get-CimSession (../CimCmdlets/Get-CimSession.md)command.


"Import-Module" uses the CIM session connection to import modules from the remote computer into the current session. When you use the commands from the imported module in the current session, the commands actually run on the remote computer.


You can use this parameter to import modules from computers and devices that are not running the Windows operating system, and Windows computers that have PowerShell, but don't have PowerShell remoting enabled.


This parameter was introduced in Windows PowerShell 3.0.`, `CimSession`),
        new Parameter(`Cmdlet`, `Specifies an array of cmdlets that this cmdlet imports from the module into the current session. Wildcard characters are permitted.


Some modules automatically export selected cmdlets into your session when you import the module. This parameter lets you select from among the exported cmdlets.`, `String[]`),
        new Parameter(`DisableNameChecking`, `Indicates that this cmdlet suppresses the message that warns you when you import a cmdlet or function whose name includes an unapproved verb or a prohibited character.


By default, when a module that you import exports cmdlets or functions that have unapproved verbs in their names, PowerShell displays the following warning message:


> WARNING: Some imported command names include unapproved verbs which might make them less > discoverable. Use the Verbose parameter for more detail or type Get-Verb to see the list of > approved verbs.


This message is only a warning. The complete module is still imported, including the non-conforming commands. Although the message is displayed to module users, the naming problem should be fixed by the module author.`, `SwitchParameter`),
        new Parameter(`Force`, `This parameter causes a module to be loaded, or reloaded, over top of the current one`, `SwitchParameter`),
        new Parameter(`FullyQualifiedName`, `Specifies the fully qualified name of the module as a hash table. The value can be a combination of strings and hash tables. The hash table has the following keys.


- "ModuleName" - Required Specifies the module name. - "GUID" - Optional Specifies the GUID of the module. - It's also Required to specify one of the three below keys. These keys   can't be used together.   - "ModuleVersion" - Specifies a minimum acceptable version of the module.   - "RequiredVersion" - Specifies an exact, required version of the module.   - "MaximumVersion" - Specifies the maximum acceptable version of the module.`, `ModuleSpecification[]`),
        new Parameter(`Function`, `Specifies an array of functions that this cmdlet imports from the module into the current session. Wildcard characters are permitted.


Some modules automatically export selected functions into your session when you import the module. This parameter lets you select from among the exported functions.`, `String[]`),
        new Parameter(`Global`, `Indicates that this cmdlet imports modules into the global session state so they are available to all commands in the session.


By default, when "Import-Module" cmdlet is called from the command prompt, script file, or scriptblock, all the commands are imported into the global session state.


When invoked from another module, "Import-Module" cmdlet imports the commands in a module, including commands from nested modules, into the caller's session state.


> [!TIP] > You should avoid calling "Import-Module" from within a module. Instead, declare the target module > as a nested module in the parent module's manifest. Declaring nested modules improves the > discoverability of dependencies.


The Global parameter is equivalent to the Scope parameter with a value of Global.


To restrict the commands that a module exports, use an "Export-ModuleMember" command in the script module.`, `SwitchParameter`),
        new Parameter(`MaximumVersion`, `Specifies a maximum version. This cmdlet imports only a version of the module that is less than or equal to the specified value. If no version qualifies, "Import-Module" generates an error.`, `String`),
        new Parameter(`MinimumVersion`, `Specifies a minimum version. This cmdlet imports only a version of the module that is greater than or equal to the specified value. If no version qualifies, "Import-Module" generates an error.


By default, "Import-Module" imports the module without checking the version number.


Use the MinimumVersion parameter name or its alias, Version.


To specify an exact version, use the RequiredVersion parameter. You can also use the Module and Version parameters of the #Requires keyword to require a specific version of a module in a script.


This parameter was introduced in Windows PowerShell 3.0.`, `Version`),
        new Parameter(`ModuleInfo`, `Specifies an array of module objects to import. Enter a variable that contains the module objects, or a command that gets the module objects, such as the following command: "Get-Module -ListAvailable". You can also pipe module objects to "Import-Module".`, `PSModuleInfo[]`),
        new Parameter(`Name`, `Specifies the names of the modules to import. Enter the name of the module or the name of a file in the module, such as a .psd1, .psm1, .dll, or ps1 file. File paths are optional. Wildcard characters are not permitted. You can also pipe module names and file names to "Import-Module".


If you omit a path, "Import-Module" looks for the module in the paths saved in the "$env:PSModulePath" environment variable.


Specify only the module name whenever possible. When you specify a file name, only the members that are implemented in that file are imported. If the module contains other files, they are not imported, and you might be missing important members of the module.`, `String[]`),
        new Parameter(`NoClobber`, `Indicates that this cmdlet does not import commands that have the same names as existing commands in the current session. By default, "Import-Module" imports all exported module commands.


Commands that have the same names can hide or replace commands in the session. To avoid command name conflicts in a session, use the Prefix or NoClobber parameters. For more information about name conflicts and command precedence, see "Modules and Name Conflicts" in about_Modules (about/about_Modules.md)and about_Command_Precedence (about/about_Command_Precedence.md).


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Prefix`, `Specifies a prefix that this cmdlet adds to the nouns in the names of imported module members.


Use this parameter to avoid name conflicts that might occur when different members in the session have the same name. This parameter does not change the module, and it does not affect files that the module imports for its own use. These are known as nested modules. This cmdlet affects only the names of members in the current session.


For example, if you specify the prefix UTC and then import a "Get-Date" cmdlet, the cmdlet is known in the session as "Get-UTCDate", and it is not confused with the original "Get-Date" cmdlet.


The value of this parameter takes precedence over the DefaultCommandPrefix property of the module, which specifies the default prefix.`, `String`),
        new Parameter(`PSSession`, `Specifies a PowerShell user-managed session ( PSSession ) from which this cmdlet import modules into the current session. Enter a variable that contains a PSSession or a command that gets a PSSession , such as a "Get-PSSession" command.


When you import a module from a different session into the current session, you can use the cmdlets from the module in the current session, just as you would use cmdlets from a local module. Commands that use the remote cmdlets actually run in the remote session, but the remoting details are managed in the background by PowerShell.


This parameter uses the Implicit Remoting feature of PowerShell. It is equivalent to using the "Import-PSSession" cmdlet to import particular modules from a session.


"Import-Module" cannot import PowerShell Core modules from another session. The PowerShell Core modules have names that begin with Microsoft.PowerShell.


This parameter was introduced in Windows PowerShell 3.0.`, `PSSession`),
        new Parameter(`RequiredVersion`, `Specifies a version of the module that this cmdlet imports. If the version is not installed, "Import-Module" generates an error.


By default, "Import-Module" imports the module without checking the version number.


To specify a minimum version, use the MinimumVersion parameter. You can also use the Module and Version parameters of the #Requires keyword to require a specific version of a module in a script.


This parameter was introduced in Windows PowerShell 3.0.


Scripts that use RequiredVersion to import modules that are included with existing releases of the Windows operating system don't automatically run in future releases of the Windows operating system. This is because PowerShell module version numbers in future releases of the Windows operating system are higher than module version numbers in existing releases of the Windows operating system.`, `Version`),
        new Parameter(`Scope`, `Specifies a scope into which this cmdlet imports the module.


The acceptable values for this parameter are:


- Global . Available to all commands in the session. Equivalent to the Global parameter. - Local . Available only in the current scope.


By default, when "Import-Module" cmdlet is called from the command prompt, script file, or scriptblock, all the commands are imported into the global session state. You can use the -Scope parameter with the value of Local to import module content into the script or scriptblock scope.


When invoked from another module, "Import-Module" cmdlet imports the commands in a module, including commands from nested modules, into the caller's session state. Specifying "-Scope Global" or "-Global" indicates that this cmdlet imports modules into the global session state so they are available to all commands in the session.


The Global parameter is equivalent to the Scope parameter with a value of Global.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`Variable`, `Specifies an array of variables that this cmdlet imports from the module into the current session. Enter a list of variables. Wildcard characters are permitted.


Some modules automatically export selected variables into your session when you import the module. This parameter lets you select from among the exported variables.`, `String[]`),
        new Parameter(`SkipEditionCheck`, `Skips the check on the "CompatiblePSEditions" field.


Allows loading a module from the ""$($env:windir)\\System32\\WindowsPowerShell\\v1.0\\Modules"" module directory into PowerShell Core when that module does not specify "Core" in the "CompatiblePSEditions" manifest field.


When importing a module from another path, this switch does nothing, since the check is not performed. On Linux and macOS, this switch does nothing.


See about_PowerShell_Editions (About/about_PowerShell_Editions.md)for more information.


> [!WARNING] > "Import-Module -SkipEditionCheck" is still likely to fail to import a module. Even if it does > succeed, invoking a command from the module may later fail when it tries to use an > incompatible API.`, `SwitchParameter`),
    ], `Adds modules to the current session.`, `Import-Module [-Assembly] <Assembly[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-NoClobber] [-PassThru] [-Prefix <String>] [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]

Import-Module [-Name] <String[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-CimNamespace <String>] [-CimResourceUri <Uri>] -CimSession <CimSession> [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-MaximumVersion <String>] [-MinimumVersion <Version>] [-NoClobber] [-PassThru] [-Prefix <String>] [-RequiredVersion <Version>] [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]

Import-Module [-FullyQualifiedName] <ModuleSpecification[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-NoClobber] [-PassThru] [-Prefix <String>] [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]

Import-Module [-FullyQualifiedName] <ModuleSpecification[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-NoClobber] [-PassThru] [-Prefix <String>] -PSSession <PSSession> [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]

Import-Module [-Name] <String[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-MaximumVersion <String>] [-MinimumVersion <Version>] [-NoClobber] [-PassThru] [-Prefix <String>] [-RequiredVersion <Version>] [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]

Import-Module [-Name] <String[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-MaximumVersion <String>] [-MinimumVersion <Version>] [-NoClobber] [-PassThru] [-Prefix <String>] -PSSession <PSSession> [-RequiredVersion <Version>] [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]

Import-Module [-ModuleInfo] <PSModuleInfo[]> [-Alias <String[]>] [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-DisableNameChecking] [-Force] [-Function <String[]>] [-Global] [-NoClobber] [-PassThru] [-Prefix <String>] [-Scope {Local | Global}] [-Variable <String[]>] [-SkipEditionCheck] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-PackageProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-PowerShellDataFile`, [
        new Parameter(`LiteralPath`, `The path to the file being imported. All characters in the path are treated as literal values. Wildcard characters are not processed.`, `String[]`),
        new Parameter(`Path`, `The path to the file being imported. Wildcards are allowed but only the first matching file is imported.`, `String[]`),
    ], `Imports values from a .PSD1 file without invoking its contents.`, `Import-PowerShellDataFile [-LiteralPath] <String[]> [<CommonParameters>]

Import-PowerShellDataFile [-Path] <String[]> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-PSSession`, [
        new Parameter(`AllowClobber`, `Indicates that this cmdlet imports the specified commands, even if they have the same names as commands in the current session.


If you import a command with the same name as a command in the current session, the imported command hides or replaces the original commands. For more information, see about_Command_Precedence.


By default, Import-PSSession does not import commands that have the same name as commands in the current session.`, `SwitchParameter`),
        new Parameter(`ArgumentList`, `Specifies an array of commands that results from using the specified arguments (parameter values).


For instance, to import the variant of the Get-Item command in the certificate (Cert:) drive in the PSSession in $S, type "Import-PSSession -Session $S -Command Get-Item -ArgumentList cert:".`, `Object[]`),
        new Parameter(`Certificate`, `Specifies the client certificate that is used to sign the format files ( .Format.ps1xml) or script module files (.psm1) in the temporary module that Import-PSSession * creates.


Enter a variable that contains a certificate or a command or expression that gets the certificate.


To find a certificate, use the Get-PfxCertificate cmdlet or use the Get-ChildItem cmdlet in the Certificate (Cert:) drive. If the certificate is not valid or does not have sufficient authority, the command fails.`, `X509Certificate2`),
        new Parameter(`CommandName`, `Specifies commands with the specified names or name patterns. Wildcards are permitted. Use CommandName or its alias, Name .


By default, Import-PSSession imports all commands from the session, except for commands that have the same names as commands in the current session. This prevents imported commands from hiding or replacing commands in the session. To import all commands, even those that hide or replace other commands, use the AllowClobber parameter.


If you use the CommandName parameter, the formatting files for the commands are not imported unless you use the FormatTypeName parameter. Similarly, if you use the FormatTypeName parameter, no commands are imported unless you use the CommandName parameter.`, `String[]`),
        new Parameter(`CommandType`, `Specifies the type of command objects. The default value is Cmdlet. Use CommandType or its alias, Type . The acceptable values for this parameter are:


- Alias. The PowerShell aliases in the remote session. - All. The cmdlets and functions in the remote session. - Application. All the files other than PowerShell files in the paths that are listed in the Path environment variable ($env:path) in the remote session, including .txt, .exe, and .dll files. - Cmdlet. The cmdlets in the remote session. "Cmdlet" is the default. - ExternalScript. The .ps1 files in the paths listed in the Path environment variable ($env:path) in the remote session. - Filter and Function. The PowerShell functions in the remote session. - Script. The script blocks in the remote session.`, `CommandTypes`),
        new Parameter(`DisableNameChecking`, `Indicates that this cmdlet suppresses the message that warns you when you import a cmdlet or function whose name includes an unapproved verb or a prohibited character.


By default, when a module that you import exports cmdlets or functions that have unapproved verbs in their names, the PowerShell displays the following warning message:


"WARNING: Some imported command names include unapproved verbs which might make them less discoverable. Use the Verbose parameter for more detail or type Get-Verb to see the list of approved verbs."


This message is only a warning. The complete module is still imported, including the non-conforming commands. Although the message is displayed to module users, the naming problem should be fixed by the module author.`, `SwitchParameter`),
        new Parameter(`FormatTypeName`, `Specifies formatting instructions for the specified Microsoft .NET Framework types. Enter the type names. Wildcards are permitted.


The value of this parameter must be the name of a type that is returned by a Get-FormatData command in the session from which the commands are being imported. To get all of the formatting data in the remote session, type *.


If the command does not include either the CommandName or FormatTypeName parameter, Import-PSSession imports formatting instructions for all .NET Framework types returned by a Get-FormatData command in the remote session.


If you use the FormatTypeName parameter, no commands are imported unless you use the CommandName parameter.


Similarly, if you use the CommandName parameter, the formatting files for the commands are not imported unless you use the FormatTypeName parameter.`, `String[]`),
        new Parameter(`FullyQualifiedModule`, `Specifies modules with names that are specified in the form of ModuleSpecification objects (described in the Remarks section of ModuleSpecification Constructor (Hashtable) (https://msdn.microsoft.com/library/jj136290) in the MSDN library). For example, the FullyQualifiedModule parameter accepts a module name that is specified in the format @{ModuleName = "modulename"; ModuleVersion = "version_number"} or @{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"}. ModuleName and ModuleVersion are required, but Guid is optional.


You cannot specify the FullyQualifiedModule parameter in the same command as a Module parameter; the two parameters are mutually exclusive.`, `ModuleSpecification[]`),
        new Parameter(`Module`, `Specifies and array of commands in the PowerShell snap-ins and modules. Enter the snap-in and module names. Wildcards are not permitted. Import-PSSession cannot import providers from a snap-in.


For more information, see about_PSSnapins and about_Modules (../Microsoft.PowerShell.Core/About/about_Modules.md).`, `String[]`),
        new Parameter(`Prefix`, `Specifies a prefix to the nouns in the names of imported commands.


Use this parameter to avoid name conflicts that might occur when different commands in the session have the same name.


For instance, if you specify the prefix Remote and then import a Get-Date cmdlet, the cmdlet is known in the session as Get-RemoteDate, and it is not confused with the original Get-Date cmdlet.`, `String`),
        new Parameter(`Session`, `Specifies the PSSession from which the cmdlets are imported. Enter a variable that contains a session object or a command that gets a session object, such as a New-PSSession or Get-PSSession command. You can specify only one session. This parameter is required.`, `PSSession`),
    ], `Imports commands from another session into the current session.`, `Import-PSSession [-Session] <PSSession> [[-CommandName] <String[]>] [[-FormatTypeName] <String[]>] [-AllowClobber] [-ArgumentList <Object[]>] [-Certificate <X509Certificate2>] [-CommandType {Alias | Function | Filter | Cmdlet | ExternalScript | Application | Script | Workflow | Configuration | All}] [-DisableNameChecking] [-FullyQualifiedModule <ModuleSpecification[]>] [-Module <String[]>] [-Prefix <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-StartLayout`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Import-TpmOwnerAuth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Initialize-Tpm`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Install-Package`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Install-PackageProvider`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-CimMethod`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-Command`, [
        new Parameter(`AllowRedirection`, `Allows redirection of this connection to an alternate Uniform Resource Identifier (URI).


When you use the ConnectionURI parameter, the remote destination can return an instruction to redirect to a different URI. By default, PowerShell doesn't redirect connections, but you can use this parameter to allow it to redirect the connection.


You can also limit the number of times the connection is redirected by changing the MaximumConnectionRedirectionCount session option value. Use the MaximumRedirection parameter of the "New-PSSessionOption" cmdlet or set the MaximumConnectionRedirectionCount property of the "$PSSessionOption" preference variable. The default value is 5.`, `SwitchParameter`),
        new Parameter(`ApplicationName`, `Specifies the application name segment of the connection URI. Use this parameter to specify the application name when you aren't using the ConnectionURI parameter in the command.


The default value is the value of the "$PSSessionApplicationName" preference variable on the local computer. If this preference variable isn't defined, the default value is WSMAN. This value is appropriate for most uses. For more information, see about_Preference_Variables (./About/about_Preference_Variables.md).


The WinRM service uses the application name to select a listener to service the connection request. The value of this parameter should match the value of the URLPrefix property of a listener on the remote computer.`, `String`),
        new Parameter(`ArgumentList`, `Supplies the values of local variables in the command. The variables in the command are replaced by these values before the command is run on the remote computer. Enter the values in a comma-separated list. Values are associated with variables in the order that they're listed. The alias for ArgumentList is Args.


The values in the ArgumentList parameter can be actual values, such as 1024, or they can be references to local variables, such as "$max".


To use local variables in a command, use the following command format:


"{param($<name1>[, $<name2>]...) <command-with-local-variables>} -ArgumentList <value>" -or- "<local-variable>"


The param keyword lists the local variables that are used in the command. ArgumentList supplies the values of the variables, in the order that they're listed.`, `Object[]`),
        new Parameter(`AsJob`, `Indicates that this cmdlet runs the command as a background job on a remote computer. Use this parameter to run commands that take an extensive time to finish.


When you use the AsJob parameter, the command returns an object that represents the job, and then displays the command prompt. You can continue to work in the session while the job finishes. To manage the job, use the "*-Job" cmdlets. To get the job results, use the "Receive-Job" cmdlet.


The AsJob parameter resembles using the "Invoke-Command" cmdlet to run a "Start-Job" cmdlet remotely. However, with AsJob , the job is created on the local computer, even though the job runs on a remote computer. The results of the remote job are automatically returned to the local computer.


For more information about PowerShell background jobs, see about_Jobs (About/about_Jobs.md) and [about_Remote_Jobs](About/about_Remote_Jobs.md).`, `SwitchParameter`),
        new Parameter(`Authentication`, `Specifies the mechanism that's used to authenticate the user's credentials. CredSSP authentication is available only in Windows Vista, Windows Server 2008, and later versions of the Windows operating system.


The acceptable values for this parameter are as follows:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential




The default value is Default.


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).

> [!CAUTION] > Credential Security Support Provider (CredSSP) authentication, in which the user's credentials are > passed to a remote computer to be authenticated, is designed for commands that require > authentication on more than one resource, such as accessing a remote network share. This mechanism > increases the security risk of the remote operation. If the remote computer is compromised, the > credentials that are passed to it can be used to control the network session. For more > information, see > Credential Security Support Provider (/windows/win32/secauthn/credential-security-support-provider).`, `AuthenticationMechanism`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to connect to the disconnected session. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts and they don't work with domain accounts.


To get a certificate thumbprint, use a "Get-Item" or "Get-ChildItem" command in the PowerShell Cert: drive.`, `String`),
        new Parameter(`ComputerName`, `Specifies the computers on which the command runs. The default is the local computer.


When you use the ComputerName parameter, PowerShell creates a temporary connection that's used only to run the specified command and is then closed. If you need a persistent connection, use the Session parameter.


Type the NETBIOS name, IP address, or fully qualified domain name of one or more computers in a comma-separated list. To specify the local computer, type the computer name, localhost, or a dot (".").


To use an IP address in the value of ComputerName , the command must include the Credential parameter. The computer must be configured for the HTTPS transport or the IP address of the remote computer must be included in the local computer's WinRM TrustedHosts list. For instructions to add a computer name to the TrustedHosts list, see [How to Add a Computer to the Trusted Host List](./about/about_remote_troubleshooting.md#how-to-add-a-computer-to-the-trusted-hosts-list).


On Windows Vista and later versions of the Windows operating system, to include the local computer in the value of ComputerName , you must run PowerShell using the Run as administrator option.`, `String[]`),
        new Parameter(`ConfigurationName`, `Specifies the session configuration that is used for the new PSSession .


Enter a configuration name or the fully qualified resource URI for a session configuration. If you specify only the configuration name, the following schema URI is prepended: "http://schemas.microsoft.com/PowerShell".


When used with SSH, this parameter specifies the subsystem to use on the target as defined in "sshd_config". The default value for SSH is the "powershell" subsystem.


The session configuration for a session is located on the remote computer. If the specified session configuration doesn't exist on the remote computer, the command fails.


The default value is the value of the "$PSSessionConfigurationName" preference variable on the local computer. If this preference variable isn't set, the default is Microsoft.PowerShell . For more information, see about_Preference_Variables (about/about_Preference_Variables.md).`, `String`),
        new Parameter(`ConnectionUri`, `Specifies a Uniform Resource Identifier (URI) that defines the connection endpoint of the session. The URI must be fully qualified.


The format of this string is as follows:


"<Transport>://<ComputerName>:<Port>/<ApplicationName>"


The default value is as follows:


"http://localhost:5985/WSMAN"


If you don't specify a connection URI, you can use the UseSSL and Port parameters to specify the connection URI values.


Valid values for the Transport segment of the URI are HTTP and HTTPS. If you specify a connection URI with a Transport segment, but don't specify a port, the session is created with the standards ports: 80 for HTTP and 443 for HTTPS. To use the default ports for PowerShell remoting, specify port 5985 for HTTP or 5986 for HTTPS.


If the destination computer redirects the connection to a different URI, PowerShell prevents the redirection unless you use the AllowRedirection parameter in the command.`, `Uri[]`),
        new Parameter(`ContainerId`, `Specifies an array of container IDs.`, `String[]`),
        new Parameter(`Credential`, `Specifies a user account that has permission to perform this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`EnableNetworkAccess`, `Indicates that this cmdlet adds an interactive security token to loopback sessions. The interactive token lets you run commands in the loopback session that get data from other computers. For example, you can run a command in the session that copies XML files from a remote computer to the local computer.


A loopback session is a PSSession that originates and ends on the same computer. To create a loopback session, omit the ComputerName parameter or set its value to dot ("."), localhost, or the name of the local computer.


By default, loopback sessions are created by using a network token, which might not provide sufficient permission to authenticate to remote computers.


The EnableNetworkAccess parameter is effective only in loopback sessions. If you use EnableNetworkAccess when you create a session on a remote computer, the command succeeds, but the parameter is ignored.


You can allow remote access in a loopback session by using the CredSSP value of the Authentication parameter, which delegates the session credentials to other computers.


To protect the computer from malicious access, disconnected loopback sessions that have interactive tokens, which are those created by using EnableNetworkAccess , can be reconnected only from the computer on which the session was created. Disconnected sessions that use CredSSP authentication can be reconnected from other computers. For more information, see "Disconnect-PSSession".


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`FilePath`, `Specifies a local script that this cmdlet runs on one or more remote computers. Enter the path and file name of the script, or pipe a script path to "Invoke-Command". The script must reside on the local computer or in a directory that the local computer can access. Use ArgumentList to specify the values of parameters in the script.


When you use this parameter, PowerShell converts the contents of the specified script file to a script block, transmits the script block to the remote computer, and runs it on the remote computer.`, `String`),
        new Parameter(`HideComputerName`, `Indicates that this cmdlet omits the computer name of each object from the output display. By default, the name of the computer that generated the object appears in the display.


This parameter affects only the output display. It doesn't change the object.`, `SwitchParameter`),
        new Parameter(`HostName`, `Specifies an array of computer names for a Secure Shell (SSH) based connection. This is similar to the ComputerName parameter except that the connection to the remote computer is made using SSH rather than Windows WinRM.


This parameter was introduced in PowerShell 6.0.`, `String[]`),
        new Parameter(`InDisconnectedSession`, `Indicates that this cmdlet runs a command or script in a disconnected session.


When you use the InDisconnectedSession parameter, "Invoke-Command" creates a persistent session on each remote computer, starts the command specified by the ScriptBlock or FilePath parameter, and then disconnects from the session. The commands continue to run in the disconnected sessions. InDisconnectedSession enables you to run commands without maintaining a connection to the remote sessions. And, because the session is disconnected before any results are returned, InDisconnectedSession makes sure that all command results are returned to the reconnected session, instead of being split between sessions.


You can't use InDisconnectedSession with the Session parameter or the AsJob parameter.


Commands that use InDisconnectedSession return a PSSession object that represents the disconnected session. They don't return the command output. To connect to the disconnected session, use the "Connect-PSSession" or "Receive-PSSession" cmdlets. To get the results of commands that ran in the session, use the "Receive-PSSession" cmdlet. To run commands that generate output in a disconnected session, set the value of the OutputBufferingMode session option to Drop . If you intend to connect to the disconnected session, set the idle time-out in the session so that it provides sufficient time for you to connect before deleting the session.


You can set the output buffering mode and idle time-out in the SessionOption parameter or in the "$PSSessionOption" preference variable. For more information about session options, see "New-PSSessionOption" and about_Preference_Variables (./about/about_preference_variables.md).


For more information about the Disconnected Sessions feature, see about_Remote_Disconnected_Sessions (about/about_Remote_Disconnected_Sessions.md).


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies input to the command. Enter a variable that contains the objects or type a command or expression that gets the objects.


When using the InputObject parameter, use the "$Input" automatic variable in the value of the ScriptBlock parameter to represent the input objects.`, `PSObject`),
        new Parameter(`JobName`, `Specifies a friendly name for the background job. By default, jobs are named "Job<n>", where "<n>" is an ordinal number.


If you use the JobName parameter in a command, the command is run as a job, and "Invoke-Command" returns a job object, even if you don't include AsJob in the command.


For more information about PowerShell background jobs, see about_Jobs (./About/about_Jobs.md).`, `String`),
        new Parameter(`KeyFilePath`, `Specifies a key file path used by Secure Shell (SSH) to authenticate a user on a remote computer.


SSH allows user authentication to be performed via private and public keys as an alternative to basic password authentication. If the remote computer is configured for key authentication, then this parameter can be used to provide the key that identifies the user.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`NoNewScope`, `Indicates that this cmdlet runs the specified command in the current scope. By default, "Invoke-Command" runs commands in their own scope.


This parameter is valid only in commands that are run in the current session, that is, commands that omit both the ComputerName and Session parameters.


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Port`, `Specifies the network port on the remote computer that is used for this command. To connect to a remote computer, the remote computer must be listening on the port that the connection uses. The default ports are 5985, which is the WinRM port for HTTP, and 5986, which is the WinRM port for HTTPS.


Before using an alternate port, configure the WinRM listener on the remote computer to listen at that port. To configure the listener, type the following two commands at the PowerShell prompt:


"Remove-Item -Path WSMan:\\Localhost\\listener\\listener* -Recurse"


"New-Item -Path WSMan:\\Localhost\\listener -Transport http -Address * -Port <port-number>"


Don't use the Port parameter unless you must. The port that is set in the command applies to all computers or sessions on which the command runs. An alternate port setting might prevent the command from running on all computers.`, `Int32`),
        new Parameter(`RemoteDebug`, `Used to run the invoked command in debug mode in the remote PowerShell session.`, `SwitchParameter`),
        new Parameter(`RunAsAdministrator`, `Indicates that this cmdlet invokes a command as an Administrator.`, `SwitchParameter`),
        new Parameter(`ScriptBlock`, `Specifies the commands to run. Enclose the commands in curly braces "{ }" to create a script block. This parameter is required.


By default, any variables in the command are evaluated on the remote computer. To include local variables in the command, use ArgumentList .`, `ScriptBlock`),
        new Parameter(`Session`, `Specifies an array of sessions in which this cmdlet runs the command. Enter a variable that contains PSSession objects or a command that creates or gets the PSSession objects, such as a "New-PSSession" or "Get-PSSession" command.


When you create a PSSession , PowerShell establishes a persistent connection to the remote computer. Use a PSSession to run a series of related commands that share data. To run a single command or a series of unrelated commands, use the ComputerName parameter. For more information, see about_PSSessions (./About/about_PSSessions.md).`, `PSSession[]`),
        new Parameter(`SessionName`, `Specifies a friendly name for a disconnected session. You can use the name to refer to the session in subsequent commands, such as a "Get-PSSession" command. This parameter is valid only with the InDisconnectedSession parameter.


This parameter was introduced in PowerShell 3.0.`, `String[]`),
        new Parameter(`SessionOption`, `Specifies advanced options for the session. Enter a SessionOption object, such as one that you create by using the "New-PSSessionOption" cmdlet, or a hash table in which the keys are session option names and the values are session option values.


The default values for the options are determined by the value of the "$PSSessionOption" preference variable, if it's set. Otherwise, the default values are established by options set in the session configuration.


The session option values take precedence over default values for sessions set in the "$PSSessionOption" preference variable and in the session configuration. However, they don't take precedence over maximum values, quotas, or limits set in the session configuration.


For a description of the session options that includes the default values, see "New-PSSessionOption". For information about the "$PSSessionOption" preference variable, see about_Preference_Variables (About/about_Preference_Variables.md). For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `PSSessionOption`),
        new Parameter(`SSHConnection`, `This parameter takes an array of hash tables where each hash table contains one or more connection parameters needed to establish a Secure Shell (SSH) connection (HostName, Port, UserName, KeyFilePath).


The hash table connection parameters are the same as defined for the HostName parameter.


The SSHConnection parameter is useful for creating multiple sessions where each session requires different connection information.


This parameter was introduced in PowerShell 6.0.`, `Hashtable[]`),
        new Parameter(`SSHTransport`, `Indicates that the remote connection is established using Secure Shell (SSH).


By default PowerShell uses Windows WinRM to connect to a remote computer. This switch forces PowerShell to use the HostName parameter for establishing an SSH based remote connection.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`ThrottleLimit`, `Specifies the maximum number of concurrent connections that can be established to run this command. If you omit this parameter or enter a value of 0, the default value, 32, is used.


The throttle limit applies only to the current command, not to the session or to the computer.`, `Int32`),
        new Parameter(`UserName`, `Specifies the user name for the account used to run a command on the remote computer. User authentication method will depend on how Secure Shell (SSH) is configured on the remote computer.


If SSH is configured for basic password authentication, then you'll be prompted for the user password.


If SSH is configured for key-based user authentication then a key file path can be provided via the KeyFilePath parameter and no password prompt will occur. If the client user key file is located in an SSH known location, then the KeyFilePath parameter isn't needed for key-based authentication, and user authentication will occur automatically based on the user name. For more information, see your platform's SSH documentation about key-based user authentication.


This isn't a required parameter. If the UserName parameter isn't specified, then the current logged on user name is used for the connection.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`UseSSL`, `Indicates that this cmdlet uses the Secure Sockets Layer (SSL) protocol to establish a connection to the remote computer. By default, SSL isn't used.


WS-Management encrypts all PowerShell content transmitted over the network. The UseSSL parameter is an additional protection that sends the data across an HTTPS, instead of HTTP.


If you use this parameter, but SSL isn't available on the port that's used for the command, the command fails.`, `SwitchParameter`),
        new Parameter(`VMId`, `Specifies an array of IDs of virtual machines.`, `Guid[]`),
        new Parameter(`VMName`, `Specifies an array of names of virtual machines.`, `String[]`),
    ], `Runs commands on local and remote computers.`, `Invoke-Command [[-ConnectionUri] <Uri[]>] [-ScriptBlock] <ScriptBlock> [-AllowRedirection] [-ArgumentList <Object[]>] [-AsJob] [-Authentication {Basic | Default | Credssp | Digest | Kerberos | Negotiate | NegotiateWithImplicitCredential}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-EnableNetworkAccess] [-HideComputerName] [-InDisconnectedSession] [-InputObject <PSObject>] [-JobName <String>] [-RemoteDebug] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [[-ConnectionUri] <Uri[]>] [-FilePath] <String> [-AllowRedirection] [-ArgumentList <Object[]>] [-AsJob] [-Authentication {Basic | Default | Credssp | Digest | Kerberos | Negotiate | NegotiateWithImplicitCredential}] [-ConfigurationName <String>] [-Credential <PSCredential>] [-EnableNetworkAccess] [-HideComputerName] [-InDisconnectedSession] [-InputObject <PSObject>] [-JobName <String>] [-RemoteDebug] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [[-ComputerName] <String[]>] [-ScriptBlock] <ScriptBlock> [-ApplicationName <String>] [-ArgumentList <Object[]>] [-AsJob] [-Authentication {Basic | Default | Credssp | Digest | Kerberos | Negotiate | NegotiateWithImplicitCredential}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-EnableNetworkAccess] [-HideComputerName] [-InDisconnectedSession] [-InputObject <PSObject>] [-JobName <String>] [-Port <Int32>] [-RemoteDebug] [-SessionName <String[]>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-UseSSL] [<CommonParameters>]

Invoke-Command [[-ComputerName] <String[]>] [-FilePath] <String> [-ApplicationName <String>] [-ArgumentList <Object[]>] [-AsJob] [-Authentication {Basic | Default | Credssp | Digest | Kerberos | Negotiate | NegotiateWithImplicitCredential}] [-ConfigurationName <String>] [-Credential <PSCredential>] [-EnableNetworkAccess] [-HideComputerName] [-InDisconnectedSession] [-InputObject <PSObject>] [-JobName <String>] [-Port <Int32>] [-RemoteDebug] [-SessionName <String[]>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-UseSSL] [<CommonParameters>]

Invoke-Command [[-Session] <PSSession[]>] [-FilePath] <String> [-ArgumentList <Object[]>] [-AsJob] [-HideComputerName] [-InputObject <PSObject>] [-JobName <String>] [-RemoteDebug] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [[-Session] <PSSession[]>] [-ArgumentList <Object[]>] [-AsJob] [-HideComputerName] [-InputObject <PSObject>] [-JobName <String>] [-RemoteDebug] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [-VMId] <Guid[]> [-ArgumentList <Object[]>] [-AsJob] [-ConfigurationName <String>] [-Credential <PSCredential>] [-HideComputerName] [-InputObject <PSObject>] [-RemoteDebug] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [-ArgumentList <Object[]>] [-AsJob] [-ConfigurationName <String>] [-Credential <PSCredential>] [-HideComputerName] [-InputObject <PSObject>] [-RemoteDebug] [-ThrottleLimit <Int32>] -VMName <String[]> [<CommonParameters>]

Invoke-Command [-VMId] <Guid[]> [-FilePath] <String> [-ArgumentList <Object[]>] [-AsJob] [-ConfigurationName <String>] [-Credential <PSCredential>] [-HideComputerName] [-InputObject <PSObject>] [-RemoteDebug] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [-FilePath] <String> [-ArgumentList <Object[]>] [-AsJob] [-ConfigurationName <String>] [-Credential <PSCredential>] [-HideComputerName] [-InputObject <PSObject>] [-RemoteDebug] [-ThrottleLimit <Int32>] -VMName <String[]> [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [-ArgumentList <Object[]>] [-AsJob] [-HideComputerName] -HostName <String[]> [-InputObject <PSObject>] [-KeyFilePath <String>] [-Port <Int32>] [-RemoteDebug] [-SSHTransport {true}] [-UserName <String>] [<CommonParameters>]

Invoke-Command [-FilePath] <String> [-ArgumentList <Object[]>] [-AsJob] [-ConfigurationName <String>] -ContainerId <String[]> [-HideComputerName] [-InputObject <PSObject>] [-JobName <String>] [-RemoteDebug] [-RunAsAdministrator] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [-ArgumentList <Object[]>] [-AsJob] [-ConfigurationName <String>] -ContainerId <String[]> [-HideComputerName] [-InputObject <PSObject>] [-JobName <String>] [-RemoteDebug] [-RunAsAdministrator] [-ThrottleLimit <Int32>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [-ArgumentList <Object[]>] [-AsJob] [-HideComputerName] [-InputObject <PSObject>] [-RemoteDebug] -SSHConnection <Hashtable[]> [<CommonParameters>]

Invoke-Command [-FilePath] <String> [-ArgumentList <Object[]>] [-AsJob] [-HideComputerName] -HostName <String[]> [-InputObject <PSObject>] [-KeyFilePath <String>] [-RemoteDebug] [-SSHTransport {true}] [-UserName <String>] [<CommonParameters>]

Invoke-Command [-FilePath] <String> [-ArgumentList <Object[]>] [-AsJob] [-HideComputerName] [-InputObject <PSObject>] [-RemoteDebug] -SSHConnection <Hashtable[]> [<CommonParameters>]

Invoke-Command [-ScriptBlock] <ScriptBlock> [-ArgumentList <Object[]>] [-InputObject <PSObject>] [-NoNewScope] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-CommandInDesktopPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-Expression`, [
        new Parameter(`Command`, `Specifies the command or expression to run. Type the command or expression or enter a variable that contains the command or expression. The Command parameter is required.`, `String`),
    ], `Runs commands or expressions on the local computer.`, `Invoke-Expression [-Command] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-History`, [
        new Parameter(`Id`, `Specifies the ID of a command in the history. You can type the ID number of the command or the first few characters of the command.


If you type characters, Invoke-History matches the most recent commands first. If you omit this parameter, Invoke-History runs the last, or most recent, command. To find the ID number of a command, use the Get-History cmdlet.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Runs commands from the session history.`, `Invoke-History [[-Id] <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-Item`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Path`, `Specifies the path to the selected item. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Performs the default action on the specified item.`, `Invoke-Item [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] -LiteralPath <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Invoke-Item [-Path] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-RestMethod`, [
        new Parameter(`AllowUnencryptedAuthentication`, `Allows sending of credentials and secrets over unencrypted connections. By default, supplying Credential or any Authentication option with a Uri that does not begin with "https://" will result in an error and the request will abort to prevent unintentionally communicating secrets in plain text over unencrypted connections. To override this behavior at your own risk, supply the AllowUnencryptedAuthentication parameter.


> [!WARNING] > Using this parameter is not secure and is not recommended. It is provided only for compatibility > with legacy systems that cannot provide encrypted connections. Use at your own risk.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`Authentication`, `Specifies the explicit authentication type to use for the request. The default is None . Authentication can't be used with UseDefaultCredentials .


Available Authentication Options:


- None : This is the default option when Authentication is not supplied. No explicit   authentication will be used. - Basic : Requires Credential . The credentials will be used to send an RFC 7617 Basic   Authentication "Authorization: Basic" header in the format of "base64(user:password)". - Bearer : Requires Token . Will send and RFC 6750 "Authorization: Bearer" header with the   supplied token. This is an alias for OAuth - OAuth : Requires Token . Will send and RFC 6750 "Authorization: Bearer" header with the   supplied token. This is an alias for Bearer Supplying Authentication will override any "Authorization" headers supplied to Headers or included in WebSession .


This feature was added in PowerShell 6.0.0.`, `WebAuthenticationType`),
        new Parameter(`Body`, `Specifies the body of the request. The body is the content of the request that follows the headers. You can also pipe a body value to "Invoke-RestMethod".


The Body parameter can be used to specify a list of query parameters or specify the content of the response.


When the input is a GET request, and the body is an "IDictionary" (typically, a hash table), the body is added to the Uniform Resource Identifier (URI) as query parameters. For other request types (such as POST), the body is set as the value of the request body in the standard name=value format.


When the body is a form, or it's the output of another "Invoke-WebRequest" call, PowerShell sets the request content to the form fields.


The Body parameter may also accept a System.Net.Http.MultipartFormDataContent object. This will facilitate "multipart/form-data" requests. When a MultipartFormDataContent object is supplied for Body , any content related headers supplied to the ContentType , Headers , or WebSession parameters will be overridden by the content headers of the "MultipartFormDataContent" object. This feature was added in PowerShell 6.0.0.`, `Object`),
        new Parameter(`Certificate`, `Specifies the client certificate that is used for a secure web request. Enter a variable that contains a certificate or a command or expression that gets the certificate.


To find a certificate, use "Get-PfxCertificate" or use the "Get-ChildItem" cmdlet in the Certificate ("Cert:") drive. If the certificate isn't valid or doesn't have sufficient authority, the command fails.`, `X509Certificate`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to send the request. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts; they do not work with domain accounts.


To get a certificate thumbprint, use the "Get-Item" or "Get-ChildItem" command in the PowerShell "Cert:" drive.


> [!NOTE] > This feature is currently only supported on Windows OS platforms.`, `String`),
        new Parameter(`ContentType`, `Specifies the content type of the web request.


If this parameter is omitted and the request method is POST, "Invoke-RestMethod" sets the content type to "application/x-www-form-urlencoded". Otherwise, the content type isn't specified in the call. ContentType will be overridden when a "MultipartFormDataContent" object is supplied for Body .`, `String`),
        new Parameter(`Credential`, `Specifies a user account that has permission to send the request. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. Credential can be used alone or in conjunction with certain Authentication parameter options. When used alone, it will only supply credentials to the remote server if the remote server sends an authentication challenge request. When used with Authentication options, the credentials will be explicitly sent.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`CustomMethod`, `Specifies custom method used for the web request. This can be used with the Request Method required by the endpoint is not an available option on the Method . Method and CustomMethod cannot be used together.


Example:


"Invoke-WebRequest -uri 'https://api.contoso.com/widget/' -CustomMethod 'TEST'"


This makes a "TEST" HTTP request to the API.


This feature was added in PowerShell 6.0.0.`, `String`),
        new Parameter(`DisableKeepAlive`, `Indicates that the cmdlet sets the KeepAlive value in the HTTP header to False. By default, KeepAlive is True. KeepAlive establishes a persistent connection to the server to facilitate subsequent requests.`, `SwitchParameter`),
        new Parameter(`FollowRelLink`, `Indicates the cmdlet should follow relation links.


Some REST APIs support pagination via Relation Links per RFC5988 (https://tools.ietf.org/html/rfc5988#page-6). Instead of parsing the header to get the URL for the next page, you can have the cmdlet do this for you. To set how many times to follow relation links, use the MaximumFollowRelLink parameter.


When using this switch, the cmdlet returns a collection of pages of results. Each page of results may contain multiple result items.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`Form`, `Converts a dictionary to a "multipart/form-data" submission. "-Form" may not be used with "-Body". If "-ContentType" will be ignored.


The keys of the dictionary will be used as the form field names. By default, form values will be converted to string values.


If the value is a System.IO.FileInfo object, then the binary file contents will be submitted. The name of the file will be submitted as the "filename". The MIME will be set as "application/octet-stream". "Get-Item" can be used to simplify supplying the System.IO.FileInfo object.




$Form = @{


resume = Get-Item 'c:\\Users\\jdoe\\Documents\\John Doe.pdf'


}




If the value is a collection type, such as an Array or List, the for field will be submitted multiple times. The values of the list will be treated as strings by default. If the value is a System.IO.FileInfo object, then the binary file contents will be submitted. Nested collections aren't supported.




$Form = @{


tags     = 'Vacation', 'Italy', '2017'


pictures = Get-ChildItem 'c:\\Users\\jdoe\\Pictures\\2017-Italy\'

}




In the above example, the "tags" field will be supplied three times in the form, once for each of "Vacation", "Italy", and "2017". The "pictures" field will also be submitted once for each file in the "2017-Italy" folder. The binary contents of the files in that folder will be submitted as the values.


This feature was added in PowerShell 6.1.0.`, `IDictionary`),
        new Parameter(`Headers`, `Specifies the headers of the web request. Enter a hash table or dictionary.


To set UserAgent headers, use the UserAgent parameter. You cannot use this parameter to specify "User-Agent" or cookie headers.


Content related headers, such as "Content-Type" will be overridden when a "MultipartFormDataContent" object is supplied for Body .`, `IDictionary`),
        new Parameter(`InFile`, `Gets the content of the web request from a file.


Enter a path and file name. If you omit the path, the default is the current location.`, `String`),
        new Parameter(`MaximumFollowRelLink`, `Specifies how many times to follow relation links if FollowRelLink is used. A smaller value may be needed if the REST api throttles due to too many requests. The default value is "[Int32]::MaxValue". A value of 0 (zero) prevents following relation links.`, `Int32`),
        new Parameter(`MaximumRedirection`, `Specifies how many times PowerShell redirects a connection to an alternate Uniform Resource Identifier (URI) before the connection fails. The default value is 5. A value of 0 (zero) prevents all redirection.`, `Int32`),
        new Parameter(`MaximumRetryCount`, `Specifies how many times PowerShell retries a connection when a failure code between 400 and 599, inclusive or 304 is received. Also see RetryIntervalSec parameter for specifying number of retries.`, `Int32`),
        new Parameter(`Method`, `Specifies the method used for the web request. The acceptable values for this parameter are:


- Default


- Delete


- Get


- Head


- Merge


- Options


- Patch


- Post


- Put


- Trace




The CustomMethod parameter can be used for Request Methods not listed above.`, `WebRequestMethod`),
        new Parameter(`NoProxy`, `Indicates that the cmdlet will not use a proxy to reach the destination.


When you need to bypass the proxy configured in Internet Explorer, or a proxy specified in the environment, use this switch.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`OutFile`, `Saves the response body in the specified output file. Enter a path and file name. If you omit the path, the default is the current location.


By default, "Invoke-RestMethod" returns the results to the pipeline. To send the results to a file and to the pipeline, use the Passthru parameter.`, `String`),
        new Parameter(`PassThru`, `Returns the results, in addition to writing them to a file. This parameter is valid only when the OutFile parameter is also used in the command.`, `SwitchParameter`),
        new Parameter(`PreserveAuthorizationOnRedirect`, `Indicates the cmdlet should preserve the "Authorization" header, when present, across redirections.


By default, the cmdlet strips the "Authorization" header before redirecting. Specifying this parameter disables this logic for cases where the header needs to be sent to the redirection location.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`Proxy`, `Uses a proxy server for the request, rather than connecting directly to the internet resource. Enter the Uniform Resource Identifier (URI) of a network proxy server.


This feature was added in PowerShell 6.0.0.`, `Uri`),
        new Parameter(`ProxyCredential`, `Specifies a user account that has permission to use the proxy server that is specified by the Proxy parameter. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , User@Domain.Com , or enter a "PSCredential" object, such as one generated by the "Get-Credential" cmdlet.


This parameter is valid only when the Proxy parameter is also used in the command. You can't use the ProxyCredential and ProxyUseDefaultCredentials parameters in the same command.`, `PSCredential`),
        new Parameter(`ProxyUseDefaultCredentials`, `Indicates that the cmdlet uses the credentials of the current user to access the proxy server that is specified by the Proxy parameter.


This parameter is valid only when the Proxy parameter is also used in the command. You can't use the ProxyCredential and ProxyUseDefaultCredentials parameters in the same command.`, `SwitchParameter`),
        new Parameter(`ResponseHeadersVariable`, `Creates a Response Headers Dictionary and saves it in the value of the specified variable. The keys of the dictionary will contain the field names of the Response Header returned by the web server and the values will be the respective field values.


This feature was added in PowerShell 6.0.0.`, `String`),
        new Parameter(`Resume`, `Performs a best effort attempt to resume downloading a partial file. The Resume parameter requires the OutFile parameter. Resume only operates on the size of the local file and remote file and performs no other validation that the local file and the remote file are the same.


If the local file size is smaller than the remote file size, then the cmdlet will attempt to resume downloading the file and append the remaining bytes to the end of the file.


If the local file size is the same as the remote file size, then no action is taken and the cmdlet assumes the download already completed.


If the local file size is larger than the remote file size, then the local file will be overwritten and the entire remote file will be completely re-downloaded. This behavior is the same as using OutFile without Resume .


If the remote server does not support download resuming, then the local file will be overwritten and the entire remote file will be completely re-downloaded. This behavior is the same as using OutFile without Resume .


If the local file doesn't exist, then the local file will be created and the entire remote file will be completely downloaded. This behavior is the same as using OutFile without Resume .


This feature was added in PowerShell 6.1.0.`, `SwitchParameter`),
        new Parameter(`RetryIntervalSec`, `Specifies the interval between retries for the connection when a failure code between 400 and 599, inclusive or 304 is received. Also see MaximumRetryCount parameter for specifying number of retries.`, `Int32`),
        new Parameter(`SessionVariable`, `Specifies a variable for which this cmdlet creates a web request session and saves it in the value. Enter a variable name without the dollar sign ("$") symbol.


When you specify a session variable, "Invoke-WebRequest" creates a web request session object and assigns it to a variable with the specified name in your PowerShell session. You can use the variable in your session as soon as the command completes.


Unlike a remote session, the web request session isn't a persistent connection. It's an object that contains information about the connection and the request, including cookies, credentials, the maximum redirection value, and the user agent string. You can use it to share state and data among web requests.


To use the web request session in subsequent web requests, specify the session variable in the value of the WebSession parameter. PowerShell uses the data in the web request session object when establishing the new connection. To override a value in the web request session, use a cmdlet parameter, such as UserAgent or Credential . Parameter values take precedence over values in the web request session.


You can't use the SessionVariable and WebSession parameters in the same command.`, `String`),
        new Parameter(`SkipCertificateCheck`, `Skips certificate validation checks that include all validations such as expiration, revocation, trusted root authority, etc.


> [!WARNING] > Using this parameter is not secure and is not recommended. This switch is only intended to be used > against known hosts using a self-signed certificate for testing purposes. Use at your own risk.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`SkipHeaderValidation`, `Indicates the cmdlet should add headers to the request without validation.


This switch should be used for sites that require header values that do not conform to standards. Specifying this switch disables validation to allow the value to be passed unchecked. When specified, all headers are added without validation.


This will disable validation for values passed to the ContentType , Headers, and UserAgent** parameters.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`SslProtocol`, `Sets the SSL/TLS protocols that are permissible for the web request. By default all, SSL/TLS protocols supported by the system are allowed. SslProtocol allows for limiting to specific protocols for compliance purposes. SslProtocol uses the "WebSslProtocol" Flag Enum. It is possible to supply more than one protocol using flag notation or combining multiple "WebSslProtocol" options with "-bor", however supplying multiple protocols is not supported on all platforms.


> [!NOTE] > On non-Windows platforms it may not be possible to supply "'Tls, Tls12'" as an option.


This feature was added in PowerShell 6.0.0.`, `WebSslProtocol`),
        new Parameter(`TimeoutSec`, `Specifies how long the request can be pending before it times out. Enter a value in seconds. The default value, 0, specifies an indefinite time-out.


A Domain Name System (DNS) query can take up to 15 seconds to return or time out. If your request contains a host name that requires resolution, and you set TimeoutSec to a value greater than zero, but less than 15 seconds, it can take 15 seconds or more before a WebException is thrown, and your request times out.`, `Int32`),
        new Parameter(`Token`, `The OAuth or Bearer token to include in the request. Token is required by certain Authentication options. It can't be used independently. Token takes a "SecureString" that contains the token. To supply the token, manually use the following:


"Invoke-RestMethod -Uri $uri -Authentication OAuth -Token (Read-Host -AsSecureString)"


This parameter was introduced in PowerShell 6.0.`, `SecureString`),
        new Parameter(`TransferEncoding`, `Specifies a value for the transfer-encoding HTTP response header. The acceptable values for this parameter are:


- Chunked


- Compress


- Deflate


- GZip


- Identity`, `String`),
        new Parameter(`Uri`, `Specifies the Uniform Resource Identifier (URI) of the internet resource to which the web request is sent. This parameter supports HTTP, HTTPS, FTP, and FILE values.


This parameter is required. The parameter name ( Uri ) is optional.`, `Uri`),
        new Parameter(`UseBasicParsing`, `This parameter has been deprecated. Beginning with PowerShell 6.0.0, all Web requests use basic parsing only. This parameter is included for backwards compatibility only and any use of it will have no effect on the operation of the cmdlet.`, `SwitchParameter`),
        new Parameter(`UseDefaultCredentials`, `Indicates that the cmdlet uses the credentials of the current user to send the web request. This can't be used with Authentication or Credential and may not be supported on all platforms.`, `SwitchParameter`),
        new Parameter(`UserAgent`, `Specifies a user agent string for the web request.


The default user agent is similar to "Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0" with slight variations for each operating system and platform.


To test a website with the standard user agent string that is used by most internet browsers, use the properties of the PSUserAgent (/dotnet/api/microsoft.powershell.commands.psuseragent)class, such as Chrome, FireFox, InternetExplorer, Opera, and Safari.


For example, the following command uses the user agent string for Internet Explorer.


"Invoke-RestMethod -Uri https://website.com/ -UserAgent ([Microsoft.PowerShell.Commands.PSUserAgent]::InternetExplorer)"`, `String`),
        new Parameter(`WebSession`, `Specifies a web request session. Enter the variable name, including the dollar sign ("$").


To override a value in the web request session, use a cmdlet parameter, such as UserAgent or Credential . Parameter values take precedence over values in the web request session. Content related headers, such as "Content-Type", will be also be overridden when a MultipartFormDataContent object is supplied for Body .


Unlike a remote session, the web request session isn't a persistent connection. It's an object that contains information about the connection and the request, including cookies, credentials, the maximum redirection value, and the user agent string. You can use it to share state and data among web requests.


To create a web request session, enter a variable name, without a dollar sign, in the value of the SessionVariable parameter of an "Invoke-WebRequest" command. "Invoke-WebRequest" creates the session and saves it in the variable. In subsequent commands, use the variable as the value of the WebSession parameter.


You can't use the SessionVariable and WebSession parameters in the same command.`, `WebRequestSession`),
    ], `Sends an HTTP or HTTPS request to a RESTful web service.`, `Invoke-RestMethod [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] -CustomMethod <String> [-DisableKeepAlive] [-FollowRelLink] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumFollowRelLink <Int32>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] -NoProxy [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-ResponseHeadersVariable <String>] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]

Invoke-RestMethod [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] -CustomMethod <String> [-DisableKeepAlive] [-FollowRelLink] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumFollowRelLink <Int32>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-Proxy <Uri>] [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-ResponseHeadersVariable <String>] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]

Invoke-RestMethod [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] [-DisableKeepAlive] [-FollowRelLink] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumFollowRelLink <Int32>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] [-Method {Default | Get | Head | Post | Put | Delete | Trace | Options | Merge | Patch}] [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-Proxy <Uri>] [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-ResponseHeadersVariable <String>] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]

Invoke-RestMethod [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] [-DisableKeepAlive] [-FollowRelLink] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumFollowRelLink <Int32>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] [-Method {Default | Get | Head | Post | Put | Delete | Trace | Options | Merge | Patch}] -NoProxy [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-ResponseHeadersVariable <String>] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-TroubleshootingPack`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-WebRequest`, [
        new Parameter(`AllowUnencryptedAuthentication`, `Allows sending of credentials and secrets over unencrypted connections. By default, supplying Credential or any Authentication option with a Uri that does not begin with "https://" results in an error and the request is aborted to prevent unintentionally communicating secrets in plain text over unencrypted connections. To override this behavior at your own risk, supply the AllowUnencryptedAuthentication parameter.


> [!WARNING] > Using this parameter is not secure and is not recommended. It is provided only for compatibility > with legacy systems that cannot provide encrypted connections. Use at your own risk.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`Authentication`, `Specifies the explicit authentication type to use for the request. The default is None . Authentication cannot be used with UseDefaultCredentials .


Available Authentication Options:


- None : This is the default option when Authentication isn't supplied; no explicit   authentication is used. - Basic : Requires Credential . The credentials are sent in an RFC 7617 Basic Authentication   header in the format of "base64(user:password)". - Bearer : Requires Token . Sends an RFC 6750 "Authorization: Bearer" header with the supplied   token. This is an alias for OAuth - OAuth : Requires Token . Sends an RFC 6750 "Authorization: Bearer" header with the supplied   token. This is an alias for Bearer Supplying Authentication overrides any "Authorization" headers supplied to Headers or included in WebSession .


This feature was added in PowerShell 6.0.0.`, `WebAuthenticationType`),
        new Parameter(`Body`, `Specifies the body of the request. The body is the content of the request that follows the headers. You can also pipe a body value to "Invoke-WebRequest".


The Body parameter can be used to specify a list of query parameters or specify the content of the response.


When the input is a GET request and the body is an "IDictionary" (typically, a hash table), the body is added to the URI as query parameters. For other request types (such as POST), the body is set as the value of the request body in the standard "name=value" format.


The Body parameter may also accept a "System.Net.Http.MultipartFormDataContent" object. This facilitates "multipart/form-data" requests. When a MultipartFormDataContent object is supplied for Body , any Content related headers supplied to the ContentType , Headers , or WebSession parameters is overridden by the Content headers of the MultipartFormDataContent object. This feature was added in PowerShell 6.0.0.`, `Object`),
        new Parameter(`Certificate`, `Specifies the client certificate that's used for a secure web request. Enter a variable that contains a certificate or a command or expression that gets the certificate.


To find a certificate, use "Get-PfxCertificate" or use the "Get-ChildItem" cmdlet in the Certificate ("Cert:") drive. If the certificate isn't valid or doesn't have sufficient authority, the command fails.`, `X509Certificate`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to send the request. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts; they don't work with domain accounts.


To get a certificate thumbprint, use the "Get-Item" or "Get-ChildItem" command in the PowerShell "Cert:" drive.


> [!NOTE] > This feature is currently only supported on Windows OS platforms.`, `String`),
        new Parameter(`ContentType`, `Specifies the content type of the web request.


If this parameter is omitted and the request method is POST, "Invoke-WebRequest" sets the content type to "application/x-www-form-urlencoded". Otherwise, the content type isn't specified in the call. ContentType is overridden when a MultipartFormDataContent object is supplied for Body .`, `String`),
        new Parameter(`Credential`, `Specifies a user account that has permission to send the request. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. Credential can be used alone or in conjunction with certain Authentication parameter options. When used alone, it only supplies credentials to the remote server if the remote server sends an authentication challenge request. When used with Authentication options, the credentials are explicitly sent.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`CustomMethod`, `Specifies a custom method used for the web request. This can be used if the Request Method required by the endpoint isn't an available option on the Method . Method and CustomMethod can't be used together.


This example makes a "TEST" HTTP request to the API:


"Invoke-WebRequest -uri 'https://api.contoso.com/widget/' -CustomMethod 'TEST'"


This feature was added in PowerShell 6.0.0.`, `String`),
        new Parameter(`DisableKeepAlive`, `Indicates that the cmdlet sets the KeepAlive value in the HTTP header to False . By default, KeepAlive is True . KeepAlive establishes a persistent connection to the server to facilitate subsequent requests.`, `SwitchParameter`),
        new Parameter(`Form`, `Converts a dictionary to a "multipart/form-data" submission. Form may not be used with Body . If ContentType is used, it's ignored.


The keys of the dictionary are used as the form field names. By default, form values are converted to string values.


If the value is a System.IO.FileInfo object, then the binary file contents are submitted. The name of the file is submitted as the filename property. The MIME type is set as "application/octet-stream". "Get-Item" can be used to simplify supplying the System.IO.FileInfo object.




$Form = @{


resume = Get-Item 'c:\\Users\\jdoe\\Documents\\John Doe.pdf'


}




If the value is a collection type, such Arrays or Lists, the for field are submitted multiple times. The values of the list are treated as strings by default. If the value is a System.IO.FileInfo object, then the binary file contents are submitted. Nested collections aren't supported.




$Form = @{


tags     = 'Vacation', 'Italy', '2017'


pictures = Get-ChildItem 'c:\\Users\\jdoe\\Pictures\\2017-Italy\'

}




In the above example the "tags" field are supplied three times in the form, once for each of "Vacation", "Italy", and "2017". The "pictures" field is also submitted once for each file in the "2017-Italy" folder. The binary contents of the files in that folder are submitted as the values.


This feature was added in PowerShell 6.1.0.`, `IDictionary`),
        new Parameter(`Headers`, `Specifies the headers of the web request. Enter a hash table or dictionary.


To set UserAgent headers, use the UserAgent parameter. You can't use this parameter to specify User-Agent or cookie headers.


Content related headers, such as "Content-Type" is overridden when a MultipartFormDataContent object is supplied for Body .`, `IDictionary`),
        new Parameter(`InFile`, `Gets the content of the web request from a file. Enter a path and file name. If you omit the path, the default is the current location.`, `String`),
        new Parameter(`MaximumRedirection`, `Specifies how many times PowerShell redirects a connection to an alternate Uniform Resource Identifier (URI) before the connection fails. The default value is 5. A value of 0 (zero) prevents all redirection.`, `Int32`),
        new Parameter(`MaximumRetryCount`, `Specifies how many times PowerShell retries a connection when a failure code between 400 and 599, inclusive or 304 is received. Also see RetryIntervalSec parameter for specifying number of retries.`, `Int32`),
        new Parameter(`Method`, `Specifies the method used for the web request. The acceptable values for this parameter are:


- Default


- Delete


- Get


- Head


- Merge


- Options


- Patch


- Post


- Put


- Trace




The CustomMethod parameter can be used for Request Methods not listed above.`, `WebRequestMethod`),
        new Parameter(`NoProxy`, `Indicates that the cmdlet shouldn't use a proxy to reach the destination. When you need to bypass the proxy configured in the environment, use this switch. This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`OutFile`, `Specifies the output file for which this cmdlet saves the response body. Enter a path and file name. If you omit the path, the default is the current location.


By default, "Invoke-WebRequest" returns the results to the pipeline. To send the results to a file and to the pipeline, use the Passthru parameter.`, `String`),
        new Parameter(`PassThru`, `Indicates that the cmdlet returns the results, in addition to writing them to a file. This parameter is valid only when the OutFile parameter is also used in the command.`, `SwitchParameter`),
        new Parameter(`PreserveAuthorizationOnRedirect`, `Indicates the cmdlet should preserve the "Authorization" header, when present, across redirections.


By default, the cmdlet strips the "Authorization" header before redirecting. Specifying this parameter disables this logic for cases where the header needs to be sent to the redirection location.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`Proxy`, `Specifies a proxy server for the request, rather than connecting directly to the internet resource. Enter the URI of a network proxy server.`, `Uri`),
        new Parameter(`ProxyCredential`, `Specifies a user account that has permission to use the proxy server that is specified by the Proxy parameter. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , User@Domain.Com , or enter a "PSCredential" object, such as one generated by the "Get-Credential" cmdlet.


This parameter is valid only when the Proxy parameter is also used in the command. You can't use the ProxyCredential and ProxyUseDefaultCredentials parameters in the same command.`, `PSCredential`),
        new Parameter(`ProxyUseDefaultCredentials`, `Indicates that the cmdlet uses the credentials of the current user to access the proxy server that is specified by the Proxy parameter.


This parameter is valid only when the Proxy parameter is also used in the command. You can't use the ProxyCredential and ProxyUseDefaultCredentials parameters in the same command.`, `SwitchParameter`),
        new Parameter(`Resume`, `Performs a best effort attempt to resume downloading a partial file. Resume requires OutFile . Resume only operates on the size of the local file and remote file and performs no other validation that the local file and the remote file are the same.


If the local file size is smaller than the remote file size, then the cmdlet attempts to resume downloading the file and append the remaining bytes to the end of the file.


If the local file size is the same as the remote file size, then no action is taken and the cmdlet assumes the download already complete.


If the local file size is larger than the remote file size, then the local file is overwritten and the entire remote file is re-downloaded. This behavior is the same as using OutFile without Resume .


If the remote server does not support download resuming, then the local file is overwritten and the entire remote file is re-downloaded. This behavior is the same as using OutFile without Resume .


If the local file does not exist, then the local file is created and the entire remote file is downloaded. This behavior is the same as using OutFile without Resume .


This feature was added in PowerShell 6.1.0.`, `SwitchParameter`),
        new Parameter(`RetryIntervalSec`, `Specifies the interval between retries for the connection when a failure code between 400 and 599, inclusive or 304 is received. Also see MaximumRetryCount parameter for specifying number of retries.`, `Int32`),
        new Parameter(`SessionVariable`, `Specifies a variable for which this cmdlet creates a web request session and saves it in the value. Enter a variable name without the dollar sign ("$") symbol.


When you specify a session variable, "Invoke-WebRequest" creates a web request session object and assigns it to a variable with the specified name in your PowerShell session. You can use the variable in your session as soon as the command completes.


Unlike a remote session, the web request session is not a persistent connection. It's an object that contains information about the connection and the request, including cookies, credentials, the maximum redirection value, and the user agent string. You can use it to share state and data among web requests.


To use the web request session in subsequent web requests, specify the session variable in the value of the WebSession parameter. PowerShell uses the data in the web request session object when establishing the new connection. To override a value in the web request session, use a cmdlet parameter, such as UserAgent or Credential . Parameter values take precedence over values in the web request session.


You can't use the SessionVariable and WebSession parameters in the same command.`, `String`),
        new Parameter(`SkipCertificateCheck`, `Skips certificate validation checks. This includes all validations such as expiration, revocation, trusted root authority, etc.


> [!WARNING] > Using this parameter is not secure and is not recommended. This switch is only intended to be used > against known hosts using a self-signed certificate for testing purposes. Use at your own risk.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`SkipHeaderValidation`, `Indicates the cmdlet should add headers to the request without validation.


This switch should be used for sites that require header values that do not conform to standards. Specifying this switch disables validation to allow the value to be passed unchecked. When specified, all headers are added without validation.


This switch disables validation for values passed to the ContentType , Headers and UserAgent parameters.


This feature was added in PowerShell 6.0.0.`, `SwitchParameter`),
        new Parameter(`SslProtocol`, `Sets the SSL/TLS protocols that are permissible for the web request. By default all, SSL/TLS protocols supported by the system are allowed. SslProtocol allows for limiting to specific protocols for compliance purposes. SslProtocol uses the WebSslProtocol Flag Enum. It is possible to supply more than one protocol using flag notation or combining multiple WebSslProtocol options with bor , however supplying multiple protocols is not supported on all platforms.


> [!NOTE] > On non-Windows platforms it may not be possible to supply "'Tls, Tls12'" as an option.


This feature was added in PowerShell 6.0.0.`, `WebSslProtocol`),
        new Parameter(`TimeoutSec`, `Specifies how long the request can be pending before it times out. Enter a value in seconds. The default value, 0, specifies an indefinite time-out.


A Domain Name System (DNS) query can take up to 15 seconds to return or time out. If your request contains a host name that requires resolution, and you set TimeoutSec to a value greater than zero, but less than 15 seconds, it can take 15 seconds or more before a WebException is thrown, and your request times out.`, `Int32`),
        new Parameter(`Token`, `The OAuth or Bearer token to include in the request. Token is required by certain Authentication options. It cannot be used independently. Token takes a "SecureString" containing the token. To supply the token manually use the following:


"Invoke-WebRequest -Uri $uri -Authentication OAuth -Token (Read-Host -AsSecureString)"


This parameter was introduced in PowerShell 6.0.`, `SecureString`),
        new Parameter(`TransferEncoding`, `Specifies a value for the transfer-encoding HTTP response header. The acceptable values for this parameter are:


- Chunked


- Compress


- Deflate


- GZip


- Identity`, `String`),
        new Parameter(`Uri`, `Specifies the Uniform Resource Identifier (URI) of the internet resource to which the web request is sent. Enter a URI. This parameter supports HTTP or HTTPS only.


This parameter is required. The parameter name Uri is optional.`, `Uri`),
        new Parameter(`UseBasicParsing`, `This parameter has been deprecated. Beginning with PowerShell 6.0.0, all Web requests use basic parsing only. This parameter is included for backwards compatibility only and any use of it has no effect on the operation of the cmdlet.`, `SwitchParameter`),
        new Parameter(`UseDefaultCredentials`, `Indicates that the cmdlet uses the credentials of the current user to send the web request. This can't be used with Authentication or Credential and may not be supported on all platforms.`, `SwitchParameter`),
        new Parameter(`UserAgent`, `Specifies a user agent string for the web request.


The default user agent is similar to "Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0" with slight variations for each operating system and platform.


To test a website with the standard user agent string that is used by most internet browsers, use the properties of the PSUserAgent (/dotnet/api/microsoft.powershell.commands.psuseragent)class, such as Chrome, FireFox, InternetExplorer, Opera, and Safari.


For example, the following command uses the user agent string for Internet Explorer:




Invoke-WebRequest -Uri https://website.com/ -UserAgent ([Microsoft.PowerShell.Commands.PSUserAgent]::InternetExplorer)`, `String`),
        new Parameter(`WebSession`, `Specifies a web request session. Enter the variable name, including the dollar sign ("$").


To override a value in the web request session, use a cmdlet parameter, such as UserAgent or Credential . Parameter values take precedence over values in the web request session. Content related headers, such as "Content-Type", are also be overridden when a MultipartFormDataContent object is supplied for Body .


Unlike a remote session, the web request session isn't a persistent connection. It's an object that contains information about the connection and the request, including cookies, credentials, the maximum redirection value, and the user agent string. You can use it to share state and data among web requests.


To create a web request session, enter a variable name, without a dollar sign, in the value of the SessionVariable parameter of an "Invoke-WebRequest" command. "Invoke-WebRequest" creates the session and saves it in the variable. In subsequent commands, use the variable as the value of the WebSession parameter.


You can't use the SessionVariable and WebSession parameters in the same command.`, `WebRequestSession`),
    ], `Gets content from a web page on the internet.`, `Invoke-WebRequest [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] -CustomMethod <String> [-DisableKeepAlive] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-Proxy <Uri>] [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]

Invoke-WebRequest [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] -CustomMethod <String> [-DisableKeepAlive] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] -NoProxy [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]

Invoke-WebRequest [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] [-DisableKeepAlive] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] [-Method {Default | Get | Head | Post | Put | Delete | Trace | Options | Merge | Patch}] [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-Proxy <Uri>] [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]

Invoke-WebRequest [-Uri] <Uri> [-AllowUnencryptedAuthentication] [-Authentication {None | Basic | Bearer | OAuth}] [-Body <Object>] [-Certificate <X509Certificate>] [-CertificateThumbprint <String>] [-ContentType <String>] [-Credential <PSCredential>] [-DisableKeepAlive] [-Form <IDictionary>] [-Headers <IDictionary>] [-InFile <String>] [-MaximumRedirection <Int32>] [-MaximumRetryCount <Int32>] [-Method {Default | Get | Head | Post | Put | Delete | Trace | Options | Merge | Patch}] -NoProxy [-OutFile <String>] [-PassThru] [-PreserveAuthorizationOnRedirect] [-Resume] [-RetryIntervalSec <Int32>] [-SessionVariable <String>] [-SkipCertificateCheck] [-SkipHeaderValidation] [-SslProtocol {Default | Tls | Tls11 | Tls12}] [-TimeoutSec <Int32>] [-Token <SecureString>] [-TransferEncoding {chunked | compress | deflate | gzip | identity}] [-UseBasicParsing] [-UseDefaultCredentials] [-UserAgent <String>] [-WebSession <WebRequestSession>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Invoke-WSManAction`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Join-Path`, [
        new Parameter(`AdditionalChildPath`, `Specifies additional elements to append to the value of the Path parameter. The "ChildPath" parameter is still mandatory and must be specified as well.


This parameter is specified with the "ValueFromRemainingArguments" property which enables joining an indefinite number of paths.`, `String[]`),
        new Parameter(`ChildPath`, `Specifies the elements to append to the value of the "Path" parameter. Wildcards are permitted. The "ChildPath" parameter is required, although the parameter name ("ChildPath") is optional.`, `String`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Path`, `Specifies the main path (or paths) to which the child-path is appended. Wildcards are permitted.


The value of "Path" determines which provider joins the paths and adds the path delimiters. The "Path" parameter is required, although the parameter name ("Path") is optional.`, `String[]`),
        new Parameter(`Resolve`, `Indicates that this cmdlet should attempt to resolve the joined path from the current provider.


- If wildcards are used, the cmdlet returns all paths that match the joined path.


- If no wildcards are used, the cmdlet will error if the path does not exist.`, `SwitchParameter`),
    ], `Combines a path and a child path into a single path.`, `Join-Path [-Path] <String[]> [-ChildPath] <String> [[-AdditionalChildPath] <String[]>] [-Credential <PSCredential>] [-Resolve] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Join-String`, [
        new Parameter(`DoubleQuote`, `Wraps the string value of each pipeline object in double-quotes.`, `SwitchParameter`),
        new Parameter(`FormatString`, `A format string that specifies how each item should be formatted.`, `String`),
        new Parameter(`InputObject`, `Specifies the text to be joined. Enter a variable that contains the text, or type a command or expression that gets the objects to join into strings.`, `PSObject`),
        new Parameter(`OutputPrefix`, `Text that's inserted before the output string. The string can contain special characters such as carriage return ("" "r ""), newline ("" "n ""), and tab ("" "t "").`, `String`),
        new Parameter(`OutputSuffix`, `Text that's appended to the output string. The string can contain special characters such as carriage return ("" "r ""), newline ("" "n ""), and tab ("" "t "").`, `String`),
        new Parameter(`Property`, `The name of a property, or a property expression, that will project the pipeline object to text.`, `PSPropertyExpression`),
        new Parameter(`Separator`, `Text or characters such as a comma or semicolon that's inserted between the text for each pipeline object.`, `String`),
        new Parameter(`SingleQuote`, `Wraps the string value of each pipeline object in single quotes.`, `SwitchParameter`),
        new Parameter(`UseCulture`, `Uses the list separator for the current culture as the item delimiter. To find the list separator for a culture, use the following command: "(Get-Culture).TextInfo.ListSeparator".`, `SwitchParameter`),
    ], `Combines objects from the pipeline into a single string.`, `Join-String [[-Property] <PSPropertyExpression>] [[-Separator] <String>] [-DoubleQuote] [-InputObject <PSObject>] [-OutputPrefix <String>] [-OutputSuffix <String>] [-UseCulture] [<CommonParameters>]

Join-String [[-Property] <PSPropertyExpression>] [[-Separator] <String>] [-FormatString <String>] [-InputObject <PSObject>] [-OutputPrefix <String>] [-OutputSuffix <String>] [-UseCulture] [<CommonParameters>]

Join-String [[-Property] <PSPropertyExpression>] [[-Separator] <String>] [-InputObject <PSObject>] [-OutputPrefix <String>] [-OutputSuffix <String>] [-SingleQuote] [-UseCulture] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Measure-Command`, [
        new Parameter(`Expression`, `Specifies the expression that is being timed. Enclose the expression in braces ({}). The parameter name (" Expression ") is optional.`, `ScriptBlock`),
        new Parameter(`InputObject`, `Objects bound to the "InputObject" parameter are optional input for the "ScriptBlock" passed to the "Expression" parameter. Inside the "ScriptBlock", "$_" can be used to reference the current object in the pipeline.`, `PSObject`),
    ], `Measures the time it takes to run script blocks and cmdlets.`, `Measure-Command [-Expression] <ScriptBlock> [-InputObject <PSObject>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Measure-Object`, [
        new Parameter(`Average`, `Indicates that the cmdlet displays the average value of the specified properties.`, `SwitchParameter`),
        new Parameter(`Character`, `Indicates that the cmdlet counts the number of characters in the input objects.


> [!NOTE] > The Word , Char and Line switches count inside each input object, as well as across > input objects. See Example 7.`, `SwitchParameter`),
        new Parameter(`IgnoreWhiteSpace`, `Indicates that the cmdlet ignores white space in character counts. By default, white space is not ignored.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the objects to be measured. Enter a variable that contains the objects, or type a command or expression that gets the objects.


When you use the InputObject parameter with "Measure-Object", instead of piping command results to "Measure-Object", the InputObject value is treated as a single object.


It is recommended that you use "Measure-Object" in the pipeline if you want to measure a collection of objects based on whether the objects have specific values in defined properties.`, `PSObject`),
        new Parameter(`Line`, `Indicates that the cmdlet counts the number of lines in the input objects.


> [!NOTE] > The Word , Char and Line switches count inside each input object, as well as across > input objects. See Example 7.`, `SwitchParameter`),
        new Parameter(`Maximum`, `Indicates that the cmdlet displays the maximum value of the specified properties.`, `SwitchParameter`),
        new Parameter(`Minimum`, `Indicates that the cmdlet displays the minimum value of the specified properties.`, `SwitchParameter`),
        new Parameter(`Property`, `Specifies one or more properties to measure. If you do not specify any other measures, "Measure-Object" counts the objects that have the properties you specify.`, `PSPropertyExpression[]`),
        new Parameter(`StandardDeviation`, `Indicates that the cmdlet displays the standard deviation of the values of the specified properties.`, `SwitchParameter`),
        new Parameter(`Sum`, `Indicates that the cmdlet displays the sum of the values of the specified properties.`, `SwitchParameter`),
        new Parameter(`AllStats`, `Indicates that the cmdlet displays all the statistics of the specified properties.`, `SwitchParameter`),
        new Parameter(`Word`, `Indicates that the cmdlet counts the number of words in the input objects.


> [!NOTE] > The Word , Char and Line switches count inside each input object, as well as across > input objects. See Example 7.`, `SwitchParameter`),
    ], `Calculates the numeric properties of objects, and the characters, words, and lines in string objects, such as files of text.`, `Measure-Object [[-Property] <PSPropertyExpression[]>] [-Average] [-InputObject <PSObject>] [-Maximum] [-Minimum] [-StandardDeviation] [-Sum] [-AllStats] [<CommonParameters>]

Measure-Object [[-Property] <PSPropertyExpression[]>] [-Character] [-IgnoreWhiteSpace] [-InputObject <PSObject>] [-Line] [-Word] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Mount-AppxVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Mount-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Move-AppxPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Move-Item`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Destination`, `Specifies the path to the location where the items are being moved. The default is the current directory. Wildcards are permitted, but the result must specify a single location.


To rename the item being moved, specify a new name in the value of the Destination parameter.`, `String`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the current location of the items. The default is the current directory. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Moves an item from one location to another.`, `Move-Item [[-Destination] <String>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Move-Item [-Path] <String[]> [[-Destination] <String>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Move-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Destination`, `Specifies the path to the destination location.`, `String`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the property to be moved.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the current location of the property. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Moves a property from one location to another.`, `Move-ItemProperty [-Destination] <String> [-Name] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Move-ItemProperty [-Path] <String[]> [-Destination] <String> [-Name] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Alias`, [
        new Parameter(`Description`, `Specifies a description of the alias. You can type any string. If the description includes spaces, enclose it in quotation marks.`, `String`),
        new Parameter(`Force`, `Indicates that the cmdlet acts like Set-Alias if the alias named already exists.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies the new alias. You can use any alphanumeric characters in an alias, but the first character cannot be a number.`, `String`),
        new Parameter(`Option`, `Specifies the value of the Options property of the alias. Valid values are:


- None: The alias has no constraints (default value)


- ReadOnly: The alias can be deleted but cannot be changed except by using the Force parameter - Constant: The alias cannot be deleted or changed


- Private: The alias is available only in the current scope


- AllScope: The alias is copied to any new scopes that are created


- Unspecified: The option is not specified




To see the Options property of all aliases in the session, type "Get-Alias | Format-Table -Property Name, Options -AutoSize".`, `ScopedItemOptions`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Scope`, `Specifies the scope of the new alias. The acceptable values for this parameter are:


- Global


- Local


- Script


- A number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent).




Local is the default. For more information, see about_Scopes.`, `String`),
        new Parameter(`Value`, `Specifies the name of the cmdlet or command element that is being aliased.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates a new alias.`, `New-Alias [-Name] <String> [-Value] <String> [-Description <String>] [-Force] [-Option {None | ReadOnly | Constant | Private | AllScope | Unspecified}] [-PassThru] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-CimInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-CimSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-CimSessionOption`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Event`, [
        new Parameter(`EventArguments`, `Specifies an object that contains options for the event.`, `PSObject[]`),
        new Parameter(`MessageData`, `Specifies additional data associated with the event. The value of this parameter appears in the MessageData property of the event object.`, `PSObject`),
        new Parameter(`Sender`, `Specifies the object that raises the event. The default is the PowerShell engine.`, `PSObject`),
        new Parameter(`SourceIdentifier`, `Specifies a name for the new event. This parameter is required, and it must be unique in the session.


The value of this parameter appears in the SourceIdentifier property of the events.`, `String`),
    ], `Creates a new event.`, `New-Event [-SourceIdentifier] <String> [[-Sender] <PSObject>] [[-EventArguments] <PSObject[]>] [[-MessageData] <PSObject>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-FileCatalog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Guid`, [], `Creates a GUID.`, `New-Guid [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Item`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. To impersonate another > user or elevate your credentials when running this cmdlet, use "Invoke-Command".`, `PSCredential`),
        new Parameter(`Force`, `Forces this cmdlet to create an item that writes over an existing read-only item. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md). Even using the Force parameter, the cmdlet cannot override security restrictions.`, `SwitchParameter`),
        new Parameter(`ItemType`, `Specifies the provider-specified type of the new item. The available values of this parameter depend on the current provider you are using.


If your location is in a "FileSystem" drive, the following values are allowed:


- File


- Directory


- SymbolicLink


- Junction


- HardLink




> [!NOTE] > Creating a "SymbolicLink" type on Windows requires elevation as administrator. However, Windows 10 > (build 14972 or newer) with Developer Mode enabled no longer requires elevation creating symbolic > links.


In a "Certificate" drive, these are the values you can specify:


- Certificate Provider


- Certificate


- Store


- StoreLocation



For more information see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `String`),
        new Parameter(`Name`, `Specifies the name of the new item.


You can specify the name of the new item in the Name or Path parameter value, and you can specify the path of the new item in Name or Path value.`, `String`),
        new Parameter(`Path`, `Specifies the path of the location of the new item. Wildcard characters are permitted. You can specify the name of the new item in Name , or include it in Path .`, `String[]`),
        new Parameter(`Value`, `Specifies the value of the new item. You can also pipe a value to "New-Item".`, `Object`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates a new item.`, `New-Item [[-Path] <String[]>] [-Credential <PSCredential>] [-Force] [-ItemType <String>] -Name <String> [-Value <Object>] [-Confirm] [-WhatIf] [<CommonParameters>]

New-Item [[-Path] <String[]>] [-Credential <PSCredential>] [-Force] [-ItemType <String>] [-Value <Object>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to create a property on an object that cannot otherwise be accessed by the user. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies a name for the new property. If the property is a registry entry, this parameter specifies the name of the entry.`, `String`),
        new Parameter(`Path`, `Specifies the path of the item. Wildcard characters are permitted. This parameter identifies the item to which this cmdlet adds the new property.`, `String[]`),
        new Parameter(`PropertyType`, `Specifies the type of property that this cmdlet adds. The acceptable values for this parameter are:


- String :   Specifies a null-terminated string.   Equivalent to REG_SZ . - ExpandString :   Specifies a null-terminated string that contains unexpanded references to environment variables that are expanded when the value is retrieved.   Equivalent to REG_EXPAND_SZ . - Binary :   Specifies binary data in any form.   Equivalent to REG_BINARY . - DWord :   Specifies a 32-bit binary number.   Equivalent to REG_DWORD . - MultiString :   Specifies an array of null-terminated strings terminated by two null characters.   Equivalent to REG_MULTI_SZ . - Qword :   Specifies a 64-bit binary number.   Equivalent to REG_QWORD . - Unknown :   Indicates an unsupported registry data type, such as REG_RESOURCE_LIST .`, `String`),
        new Parameter(`Value`, `Specifies the property value. If the property is a registry entry, this parameter specifies the value of the entry.`, `Object`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates a new property for an item and sets its value.`, `New-ItemProperty [-Name] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PropertyType <String>] [-Value <Object>] [-Confirm] [-WhatIf] [<CommonParameters>]

New-ItemProperty [-Path] <String[]> [-Name] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PropertyType <String>] [-Value <Object>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-LocalGroup`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Module`, [
        new Parameter(`ArgumentList`, `Specifies an array of arguments which are parameter values that are passed to the script block.`, `Object[]`),
        new Parameter(`AsCustomObject`, `Indicates that this cmdlet returns a custom object that represents the dynamic module. The module members are implemented as script methods of the custom object, but they are not imported into the session. You can save the custom object in a variable and use dot notation to invoke the members.


If the module has multiple members with the same name, such as a function and a variable that are both named A, only one member with each name can be accessed from the custom object.`, `SwitchParameter`),
        new Parameter(`Cmdlet`, `Specifies an array of cmdlets that this cmdlet exports from the module into the current session. Enter a comma-separated list of cmdlets. Wildcard characters are permitted. By default, all cmdlets in the module are exported.


You cannot define cmdlets in a script block, but a dynamic module can include cmdlets if it imports the cmdlets from a binary module.`, `String[]`),
        new Parameter(`Function`, `Specifies an array of functions that this cmdlet exports from the module into the current session. Enter a comma-separated list of functions. Wildcard characters are permitted. By default, all functions defined in a module are exported.`, `String[]`),
        new Parameter(`Name`, `Specifies a name for the new module. You can also pipe a module name to New-Module.


The default value is an autogenerated name that starts with " _DynamicModule " and is followed by a GUID that specifies the path of the dynamic module.`, `String`),
        new Parameter(`ReturnResult`, `Indicates that this cmdlet runs the script block and returns the script block results instead of returning a module object.`, `SwitchParameter`),
        new Parameter(`ScriptBlock`, `Specifies the contents of the dynamic module. Enclose the contents in braces ( { } ) to create a script block. This parameter is required.`, `ScriptBlock`),
    ], `Creates a new dynamic module that exists only in memory.`, `New-Module [-Name] <String> [-ScriptBlock] <ScriptBlock> [-ArgumentList <Object[]>] [-AsCustomObject] [-Cmdlet <String[]>] [-Function <String[]>] [-ReturnResult] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-ModuleManifest`, [
        new Parameter(`AliasesToExport`, `Specifies the aliases that the module exports. Wildcards are permitted.


You can use this parameter to restrict the aliases that are exported by the module. It can remove aliases from the list of exported aliases, but it can't add aliases to the list.


If you omit this parameter, "New-ModuleManifest" creates an AliasesToExport key with a value of "*" (all), meaning that all aliases defined in the module are exported by the manifest.`, `String[]`),
        new Parameter(`Author`, `Specifies the module author.


If you omit this parameter, "New-ModuleManifest" creates an Author key with the name of the current user.`, `String`),
        new Parameter(`ClrVersion`, `Specifies the minimum version of the Common Language Runtime (CLR) of the Microsoft .NET Framework that the module requires.`, `Version`),
        new Parameter(`CmdletsToExport`, `Specifies the cmdlets that the module exports. Wildcards are permitted.


You can use this parameter to restrict the cmdlets that are exported by the module. It can remove cmdlets from the list of exported cmdlets, but it can't add cmdlets to the list.


If you omit this parameter, "New-ModuleManifest" creates a CmdletsToExport key with a value of "*" (all), meaning that all cmdlets defined in the module are exported by the manifest.`, `String[]`),
        new Parameter(`CompanyName`, `Identifies the company or vendor who created the module.


If you omit this parameter, "New-ModuleManifest" creates a CompanyName key with a value of "Unknown".`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`CompatiblePSEditions`, `Specifies the module's compatible PSEditions. For information about PSEdition, see Modules with compatible PowerShell Editions (/powershell/scripting/gallery/concepts/module-psedition-support).`, `String[]`),
        new Parameter(`Copyright`, `Specifies a copyright statement for the module.


If you omit this parameter, "New-ModuleManifest" creates a Copyright key with a value of "(c) <year> <username>. All rights reserved." where "<year>" is the current year and "<username>" is the value of the Author key.`, `String`),
        new Parameter(`Description`, `Describes the contents of the module.`, `String`),
        new Parameter(`DotNetFrameworkVersion`, `Specifies the minimum version of the Microsoft .NET Framework that the module requires.`, `Version`),
        new Parameter(`DscResourcesToExport`, `Specifies the Desired State Configuration (DSC) resources that the module exports. Wildcards are permitted.`, `String[]`),
        new Parameter(`FileList`, `Specifies all items that are included in the module.


This key is designed to act as a module inventory. The files listed in the key are included when the module is published, but any functions aren't automatically exported.`, `String[]`),
        new Parameter(`FormatsToProcess`, `Specifies the formatting files (".ps1xml") that run when the module is imported.


When you import a module, PowerShell runs the "Update-FormatData" cmdlet with the specified files. Because formatting files aren't scoped, they affect all session states in the session.`, `String[]`),
        new Parameter(`FunctionsToExport`, `Specifies the functions that the module exports. Wildcards are permitted.


You can use this parameter to restrict the functions that are exported by the module. It can remove functions from the list of exported aliases, but it can't add functions to the list.


If you omit this parameter, "New-ModuleManifest" creates an FunctionsToExport key with a value of "*" (all), meaning that all functions defined in the module are exported by the manifest.`, `String[]`),
        new Parameter(`Guid`, `Specifies a unique identifier for the module. The GUID can be used to distinguish among modules with the same name.


If you omit this parameter, "New-ModuleManifest" creates a GUID key in the manifest and generates a GUID for the value.


To create a new GUID in PowerShell, type "[guid]::NewGuid()".`, `Guid`),
        new Parameter(`HelpInfoUri`, `Specifies the internet address of the HelpInfo XML file for the module. Enter a Uniform Resource Identifier (URI) that begins with http or https .


The HelpInfo XML file supports the Updatable Help feature that was introduced in PowerShell 3.0. It contains information about the location of downloadable help files for the module and the version numbers of the newest help files for each supported locale.


For information about Updatable Help, see about_Updatable_Help (./About/about_Updatable_Help.md). For information about the HelpInfo XML file, see Supporting Updatable Help (/powershell/scripting/developer/module/supporting-updatable-help).


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`IconUri`, `Specifies the URL of an icon for the module. The specified icon is displayed on the gallery web page for the module.`, `Uri`),
        new Parameter(`LicenseUri`, `Specifies the URL of licensing terms for the module.`, `Uri`),
        new Parameter(`ModuleList`, `Lists all modules that are included in this module.


Enter each module name as a string or as a hash table with ModuleName and ModuleVersion keys. The hash table can also have an optional GUID key. You can combine strings and hash tables in the parameter value.


This key is designed to act as a module inventory. The modules that are listed in the value of this key aren't automatically processed.`, `Object[]`),
        new Parameter(`ModuleVersion`, `Specifies the module's version.


This parameter isn't required, but a ModuleVersion key is required in the manifest. If you omit this parameter, "New-ModuleManifest" creates a ModuleVersion key with a value of 1.0.`, `Version`),
        new Parameter(`NestedModules`, `Specifies script modules (".psm1") and binary modules (".dll") that are imported into the module's session state. The files in the NestedModules key run in the order in which they're listed in the value.


Enter each module name as a string or as a hash table with ModuleName and ModuleVersion keys. The hash table can also have an optional GUID key. You can combine strings and hash tables in the parameter value.


Typically, nested modules contain commands that the root module needs for its internal processing. By default, the commands in nested modules are exported from the module's session state into the caller's session state, but the root module can restrict the commands that it exports. For example, by using an "Export-ModuleMember" command.


Nested modules in the module session state are available to the root module, but they aren't returned by a "Get-Module" command in the caller's session state.


Scripts (".ps1") that are listed in the NestedModules key are run in the module's session state, not in the caller's session state. To run a script in the caller's session state, list the script file name in the value of the ScriptsToProcess key in the manifest.`, `Object[]`),
        new Parameter(`PassThru`, `Writes the resulting module manifest to the console and creates a ".psd1" file. By default, this cmdlet doesn't generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path and file name of the new module manifest. Enter a path and file name with a ".psd1" file name extension, such as "$pshome\\Modules\\MyModule\\MyModule.psd1". The Path parameter is required.


If you specify the path to an existing file, "New-ModuleManifest" replaces the file without warning unless the file has the read-only attribute.


The manifest should be located in the module's directory, and the manifest file name should be the same as the module directory name, but with a ".psd1" file name extension.


> [!NOTE] > You cannot use variables, such as "$PSHOME" or "$HOME", in response to a prompt for a Path > parameter value. To use a variable, include the Path parameter in the command.`, `String`),
        new Parameter(`PowerShellHostName`, `Specifies the name of the PowerShell host program that the module requires. Enter the name of the host program, such as Windows PowerShell ISE Host or ConsoleHost . Wildcards aren't permitted.


To find the name of a host program, in the program, type "$Host.Name".`, `String`),
        new Parameter(`PowerShellHostVersion`, `Specifies the minimum version of the PowerShell host program that works with the module. Enter a version number, such as 1.1.`, `Version`),
        new Parameter(`PowerShellVersion`, `Specifies the minimum version of PowerShell that works with this module. For example, you can enter 1.0, 2.0, or 3.0 as the parameter's value.`, `Version`),
        new Parameter(`PrivateData`, `Specifies data that is passed to the module when it's imported.`, `Object`),
        new Parameter(`ProcessorArchitecture`, `Specifies the processor architecture that the module requires. Valid values are x86, AMD64, IA64, MSIL, and None (unknown or unspecified).`, `ProcessorArchitecture`),
        new Parameter(`ProjectUri`, `Specifies the URL of a web page about this project.`, `Uri`),
        new Parameter(`ReleaseNotes`, `Specifies release notes.`, `String`),
        new Parameter(`RequiredAssemblies`, `Specifies the assembly (".dll") files that the module requires. Enter the assembly file names. PowerShell loads the specified assemblies before updating types or formats, importing nested modules, or importing the module file that is specified in the value of the RootModule key.


Use this parameter to list all the assemblies that the module requires, including assemblies that must be loaded to update any formatting or type files that are listed in the FormatsToProcess or TypesToProcess keys, even if those assemblies are also listed as binary modules in the NestedModules key.`, `String[]`),
        new Parameter(`RequiredModules`, `Specifies modules that must be in the global session state. If the required modules aren't in the global session state, PowerShell imports them. If the required modules aren't available, the "Import-Module" command fails.


Enter each module name as a string or as a hash table with ModuleName and ModuleVersion keys. The hash table can also have an optional GUID key. You can combine strings and hash tables in the parameter value.


In PowerShell 2.0, "Import-Module" doesn't import required modules automatically. It just verifies that the required modules are in the global session state.`, `Object[]`),
        new Parameter(`ScriptsToProcess`, `Specifies script (".ps1") files that run in the caller's session state when the module is imported. You can use these scripts to prepare an environment, just as you might use a login script.


To specify scripts that run in the module's session state, use the NestedModules key.`, `String[]`),
        new Parameter(`Tags`, `Specifies an array of tags.`, `String[]`),
        new Parameter(`TypesToProcess`, `Specifies the type files (".ps1xml") that run when the module is imported.


When you import the module, PowerShell runs the "Update-TypeData" cmdlet with the specified files. Because type files aren't scoped, they affect all session states in the session.`, `String[]`),
        new Parameter(`VariablesToExport`, `Specifies the variables that the module exports. Wildcards are permitted.


You can use this parameter to restrict the variables that are exported by the module. It can remove variables from the list of exported variables, but it can't add variables to the list.


If you omit this parameter, "New-ModuleManifest" creates a VariablesToExport key with a value of "*" (all), meaning that all variables defined in the module are exported by the manifest.`, `String[]`),
        new Parameter(`DefaultCommandPrefix`, `Specifies a prefix that is prepended to the nouns of all commands in the module when they're imported into a session. Enter a prefix string. Prefixes prevent command name conflicts in a user's session.


Module users can override this prefix by specifying the Prefix parameter of the "Import-Module" cmdlet.


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`RootModule`, `Specifies the primary or root file of the module. Enter the file name of a script (".ps1"), a script module (".psm1"), a module manifest(".psd1"), an assembly (".dll"), a cmdlet definition XML file (".cdxml"), or a workflow (".xaml"). When the module is imported, the members that are exported from the root module file are imported into the caller's session state.


If a module has a manifest file and no root file was designated in the RootModule key, the manifest becomes the primary file for the module, and the module becomes a manifest module (ModuleType = Manifest).


To export members from ".psm1" or ".dll" files in a module that has a manifest, the names of those files must be specified in the values of the RootModule or NestedModules keys in the manifest. Otherwise, their members aren't exported.


> [!NOTE] > In PowerShell 2.0, this key was called ModuleToProcess . You can use the RootModule > parameter name or its ModuleToProcess alias.`, `String`),
        new Parameter(`WhatIf`, `Shows what would happen if "New-ModuleManifest" runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Creates a new module manifest.`, `New-ModuleManifest [-Path] <String> [-AliasesToExport <String[]>] [-Author <String>] [-ClrVersion <Version>] [-CmdletsToExport <String[]>] [-CompanyName <String>] [-Confirm] [-CompatiblePSEditions {Desktop | Core}] [-Copyright <String>] [-Description <String>] [-DotNetFrameworkVersion <Version>] [-DscResourcesToExport <String[]>] [-FileList <String[]>] [-FormatsToProcess <String[]>] [-FunctionsToExport <String[]>] [-Guid <Guid>] [-HelpInfoUri <String>] [-IconUri <Uri>] [-LicenseUri <Uri>] [-ModuleList <Object[]>] [-ModuleVersion <Version>] [-NestedModules <Object[]>] [-PassThru] [-PowerShellHostName <String>] [-PowerShellHostVersion <Version>] [-PowerShellVersion <Version>] [-PrivateData <Object>] [-ProcessorArchitecture {None | MSIL | X86 | IA64 | Amd64 | Arm}] [-ProjectUri <Uri>] [-ReleaseNotes <String>] [-RequiredAssemblies <String[]>] [-RequiredModules <Object[]>] [-ScriptsToProcess <String[]>] [-Tags <String[]>] [-TypesToProcess <String[]>] [-VariablesToExport <String[]>] [-DefaultCommandPrefix <String>] [-RootModule <String>] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecAuthProposal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecMainModeCryptoProposal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-NetIPsecQuickModeCryptoProposal`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Object`, [
        new Parameter(`ArgumentList`, `Specifies an array of arguments to pass to the constructor of the .NET Framework class. If the constructor takes a single parameter that is an array, you must wrap that parameter inside another array. For example:


"$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate -ArgumentList (,$bytes)"


The alias for ArgumentList is Args .`, `Object[]`),
        new Parameter(`ComObject`, `Specifies the programmatic identifier (ProgID) of the COM object.`, `String`),
        new Parameter(`Property`, `Sets property values and invokes methods of the new object.


Enter a hash table in which the keys are the names of properties or methods and the values are property values or method arguments. "New-Object" creates the object and sets each property value and invokes each method in the order that they appear in the hash table.


If the new object is derived from the PSObject class, and you specify a property that does not exist on the object, "New-Object" adds the specified property to the object as a NoteProperty. If the object is not a PSObject , the command generates a non-terminating error.`, `IDictionary`),
        new Parameter(`Strict`, `Indicates that the cmdlet generates a non-terminating error when a COM object that you attempt to create uses an interop assembly. This feature distinguishes actual COM objects from .NET Framework objects with COM-callable wrappers.`, `SwitchParameter`),
        new Parameter(`TypeName`, `Specifies the fully qualified name of the .NET Framework class. You cannot specify both the TypeName parameter and the ComObject parameter.`, `String`),
    ], `Creates an instance of a Microsoft .NET Framework or COM object.`, `New-Object [-TypeName] <String> [[-ArgumentList] <Object[]>] [-Property <IDictionary>] [<CommonParameters>]

New-Object [-ComObject] <String> [-Property <IDictionary>] [-Strict] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-PSDrive`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Credential`, `Specifies a user account that has permission to do this action. The default is the current user.


Since PowerShell 3.0, when the value of the Root parameter is a UNC path, you can use credentials to create file system drives.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`Description`, `Specifies a brief text description of the drive. Type any string.


To see the descriptions of all the session's drives, "Get-PSDrive | Format-Table Name, Description".


To see the description of a particular drive, type "(Get-PSDrive <DriveName>).Description".`, `String`),
        new Parameter(`Name`, `Specifies a name for the new drive. For persistent mapped network drives, use a drive letter. For temporary PowerShell drives, you aren't limited to drive letters, use any valid string.`, `String`),
        new Parameter(`Persist`, `Indicates that this cmdlet creates a Windows mapped network drive. The Persist parameter is only available on Windows.


Mapped network drives are saved in Windows on the local computer. They're persistent, not session-specific, and can be viewed and managed in File Explorer and other tools.


When you scope the command locally, without dot-sourcing, the Persist parameter doesn't persist the creation of a PSDrive beyond the scope in which you run the command. If you run "New-PSDrive" inside a script, and you want the new drive to persist indefinitely, you must dot-source the script. For best results, to force a new drive to persist, specify Global as the value of the Scope parameter and include Persist in your command.


The name of the drive must be a letter, such as "D" or "E". The value of Root parameter must be a UNC path of a different computer. The PSProvider parameter's value must be "FileSystem".


To disconnect a Windows mapped network drive, use the "Remove-PSDrive" cmdlet. When you disconnect a Windows mapped network drive, the mapping is permanently deleted from the computer, not just deleted from the current session.


Mapped network drives are specific to a user account. Mapped drives created in elevated sessions or sessions using the credential of another user aren't visible in sessions started using different credentials.`, `SwitchParameter`),
        new Parameter(`PSProvider`, `Specifies the PowerShell provider that supports drives of this kind.


For example, if the drive is associated with a network share or file system directory, the PowerShell provider is "FileSystem". If the drive is associated with a registry key, the provider is "Registry".


Temporary PowerShell drives can be associated with any PowerShell provider. Mapped network drives can be associated only with the "FileSystem" provider.


To see a list of the providers in your PowerShell session, use the "Get-PSProvider" cmdlet.`, `String`),
        new Parameter(`Root`, `Specifies the data store location to which a PowerShell drive is mapped.


For example, specify a network share, such as "\\Server01\\Public", a local directory, such as "C:\\Program Files", or a registry key, such as "HKLM:\\Software\\Microsoft".


Temporary PowerShell drives can be associated with a local or remote location on any supported provider drive. Mapped network drives can be associated only with a file system location on a remote computer.`, `String`),
        new Parameter(`Scope`, `Specifies a scope for the drive. The acceptable values for this parameter are: Global , Local , and Script , or a number relative to the current scope. Scopes number 0 through the number of scopes. The current scope number is 0 and its parent is 1. For more information, see about_Scopes (../Microsoft.PowerShell.Core/About/about_Scopes.md).`, `String`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Creates temporary and persistent mapped network drives.`, `New-PSDrive [-Name] <String> [-PSProvider] <String> [-Root] <String> [-Confirm] [-Credential <PSCredential>] [-Description <String>] [-Persist] [-Scope <String>] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-PSRoleCapabilityFile`, [
        new Parameter(`AliasDefinitions`, `Adds the specified aliases to sessions that use the role capability file. Enter a hash table with the following keys:


- Name. Name of the alias. This key is required.


- Value. The command that the alias represents. This key is required.


- Description. A text string that describes the alias. This key is optional.


- Options. Alias options. This key is optional. The default value is None. The acceptable values for


this parameter are: None, ReadOnly, Constant, Private, or AllScope.


For example: "@{Name="hlp";Value="Get-Help";Description="Gets help";Options="ReadOnly"}"`, `IDictionary[]`),
        new Parameter(`AssembliesToLoad`, `Specifies the assemblies to load into the sessions that use the role capability file.`, `String[]`),
        new Parameter(`Author`, `Specifies the user that created the role capability file.`, `String`),
        new Parameter(`CompanyName`, `Identifies the company that created the role capability file. The default value is Unknown.`, `String`),
        new Parameter(`Copyright`, `Specifies a copyright for the role capability file. If you omit this parameter, "New-PSRoleCapabilityFile" generates a copyright statement by using the value of the Author parameter.`, `String`),
        new Parameter(`Description`, `Specifies a description for the role capability file.`, `String`),
        new Parameter(`EnvironmentVariables`, `Specifies the environment variables for sessions that expose this role capability file. Enter a hash table in which the keys are the environment variable names and the values are the environment variable values.


For example: "EnvironmentVariables=@{TestShare="\\Server01\\TestShare"}"`, `IDictionary`),
        new Parameter(`FormatsToProcess`, `Specifies the formatting files (.ps1xml) that run in sessions that use the role capability file. The value of this parameter must be a full or absolute path of the formatting files.`, `String[]`),
        new Parameter(`FunctionDefinitions`, `Adds the specified functions to sessions that expose the role capability. Enter a hash table with the following keys:


- Name. Name of the function. This key is required.


- ScriptBlock. Function body. Enter a script block. This key is required.


- Options. Function options. This key is optional. The default value is None. The acceptable values


for this parameter are: are None, ReadOnly, Constant, Private, or AllScope.


For example:


"@{Name="Get-PowerShellProcess";ScriptBlock={Get-Process PowerShell};Options="AllScope"}"`, `IDictionary[]`),
        new Parameter(`Guid`, `Specifies a unique identifier for the role capability file. If you omit this parameter, "New-PSRoleCapabilityFile" generates a GUID for the file. To create a new GUID in PowerShell, type "[guid]::NewGuid()".`, `Guid`),
        new Parameter(`ModulesToImport`, `Specifies the modules that are automatically imported into sessions that use the role capability file. By default, all the commands in listed modules are visible. When used with VisibleCmdlets or VisibleFunctions , the commands visible from the specified modules can be restricted.


Each module used in the value of this parameter can be represented by a string or by a hash table. A module string consists only of the name of the module. A module hash table can include ModuleName , ModuleVersion , and GUID keys. Only the ModuleName key is required.


For example, the following value consists of a string and a hash table. Any combination of strings and hash tables, in any order, is valid.


""TroubleshootingPack", @{ModuleName="PSDiagnostics"; ModuleVersion="1.0.0.0";GUID="c61d6278-02a3-4618-ae37-a524d40a7f44"}"`, `Object[]`),
        new Parameter(`Path`, `Specifies the path and filename of the role capability file. The file must have a ".psrc" filename extension.`, `String`),
        new Parameter(`ScriptsToProcess`, `Specifies scripts to add to sessions that use the role capability file. Enter the path and file names of the scripts. The value of this parameter must be a full or absolute path of the script file names.`, `String[]`),
        new Parameter(`TypesToProcess`, `Specifies type files (.ps1xml) to add to sessions that use the role capability file. Enter the type filenames. The value of this parameter must be a full or absolute path of the type filenames.`, `String[]`),
        new Parameter(`VariableDefinitions`, `Specifies variables to add to sessions that use the role capability file. Enter a hash table with the following keys:


- Name. Name of the variable. This key is required.


- Value. Variable value. This key is required.


- Options. Variable options. This key is optional. The default value is None. The acceptable values


for this parameter are: are None, ReadOnly, Constant, Private, or AllScope.


For example: "@{Name="WarningPreference";Value="SilentlyContinue";Options="AllScope"}"`, `Object`),
        new Parameter(`VisibleAliases`, `Limits the aliases in the session to those aliases specified in the value of this parameter, plus any aliases that you define in the AliasDefinition parameter. Wildcard characters are supported. By default, all aliases that are defined by the PowerShell engine and all aliases that modules export are visible in the session.


For example, to limit the available aliases to gm and gcm use this syntax: "VisibleAliases="gcm", "gp""


When any Visible parameter is included in the role capability file, PowerShell removes the "Import-Module" cmdlet and its "ipmo" alias from the session.`, `String[]`),
        new Parameter(`VisibleCmdlets`, `Limits the cmdlets in the session to those specified in the value of this parameter. Wildcard characters and Module Qualified Names are supported.


By default, all cmdlets that the modules in the session export are visible in the session. Use the SessionType and ModulesToImport parameters to determine which modules and snap-ins are imported into the session. If no modules in ModulesToImport expose the cmdlet, "New-PSRoleCapabilityFile" tries to load the appropriate module.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its "ipmo" alias from the session.`, `Object[]`),
        new Parameter(`VisibleExternalCommands`, `Limits the external binaries, scripts and commands that can be executed in the session to those specified in the value of this parameter.


By default, no external commands are visible in this session.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its "ipmo" alias from the session.`, `String[]`),
        new Parameter(`VisibleFunctions`, `Limits the functions in the session to those specified in the value of this parameter, plus any functions that you define in the FunctionDefinitions parameter. Wildcard characters are supported.


By default, all functions exported by modules in the session are visible in that session. Use the SessionType and ModulesToImport parameters to determine which modules are imported into the session.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its "ipmo" alias from the session.`, `Object[]`),
        new Parameter(`VisibleProviders`, `Limits the PowerShell providers in the session to those specified in the value of this parameter. Wildcard characters are supported.


By default, all providers exported by a module in the session are visible in the session. Use the SessionType and ModulesToImport parameters to determine which modules are imported into the session.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its "ipmo" alias from the session.`, `String[]`),
    ], `Creates a file that defines a set of capabilities to be exposed through a session configuration.`, `New-PSRoleCapabilityFile [-Path] <String> [-AliasDefinitions <IDictionary[]>] [-AssembliesToLoad <String[]>] [-Author <String>] [-CompanyName <String>] [-Copyright <String>] [-Description <String>] [-EnvironmentVariables <IDictionary>] [-FormatsToProcess <String[]>] [-FunctionDefinitions <IDictionary[]>] [-Guid <Guid>] [-ModulesToImport <Object[]>] [-ScriptsToProcess <String[]>] [-TypesToProcess <String[]>] [-VariableDefinitions <Object>] [-VisibleAliases <String[]>] [-VisibleCmdlets <Object[]>] [-VisibleExternalCommands <String[]>] [-VisibleFunctions <Object[]>] [-VisibleProviders <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-PSSession`, [
        new Parameter(`AllowRedirection`, `Indicates that this cmdlet allows redirection of this connection to an alternate Uniform Resource Identifier (URI).


When you use the ConnectionURI parameter, the remote destination can return an instruction to redirect to a different URI. By default, PowerShell does not redirect connections, but you can use this parameter to enable it to redirect the connection.


You can also limit the number of times the connection is redirected by changing the MaximumConnectionRedirectionCount session option value. Use the MaximumRedirection parameter of the New-PSSessionOption cmdlet or set the MaximumConnectionRedirectionCount property of the $PSSessionOption preference variable. The default value is 5.`, `SwitchParameter`),
        new Parameter(`ApplicationName`, `Specifies the application name segment of the connection URI. Use this parameter to specify the application name when you are not using the ConnectionURI parameter in the command.


The default value is the value of the $PSSessionApplicationName preference variable on the local computer. If this preference variable is not defined, the default value is WSMAN. This value is appropriate for most uses. For more information, see about_Preference_Variables (About/about_Preference_Variables.md).


The WinRM service uses the application name to select a listener to service the connection request. The value of this parameter should match the value of the URLPrefix property of a listener on the remote computer.`, `String`),
        new Parameter(`Authentication`, `Specifies the mechanism that is used to authenticate the user's credentials. The acceptable values for this parameter are:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential




The default value is Default.


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (https://msdn.microsoft.com/library/system.management.automation.runspaces.authenticationmechanism)in the MSDN library.

Caution: Credential Security Support Provider (CredSSP) authentication, in which the user credentials are passed to a remote computer to be authenticated, is designed for commands that require authentication on more than one resource, such as accessing a remote network share. This mechanism increases the security risk of the remote operation. If the remote computer is compromised, the credentials that are passed to it can be used to control the network session.`, `AuthenticationMechanism`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to perform this action. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. They can be mapped only to local user accounts; they do not work with domain accounts.


To get a certificate, use the Get-Item or Get-ChildItem command in the PowerShell Cert: drive.`, `String`),
        new Parameter(`ComputerName`, `Specifies an array of names of computers. This cmdlet creates a persistent connection ( PSSession ) to the specified computer. If you enter multiple computer names, New-PSSession creates multiple PSSession objects, one for each computer. The default is the local computer.


Type the NetBIOS name, an IP address, or a fully qualified domain name of one or more remote computers. To specify the local computer, type the computer name, localhost, or a dot (.). When the computer is in a different domain than the user, the fully qualified domain name is required. You can also pipe a computer name, in quotation marks, to New-PSSession .


To use an IP address in the value of the ComputerName parameter, the command must include the Credential parameter. Also, the computer must be configured for HTTPS transport or the IP address of the remote computer must be included in the WinRM TrustedHosts list on the local computer. For instructions for adding a computer name to the TrustedHosts list, see "How to Add a Computer to the Trusted Host List" in about_Remote_Troubleshooting (about/about_Remote_Troubleshooting.md).


To include the local computer in the value of the ComputerName parameter, start PowerShell by using the Run as administrator option.`, `String[]`),
        new Parameter(`ConfigurationName`, `Specifies the session configuration that is used for the new PSSession .


Enter a configuration name or the fully qualified resource URI for a session configuration. If you specify only the configuration name, the following schema URI is prepended: "http://schemas.microsoft.com/PowerShell".


When used with SSH, this specifies the subsystem to use on the target as defined in sshd_config. The default value for SSH is the "powershell" subsystem.


The session configuration for a session is located on the remote computer. If the specified session configuration does not exist on the remote computer, the command fails.


The default value is the value of the $PSSessionConfigurationName preference variable on the local computer. If this preference variable is not set, the default is Microsoft.PowerShell. For more information, see about_Preference_Variables (About/about_Preference_Variables.md).`, `String`),
        new Parameter(`ConnectionUri`, `Specifies a URI that defines the connection endpoint for the session. The URI must be fully qualified. The format of this string is as follows:


<Transport>://<ComputerName>:<Port>/<ApplicationName>


The default value is as follows:


"http://localhost:5985/WSMAN"


If you do not specify a ConnectionURI , you can use the UseSSL , ComputerName , Port , and ApplicationName parameters to specify the ConnectionURI values.


Valid values for the Transport segment of the URI are HTTP and HTTPS. If you specify a connection URI with a Transport segment, but do not specify a port, the session is created with standards ports: 80 for HTTP and 443 for HTTPS. To use the default ports for PowerShell remoting, specify port 5985 for HTTP or 5986 for HTTPS.


If the destination computer redirects the connection to a different URI, PowerShell prevents the redirection unless you use the AllowRedirection parameter in the command.`, `Uri[]`),
        new Parameter(`ContainerId`, `Specifies an array of IDs of containers. This cmdlet starts an interactive session with each of the specified containers. To see the containers that are available to you, use the Get-Container cmdlet.`, `String[]`),
        new Parameter(`Credential`, `Specifies a user account that has permission to do this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`EnableNetworkAccess`, `Indicates that this cmdlet adds an interactive security token to loopback sessions. The interactive token lets you run commands in the loopback session that get data from other computers. For example, you can run a command in the session that copies XML files from a remote computer to the local computer.


A loopback session is a PSSession that originates and ends on the same computer. To create a loopback session, omit the ComputerName parameter or set its value to dot (.), localhost, or the name of the local computer.


By default, this cmdlet creates loopback sessions by using a network token, which might not provide sufficient permission to authenticate to remote computers.


The EnableNetworkAccess parameter is effective only in loopback sessions. If you use EnableNetworkAccess when you create a session on a remote computer, the command succeeds, but the parameter is ignored.


You can also enable remote access in a loopback session by using the CredSSP value of the Authentication parameter, which delegates the session credentials to other computers.


To protect the computer from malicious access, disconnected loopback sessions that have interactive tokens, which are those created by using the EnableNetworkAccess parameter, can be reconnected only from the computer on which the session was created. Disconnected sessions that use CredSSP authentication can be reconnected from other computers. For more information, see Disconnect-PSSession.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`HostName`, `Specifies an array of computer names for a Secure Shell (SSH) based connection. This is similar to the ComputerName parameter except that the connection to the remote computer is made using SSH rather than Windows WinRM.


This parameter was introduced in PowerShell 6.0.`, `String[]`),
        new Parameter(`KeyFilePath`, `Specifies a key file path used by Secure Shell (SSH) to authenticate a user on a remote computer.


SSH allows user authentication to be performed via private/public keys as an alternative to basic password authentication. If the remote computer is configured for key authentication then this parameter can be used to provide the key that identifies the user.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`Name`, `Specifies a friendly name for the PSSession .


You can use the name to refer to the PSSession when you use other cmdlets, such as Get-PSSession and Enter-PSSession. The name is not required to be unique to the computer or the current session.`, `String[]`),
        new Parameter(`Port`, `Specifies the network port on the remote computer that is used for this connection.


In PowerShell 6.0 this parameter was included in the HostName and SSHConnection parameter sets which support Secure Shell (SSH) connections. WinRM (ComputerName parameter set) To connect to a remote computer, the remote computer must be listening on the port that the connection uses. The default ports are 5985, which is the WinRM port for HTTP, and 5986, which is the WinRM port for HTTPS.


Before using another port, you must configure the WinRM listener on the remote computer to listen at that port. Use the following commands to configure the listener:


1. "winrm delete winrm/config/listener?Address=*+Transport=HTTP"


2. "winrm create winrm/config/listener?Address=*+Transport=HTTP @{Port="<port-number>"}"


Do not use the Port parameter unless you must. The port setting in the command applies to all computers or sessions on which the command runs. An alternate port setting might prevent the command from running on all computers. SSH (HostName and SSHConnection parameter sets) To connect to a remote computer, the remote computer must be configured with the SSH service (SSHD) and must be listening on the port that the connection uses. The default port for SSH is 22.`, `Int32`),
        new Parameter(`RunAsAdministrator`, `Indicates that the PSSession runs as administrator.`, `SwitchParameter`),
        new Parameter(`Session`, `Specifies an array of PSSession objects that this cmdlet uses as a model for the new PSSession . This parameter creates new PSSession objects that have the same properties as the specified PSSession objects.


Enter a variable that contains the PSSession objects or a command that creates or gets the PSSession objects, such as a New-PSSession or Get-PSSession command.


The resulting PSSession objects have the same computer name, application name, connection URI, port, configuration name, throttle limit, and Secure Sockets Layer (SSL) value as the originals, but they have a different display name, ID, and instance ID (GUID).`, `PSSession[]`),
        new Parameter(`SessionOption`, `Specifies advanced options for the session. Enter a SessionOption object, such as one that you create by using the New-PSSessionOption cmdlet, or a hash table in which the keys are session option names and the values are session option values.


The default values for the options are determined by the value of the $PSSessionOption preference variable, if it is set. Otherwise, the default values are established by options set in the session configuration.


The session option values take precedence over default values for sessions set in the $PSSessionOption preference variable and in the session configuration. However, they do not take precedence over maximum values, quotas or limits set in the session configuration.


For a description of the session options that includes the default values, see New-PSSessionOption. For information about the $PSSessionOption preference variable, see about_Preference_Variables (About/about_Preference_Variables.md). For more information about session configurations, see about_Session_Configurations (About/about_Session_Configurations.md).`, `PSSessionOption`),
        new Parameter(`SSHConnection`, `This parameter takes an array of hashtables where each hashtable contains one or more connection parameters needed to establish a Secure Shell (SSH) connection (HostName, Port, UserName, KeyFilePath).


The hashtable connection parameters are the same as defined for the HostName parameter set.


The SSHConnection parameter is useful for creating multiple sessions where each session requires different connection information.


This parameter was introduced in PowerShell 6.0.`, `Hashtable[]`),
        new Parameter(`SSHTransport`, `Indicates that the remote connection is established using Secure Shell (SSH).


By default PowerShell uses Windows WinRM to connect to a remote computer. This switch forces PowerShell to use the HostName parameter set for establishing an SSH based remote connection.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`ThrottleLimit`, `Specifies the maximum number of concurrent connections that can be established to run this command. If you omit this parameter or enter a value of 0 (zero), the default value, 32, is used.


The throttle limit applies only to the current command, not to the session or to the computer.`, `Int32`),
        new Parameter(`UserName`, `Specifies the user name for the account used to create a session on the remote computer. User authentication method will depend on how Secure Shell (SSH) is configured on the remote computer.


If SSH is configured for basic password authentication then you will be prompted for the user password.


If SSH is configured for key based user authentication then a key file path can be provided via the KeyFilePath parameter and no password prompt will occur. Note that if the client user key file is located in an SSH known location then the KeyFilePath parameter is not needed for key based authentication, and user authentication will occur automatically based on the user name. See SSH documentation about key based user authentication for more information.


This is not a required parameter. If no UserName parameter is specified then the current log on user name is used for the connection.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`UseSSL`, `Indicates that this cmdlet uses the SSL protocol to establish a connection to the remote computer. By default, SSL is not used.


WS-Management encrypts all PowerShell content transmitted over the network. The UseSSL parameter offers an additional protection that sends the data across an HTTPS connection instead of an HTTP connection.


If you use this parameter, but SSL is not available on the port that is used for the command, the command fails.`, `SwitchParameter`),
        new Parameter(`VMId`, `Specifies an array of ID of virtual machines. This cmdlet starts an interactive session with each of the specified virtual machines. To see the virtual machines that are available to you, use the following command:


"Get-VM | Select-Object -Property Name, ID"`, `Guid[]`),
        new Parameter(`VMName`, `Specifies an array of names of virtual machines. This cmdlet starts an interactive session with each of the specified virtual machines. To see the virtual machines that are available to you, use the Get-VM cmdlet.`, `String[]`),
        new Parameter(`HostName`, `Specifies an array of computer names for a Secure Shell (SSH) based connection. This is similar to the ComputerName parameter except that the connection to the remote computer is made using SSH rather than Windows WinRM. This parameter supports specifying the user name and/or port as part of the host name parameter value using the form "user@hostname:port". The user name and/or port specified as part of the host name takes precedence over the "-UserName" and "-Port" parameters, if specified. This allows passing multiple computer names to this parameter where some have specific user names and/or ports, while others use the user name and/or port from the "-UserName" and "-Port" parameters.


This parameter was introduced in PowerShell 6.0.`, `String[]`),
        new Parameter(`KeyFilePath`, `Specifies a key file path used by Secure Shell (SSH) to authenticate a user on a remote computer.


SSH allows user authentication to be performed via private/public keys as an alternative to basic password authentication. If the remote computer is configured for key authentication then this parameter can be used to provide the key that identifies the user.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`SSHTransport`, `Indicates that the remote connection is established using Secure Shell (SSH).


By default PowerShell uses Windows WinRM to connect to a remote computer. This switch forces PowerShell to use the HostName parameter set for establishing an SSH based remote connection.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`UserName`, `Specifies the user name for the account used to create a session on the remote computer. User authentication method will depend on how Secure Shell (SSH) is configured on the remote computer.


If SSH is configured for basic password authentication then you will be prompted for the user password.


If SSH is configured for key based user authentication then a key file path can be provided via the KeyFilePath parameter and no password prompt will occur. Note that if the client user key file is located in an SSH known location then the KeyFilePath parameter is not needed for key based authentication, and user authentication will occur automatically based on the user name. See SSH documentation about key based user authentication for more information.


This is not a required parameter. If no UserName parameter is specified then the current log on user name is used for the connection.


This parameter was introduced in PowerShell 6.0.`, `String`),
        new Parameter(`SSHConnection`, `This parameter takes an array of hashtables where each hashtable contains one or more connection parameters needed to establish a Secure Shell (SSH) connection (HostName, Port, UserName, KeyFilePath, Subsystem).


The hashtable connection parameters are the same as defined for the HostName parameter set. Note that the order of the keys in the hashtable result in user name and port being used for the connection where the last one specified is used.  For example, if you use "@{UserName="first";HostName="second@host"}", then the user name "second" will be used.  However, if you use "@{HostName="second@host:22";Port=23}", then port 23 will be used.


This parameter was introduced in PowerShell 6.0.


The SSHConnection parameter is useful for creating multiple sessions where each session requires different connection information.`, `hashtable`),
        new Parameter(`Subsystem`, `Specifies the SSH subsystem used for the new PSSession .


This specifies the subsystem to use on the target as defined in sshd_config. The subsystem starts a specific version of PowerShell with predefined parameters. If the specified subsystem does not exist on the remote computer, the command fails.


If this parameter is not used, the default is the 'powershell' subsystem.`, `String`),
    ], `Creates a persistent connection to a local or remote computer.`, `New-PSSession [-ConnectionUri] <Uri[]> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-EnableNetworkAccess] [-Name <String[]>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [<CommonParameters>]

New-PSSession [[-ComputerName] <String[]>] [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-EnableNetworkAccess] [-Name <String[]>] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <Int32>] [-UseSSL] [<CommonParameters>]

New-PSSession [-ConfigurationName <String>] [-Credential <PSCredential>] [-Name <String[]>] [-ThrottleLimit <Int32>] -VMName <String[]> [<CommonParameters>]

New-PSSession [-VMId] <Guid[]> [-ConfigurationName <String>] [-Credential <PSCredential>] [-Name <String[]>] [-ThrottleLimit <Int32>] [<CommonParameters>]

New-PSSession [-ConfigurationName <String>] -ContainerId <String[]> [-Name <String[]>] [-RunAsAdministrator] [-ThrottleLimit <Int32>] [<CommonParameters>]

New-PSSession [[-Session] <PSSession[]>] [-EnableNetworkAccess] [-Name <String[]>] [-ThrottleLimit <Int32>] [<CommonParameters>]

New-PSSession [-HostName] <String[]> [-KeyFilePath <String>] [-Name <String[]>] [-Port <Int32>] [-SSHTransport {true}] [-UserName <String>] [<CommonParameters>]

New-PSSession [-Name <String[]>] -SSHConnection <Hashtable[]> [<CommonParameters>]

New-PSSession [-HostName] <String[]> [-Name <String[]>] [-KeyFilePath <String>] [-SSHTransport] [-UserName <String>] [-Subsystem <String>] [<CommonParameters>]

New-PSSession [-Name <String[]>] -SSHConnection <hashtable> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-PSSessionConfigurationFile`, [
        new Parameter(`AliasDefinitions`, `Adds the specified aliases to sessions that use the session configuration. Enter a hash table with the following keys:


- Name - Name of the alias. This key is required.


- Value - The command that the alias represents. This key is required.


- Description - A text string that describes the alias. This key is optional.


- Options - Alias options. This key is optional. The default value is None . The acceptable   values for this parameter are: None, ReadOnly, Constant, Private, or AllScope.


For example: "@{Name='hlp';Value='Get-Help';Description='Gets help';Options='ReadOnly'}"`, `IDictionary[]`),
        new Parameter(`AssembliesToLoad`, `Specifies the assemblies to load into the sessions that use the session configuration.`, `String[]`),
        new Parameter(`Author`, `Specifies the author of the session configuration or the configuration file. The default is the current user. The value of this parameter is visible in the session configuration file, but it is not a property of the session configuration object.`, `String`),
        new Parameter(`CompanyName`, `Specifies the company that created the session configuration or the configuration file. The default value is Unknown . The value of this parameter is visible in the session configuration file, but it is not a property of the session configuration object.`, `String`),
        new Parameter(`Copyright`, `Specifies a copyright the session configuration file. The value of this parameter is visible in the session configuration file, but it is not a property of the session configuration object.


If you omit this parameter, "New-PSSessionConfigurationFile" generates a copyright statement by using the value of the Author parameter.`, `String`),
        new Parameter(`Description`, `Specifies a description of the session configuration or the session configuration file. The value of this parameter is visible in the session configuration file, but it is not a property of the session configuration object.`, `String`),
        new Parameter(`EnvironmentVariables`, `Adds environment variables to the session. Enter a hash table in which the keys are the environment variable names and the values are the environment variable values.


For example: "EnvironmentVariables=@{TestShare='\\Server01\\TestShare'}"`, `IDictionary`),
        new Parameter(`ExecutionPolicy`, `Specifies the execution policy of sessions that use the session configuration. If you omit this parameter, the value of the ExecutionPolicy key in the session configuration file is Restricted . For information about execution policies in PowerShell, see about_Execution_Policies (about/about_Execution_Policies.md).`, `ExecutionPolicy`),
        new Parameter(`FormatsToProcess`, `Specifies the formatting files (.ps1xml) that run in sessions that use the session configuration. The value of this parameter must be a full or absolute path of the formatting files.`, `String[]`),
        new Parameter(`Full`, `Indicates that this operation includes all possible configuration properties in the session configuration file.`, `SwitchParameter`),
        new Parameter(`FunctionDefinitions`, `Adds the specified functions to sessions that use the session configuration. Enter a hash table with the following keys:


- Name - Name of the function. This key is required.


- ScriptBlock - Function body. Enter a script block. This key is required.


- Options - Function options. This key is optional. The default value is None . The acceptable   values for this parameter are: None, ReadOnly, Constant, Private, or AllScope.


For example: "@{Name='Get-PowerShellProcess';ScriptBlock={Get-Process PowerShell};Options='AllScope'}"`, `IDictionary[]`),
        new Parameter(`GroupManagedServiceAccount`, `Configures sessions using this session configuration to run under the context of the specified Group Managed Service Account. The machine where this session configuration is registered must have permission to request the gMSA password in order for sessions to be created successfully. This field cannot be used with the RunAsVirtualAccount parameter.`, `String`),
        new Parameter(`Guid`, `Specifies a unique identifier for the session configuration file. If you omit this parameter, "New-PSSessionConfigurationFile" generates a GUID for the file. To create a new GUID in PowerShell, type "New-Guid".`, `Guid`),
        new Parameter(`LanguageMode`, `Determines which elements of the PowerShell language are permitted in sessions that use this session configuration. You can use this parameter to restrict the commands that particular users can run on the computer.


The acceptable values for this parameter are:


- FullLanguage - All language elements are permitted.


- ConstrainedLanguage - Commands that contain scripts to be evaluated are not allowed. The


ConstrainedLanguage mode restricts user access to Microsoft .NET Framework types, objects, or   methods. - NoLanguage - Users may run cmdlets and functions, but are not permitted to use any language   elements, such as script blocks, variables, or operators. - RestrictedLanguage - Users may run cmdlets and functions, but are not permitted to use script   blocks or variables except for the following permitted variables: "$PSCulture", "$PSUICulture",   "$True", "$False", and "$Null". Users may use only the basic comparison operators ("-eq", "-gt",   "-lt"). Assignment statements, property references, and method calls are not permitted.


The default value of the LanguageMode parameter depends on the value of the SessionType parameter.


- Empty - NoLanguage


- RestrictedRemoteServer - NoLanguage


- Default - FullLanguage`, `PSLanguageMode`),
        new Parameter(`ModulesToImport`, `Specifies the modules and snap-ins that are automatically imported into sessions that use the session configuration.


By default, only the Microsoft.PowerShell.Core snap-in is imported into remote sessions, but unless the cmdlets are excluded, users can use the "Import-Module" and "Add-PSSnapin" cmdlets to add modules and snap-ins to the session.


Each module or snap-in in the value of this parameter can be represented by a string or as a hash table. A module string consists only of the name of the module or snap-in. A module hash table can include ModuleName , ModuleVersion , and GUID keys. Only the ModuleName key is required.


For example, the following value consists of a string and a hash table. Any combination of strings and hash tables, in any order, is valid.


"'TroubleshootingPack', @{ModuleName='PSDiagnostics'; ModuleVersion='1.0.0.0';GUID='c61d6278-02a3-4618-ae37-a524d40a7f44'}"


The value of the ModulesToImport parameter of the "Register-PSSessionConfiguration" cmdlet takes precedence over the value of the ModulesToImport key in the session configuration file.`, `Object[]`),
        new Parameter(`MountUserDrive`, `Configures sessions that use this session configuration to expose the "User:" PSDrive. User drives are unique for each connecting user and allow users to copy data to/from PowerShell endpoints even if the File System provider is not exposed. User drive roots are created under "$env:LOCALAPPDATA\\Microsoft\\Windows\\PowerShell\\DriveRoots".


Contents in the user drive persist across user sessions and are not automatically removed. By default, users can only store up to 50MB of data in the user drive. This can be customized with the UserDriveMaximumSize parameter.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path and filename of the session configuration file. The file must have a ".pssc" file name extension.`, `String`),
        new Parameter(`PowerShellVersion`, `Specifies the version of the PowerShell engine in sessions that use the session configuration. The acceptable values for this parameter are: 2.0 and 3.0. If you omit this parameter, the PowerShellVersion key is commented-out and newest version of PowerShell runs in the session.


The value of the PSVersion parameter of the "Register-PSSessionConfiguration" cmdlet takes precedence over the value of the PowerShellVersion key in the session configuration file.`, `Version`),
        new Parameter(`RequiredGroups`, `Specifies conditional access rules for users connecting to sessions that use this session configuration.


Enter a hashtable to compose your list of rules using only 1 key per hashtable, 'And' or 'Or', and set the value to an array of security group names or additional hashtables.


Example requiring connecting users to be members of a single group: "@{ And = 'MyRequiredGroup' }"


Example requiring users to belong to group A, or both groups B and C, to access the endpoint: "@{ Or = 'GroupA', @{ And = 'GroupB', 'GroupC' } }"`, `IDictionary`),
        new Parameter(`RoleDefinitions`, `Specifies the mapping between security groups (or users) and role capabilities. Users will be granted access to all role capabilities which apply to their group membership at the time the session is created.


Enter a hash table in which the keys are the name of the security group and the values are hash tables that contain a list of role capabilities that should be made available to the security group.


For example: "@{'Contoso\\Level 2 Helpdesk Users' = @{ RoleCapabilities = 'Maintenance', 'ADHelpDesk' }}"`, `IDictionary`),
        new Parameter(`RunAsVirtualAccount`, `Configures sessions using this session configuration to be run as the computer's (virtual) administrator account. This field cannot be used with the GroupManagedServiceAccount parameter.`, `SwitchParameter`),
        new Parameter(`RunAsVirtualAccountGroups`, `Specifies the security groups to be associated with the virtual account when a session that uses the session configuration is run as a virtual account. If omitted, the virtual account belongs to Domain Admins on domain controllers and Administrators on all other computers.`, `String[]`),
        new Parameter(`SchemaVersion`, `Specifies the version of the session configuration file schema. The default value is "1.0.0.0".`, `Version`),
        new Parameter(`ScriptsToProcess`, `Adds the specified scripts to sessions that use the session configuration. Enter the path and file names of the scripts. The value of this parameter must be a full or absolute path of script file names.`, `String[]`),
        new Parameter(`SessionType`, `Specifies the type of session that is created by using the session configuration. The default value is Default. The acceptable values for this parameter are:


- Empty - No modules are added to session by default. Use the parameters of this cmdlet   to add modules, functions, scripts, and other features to the session. This option is designed for   you to create custom sessions by adding selected commands. If you do not add commands to an empty   session, the session is limited to expressions and might not be usable. - Default - Adds the Microsoft.PowerShell.Core module to the session. This module includes the   "Import-Module" cmdlet that users can use to import other modules unless you explicitly prohibit   this cmdlet. - RestrictedRemoteServer. Includes only the following proxy functions: "Exit-PSSession",   "Get-Command", "Get-FormatData", "Get-Help", "Measure-Object", "Out-Default", and "Select-Object".   Use the parameters of this cmdlet to add modules, functions, scripts, and other features to the   session.`, `SessionType`),
        new Parameter(`TranscriptDirectory`, `Specifies the directory to place session transcripts for sessions using this session configuration.`, `String`),
        new Parameter(`TypesToProcess`, `Adds the specified ".ps1xml" type files to sessions that use the session configuration. Enter the type filenames. The value of this parameter must be a full or absolute path to type filenames.`, `String[]`),
        new Parameter(`UserDriveMaximumSize`, `Specifies the maximum size for user drives exposed in sessions that use this session configuration. When omitted, the default size of each "User:" drive root is 50MB.


This parameter should be used with MountUserDrive .`, `Int64`),
        new Parameter(`VariableDefinitions`, `Adds the specified variables to sessions that use the session configuration. Enter a hash table with the following keys:


- Name - Name of the variable. This key is required.


- Value - Variable value. This key is required.


- Options - Variable options. This key is optional. The default value is None . The acceptable   values for this parameter are: None, ReadOnly, Constant, Private, or AllScope.


For example: "@{Name='WarningPreference';Value='SilentlyContinue';Options='AllScope'}"`, `Object`),
        new Parameter(`VisibleAliases`, `Limits the aliases in the session to those specified in the value of this parameter, plus any aliases that you define in the AliasDefinition parameter. Wildcard characters are supported. By default, all aliases that are defined by the PowerShell engine and all aliases that modules export are visible in the session.


For example: "VisibleAliases='gcm', 'gp'"


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its ipmo alias from the session.`, `String[]`),
        new Parameter(`VisibleCmdlets`, `Limits the cmdlets in the session to those specified in the value of this parameter. Wildcard characters and Module Qualified Names are supported.


By default, all cmdlets that modules in the session export are visible in the session. Use the SessionType and ModulesToImport parameters to determine which modules and snap-ins are imported into the session. If no modules in ModulesToImport expose the cmdlet, the appropriate module will attempt to be autoloaded.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its ipmo alias from the session.`, `Object[]`),
        new Parameter(`VisibleExternalCommands`, `Limits the external binaries, scripts, and commands that can be executed in the session to those specified in the value of this parameter. Wildcard characters are supported.


By default, no external commands are visible in the session.


When any Visible parameter is included in the session configuration file, PowerShell, removes the "Import-Module" cmdlet and its ipmo alias from the session.`, `String[]`),
        new Parameter(`VisibleFunctions`, `Limits the functions in the session to those specified in the value of this parameter, plus any functions that you define in the FunctionDefinition parameter. Wildcard characters are supported.


By default, all functions that modules in the session export are visible in the session. Use the SessionType and ModulesToImport parameters to determine which modules and snap-ins are imported into the session.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its ipmo alias from the session.`, `Object[]`),
        new Parameter(`VisibleProviders`, `Limits the PowerShell providers in the session to those specified in the value of this parameter. Wildcard characters are supported.


By default, all providers that modules in the session export are visible in the session. Use the SessionType and ModulesToImport parameters to determine which modules are imported into the session.


When any Visible parameter is included in the session configuration file, PowerShell removes the "Import-Module" cmdlet and its "ipmo" alias from the session.`, `String[]`),
    ], `Creates a file that defines a session configuration.`, `New-PSSessionConfigurationFile [-Path] <String> [-AliasDefinitions <IDictionary[]>] [-AssembliesToLoad <String[]>] [-Author <String>] [-CompanyName <String>] [-Copyright <String>] [-Description <String>] [-EnvironmentVariables <IDictionary>] [-ExecutionPolicy {Unrestricted | RemoteSigned | AllSigned | Restricted | Default | Bypass | Undefined}] [-FormatsToProcess <String[]>] [-Full] [-FunctionDefinitions <IDictionary[]>] [-GroupManagedServiceAccount <String>] [-Guid <Guid>] [-LanguageMode {FullLanguage | RestrictedLanguage | NoLanguage | ConstrainedLanguage}] [-ModulesToImport <Object[]>] [-MountUserDrive] [-PowerShellVersion <Version>] [-RequiredGroups <IDictionary>] [-RoleDefinitions <IDictionary>] [-RunAsVirtualAccount] [-RunAsVirtualAccountGroups <String[]>] [-SchemaVersion <Version>] [-ScriptsToProcess <String[]>] [-SessionType {Empty | RestrictedRemoteServer | Default}] [-TranscriptDirectory <String>] [-TypesToProcess <String[]>] [-UserDriveMaximumSize <Int64>] [-VariableDefinitions <Object>] [-VisibleAliases <String[]>] [-VisibleCmdlets <Object[]>] [-VisibleExternalCommands <String[]>] [-VisibleFunctions <Object[]>] [-VisibleProviders <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-PSSessionOption`, [
        new Parameter(`ApplicationArguments`, `Specifies a primitive dictionary that is sent to the remote session. Commands and scripts in the remote session, including startup scripts in the session configuration, can find this dictionary in the ApplicationArguments property of the "$PSSenderInfo" automatic variable. You can use this parameter to send data to the remote session.


For more information, see about_Hash_Tables (about/about_Hash_Tables.md), [about_Session_Configurations](About/about_Session_Configurations.md), and about_Automatic_Variables (about/about_Automatic_Variables.md).`, `PSPrimitiveDictionary`),
        new Parameter(`CancelTimeout`, `Determines how long PowerShell waits for a cancel operation (CTRL+C) to finish before ending it. Enter a value in milliseconds.


The default value is 60000 (one minute). A value of 0 (zero) means no time-out; the command continues indefinitely.`, `Int32`),
        new Parameter(`Culture`, `Specifies the culture to use for the session. Enter a culture name in "<languagecode2>-<country/regioncode2>" format (like "ja-JP"), a variable that contains a CultureInfo object, or a command that gets a CultureInfo object.


The default value is "$Null", and the culture that is set in the operating system is used in the session.`, `CultureInfo`),
        new Parameter(`IdleTimeout`, `Determines how long the session stays open if the remote computer does not receive any communication from the local computer. This includes the heartbeat signal. When the interval expires, the session closes.


The idle time-out value is of significant importance if you intend to disconnect and reconnect to a session. You can reconnect only if the session has not timed out.


Enter a value in milliseconds. The minimum value is 60000 (1 minute). The maximum is the value of the MaxIdleTimeoutms property of the session configuration. The default value, -1, does not set an idle time-out.


The session uses the idle time-out that is set in the session options, if any. If none is set (-1), the session uses the value of the IdleTimeoutMs property of the session configuration or the WSMan shell time-out value ("WSMan:<ComputerName>\\Shell\\IdleTimeout"), whichever is shortest.


If the idle timeout set in the session options exceeds the value of the MaxIdleTimeoutMs property of the session configuration, the command to create a session fails.


The IdleTimeoutMs value of the default Microsoft.PowerShell session configuration is 7200000 milliseconds (2 hours). Its MaxIdleTimeoutMs value is 2147483647 milliseconds (>24 days). The default value of the WSMan shell idle time-out ("WSMan:<ComputerName>\\Shell\\IdleTimeout") is 7200000 milliseconds (2 hours).


The idle time-out value of a session can also be changed when disconnecting from a session or reconnecting to a session. For more information, see "Disconnect-PSSession" and "Connect-PSSession".


In Windows PowerShell 2.0, the default value of the IdleTimeout parameter is 240000 (4 minutes).`, `Int32`),
        new Parameter(`IncludePortInSPN`, `Includes the port number in the Service Principal Name (SPN) used for Kerberos authentication, for example, "HTTP://<ComputerName>:5985". This option allows a client that uses a non-default SPN to authenticate against a remote computer that uses Kerberos authentication.


The option is designed for enterprises where multiple services that support Kerberos authentication are running under different user accounts. For example, an IIS application that allows for Kerberos authentication can require the default SPN to be registered to a user account that differs from the computer account. In such cases, PowerShell remoting cannot use Kerberos to authenticate because it requires an SPN that is registered to the computer account. To resolve this problem, administrators can create different SPNs, such as by using Setspn.exe , that are registered to different user accounts and can distinguish between them by including the port number in the SPN.


For more information, see Setspn Overview (/previous-versions/windows/it-pro/windows-server-2003/cc773257(v=ws.10)).


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`MaxConnectionRetryCount`, `Specifies the number of times that PowerShell attempts to make a connection to a target machine if the current attempt fails due to network issues. The default value is 5.


This parameter was added for PowerShell version 5.0.`, `Int32`),
        new Parameter(`MaximumReceivedDataSizePerCommand`, `Specifies the maximum number of bytes that the local computer can receive from the remote computer in a single command. Enter a value in bytes. By default, there is no data size limit.


This option is designed to protect the resources on the client computer.`, `Int32`),
        new Parameter(`MaximumReceivedObjectSize`, `Specifies the maximum size of an object that the local computer can receive from the remote computer. This option is designed to protect the resources on the client computer. Enter a value in bytes.


In Windows PowerShell 2.0, if you omit this parameter, there is no object size limit. Beginning in Windows PowerShell 3.0, if you omit this parameter, the default value is 200 MB.`, `Int32`),
        new Parameter(`MaximumRedirection`, `Determines how many times PowerShell redirects a connection to an alternate Uniform Resource Identifier (URI) before the connection fails. The default value is 5. A value of 0 (zero) prevents all redirection.


This option is used in the session only when the AllowRedirection parameter is used in the command that creates the session.`, `Int32`),
        new Parameter(`NoCompression`, `Turns off packet compression in the session. Compression uses more processor cycles, but it makes transmission faster.`, `SwitchParameter`),
        new Parameter(`NoEncryption`, `Turns off data encryption.`, `SwitchParameter`),
        new Parameter(`NoMachineProfile`, `Prevents loading the user's Windows user profile. As a result, the session might be created faster, but user-specific registry settings, items such as environment variables, and certificates are not available in the session.`, `SwitchParameter`),
        new Parameter(`OpenTimeout`, `Determines how long the client computer waits for the session connection to be established. When the interval expires, the command to establish the connection fails. Enter a value in milliseconds.


The default value is 180000 (3 minutes). A value of 0 (zero) means no time-out; the command continues indefinitely.`, `Int32`),
        new Parameter(`OperationTimeout`, `Determines the maximum time that any operation in the session can run. When the interval expires, the operation fails. Enter a value in milliseconds.


The default value is 180000 (3 minutes). A value of 0 (zero) means no time-out; the operation continues indefinitely.`, `Int32`),
        new Parameter(`OutputBufferingMode`, `Determines how command output is managed in disconnected sessions when the output buffer becomes full.


If the output buffering mode is not set in the session or in the session configuration, the default value is Block . Users can also change the output buffering mode when disconnecting the session.


If you omit this parameter, the value of the OutputBufferingMode of the session option object is None. A value of Block or Drop overrides the output buffering mode transport option set in the session configuration. The acceptable values for this parameter are:


- Block. When the output buffer is full, execution is suspended until the buffer is clear.


- Drop. When the output buffer is full, execution continues. As new output is saved, the oldest


output is discarded. - None. No output buffering mode is specified.


For more information about the output buffering mode transport option, see "New-PSTransportOption".


This parameter was introduced in Windows PowerShell 3.0.`, `OutputBufferingMode`),
        new Parameter(`ProxyAccessType`, `Determines which mechanism is used to resolve the host name. The acceptable values for this parameter are:


- IEConfig


- WinHttpConfig


- AutoDetect


- NoProxyServer


- None




The default value is None.

For information about the values of this parameter, see ProxyAccessType Enumeration (/dotnet/api/system.management.automation.remoting.proxyaccesstype?redirectedfrom=MSDN&view=powershellsdk-1.1.0).`, `ProxyAccessType`),
        new Parameter(`ProxyAuthentication`, `Specifies the authentication method that is used for proxy resolution. The acceptable values for this parameter are: Basic , Digest , and Negotiate . The default value is Negotiate .


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (/dotnet/api/system.management.automation.runspaces.authenticationmechanism?redirectedfrom=MSDN&view=powershellsdk-1.1.0).`, `AuthenticationMechanism`),
        new Parameter(`ProxyCredential`, `Specifies the credentials to use for proxy authentication. Enter a variable that contains a PSCredential object or a command that gets a PSCredential object, such as a "Get-Credential" command. If this option is not set, no credentials are specified.`, `PSCredential`),
        new Parameter(`SkipCACheck`, `Specifies that when it connects over HTTPS, the client does not validate that the server certificate is signed by a trusted certification authority (CA).


Use this option only when the remote computer is trusted by using another mechanism, such as when the remote computer is part of a network that is physically secure and isolated or when the remote computer is listed as a trusted host in a WinRM configuration.`, `SwitchParameter`),
        new Parameter(`SkipCNCheck`, `Specifies that the certificate common name (CN) of the server does not have to match the host name of the server. This option is used only in remote operations that use the HTTPS protocol.


Use this option only for trusted computers.`, `SwitchParameter`),
        new Parameter(`SkipRevocationCheck`, `Does not validate the revocation status of the server certificate.`, `SwitchParameter`),
        new Parameter(`UICulture`, `Specifies the UI culture to use for the session.


Valid values include:


- A culture name in "<languagecode2>-<country/regioncode2>" format, such as "ja-JP"


- A variable that contains a CultureInfo object - A command that gets a CultureInfo object, such as "Get-Culture"


The default value is "$null", and the UI culture that is set in the operating system when the session is created is used in the session.`, `CultureInfo`),
        new Parameter(`UseUTF16`, `Indicates that this cmdlet encodes the request in UTF16 format instead of UTF8 format.`, `SwitchParameter`),
    ], `Creates an object that contains advanced options for a PSSession.`, `New-PSSessionOption [-ApplicationArguments <PSPrimitiveDictionary>] [-CancelTimeout <Int32>] [-Culture <CultureInfo>] [-IdleTimeout <Int32>] [-IncludePortInSPN] [-MaxConnectionRetryCount <Int32>] [-MaximumReceivedDataSizePerCommand <Int32>] [-MaximumReceivedObjectSize <Int32>] [-MaximumRedirection <Int32>] [-NoCompression] [-NoEncryption] [-NoMachineProfile] [-OpenTimeout <Int32>] [-OperationTimeout <Int32>] [-OutputBufferingMode {None | Drop | Block}] [-ProxyAccessType {None | IEConfig | WinHttpConfig | AutoDetect | NoProxyServer}] [-ProxyAuthentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-ProxyCredential <PSCredential>] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-UICulture <CultureInfo>] [-UseUTF16] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-PSTransportOption`, [
        new Parameter(`IdleTimeoutSec`, `Determines how long each session stays open if the remote computer does not receive any communication from the local computer. This includes the heartbeat signal. When the interval expires, the session closes.


The idle time-out value is of significant importance when the user intends to disconnect and reconnect to a session. The user can reconnect only if the session has not timed out.


The IdleTimeoutSec parameter corresponds to the IdleTimeoutMs property of a session configuration.


Enter a value in seconds. The default value is 7200 (2 hours). The minimum value is 60 (1 minute). The maximum is the value of the IdleTimeout property of Shell objects in the WSMan configuration ("WSMan:\<ComputerName>\\Shell\\IdleTimeout"). The default value is 7200000 milliseconds (2 hours).


If an idle time-out value is set in the session options and in the session configuration, value set in the session options takes precedence, but it cannot exceed the value of the MaxIdleTimeoutMs property of the session configuration. To set the value of the MaxIdleTimeoutMs property, use the MaxIdleTimeoutSec parameter.`, `Int32`),
        new Parameter(`MaxConcurrentCommandsPerSession`, `Limits the number of commands that can run at the same time in each session to the specified value. The default value is 1000.


The MaxConcurrentCommandsPerSession parameter corresponds to the MaxConcurrentCommandsPerShell property of a session configuration.`, `Int32`),
        new Parameter(`MaxConcurrentUsers`, `Limits the number of users who can run commands at the same time in each session to the specified value. The default value is 5.`, `Int32`),
        new Parameter(`MaxIdleTimeoutSec`, `Limits the idle time-out set for each session to the specified value. The default value is [Int]::MaxValue (~25 days).


The idle time-out value is of significant importance when the user intends to disconnect and reconnect to a session. The user can reconnect only if the session has not timed out.


The MaxIdleTimeoutSec parameter corresponds to the MaxIdleTimeoutMs property of a session configuration.`, `Int32`),
        new Parameter(`MaxMemoryPerSessionMB`, `Limits the memory used by each session to the specified value. Enter a value in megabytes. The default value is 1024 megabytes (1 GB).


The MaxMemoryPerSessionMB parameter corresponds to the MaxMemoryPerShellMB property of a session configuration.`, `Int32`),
        new Parameter(`MaxProcessesPerSession`, `Limits the number of processes running in each session to the specified value. The default value is 15.


The MaxProcessesPerSession parameter corresponds to the MaxProcessesPerShell property of a session configuration.`, `Int32`),
        new Parameter(`MaxSessions`, `Limits the number of sessions that use the session configuration. The default value is 25.


The MaxSessions parameter corresponds to the MaxShells property of a session configuration.`, `Int32`),
        new Parameter(`MaxSessionsPerUser`, `Limits the number of sessions that use the session configuration and run with the credentials of a given user to the specified value. The default value is 25.


When you specify this value, consider that many users might be using the credentials of a run as user.


The MaxSessionsPerUser parameter corresponds to the MaxShellsPerUser property of a session configuration.`, `Int32`),
        new Parameter(`OutputBufferingMode`, `Determines how command output is managed in disconnected sessions when the output buffer becomes full. The acceptable values for this parameter are:


- Block. When the output buffer is full, execution is suspended until the buffer is clear. - Drop. When the output buffer is full, execution continues. As new output is saved, the oldest output is discarded. - None. No output buffering mode is specified.


The default value of the OutputBufferingMode property of sessions is Block.`, `OutputBufferingMode`),
        new Parameter(`ProcessIdleTimeoutSec`, `Limits the time-out for each host process to the specified value. The default value, 0, means that there is no time-out value for the process.


Other session configurations have per-process time-out values. For example, the Microsoft.PowerShell.Workflow session configuration has a per-process time-out value of 28800 seconds (8 hours).`, `Int32`),
    ], `Creates an object that contains advanced options for a session configuration.`, `New-PSTransportOption [-IdleTimeoutSec <Int32>] [-MaxConcurrentCommandsPerSession <Int32>] [-MaxConcurrentUsers <Int32>] [-MaxIdleTimeoutSec <Int32>] [-MaxMemoryPerSessionMB <Int32>] [-MaxProcessesPerSession <Int32>] [-MaxSessions <Int32>] [-MaxSessionsPerUser <Int32>] [-OutputBufferingMode {None | Drop | Block}] [-ProcessIdleTimeoutSec <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Service`, [
        new Parameter(`BinaryPathName`, `Specifies the path of the executable file for the service. This parameter is required.`, `String`),
        new Parameter(`Credential`, `Specifies the account used by the service as the Service Logon Account (/windows/desktop/ad/about-service-logon-accounts).


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object, such as one generated by the "Get-Credential" cmdlet. If you type a user name, this cmdlet prompts you for a password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`DependsOn`, `Specifies the names of other services upon which the new service depends. To enter multiple service names, use a comma to separate the names.`, `String[]`),
        new Parameter(`Description`, `Specifies a description of the service.`, `String`),
        new Parameter(`DisplayName`, `Specifies a display name for the service.`, `String`),
        new Parameter(`Name`, `Specifies the name of the service. This parameter is required.`, `String`),
        new Parameter(`StartupType`, `Sets the startup type of the service. The acceptable values for this parameter are:


- Automatic - The service is started or was started by the operating system, at system start-up.   If an automatically started service depends on a manually started service, the manually started   service is also started automatically at system startup. - AutomaticDelayedStart - Starts shortly after the system boots. - Disabled - The service is disabled and cannot be started by a user or application. - InvalidValue - This value is not supported. Using this value results in an error. - Manual - The service is started only manually, by a user, using the Service Control Manager,   or by an application.


The default value is Automatic .`, `ServiceStartupType`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates a new Windows service.`, `New-Service [-Name] <String> [-BinaryPathName] <String> [-Credential <PSCredential>] [-DependsOn <String[]>] [-Description <String>] [-DisplayName <String>] [-StartupType {Automatic | Manual | Disabled | AutomaticDelayedStart | InvalidValue}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-TemporaryFile`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates a temporary file.`, `New-TemporaryFile [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-TimeSpan`, [
        new Parameter(`Days`, `Specifies the days in the time span. The default value is 0.`, `Int32`),
        new Parameter(`End`, `Specifies the end of a time span. The default value is the current date and time.`, `DateTime`),
        new Parameter(`Hours`, `Specifies the hours in the time span. The default value is zero.`, `Int32`),
        new Parameter(`Minutes`, `Specifies the minutes in the time span. The default value is 0.`, `Int32`),
        new Parameter(`Seconds`, `Specifies the length of the time span in seconds. The default value is 0.`, `Int32`),
        new Parameter(`Start`, `Specifies the start of a time span. Enter a string that represents the date and time, such as "3/15/09" or a DateTime object, such as one from a "Get-Date" command. The default value is the current date and time.


You can use Start or its alias, LastWriteTime . The LastWriteTime alias lets you pipe objects that have a LastWriteTime property, such as files in the file system "[System.Io.FileIO]", to the Start parameter of "New-TimeSpan".`, `DateTime`),
    ], `Creates a TimeSpan object.`, `New-TimeSpan [-Days <Int32>] [-Hours <Int32>] [-Minutes <Int32>] [-Seconds <Int32>] [<CommonParameters>]

New-TimeSpan [[-Start] <DateTime>] [[-End] <DateTime>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-Variable`, [
        new Parameter(`Description`, `Specifies a description of the variable.`, `String`),
        new Parameter(`Force`, `Indicates that the cmdlet creates a variable with the same name as an existing read-only variable.


By default, you can overwrite a variable unless the variable has an option value of ReadOnly or Constant. For more information, see the Option parameter.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies a name for the new variable.`, `String`),
        new Parameter(`Option`, `Specifies the value of the Options property of the variable.The acceptable values for this parameter are:


- None. Sets no options. (None is the default.) - ReadOnly. Can be deleted. Cannot be changed, except by using the Force parameter. - Private. The variable is available only in the current scope. - AllScope. The variable is copied to any new scopes that are created. - Constant. Cannot be deleted or changed. Constant is valid only when you are creating a variable. You cannot change the options of an existing variable to Constant.


To see the Options property of all variables in the session, type "Get-Variable | Format-Table -Property name, options -autosize".`, `ScopedItemOptions`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Scope`, `Specifies the scope of the new variable. The acceptable values for this parameter are:


- Global. Variables created in the global scope are accessible everywhere in a PowerShell process. - Local. The local scope refers to the current scope, this can be any scope depending on the context. - Script. Variables created in the script scope are accessible only within the script file or module they are created in. - Private. Variables created in the private scope cannot be accessed outside the scope they exist in. You can use private scope to create a private version of an item with the same name in another scope. - A number relative to the current scope (0 through the number of scopes, where 0 is the current scope, 1 is its parent, 2 the parent of the parent scope, and so on). Negative numbers cannot be used.


Local is the default scope when the scope parameter is not specified.


For more information, see about_Scopes.`, `String`),
        new Parameter(`Value`, `Specifies the initial value of the variable.`, `Object`),
        new Parameter(`Visibility`, `Determines whether the variable is visible outside of the session in which it was created. This parameter is designed for  use in scripts and commands that will be delivered to other users. The acceptable values for this parameter are:


- Public. The variable is visible. (Public is the default.) - Private. The variable is not visible.


When a variable is private, it does not appear in lists of variables, such as those returned by Get-Variable, or in displays of the Variable: drive. Commands to read or change the value of a private variable return an error. However, the user can run commands that use a private variable if the commands were written in the session in which the variable was defined.`, `SessionStateEntryVisibility`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates a new variable.`, `New-Variable [-Name] <String> [[-Value] <Object>] [-Description <String>] [-Force] [-Option {None | ReadOnly | Constant | Private | AllScope | Unspecified}] [-PassThru] [-Scope <String>] [-Visibility {Public | Private}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-WindowsCustomImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-WinEvent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-WinUserLanguageList`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-WSManInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`New-WSManSessionOption`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Optimize-AppxProvisionedPackages`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Optimize-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Out-Default`, [
        new Parameter(`InputObject`, `Accepts input to the cmdlet.`, `PSObject`),
        new Parameter(`Transcript`, `Determines whether the output should be sent to PowerShell's transcription services.`, `SwitchParameter`),
    ], `Sends the output to the default formatter and to the default output cmdlet.`, `Out-Default [-InputObject <PSObject>] [-Transcript] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Out-File`, [
        new Parameter(`Append`, `Adds the output to the end of an existing file.`, `SwitchParameter`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`FilePath`, `Specifies the path to the output file.`, `String`),
        new Parameter(`Force`, `Overrides the read-only attribute and overwrites an existing read-only file. The Force parameter does not override security restrictions.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the objects to be written to the file. Enter a variable that contains the objects or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies the path to the output file. The LiteralPath parameter is used exactly as it is typed. Wildcard characters are not accepted. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences. For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String`),
        new Parameter(`NoClobber`, `NoClobber prevents an existing file from being overwritten and displays a message that the file already exists. By default, if a file exists in the specified path, "Out-File" overwrites the file without warning.`, `SwitchParameter`),
        new Parameter(`NoNewline`, `Specifies that the content written to the file does not end with a newline character. The string representations of the input objects are concatenated to form the output. No spaces or newlines are inserted between the output strings. No newline is added after the last output string.`, `SwitchParameter`),
        new Parameter(`Width`, `Specifies the number of characters in each line of output. Any additional characters are truncated, not wrapped. If this parameter is not used, the width is determined by the characteristics of the host. The default for the PowerShell console is 80 characters.`, `Int`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Sends output to a file.`, `Out-File [-FilePath] <String> [[-Encoding] {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Append] [-Force] [-InputObject <PSObject>] [-NoClobber] [-NoNewline] [-Width <Int>] [-Confirm] [-WhatIf] [<CommonParameters>]

Out-File [[-Encoding] {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Append] [-Force] [-InputObject <PSObject>] -LiteralPath <String> [-NoClobber] [-NoNewline] [-Width <Int>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Out-Host`, [
        new Parameter(`InputObject`, `Specifies the objects that are written to the console. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`Paging`, `Indicates that "Out-Host" displays one page of output at a time, and waits for user input before the remaining pages are displayed. By default, all the output is displayed on a single page. The page size is determined by the characteristics of the host.


Press the <kbd>Space</kbd> bar to display the next page of output or the <kbd>Enter</kbd> key to view the next line of output. Press <kbd>Q</kbd> to quit. Paging is similar to the more command.


> [!NOTE] > The Paging parameter isn't supported by the PowerShell ISE host.`, `SwitchParameter`),
    ], `Sends output to the command line.`, `Out-Host [-InputObject <PSObject>] [-Paging] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Out-Null`, [
        new Parameter(`InputObject`, `Specifies the object to be sent to NULL (removed from pipeline). Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject`),
    ], `Hides the output instead of sending it down the pipeline or displaying it.`, `Out-Null [-InputObject <PSObject>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Out-String`, [
        new Parameter(`InputObject`, `Specifies the objects to be written to a string. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject`),
        new Parameter(`NoNewline`, `Removes all newlines from output generated by the PowerShell formatter. Newlines that are part of the string objects are preserved.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`Stream`, `Indicates that the cmdlet sends a separate string for each object. By default, the strings for each object are accumulated and sent as a single string.`, `SwitchParameter`),
        new Parameter(`Width`, `Specifies the number of characters in each line of output. Any additional characters are truncated, not wrapped. The Width parameter applies only to objects that are being formatted. If you omit this parameter, the width is determined by the characteristics of the host program. The default value for the PowerShell console is 80 characters.`, `Int32`),
    ], `Sends objects to the host as a series of strings.`, `Out-String [-InputObject <PSObject>] [-NoNewline] [-Width <Int32>] [<CommonParameters>]

Out-String [-InputObject <PSObject>] [-Stream] [-Width <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Pop-Location`, [
        new Parameter(`PassThru`, `Passes an object that represents the location to the pipeline. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`StackName`, `Specifies the location stack from which the location is popped. Enter a location stack name.


Without this parameter, Pop-Location pops a location from the current location stack. By default, the current location stack is the unnamed default location stack that PowerShell creates. To make a location stack the current location stack, use the StackName parameter of Set-Location . Pop-Location cannot pop a location from the unnamed default stack unless it is the current location stack.`, `String`),
    ], `Changes the current location to the location most recently pushed onto the stack.`, `Pop-Location [-PassThru] [-StackName <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Protect-CmsMessage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Push-Location`, [
        new Parameter(`LiteralPath`, `Specifies the path to the new location. Unlike the Path parameter, the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`PassThru`, `Passes an object representing the location to the pipeline. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Changes your location to the location specified by this path after it adds (pushes) the current location onto the top of the stack. Enter a path to any location whose provider supports this cmdlet. Wildcards are permitted. The parameter name is optional.`, `String`),
        new Parameter(`StackName`, `Specifies the location stack to which the current location is added. Enter a location stack name. If the stack does not exist, "Push-Location" creates it.


Without this parameter, "Push-Location" adds the location to the current location stack. By default, the current location stack is the unnamed default location stack that PowerShell creates. To make a location stack the current location stack, use the StackName parameter of the "Set-Location" cmdlet. For more information about location stacks, see the Notes (#notes).


> [!NOTE] > "Push-Location" cannot add a location to the unnamed default stack unless it is the current > location stack.`, `String`),
    ], `Adds the current location to the top of a location stack.`, `Push-Location [-LiteralPath <String>] [-PassThru] [-StackName <String>] [<CommonParameters>]

Push-Location [[-Path] <String>] [-PassThru] [-StackName <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Read-Host`, [
        new Parameter(`AsSecureString`, `Indicates that the cmdlet displays asterisks (*) in place of the characters that the user types as input.


When you use this parameter, the output of the Read-Host cmdlet is a SecureString object ( System.Security.SecureString ).`, `SwitchParameter`),
        new Parameter(`Prompt`, `Specifies the text of the prompt. Type a string. If the string includes spaces, enclose it in quotation marks. PowerShell appends a colon (:) to the text that you enter.`, `Object`),
    ], `Reads a line of input from the console.`, `Read-Host [[-Prompt] <Object>] [-AsSecureString] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Receive-Job`, [
        new Parameter(`AutoRemoveJob`, `Indicates that this cmdlet deletes the job after it returns the job results. If the job has more results, the job is still deleted, but "Receive-Job" displays a message.


This parameter works only on custom job types. It is designed for instances of job types that save the job or the type outside of the session, such as instances of scheduled jobs.


This parameter cannot be used without the Wait parameter.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`ComputerName`, `Specifies an array of names of computers.


This parameter selects from among the job results that are stored on the local computer. It does not get data for jobs run on remote computers. To get job results that are stored on remote computers, use the "Invoke-Command" cmdlet to run a "Receive-Job" command remotely.`, `String[]`),
        new Parameter(`Force`, `Indicates that this cmdlet continues waiting if jobs are in the Suspended or Disconnected state. By default, the Wait parameter of "Receive-Job" returns, or terminates the wait, when jobs are in one of the following states:


- Completed


- Failed


- Stopped


- Suspended


- Disconnected.




The Force parameter is valid only when the Wait parameter is also used in the command.

This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Id`, `Specifies an array of IDs. This cmdlet gets the results of jobs with the specified IDs.


The ID is an integer that uniquely identifies the job in the current session. It is easier to remember and type than the instance ID, but it is unique only in the current session. You can type one or more IDs separated by commas. To find the ID of a job, use "Get-Job".`, `Int32[]`),
        new Parameter(`InstanceId`, `Specifies an array of instance IDs. This cmdlet gets the results of jobs with the specified instance IDs.


An instance ID is a GUID that uniquely identifies the job on the computer. To find the instance ID of a job, use the "Get-Job" cmdlet.`, `Guid[]`),
        new Parameter(`Job`, `Specifies the job for which results are being retrieved.


Enter a variable that contains the job or a command that gets the job. You can also pipe a job object to "Receive-Job".`, `Job[]`),
        new Parameter(`Keep`, `Indicates that this cmdlet saves the aggregated stream data in the system, even after you have received them. By default, aggregated stream data is erased after viewed with "Receive-Job".


Closing the session, or removing the job with the "Remove-Job" cmdlet also deletes aggregated stream data.`, `SwitchParameter`),
        new Parameter(`Location`, `Specifies an array of locations. This cmdlet gets only the results of jobs in the specified locations.`, `String[]`),
        new Parameter(`Name`, `Specifies an array of friendly names. This cmdlet gets the results of jobs that have the specified names. Wildcard characters are supported.`, `String[]`),
        new Parameter(`NoRecurse`, `Indicates that this cmdlet gets results only from the specified job. By default, "Receive-Job" also gets the results of all child jobs of the specified job.`, `SwitchParameter`),
        new Parameter(`Session`, `Specifies an array of sessions. This cmdlet gets the results of jobs that were run in the specified PowerShell session ( PSSession ). Enter a variable that contains the PSSession or a command that gets the PSSession , such as a "Get-PSSession" command.`, `PSSession[]`),
        new Parameter(`Wait`, `Indicates that this cmdlet suppresses the command prompt until all job results are received. By default, "Receive-Job" immediately returns the available results.


By default, the Wait parameter waits until the job is in one of the following states:


- Completed


- Failed


- Stopped


- Suspended


- Disconnected.




To direct the Wait parameter to continue waiting if the job state is Suspended or Disconnected, use the Force parameter together with the Wait parameter.

This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`WriteEvents`, `Indicates that this cmdlet reports changes in the job state while it waits for the job to finish.


This parameter is valid only when the Wait parameter is used in the command and the Keep parameter is omitted.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`WriteJobInResults`, `Indicates that this cmdlet returns the job object followed by the results.


This parameter is valid only when the Wait parameter is used in the command and the Keep parameter is omitted.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
    ], `Gets the results of the PowerShell background jobs in the current session.`, `Receive-Job [-Job] <Job[]> [[-ComputerName] <String[]>] [-AutoRemoveJob] [-Force] [-Keep] [-NoRecurse] [-Wait] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Id] <Int32[]> [-AutoRemoveJob] [-Force] [-Keep] [-NoRecurse] [-Wait] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-InstanceId] <Guid[]> [-AutoRemoveJob] [-Force] [-Keep] [-NoRecurse] [-Wait] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Job] <Job[]> [[-Location] <String[]>] [-AutoRemoveJob] [-Force] [-Keep] [-NoRecurse] [-Wait] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Job] <Job[]> [[-Session] <PSSession[]>] [-AutoRemoveJob] [-Force] [-Keep] [-NoRecurse] [-Wait] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Name] <String[]> [-AutoRemoveJob] [-Force] [-Keep] [-NoRecurse] [-Wait] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Receive-PSSession`, [
        new Parameter(`AllowRedirection`, `Indicates that this cmdlet allows redirection of this connection to an alternate Uniform Resource Identifier (URI).


When you use the ConnectionURI parameter, the remote destination can return an instruction to redirect to a different URI. By default, PowerShell doesn't redirect connections, but you can use this parameter to enable it to redirect the connection.


You can also limit the number of times the connection is redirected by changing the MaximumConnectionRedirectionCount session option value. Use the MaximumRedirection parameter of the "New-PSSessionOption" cmdlet or set the MaximumConnectionRedirectionCount property of the "$PSSessionOption" preference variable. The default value is 5.`, `SwitchParameter`),
        new Parameter(`ApplicationName`, `Specifies an application. This cmdlet connects only to sessions that use the specified application.


Enter the application name segment of the connection URI. For example, in the following connection URI, WSMan is the application name: "http://localhost:5985/WSMAN".


The application name of a session is stored in the Runspace.ConnectionInfo.AppName property of the session.


The parameter's value is used to select and filter sessions. It doesn't change the application that the session uses.`, `String`),
        new Parameter(`Authentication`, `Specifies the mechanism that's used to authenticate the user credentials in the command to reconnect to a disconnected session. The acceptable values for this parameter are:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential




The default value is Default.


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).

> [!CAUTION] > Credential Security Support Provider (CredSSP) authentication, in which the user credentials are > passed to a remote computer to be authenticated, is designed for commands that require > authentication on more than one resource, such as accessing a remote network share. This mechanism > increases the security risk of the remote operation. If the remote computer is compromised, the > credentials that are passed to it can be used to control the network session.`, `AuthenticationMechanism`),
        new Parameter(`CertificateThumbprint`, `Specifies the digital public key certificate (X509) of a user account that has permission to connect to the disconnected session. Enter the certificate thumbprint of the certificate.


Certificates are used in client certificate-based authentication. Certificates can be mapped only to local user accounts, and don't work with domain accounts.


To get a certificate thumbprint, use a "Get-Item" or "Get-ChildItem" command in the PowerShell "Cert:" drive.`, `String`),
        new Parameter(`ComputerName`, `Specifies the computer on which the disconnected session is stored. Sessions are stored on the computer that's at the server-side, or receiving end of a connection. The default is the local computer.


Type the NetBIOS name, an IP address, or a fully qualified domain name (FQDN) of one computer. Wildcard characters aren't permitted. To specify the local computer, type the computer name, a dot ("."), "$env:COMPUTERNAME", or localhost.`, `String`),
        new Parameter(`ConfigurationName`, `Specifies the name of a session configuration. This cmdlet connects only to sessions that use the specified session configuration.


Enter a configuration name or the fully qualified resource URI for a session configuration. If you specify only the configuration name, the following schema URI is prepended:


"http://schemas.microsoft.com/powershell".


The configuration name of a session is stored in the ConfigurationName property of the session.


The parameter's value is used to select and filter sessions. It doesn't change the session configuration that the session uses.


For more information about session configurations, see about_Session_Configurations (./About/about_Session_Configurations.md).`, `String`),
        new Parameter(`ConnectionUri`, `Specifies a URI that defines the connection endpoint that is used to reconnect to the disconnected session.


The URI must be fully qualified. The string's format is as follows:


"<Transport>://<ComputerName>:<Port>/<ApplicationName>"


The default value is as follows:


"http://localhost:5985/WSMAN"


If you don't specify a connection URI, you can use the UseSSL , ComputerName , Port , and ApplicationName parameters to specify the connection URI values.


Valid values for the Transport segment of the URI are HTTP and HTTPS. If you specify a connection URI with a Transport segment, but don't specify a port, the session is created with standard ports: 80 for HTTP and 443 for HTTPS. To use the default ports for PowerShell remoting, specify port 5985 for HTTP or 5986 for HTTPS.


If the destination computer redirects the connection to a different URI, PowerShell prevents the redirection unless you use the AllowRedirection parameter in the command.`, `Uri`),
        new Parameter(`Credential`, `Specifies a user account that has permission to connect to the disconnected session. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`Id`, `Specifies the ID of a disconnected session. The Id parameter works only when the disconnected session was previously connected to the current session.


This parameter is valid, but not effective, when the session is stored on the local computer, but wasn't connected to the current session.`, `Int32`),
        new Parameter(`InstanceId`, `Specifies the instance ID of the disconnected session. The instance ID is a GUID that uniquely identifies a PSSession on a local or remote computer. The instance ID is stored in the InstanceID property of the PSSession .`, `Guid`),
        new Parameter(`JobName`, `Specifies a friendly name for the job that "Receive-PSSession" returns.


"Receive-PSSession" returns a job when the value of the OutTarget parameter is Job or the job that's running in the disconnected session was started in the current session.


If the job that's running in the disconnected session was started in the current session, PowerShell reuses the original job object in the session and ignores the value of the JobName parameter.


If the job that's running in the disconnected session was started in a different session, PowerShell creates a new job object. It uses a default name, but you can use this parameter to change the name.


If the default value or explicit value of the OutTarget parameter isn't Job, the command succeeds, but the JobName parameter has no effect.`, `String`),
        new Parameter(`Name`, `Specifies the friendly name of the disconnected session.`, `String`),
        new Parameter(`OutTarget`, `Determines how the session results are returned. The acceptable values for this parameter are:


- Job . Returns the results asynchronously in a job object. You can use the JobName parameter   to specify a name or new name for the job. - Host . Returns the results to the command line (synchronously). If the command is being resumed   or the results consist of a large number of objects, the response might be delayed.


The default value of the OutTarget parameter is Host. If the command that's being received in a disconnected session was started in the current session, the default value of the OutTarget parameter is the form in which the command was started. If the command was started as a job, by default, it's returned as a job. Otherwise, it's returned to the host program by default.


Typically, the host program displays returned objects at the command line without delay, but this behavior can vary.`, `OutTarget`),
        new Parameter(`Port`, `Specifies the remote computer's network port that's used to reconnect to the session. To connect to a remote computer, it must be listening on the port that the connection uses. The default ports are 5985, which is the WinRM port for HTTP, and 5986, which is the WinRM port for HTTPS.


Before using an alternate port, you must configure the WinRM listener on the remote computer to listen on that port. To configure the listener, type the following two commands at the PowerShell prompt:


"Remove-Item -Path WSMan:\\Localhost\\listener\\listener* -Recurse"


"New-Item -Path WSMan:\\Localhost\\listener -Transport http -Address * -Port <port-number>"


Don't use the Port parameter unless it's necessary. The port that's set in the command applies to all computers or sessions on which the command runs. An alternate port setting might prevent the command from running on all computers.`, `Int32`),
        new Parameter(`Session`, `Specifies the disconnected session. Enter a variable that contains the PSSession or a command that creates or gets the PSSession , such as a "Get-PSSession" command.`, `PSSession`),
        new Parameter(`SessionOption`, `Specifies advanced options for the session. Enter a SessionOption object, such as one that you create by using the "New-PSSessionOption" cmdlet, or a hash table in which the keys are session option names and the values are session option values.


The default values for the options are determined by the value of the "$PSSessionOption" preference variable, if it's set. Otherwise, the default values are established by options set in the session configuration.


The session option values take precedence over default values for sessions set in the "$PSSessionOption" preference variable and in the session configuration. However, they don't take precedence over maximum values, quotas, or limits set in the session configuration.


For a description of the session options that includes the default values, see "New-PSSessionOption". For information about the $PSSessionOption preference variable, see about_Preference_Variables (./About/about_Preference_Variables.md). For more information about session configurations, see about_Session_Configurations (./About/about_Session_Configurations.md).`, `PSSessionOption`),
        new Parameter(`UseSSL`, `Indicates that this cmdlet uses the Secure Sockets Layer (SSL) protocol to connect to the disconnected session. By default, SSL isn't used.


WS-Management encrypts all PowerShell content transmitted over the network. UseSSL is an additional protection that sends the data across an HTTPS connection instead of an HTTP connection.


If you use this parameter and SSL isn't available on the port that's used for the command, the command fails.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Gets results of commands in disconnected sessions`, `Receive-PSSession [-ConnectionUri] <Uri> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-JobName <String>] -Name <String> [-OutTarget {Default | Host | Job}] [-SessionOption <PSSessionOption>] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession [-ConnectionUri] <Uri> [-AllowRedirection] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] -InstanceId <Guid> [-JobName <String>] [-OutTarget {Default | Host | Job}] [-SessionOption <PSSessionOption>] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession [-ComputerName] <String> [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] -InstanceId <Guid> [-JobName <String>] [-OutTarget {Default | Host | Job}] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-UseSSL] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession [-ComputerName] <String> [-ApplicationName <String>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-CertificateThumbprint <String>] [-ConfigurationName <String>] [-Credential <PSCredential>] [-JobName <String>] -Name <String> [-OutTarget {Default | Host | Job}] [-Port <Int32>] [-SessionOption <PSSessionOption>] [-UseSSL] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession [-Id] <Int32> [-JobName <String>] [-OutTarget {Default | Host | Job}] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession -InstanceId <Guid> [-JobName <String>] [-OutTarget {Default | Host | Job}] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession [-JobName <String>] -Name <String> [-OutTarget {Default | Host | Job}] [-Confirm] [-WhatIf] [<CommonParameters>]

Receive-PSSession [-Session] <PSSession> [-JobName <String>] [-OutTarget {Default | Host | Job}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-ArgumentCompleter`, [
        new Parameter(`CommandName`, `Specifies the name of the commands as an array.`, `String[]`),
        new Parameter(`Native`, `Indicates that the argument completer is for a native command where PowerShell cannot complete parameter names.`, `SwitchParameter`),
        new Parameter(`ParameterName`, `Specifies the name of the parameter whose argument is being completed. The parameter name specified cannot be an enumerated value, such as the ForegroundColor parameter of the "Write-Host" cmdlet.


For more information on enums, see about_Enum (./About/about_Enum.md).`, `String`),
        new Parameter(`ScriptBlock`, `Specifies the commands to run to perform tab completion. The script block you provide should return the values that complete the input. The script block must unroll the values using the pipeline ("ForEach-Object", "Where-Object", etc.), or another suitable method. Returning an array of values causes PowerShell to treat the entire array as one tab completion value.


The script block must accept the following parameters in the order specified below. The names of the parameters aren't important because PowerShell passes in the values by position.


- "$commandName" (Position 0) - This parameter is set to the name of the   command for which the script block is providing tab completion. - "$parameterName" (Position 1) - This parameter is set to the parameter   whose value requires tab completion. - "$wordToComplete" (Position 2) - This parameter is set to value the user has provided before they   pressed <kbd>Tab</kbd>. Your script block should use this value to determine tab completion   values. - "$commandAst" (Position 3) - This parameter is set to the Abstract Syntax   Tree (AST) for the current input line. For more information, see Ast Class (/dotnet/api/system.management.automation.language.ast). - "$fakeBoundParameters" (Position 4) - This parameter is set to a hashtable containing the   "$PSBoundParameters" for the cmdlet, before the user pressed <kbd>Tab</kbd>. For more information,   see about_Automatic_Variables (./About/about_Automatic_Variables.md).


When you specify the Native parameter, the script block must take the following parameters in the specified order. The names of the parameters aren't important because PowerShell passes in the values by position.


- "$commandName" (Position 0) - This parameter is set to the name of the   command for which the script block is providing tab completion. - "$wordToComplete" (Position 1) - This parameter is set to value the user has   provided before they pressed <kbd>Tab</kbd>. Your script block should use this value   to determine tab completion values. - "$cursorPosition" (Position 2) - This parameter is set to the position of the cursor when the user   pressed <kbd>Tab</kbd>.


You can also provide an ArgumentCompleter as a parameter attribute. For more information, see about_Functions_Advanced_Parameters (./About/about_Functions_Advanced_Parameters.md).`, `ScriptBlock`),
    ], `Registers a custom argument completer.`, `Register-ArgumentCompleter [-CommandName <String[]>] [-Native] -ScriptBlock <ScriptBlock> [<CommonParameters>]

Register-ArgumentCompleter [-CommandName <String[]>] -ParameterName <String> -ScriptBlock <ScriptBlock> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-CimIndicationEvent`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-EngineEvent`, [
        new Parameter(`Action`, `Specifies commands to handle the events. The commands in the Action run when an event is raised, instead of sending the event to the event queue. Enclose the commands in braces ( { } ) to create a script block.


The value of the Action parameter can include the $Event, $EventSubscriber, $Sender, $EventArgs, and $Args automatic variables, which provide information about the event to the Action script block. For more information, see about_Automatic_Variables (../Microsoft.PowerShell.Core/About/about_Automatic_Variables.md).


When you specify an action, Register-EngineEvent returns an event job object that represents that action. You can use the Job cmdlets to manage the event job.`, `ScriptBlock`),
        new Parameter(`Forward`, `Indicates that the cmdlet sends events for this subscription to the session on the local computer. Use this parameter when you are registering for events on a remote computer or in a remote session.`, `SwitchParameter`),
        new Parameter(`MaxTriggerCount`, `Specifies the max trigger count.


The value of the Action parameter can include the $Event, $EventSubscriber, $Sender, $EventArgs, and $Args automatic variables, which provide information about the event to the Action script block. For more information, see about_Automatic_Variables (../Microsoft.PowerShell.Core/about/about_Automatic_Variables.md).


When you specify an action, Register-EngineEvent returns an event job object that represents that action. You can use the Job cmdlets to manage the event job.`, `Int32`),
        new Parameter(`MessageData`, `Specifies additional data associated with the event. The value of this parameter appears in the MessageData property of the event object.`, `PSObject`),
        new Parameter(`SourceIdentifier`, `Specifies the source identifier of the event to which you are subscribing. The source identifier must be unique in the current session. This parameter is required.


The value of this parameter appears in the value of the SourceIdentifier property of the subscriber object and of all event objects associated with this subscription.


Supported EngineEvent values include PowerShell.Exiting, PowerShell.OnIdle, and PowerShell.OnScriptBlockInvoke.`, `String`),
        new Parameter(`SupportEvent`, `Indicates that the cmdlet hides the event subscription. Add this parameter when the current subscription is part of a more complex event registration mechanism and it should not be discovered independently.


To view or cancel a subscription that was created with the SupportEvent parameter, add the Force parameter to the Get-EventSubscriber or Unregister-Event cmdlets.`, `SwitchParameter`),
    ], `Subscribes to events that are generated by the PowerShell engine and by the New-Event cmdlet.`, `Register-EngineEvent [-SourceIdentifier] <String> [[-Action] <ScriptBlock>] [-Forward] [-MaxTriggerCount <Int32>] [-MessageData <PSObject>] [-SupportEvent] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-ObjectEvent`, [
        new Parameter(`Action`, `Specifies the commands to handle the event. The commands in the Action run when an event is raised, instead of sending the event to the event queue. Enclose the commands in braces ( { } ) to create a script block.


The value of the Action parameter can include the "$Event", "$EventSubscriber", "$Sender", "$EventArgs", and "$Args" automatic variables. These variables provide information about the event to the Action script block. For more information, see about_Automatic_Variables (../Microsoft.PowerShell.Core/About/about_Automatic_Variables.md).


When you specify an action, "Register-ObjectEvent" returns an event job object that represents that action. You can use the Job cmdlets to manage the event job.`, `ScriptBlock`),
        new Parameter(`EventName`, `Specifies the event to which you are subscribing.


The value of this parameter must be the name of the event that the .NET object exposes. For example, the ManagementEventWatcher class has events named EventArrived and Stopped . To find the event name of an event, use the "Get-Member" cmdlet.`, `String`),
        new Parameter(`Forward`, `Indicates that the cmdlet sends events for this subscription to a remote session. Use this parameter when you are registering for events on a remote computer or in a remote session.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the .NET object that generates the events. Enter a variable that contains the object, or type a command or expression that gets the object.`, `PSObject`),
        new Parameter(`MaxTriggerCount`, `Specifies the maximum number of times an event can be triggered.`, `Int32`),
        new Parameter(`MessageData`, `Specifies any additional data to be associated with this event subscription. The value of this parameter appears in the MessageData property of all events associated with this subscription.`, `PSObject`),
        new Parameter(`SourceIdentifier`, `Specifies a name that you select for the subscription. The name that you select must be unique in the current session. The default value is the GUID that PowerShell assigns.


The value of this parameter appears in the value of the SourceIdentifier property of the subscriber object and all event objects associated with this subscription.`, `String`),
        new Parameter(`SupportEvent`, `Indicates that the cmdlet hides the event subscription. Use this parameter when the current subscription is part of a more complex event registration mechanism and should not be discovered independently.


To view or cancel a subscription that was created with the SupportEvent parameter, use the Force parameter of the "Get-EventSubscriber" and "Unregister-Event" cmdlets.`, `SwitchParameter`),
    ], `Subscribes to the events that are generated by a Microsoft .NET Framework object.`, `Register-ObjectEvent [-InputObject] <PSObject> [-EventName] <String> [[-SourceIdentifier] <String>] [[-Action] <ScriptBlock>] [-Forward] [-MaxTriggerCount <Int32>] [-MessageData <PSObject>] [-SupportEvent] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-PackageSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Register-PSSessionConfiguration`, [
        new Parameter(`AccessMode`, `Enables and disables the session configuration and determines whether it can be used for remote or local sessions on the computer. The acceptable values for this parameter are:


- Disabled. Disables the session configuration. It cannot be used for remote or local access to the   computer. - Local. Allows users of the local computer to use the session configuration to create a local   loopback session on the same computer, but denies access to remote users. - Remote. Allows local and remote users to use the session configuration to create sessions and run   commands on this computer.


The default value is Remote.


Other cmdlets can override the value of this parameter later. For example, the "Enable-PSRemoting" cmdlet allows for remote access to all session configurations, the "Enable-PSSessionConfiguration" cmdlet enables session configurations, and the "Disable-PSRemoting" cmdlet prevents remote access to all session configurations.


This parameter was introduced in PowerShell 3.0.`, `PSSessionConfigurationAccessMode`),
        new Parameter(`ApplicationBase`, `Specifies the path of the assembly file (*.dll) that is specified in the value of the AssemblyName parameter. Use this parameter when the value of the AssemblyName parameter does not include a path. The default is the current directory.`, `String`),
        new Parameter(`AssemblyName`, `Specifies the name of an assembly file (*.dll) in which the configuration type is defined. You can specify the path of the .dll in this parameter or in the value of the ApplicationBase parameter.


This parameter is required when you specify the ConfigurationTypeName parameter.`, `String`),
        new Parameter(`ConfigurationTypeName`, `Specifies the fully qualified name of the Microsoft .NET Framework type that is used for this configuration. The type that you specify must implement the System.Management.Automation.Remoting.PSSessionConfiguration class.


To specify the assembly file (*.dll) that implements the configuration type, specify the AssemblyName and ApplicationBase parameters.


Creating a type lets you control more aspects of the session configuration, such as exposing or hiding certain parameters of cmdlets, or setting data size and object size limits that users cannot override.


If you omit this parameter, the DefaultRemotePowerShellConfiguration class is used for the session configuration.`, `String`),
        new Parameter(`Force`, `Suppresses all user prompts and restarts the WinRM service without prompting. Restarting the service makes the configuration change effective.


To prevent a restart and suppress the restart prompt, specify the NoServiceRestart parameter.`, `SwitchParameter`),
        new Parameter(`MaximumReceivedDataSizePerCommandMB`, `Specifies a limit for the amount of data that can be sent to this computer in any single remote command. Enter the data size in megabytes (MB). The default is 50 MB.


If a data size limit is defined in the configuration type that is specified in the ConfigurationTypeName parameter, the limit in the configuration type is used and the value of this parameter is ignored.`, `Double`),
        new Parameter(`MaximumReceivedObjectSizeMB`, `Specifies a limit for the amount of data that can be sent to this computer in any single object. Enter the data size in megabytes. The default is 10 MB.


If an object size limit is defined in the configuration type that is specified in the ConfigurationTypeName parameter, the limit in the configuration type is used and the value of this parameter is ignored.`, `Double`),
        new Parameter(`ModulesToImport`, `Specifies the modules that are automatically imported into sessions that use the session configuration.


By default, only Microsoft.PowerShell.Core is imported into sessions. Unless the cmdlets are excluded, you can use "Import-Module" to add modules to the session.


The modules specified in this parameter value are imported in additions to modules that are specified by the SessionType parameter and those listed in the ModulesToImport key in the session configuration file ("New-PSSessionConfigurationFile"). However, settings in the session configuration file can hide the commands exported by modules or prevent users from using them.


This parameter was introduced in PowerShell 3.0.`, `Object[]`),
        new Parameter(`Name`, `Specifies a name for the session configuration. This parameter is required.`, `String`),
        new Parameter(`NoServiceRestart`, `Does not restart the WinRM service, and suppresses the prompt to restart the service.


By default, when you run a "Register-PSSessionConfiguration" command, you are prompted to restart the WinRM service to make the new session configuration effective. Until the WinRM service is restarted, the new session configuration is not effective.


To restart the WinRM service without prompting, specify the Force parameter. To restart the WinRM service manually, use the "Restart-Service" cmdlet.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path and filename of a session configuration file (.pssc), such as one created by "New-PSSessionConfigurationFile". If you omit the path, the default is the current directory.


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`ProcessorArchitecture`, `Determines whether a 32-bit or 64-bit version of the PowerShell process is started in sessions that use this session configuration. The acceptable values for this parameter are: x86 (32-bit) and AMD64 (64-bit). The default value is determined by the processor architecture of the computer that hosts the session configuration.


You can use this parameter to create a 32-bit session on a 64-bit computer. Attempts to create a 64-bit process on a 32-bit computer fail.`, `String`),
        new Parameter(`PSVersion`, `Specifies the version of PowerShell in sessions that use this session configuration.


The value of this parameter takes precedence over the value of the PowerShellVersion key in the session configuration file.


This parameter was introduced in PowerShell 3.0.`, `Version`),
        new Parameter(`RunAsCredential`, `Specifies credentials for commands in the session. By default, commands run with the permissions of the current user.


This parameter was introduced in PowerShell 3.0.`, `PSCredential`),
        new Parameter(`SecurityDescriptorSddl`, `Specifies a Security Descriptor Definition Language (SDDL) string for the configuration.


This string determines the permissions that are required to use the new session configuration. To use a session configuration in a session, users must have at least Execute (Invoke) permission for the configuration.


If the security descriptor is complex, consider using the ShowSecurityDescriptorUI parameter instead of this parameter. You cannot use both parameters in the same command.


If you omit this parameter, the root SDDL for the WinRM service is used for this configuration. To view or change the root SDDL, use the WSMan provider. For example "Get-Item wsman:\\localhost\\service\\rootSDDL". For more information about the WSMan provider, type "Get-Help wsman".`, `String`),
        new Parameter(`SessionType`, `Specifies the type of session that is created by using the session configuration. The acceptable values for this parameter are:


- Empty. No modules are added to session by default. Use the parameters of this cmdlet to add   modules, functions, scripts, and other features to the session. - Default. Adds Microsoft.PowerShell.Core to the session. This module includes the "Import-Module"   cmdlet that users can use to import other modules unless you explicitly prohibit the cmdlet. - RestrictedRemoteServer. Includes only the following cmdlets: "Exit-PSSession", "Get-Command",   "Get-FormatData", "Get-Help", "Measure-Object", "Out-Default", and "Select-Object". Use a script   or assembly, or the keys in the session configuration file, to add modules, functions, scripts,   and other features to the session.


The default value is Default.


The value of this parameter takes precedence over the value of the SessionType key in the session configuration file.


This parameter was introduced in PowerShell 3.0.`, `PSSessionType`),
        new Parameter(`SessionTypeOption`, `Specifies type-specific options for the session configuration. Enter a session type options object, such as the PSWorkflowExecutionOption object that the "New-PSWorkflowExecutionOption" cmdlet returns.


The options of sessions that use the session configuration are determined by the values of session options and the session configuration options. Unless specified, options set in the session, such as by using the "New-PSSessionOption" cmdlet, take precedence over options set in the session configuration. However, session option values cannot exceed maximum values set in the session configuration.


This parameter was introduced in PowerShell 3.0.`, `PSSessionTypeOption`),
        new Parameter(`ShowSecurityDescriptorUI`, `Indicates that this cmdlet displays a property sheet that helps you create the SDDL for the session configuration. The property sheet appears after you enter the "Register-PSSessionConfiguration" command and then restart the WinRM service.


When setting the permissions for the configuration, remember that users must have at least Execute (Invoke) permission to use the session configuration in a session.


You cannot use the SecurityDescriptorSDDL parameter and this parameter in the same command.`, `SwitchParameter`),
        new Parameter(`StartupScript`, `Specifies the fully qualified path of a PowerShell script. The specified script runs in the new session that uses the session configuration.


You can use the script to additionally configure the session. If the script generates an error, even a non-terminating error, the session is not created and the "New-PSSession" command fails.`, `String`),
        new Parameter(`ThreadOptions`, `Specifies how threads are created and used when a command runs in the session. The acceptable values for this parameter are:


- Default


- ReuseThread


- UseCurrentThread


- UseNewThread




The default value is UseCurrentThread .

For more information, see PSThreadOptions Enumeration (/dotnet/api/system.management.automation.runspaces.psthreadoptions?view=powershellsdk-1.1.0).`, `PSThreadOptions`),
        new Parameter(`TransportOption`, `Specifies the transport option.


This parameter was introduced in PowerShell 3.0.`, `PSTransportOption`),
        new Parameter(`UseSharedProcess`, `Use only one process to host all sessions that are started by the same user and use the same session configuration. By default, each session is hosted in its own process.


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates and registers a new session configuration.`, `Register-PSSessionConfiguration [-Name] <String> [-AccessMode {Disabled | Local | Remote}] [-ApplicationBase <String>] [-Force] [-MaximumReceivedDataSizePerCommandMB <Double>] [-MaximumReceivedObjectSizeMB <Double>] [-ModulesToImport <Object[]>] [-NoServiceRestart] [-ProcessorArchitecture {x86 | amd64}] [-PSVersion <Version>] [-RunAsCredential <PSCredential>] [-SecurityDescriptorSddl <String>] [-SessionType {DefaultRemoteShell | Workflow}] [-SessionTypeOption <PSSessionTypeOption>] [-ShowSecurityDescriptorUI] [-StartupScript <String>] [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}] [-TransportOption <PSTransportOption>] [-UseSharedProcess] [-Confirm] [-WhatIf] [<CommonParameters>]

Register-PSSessionConfiguration [-Name] <String> [-AssemblyName] <String> [-ConfigurationTypeName] <String> [-AccessMode {Disabled | Local | Remote}] [-ApplicationBase <String>] [-Force] [-MaximumReceivedDataSizePerCommandMB <Double>] [-MaximumReceivedObjectSizeMB <Double>] [-ModulesToImport <Object[]>] [-NoServiceRestart] [-ProcessorArchitecture {x86 | amd64}] [-PSVersion <Version>] [-RunAsCredential <PSCredential>] [-SecurityDescriptorSddl <String>] [-SessionTypeOption <PSSessionTypeOption>] [-ShowSecurityDescriptorUI] [-StartupScript <String>] [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}] [-TransportOption <PSTransportOption>] [-UseSharedProcess] [-Confirm] [-WhatIf] [<CommonParameters>]

Register-PSSessionConfiguration [-Name] <String> [-AccessMode {Disabled | Local | Remote}] [-Force] [-MaximumReceivedDataSizePerCommandMB <Double>] [-MaximumReceivedObjectSizeMB <Double>] [-NoServiceRestart] -Path <String> [-ProcessorArchitecture {x86 | amd64}] [-RunAsCredential <PSCredential>] [-SecurityDescriptorSddl <String>] [-ShowSecurityDescriptorUI] [-StartupScript <String>] [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}] [-TransportOption <PSTransportOption>] [-UseSharedProcess] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Alias`, [
        new Parameter(`Force`, `Indicates that the cmdlet removes an alias, including aliases with the Option property set to ReadOnly . The Force parameter can't remove an alias with an Option property set to Constant .`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies the name of the alias to remove.`, `String[]`),
        new Parameter(`Scope`, `Affects only the aliases in the specified scope. The default scope is Local . For more information, see about_Scopes (../microsoft.powershell.core/about/about_scopes.md).


The acceptable values for this parameter are:


- Global


- Local


- Script


- A number relative to the current scope (0 through the number of scopes, where 0 is the current


scope and 1 is its parent)`, `String`),
    ], `Remove an alias from the current session.`, `Remove-Alias [-Name] <String[]> [-Force] [-Scope <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-AppxPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-AppxProvisionedPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-AppxVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-CimInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-CimSession`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Event`, [
        new Parameter(`EventIdentifier`, `Specifies the event identifier for which the cmdlet deletes. An EventIdentifier or SourceIdentifier parameter is required in every command.`, `Int32`),
        new Parameter(`SourceIdentifier`, `Specifies the source identifier for which this cmdlet deletes events from. Wildcards are not permitted. An EventIdentifier or SourceIdentifier parameter is required in every command.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes events from the event queue.`, `Remove-Event [-EventIdentifier] <Int32> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-Event [-SourceIdentifier] <String> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Item`, [
        new Parameter(`Stream`, `The Stream parameter is a dynamic parameter that the FileSystem provider adds to "Remove-Item". This parameter works only in file system drives.


You can use "Remove-Item" to delete an alternative data stream. However, it is not the recommended way to eliminate security checks that block files that are downloaded from the Internet. If you verify that a downloaded file is safe, use the "Unblock-File" cmdlet.


This parameter was introduced in Windows PowerShell 3.0.`, `String[]`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to remove items that cannot otherwise be changed, such as hidden or read-only files or read-only aliases or variables. The cmdlet cannot remove constant aliases or variables. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md). Even using the Force parameter, the cmdlet cannot override security restrictions.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Path`, `Specifies a path of the items being removed. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Recurse`, `Indicates that this cmdlet deletes the items in the specified locations and in all child items of the locations.


When it is used with the Include parameter, the Recurse parameter might not delete all subfolders or all child items. This is a known issue. As a workaround, try piping results of the "Get-ChildItem -Recurse" command to "Remove-Item", as described in "Example 4" in this topic.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes the specified items.`, `Remove-Item [-Stream <String[]>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-Recurse] [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-Item [-Path] <String[]> [-Stream <String[]>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-Recurse] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to remove a property of an object that cannot otherwise be accessed by the user. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the names of the properties to remove. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Path`, `Specifies the path of the item whose properties are being removed. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes the property and its value from an item.`, `Remove-ItemProperty [-Name] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-ItemProperty [-Path] <String[]> [-Name] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Job`, [
        new Parameter(`Command`, `Deletes jobs that include the specified words in the command. You can enter a comma-separated array.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before "Remove-Job" is run.`, `SwitchParameter`),
        new Parameter(`Filter`, `Deletes jobs that satisfy all the conditions established in the associated hash table. Enter a hash table where the keys are job properties and the values are job property values.


This parameter works only on custom job types, such as workflow jobs and scheduled jobs. It doesn't work on standard background jobs, such as those created by using the "Start-Job".


This parameter is introduced in PowerShell 3.0.`, `Hashtable`),
        new Parameter(`Force`, `Deletes a job even if the job's state is Running . If the Force parameter isn't specified, "Remove-Job" doesn't delete running jobs.`, `SwitchParameter`),
        new Parameter(`Id`, `Deletes background jobs with the specified Id . You can enter a comma-separated array. The job's Id is a unique integer that identifies a job within the current session.


To find a job's Id , use "Get-Job" without parameters.`, `Int32[]`),
        new Parameter(`InstanceId`, `Deletes jobs with the specified InstanceId . You can enter a comma-separated array. An InstanceId is a unique GUID that identifies a job.


To find a job's InstanceId , use "Get-Job".`, `Guid[]`),
        new Parameter(`Job`, `Specifies the jobs to be deleted. Enter a variable that contains the jobs or a command that gets the jobs. You can enter a comma-separated array.


You can send job objects down the pipeline to "Remove-Job".`, `Job[]`),
        new Parameter(`Name`, `Only deletes jobs with the specified friendly name. Wildcards are permitted. You can enter a comma-separated array.


Friendly names for jobs aren't guaranteed to be unique, even within a PowerShell session. Use the WhatIf and Confirm parameters when you delete files by name.`, `String[]`),
        new Parameter(`State`, `Only deletes jobs with the specified state. To delete jobs with a state of Running , use the Force parameter.


Accepted values:


- AtBreakpoint


- Blocked


- Completed


- Disconnected


- Failed


- NotStarted


- Running


- Stopped


- Stopping


- Suspended


- Suspending`, `JobState`),
        new Parameter(`WhatIf`, `Shows what would happen if "Remove-Job" runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Deletes a PowerShell background job.`, `Remove-Job [-Command <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-Job [-Filter] <Hashtable> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]

Remove-Job [-Id] <Int32[]> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]

Remove-Job [-Job] <Job[]> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]

Remove-Job [-Name] <String[]> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]

Remove-Job [-InstanceId] <Guid[]> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]

Remove-Job [-State] {AtBreakpoint | Blocked | Completed | Disconnected | Failed | NotStarted | Running | Stopped | Stopping | Suspended | Suspending} [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-LocalGroup`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-LocalGroupMember`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Module`, [
        new Parameter(`Force`, `Indicates that this cmdlet removes read-only modules. By default, Remove-Module removes only read-write modules.


The ReadOnly and ReadWrite values are stored in AccessMode property of a module.`, `SwitchParameter`),
        new Parameter(`FullyQualifiedName`, `Specifies the fully qualified names of modules to remove.`, `ModuleSpecification[]`),
        new Parameter(`ModuleInfo`, `Specifies the module objects to remove. Enter a variable that contains a module object ( PSModuleInfo ) or a command that gets a module object, such as a Get-Module command. You can also pipe module objects to Remove-Module .`, `PSModuleInfo[]`),
        new Parameter(`Name`, `Specifies the names of modules to remove. Wildcard characters are permitted. You can also pipe name strings to Remove-Module .`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Removes modules from the current session.`, `Remove-Module [-FullyQualifiedName] <ModuleSpecification[]> [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-Module [-ModuleInfo] <PSModuleInfo[]> [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-Module [-Name] <String[]> [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PSBreakpoint`, [
        new Parameter(`Breakpoint`, `Specifies the breakpoints to delete. Enter a variable that contains breakpoint objects or a command that gets breakpoint objects, such as a Get-PSBreakpoint command. You can also pipe breakpoint objects to Remove-PSBreakpoint .`, `Breakpoint[]`),
        new Parameter(`Id`, `Specifies breakpoint IDs for which this cmdlet deletes breakpoints.`, `Int32[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes breakpoints from the current console.`, `Remove-PSBreakpoint [-Breakpoint] <Breakpoint[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSBreakpoint [-Id] <Int32[]> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PSDrive`, [
        new Parameter(`Force`, `Removes the current PowerShell drive.`, `SwitchParameter`),
        new Parameter(`LiteralName`, `Specifies the name of the drive.


The value of LiteralName is used exactly as typed. No characters are interpreted as wildcards. If the name includes escape characters, enclose it in single quotation marks ('). Single quotation marks instruct PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Name`, `Specifies the names of the drives to remove. Do not type a colon (:) after the drive name.`, `String[]`),
        new Parameter(`PSProvider`, `Specifies an array of PSProvider objects. This cmdlet removes and disconnects all of the drives associated with the specified PowerShell provider.`, `String[]`),
        new Parameter(`Scope`, `Specifies a scope for the drive. The acceptable values for this parameter are: Global, Local, and Script, or a number relative to the current scope. Scopes number 0 through the number of scopes. The current scope number is 0 and its parent is 1. For more information, see about_Scopes (../Microsoft.PowerShell.Core/About/about_Scopes.md).`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes temporary PowerShell drives and disconnects mapped network drives.`, `Remove-PSDrive [-LiteralName] <String[]> [-Force] [-PSProvider <String[]>] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSDrive [-Name] <String[]> [-Force] [-PSProvider <String[]>] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PSReadLineKeyHandler`, [
        new Parameter(`Chord`, ``, `string[]`),
        new Parameter(`ViMode`, ``, `ViMode`),
    ], `Remove-PSReadLineKeyHandler [-Chord] <string[]> [-ViMode <ViMode>] [<CommonParameters>]`, `syntaxItem
----------
{@{name=Remove-PSReadLineKeyHandler; CommonParameters=True; parameter=System.Object[]}}`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-PSSession`, [
        new Parameter(`ComputerName`, `Specifies an array of names of computers. This cmdlet closes the PSSessions that are connected to the specified computers. Wildcard characters are permitted.


Type the NetBIOS name, an IP address, or a fully qualified domain name of one or more remote computers. To specify the local computer, type the computer name, localhost, or a dot (.).`, `String[]`),
        new Parameter(`ContainerId`, `Specifies an array of IDs of containers. This cmdlet starts an interactive session with each of the specified containers. To see the containers that are available to you, use the Get-Container cmdlet.`, `String[]`),
        new Parameter(`Id`, `Specifies an array of IDs of sessions. This cmdlet closes the PSSessions with the specified IDs. Type one or more IDs, separated by commas, or use the range operator (..) to specify a range of IDs.


An ID is an integer that uniquely identifies the PSSession in the current session. It is easier to remember and type than the InstanceId , but it is unique only in the current session. To find the ID of a PSSession , run the Get-PSSession cmdlet without parameters.`, `Int32[]`),
        new Parameter(`InstanceId`, `Specifies an array of instance IDs. This cmdlet closes the PSSessions that have the specified instance IDs.


The instance ID is a GUID that uniquely identifies a PSSession in the current session. The instance ID is unique, even when you have multiple sessions running on a single computer.


The instance ID is stored in the InstanceID property of the object that represents a PSSession . To find the InstanceID of the PSSessions in the current session, type "Get-PSSession | Format-Table Name, ComputerName, InstanceId".`, `Guid[]`),
        new Parameter(`Name`, `Specifies an array of friendly names of sessions. This cmdlet closes the PSSessions that have the specified friendly names. Wildcard characters are permitted.


Because the friendly name of a PSSession might not be unique, when you use the Name parameter, consider also using the WhatIf or Confirm parameter in the Remove-PSSession command.`, `String[]`),
        new Parameter(`Session`, `Specifies the session objects of the PSSessions to close. Enter a variable that contains the PSSessions or a command that creates or gets the PSSessions , such as a New-PSSession or Get-PSSession command. You can also pipe one or more session objects to Remove-PSSession .`, `PSSession[]`),
        new Parameter(`VMId`, `Specifies an array of ID of virtual machines. This cmdlet starts an interactive session with each of the specified virtual machines. To see the virtual machines that are available to you, use the following command:


"Get-VM | Select-Object -Property Name, ID"`, `Guid[]`),
        new Parameter(`VMName`, `Specifies an array of names of virtual machines. This cmdlet starts an interactive session with each of the specified virtual machines. To see the virtual machines that are available to you, use the Get-VM cmdlet.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Closes one or more PowerShell sessions (PSSessions).`, `Remove-PSSession [-ComputerName] <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession -ContainerId <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession [-Id] <Int32[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession -InstanceId <Guid[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession -Name <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession [-Session] <PSSession[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession -VMId <Guid[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-PSSession -VMName <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Service`, [
        new Parameter(`InputObject`, `Specifies ServiceController objects that represent the services to stop. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `ServiceController`),
        new Parameter(`Name`, `Specifies the service names of the services to remove. Wildcard characters are permitted.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Removes a Windows service.`, `Remove-Service [-InputObject <ServiceController>] [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-Service [-Name] <String> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-TypeData`, [
        new Parameter(`Path`, `Specifies an array of files that this cmdlet deletes from the session extended type data. This parameter is required.


Enter the paths and file names of one or more Types.ps1xml files. Wildcards are not supported. If you omit the path, the default location is the current directory.`, `String[]`),
        new Parameter(`TypeData`, `Specifies the type data that this cmdlet deletes from the session. This parameter is required. Enter a variable that contains TypeData objects ( System.Management.Automation.Runspaces.TypeData ) or a command that gets TypeData objects, such as a Get-TypeData command. You can also pipe TypeData objects to Remove-TypeData .`, `TypeData`),
        new Parameter(`TypeName`, `Specifies the types that this cmdlet deletes all extended type data for. For types in the System namespace, enter the short name. Otherwise, the full type name is required. Wildcards are not supported.


You can pipe type names to Remove-TypeData . When you pipe an object to Remove-TypeData , Remove-TypeData gets the type name of the object and removes all type data for the object type.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes extended types from the current session.`, `Remove-TypeData -Path <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-TypeData -TypeData <TypeData> [-Confirm] [-WhatIf] [<CommonParameters>]

Remove-TypeData [-TypeName] <String> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-Variable`, [
        new Parameter(`Exclude`, `Specifies an array of items that this cmdlet omits from the operation. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcards are permitted.`, `String[]`),
        new Parameter(`Force`, `Indicates that the cmdlet removes a variable even if it is read-only. Even using the Force parameter, the cmdlet cannot remove a constant.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies an array of items that this cmdlet deletes in the operation. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as s*. Wildcards are permitted.`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the variable to be removed. The parameter name ( Name ) is optional.`, `String[]`),
        new Parameter(`Scope`, `Gets only the variables in the specified scope. The acceptable values for this parameter are:


- Global


- Local


- Script


- A number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent)




Local is the default. For more information, see about_Scopes.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes a variable and its value.`, `Remove-Variable [-Name] <String[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-Scope <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-WindowsCapability`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-WindowsDriver`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-WindowsPackage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Remove-WSManInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-Computer`, [
        new Parameter(`ComputerName`, `Renames the specified remote computer. The default is the local computer.


Type the NetBIOS name, an IP address, or a fully qualified domain name of a remote computer. To specify the local computer, type the computer name, a dot ("."), or "localhost".


This parameter does not rely on PowerShell remoting. You can use the ComputerName parameter of "Rename-Computer" even if your computer is not configured to run remote commands.`, `String`),
        new Parameter(`DomainCredential`, `Specifies a user account that has permission to connect to the domain. Explicit credentials are required to rename a computer that is joined to a domain.


Type a user name, such as "User01" or "Domain01\\User01", or enter a PSCredential object, such as one generated by the "Get-Credential" cmdlet.


If you type a user name, this cmdlet prompts you for a password.


To specify a user account that has permission to connect to the computer that is specified by the ComputerName parameter, use the LocalCredential parameter.`, `PSCredential`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`LocalCredential`, `Specifies a user account that has permission to connect to the computer specified by the ComputerName parameter. The default is the current user.


Type a user name, such as "User01" or "Domain01\\User01", or enter a PSCredential object, such as one generated by the "Get-Credential" cmdlet.


If you type a user name, this cmdlet prompts you for a password.


To specify a user account that has permission to connect to the domain, use the DomainCredential parameter.`, `PSCredential`),
        new Parameter(`NewName`, `Specifies a new name for the computer. This parameter is required.


Standard names may contain letters ("a-z"), ("A-Z"), numbers ("0-9"), and hyphens ("-"), but no spaces or periods ("."). The name may not consist entirely of digits, and may not be longer than 63 characters`, `String`),
        new Parameter(`PassThru`, `Returns the results of the command. Otherwise, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Restart`, `Indicates that this cmdlet restarts the computer that was renamed. A restart is often required to make the change effective.`, `SwitchParameter`),
        new Parameter(`WsmanAuthentication`, `Specifies the mechanism that is used to authenticate the user credentials when this cmdlet uses the WSMan protocol. The acceptable values for this parameter are:


- Basic - CredSSP - Default - Digest - Kerberos - Negotiate The default value is Default .


For more information about the values of this parameter, see AuthenticationMechanism Enumeration (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).


> [!WARNING] > Credential Security Service Provider (CredSSP) authentication, in which the user > credentials are passed to a remote computer to be authenticated, is designed for commands that > require authentication on more than one resource, such as accessing a remote network share. > This mechanism increases the security risk of the remote operation. > If the remote computer is compromised, the credentials that are passed to it can be used to > control > the network session.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Renames a computer.`, `Rename-Computer [-NewName] <String> [-ComputerName <String>] [-DomainCredential <PSCredential>] [-Force] [-LocalCredential <PSCredential>] [-PassThru] [-Restart] [-WsmanAuthentication {Default | Basic | Negotiate | CredSSP | Digest | Kerberos}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-Item`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. To impersonate another > user, or elevate your credentials when running this cmdlet, use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Force`, `Forces the cmdlet to rename items that can't otherwise be changed, such as hidden or read-only files or read-only aliases or variables. The cmdlet can't change constant aliases or variables. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).


Even using the Force parameter, the cmdlet can't override security restrictions.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String`),
        new Parameter(`NewName`, `Specifies the new name of the item. Enter only a name, not a path and name. If you enter a path that differs from the path that is specified in the Path parameter, "Rename-Item" generates an error. To rename and move an item, use "Move-Item".


You can't use wildcard characters in the value of the NewName parameter. To specify a name for multiple files, use the Replace operator in a regular expression. For more information about the Replace operator, see about_Comparison_Operators (../Microsoft.PowerShell.Core/About/about_Comparison_Operators.md).`, `String`),
        new Parameter(`PassThru`, `Returns an object that represents the item to the pipeline. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path of the item to rename.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Renames an item in a PowerShell provider namespace.`, `Rename-Item [-NewName] <String> [-Credential <PSCredential>] [-Force] -LiteralPath <String> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Rename-Item [-Path] <String> [-NewName] <String> [-Credential <PSCredential>] [-Force] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to rename a property of an object that cannot otherwise be accessed by the user. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String`),
        new Parameter(`Name`, `Specifies the current name of the property to rename.`, `String`),
        new Parameter(`NewName`, `Specifies the new name for the property.`, `String`),
        new Parameter(`PassThru`, `Returns an object that represents the item property. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path of the item to rename. Wildcard characters are permitted.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Renames a property of an item.`, `Rename-ItemProperty [-Name] <String> [-NewName] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Rename-ItemProperty [-Path] <String> [-Name] <String> [-NewName] <String> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-LocalGroup`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Rename-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Repair-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resolve-DnsName`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resolve-Path`, [
        new Parameter(`Credential`, `Specifies a user account that has permission to perform this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01, or pass a PSCredential object. You can create a PSCredential object using the "Get-Credential" cmdlet. If you type a user name, this cmdlet prompts you for a password.


This parameter is not supported by any providers installed with PowerShell.`, `PSCredential`),
        new Parameter(`LiteralPath`, `Specifies the path to be resolved. The value of the LiteralPath parameter is used exactly as typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the PowerShell path to resolve. This parameter is required. You can also pipe a path string to "Resolve-Path". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Relative`, `Indicates that this cmdlet returns a relative path.`, `SwitchParameter`),
    ], `Resolves the wildcard characters in a path, and displays the path contents.`, `Resolve-Path [-Credential <PSCredential>] -LiteralPath <String[]> [-Relative] [<CommonParameters>]

Resolve-Path [-Path] <String[]> [-Credential <PSCredential>] [-Relative] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Restart-Computer`, [
        new Parameter(`ComputerName`, `Specifies one computer name or a comma-separated array of computer names. "Restart-Computer" accepts ComputerName objects from the pipeline or variables.


Type the NetBIOS name, an IP address, or a fully qualified domain name of a remote computer. To specify the local computer, type the computer name, a dot ".", or localhost.


This parameter doesn't rely on PowerShell remoting. You can use the ComputerName parameter even if your computer isn't configured to run remote commands.


If the ComputerName parameter isn't specified, "Restart-Computer" restarts the local computer.`, `String[]`),
        new Parameter(`Credential`, `Specifies a user account that has permission to do this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`Delay`, `Specifies the frequency of queries, in seconds. PowerShell queries the service specified by the For parameter to determine whether the service is available after the computer is restarted.


This parameter is valid only together with the Wait and For parameters.


This parameter was introduced in Windows PowerShell 3.0.


If the Delay parameter isn't specified, "Restart-Computer" uses a five second delay.`, `Int16`),
        new Parameter(`For`, `Specifies the behavior of PowerShell as it waits for the specified service or feature to become available after the computer restarts. This parameter is only valid with the Wait parameter.


The acceptable values for this parameter are:


- Default : Waits for PowerShell to restart. - PowerShell : Can run commands in a PowerShell remote session on the computer. - WMI : Receives a reply to a Win32_ComputerSystem query for the computer. - WinRM : Can establish a remote session to the computer by using WS-Management.


This parameter was introduced in Windows PowerShell 3.0.`, `WaitForServiceTypes`),
        new Parameter(`Force`, `Forces an immediate restart of the computer.`, `SwitchParameter`),
        new Parameter(`Timeout`, `Specifies the duration of the wait, in seconds. When the timeout elapses, "Restart-Computer" returns to the command prompt, even if the computers aren't restarted.


The Timeout parameter is only valid with the Wait parameter. Timeout overrides the Wait parameter's indefinite waiting period.


This parameter was introduced in Windows PowerShell 3.0.`, `Int32`),
        new Parameter(`Wait`, `"Restart-Computer" suppresses the PowerShell prompt and blocks the pipeline until the computers have restarted. You can use this parameter in a script to restart computers and then continue to process when the restart is finished.


The Wait parameter waits indefinitely for the computers to restart. You can use Timeout to adjust the timing and the For and Delay parameters to wait for particular services to become available on the restarted computers.


The Wait parameter isn't valid when you're restarting the local computer. If the value of the ComputerName parameter contains the names of remote computers and the local computer, "Restart-Computer" generates a non-terminating error for Wait on the local computer, but waits for the remote computers to restart.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`WsmanAuthentication`, `Specifies the mechanism that is used to authenticate the user credentials. This parameter was introduced in Windows PowerShell 3.0.


The acceptable values for this parameter are: Basic , CredSSP , Default , Digest , Kerberos , and Negotiate .


For more information, see AuthenticationMechanism (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).


> [!WARNING] > Credential Security Service Provider (CredSSP) authentication, in which the user credentials are > passed to a remote computer to be authenticated, is designed for commands that require > authentication on more than one resource, such as accessing a remote network share. This mechanism > increases the security risk of the remote operation. If the remote computer is compromised, the > credentials that are passed to it can be used to control the network session.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running "Restart-Computer".`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the "Restart-Computer" runs. The "Restart-Computer" cmdlet isn't run.`, `SwitchParameter`),
    ], `Restarts the operating system on local and remote computers.`, `Restart-Computer [[-ComputerName] <String[]>] [[-Credential] <PSCredential>] [-Delay <Int16>] [-For {Wmi | WinRM | PowerShell}] [-Force] [-Timeout <Int32>] [-Wait] [-WsmanAuthentication {Basic | CredSSP | Default | Digest | Kerberos | Negotiate}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Restart-Service`, [
        new Parameter(`DisplayName`, `Specifies the display names of services to restarted. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Exclude`, `Specifies services that this cmdlet omits. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as s*. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies services that this cmdlet restarts. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as s*. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies ServiceController objects that represent the services to restart. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `ServiceController[]`),
        new Parameter(`Name`, `Specifies the service names of the services to restart.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object that represents the service. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Stops and then starts one or more services.`, `Restart-Service -DisplayName <String[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Restart-Service [-InputObject] <ServiceController[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Restart-Service [-Name] <String[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Resume-Service`, [
        new Parameter(`DisplayName`, `Specifies the display names of the services to be resumed. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Exclude`, `Specifies services that this cmdlet omits. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as s*. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Include`, `Specifies services to resume. The value of this parameter qualifies Name parameter. Enter a name element or pattern, such as s*. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies ServiceController objects that represent the services to resumed. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `ServiceController[]`),
        new Parameter(`Name`, `Specifies the service names of the services to be resumed.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object that represents the service. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Resumes one or more suspended (paused) services.`, `Resume-Service -DisplayName <String[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Resume-Service [-InputObject] <ServiceController[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Resume-Service [-Name] <String[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-Help`, [
        new Parameter(`Credential`, `Specifies a user credential. This cmdlet runs the command by using credentials of a user who has permission to access the file system location specified by the DestinationPath parameter. This parameter is valid only when the DestinationPath or LiteralPath parameter is used in the command.


This parameter enables you to run "Save-Help" commands that use the DestinationPath parameter on remote computers. By providing explicit credentials, you can run the command on a remote computer and access a file share on a third computer without encountering an access denied error or using CredSSP authentication to delegate credentials.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`DestinationPath`, `Specifies the path of the folder in which the help files are saved. Do not specify a file name or file name extension.`, `String[]`),
        new Parameter(`Force`, `Indicates that this cmdlet does not follow the once-per-day limitation, skips version checking, and downloads files that exceed the 1 GB limit.


Without this parameter, only one Save-Help command for each module is permitted in each 24-hour period, downloads are limited to 1 GB of uncompressed content per module, and help files for a module are installed only when they are newer than the files on the computer.


The once-per-day limit protects the servers that host the help files, and makes it practical for you to add a Save-Help command to your PowerShell profile.


To save help for a module in multiple UI cultures without the Force parameter, include all UI cultures in the same command, such as: "Save-Help -Module PSScheduledJobs -UICulture en-US, fr-FR, pt-BR"`, `SwitchParameter`),
        new Parameter(`FullyQualifiedModule`, `Specifies modules with names that are specified in the form of ModuleSpecification objects. This is described in the Remarks section of ModuleSpecification Constructor (Hashtable) (https://msdn.microsoft.com/library/jj136290)in the MSDN library. For example, the FullyQualifiedModule parameter accepts a module name that is specified in the format @{ModuleName = "modulename"; ModuleVersion = "version_number"} or @{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"}. ModuleName and ModuleVersion are required, but Guid is optional.


You cannot specify the FullyQualifiedModule parameter in the same command as a Module parameter.`, `ModuleSpecification[]`),
        new Parameter(`LiteralPath`, `Specifies a path of the destination folder. Unlike the value of the DestinationPath parameter, the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Module`, `Specifies modules for which this cmdlet downloads help. Enter one or more module names or name patters in a comma-separated list or in a file that has one module name on each line. Wildcard characters are permitted. You can also pipe module objects from the Get-Module cmdlet to Save-Help .


By default, Save-Help downloads help for all modules that support Updatable Help and are installed on the local computer in a location listed in the PSModulePath environment variable.


To save help for modules that are not installed on the computer, run a Get-Module command on a remote computer. Then pipe the resulting module objects to the Save-Help cmdlet or submit the module objects as the value of the Module or InputObject parameters.


If the module that you specify is installed on the computer, you can enter the module name or a module object. If the module is not installed on the computer, you must enter a module object, such as one returned by the Get-Module cmdlet.


The Module parameter of the Save-Help cmdlet does not accept the full path of a module file or module manifest file. To save help for a module that is not in a PSModulePath location, import the module into the current session before you run the Save-Help command.


A value of "*" (all) attempts to update help for all modules that are installed on the computer. This includes modules that do not support Updatable Help. This value might generate errors when the command encounters modules that do not support Updatable Help.`, `PSModuleInfo[]`),
        new Parameter(`UICulture`, `Specifies UI culture values for which this cmdlet gets updated help files. Enter one or more language codes, such as es-ES, a variable that contains culture objects, or a command that gets culture objects, such as a Get-Culture or Get-UICulture command.


Wildcard characters are not permitted. Do not specify a partial language code, such as "de".


By default, Save-Help gets help files in the UI culture set for Windows or its fallback culture. If you specify the UICulture parameter, Save-Help looks for help only for the specified UI culture, not in any fallback culture.`, `CultureInfo[]`),
        new Parameter(`UseDefaultCredentials`, `Indicates that this cmdlet runs the command, including the web download, with the credentials of the current user. By default, the command runs without explicit credentials.


This parameter is effective only when the web download uses NTLM, negotiate, or Kerberos-based authentication.`, `SwitchParameter`),
    ], `Downloads and saves the newest help files to a file system directory.`, `Save-Help [-DestinationPath] <String[]> [[-Module] <PSModuleInfo[]>] [[-UICulture] <CultureInfo[]>] [-Credential <PSCredential>] [-Force] [-FullyQualifiedModule <ModuleSpecification[]>] [-UseDefaultCredentials] [<CommonParameters>]

Save-Help [[-Module] <PSModuleInfo[]>] [[-UICulture] <CultureInfo[]>] [-Credential <PSCredential>] [-Force] [-FullyQualifiedModule <ModuleSpecification[]>] -LiteralPath <String[]> [-UseDefaultCredentials] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-Package`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Save-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Select-Object`, [
        new Parameter(`ExcludeProperty`, `Specifies the properties that this cmdlet excludes from the operation. Wildcards are permitted.


Beginning in PowerShell 6, it is no longer required to include the Property parameter for ExcludeProperty to work.`, `String[]`),
        new Parameter(`ExpandProperty`, `Specifies a property to select, and indicates that an attempt should be made to expand that property.


- If the specified property is an array, each value of the array is included in the output.


- If the specified property is an object, the objects properties are expanded for every InputObject In either case, the Type of objects output will match the Type of the expanded property.


If the Property parameter is specified, "Select-Object" will attempt to add each selected property as a NoteProperty to every outputted object.


> [!WARNING] > If you receive the error: Select : Property cannot be processed because property "<PropertyName>" > already exists, consider the following. > Note that when using "-ExpandProperty", "Select-Object" can not replace an existing property. > This means: > > - If the expanded object has a property of the same name, an error will occur. > - If the Selected object has a property of the same name as an Expanded objects property, an >   error will occur.`, `String`),
        new Parameter(`First`, `Specifies the number of objects to select from the beginning of an array of input objects.`, `Int32`),
        new Parameter(`Index`, `Selects objects from an array based on their index values. Enter the indexes in a comma-separated list. Indexes in an array begin with 0, where 0 represents the first value and (n-1) represents the last value.`, `Int32[]`),
        new Parameter(`InputObject`, `Specifies objects to send to the cmdlet through the pipeline. This parameter enables you to pipe objects to "Select-Object".


When you pass objects to the InputObject parameter, instead of using the pipeline, "Select-Object" treats the InputObject as a single object, even if the value is a collection. It is recommended that you use the pipeline when passing collections to "Select-Object".`, `PSObject`),
        new Parameter(`Last`, `Specifies the number of objects to select from the end of an array of input objects.`, `Int32`),
        new Parameter(`Property`, `Specifies the properties to select. These properties are added as NoteProperty members to the output objects. Wildcards are permitted.


The value of the Property parameter can be a new calculated property. To create a calculated, property, use a hash table.


Valid keys are:


- Name (or Label): "<string>"


- Expression "<string>" or "<script block>"`, `Object[]`),
        new Parameter(`Skip`, `Skips (does not select) the specified number of items. By default, the Skip parameter counts from the beginning of the array or list of objects, but if the command uses the Last parameter, it counts from the end of the list or array.


Unlike the Index parameter, which starts counting at 0, the Skip parameter begins at 1.`, `Int32`),
        new Parameter(`SkipLast`, `Skips (does not select) the specified number of items from the end of the list or array. Works in the same way as using Skip together with Last parameter.


Unlike the Index parameter, which starts counting at 0, the SkipLast parameter begins at 1.`, `Int32`),
        new Parameter(`Unique`, `Specifies that if a subset of the input objects has identical properties and values, only a single member of the subset will be selected.


This parameter is case-sensitive. As a result, strings that differ only in character casing are considered to be unique.`, `SwitchParameter`),
        new Parameter(`Wait`, `Indicates that the cmdlet turns off optimization. PowerShell runs commands in the order that they appear in the command pipeline and lets them generate all objects. By default, if you include a "Select-Object" command with the First or Index parameters in a command pipeline, PowerShell stops the command that generates the objects as soon as the selected number of objects is generated.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
    ], `Selects objects or object properties.`, `Select-Object [[-Property] <Object[]>] [-ExcludeProperty <String[]>] [-ExpandProperty <String>] [-First <Int32>] [-InputObject <PSObject>] [-Last <Int32>] [-Skip <Int32>] [-Unique] [-Wait] [<CommonParameters>]

Select-Object [[-Property] <Object[]>] [-ExcludeProperty <String[]>] [-ExpandProperty <String>] [-InputObject <PSObject>] [-SkipLast <Int32>] [-Unique] [<CommonParameters>]

Select-Object [-Index <Int32[]>] [-InputObject <PSObject>] [-Unique] [-Wait] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Select-String`, [
        new Parameter(`AllMatches`, `Indicates that the cmdlet searches for more than one match in each line of text. Without this parameter, "Select-String" finds only the first match in each line of text.


When "Select-String" finds more than one match in a line of text, it still emits only one MatchInfo object for the line, but the Matches property of the object contains all of the matches.`, `SwitchParameter`),
        new Parameter(`CaseSensitive`, `Indicates that the cmdlet matches are case-sensitive. By default, matches aren't case-sensitive.`, `SwitchParameter`),
        new Parameter(`Context`, `Captures the specified number of lines before and after the line that matches the pattern.


If you enter one number as the value of this parameter, that number determines the number of lines captured before and after the match. If you enter two numbers as the value, the first number determines the number of lines before the match and the second number determines the number of lines after the match. For example, "-Context 2,3".


In the default display, lines with a match are indicated by a right angle bracket (">") (ASCII 62) in the first column of the display. Unmarked lines are the context.


The Context parameter doesn't change the number of objects generated by "Select-String". "Select-String" generates one MatchInfo (/dotnet/api/microsoft.powershell.commands.matchinfo)object for each match. The context is stored as an array of strings in the Context property of the object.


When the output of a "Select-String" command is sent down the pipeline to another "Select-String" command, the receiving command searches only the text in the matched line. The matched line is the value of the Line property of the MatchInfo object, not the text in the context lines. As a result, the Context parameter isn't valid on the receiving "Select-String" command.


When the context includes a match, the MatchInfo object for each match includes all the context lines, but the overlapping lines appear only once in the display.`, `Int32[]`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Exclude`, `Exclude the specified items. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcards are permitted.`, `String[]`),
        new Parameter(`Include`, `Includes the specified items. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcards are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies the text to be searched. Enter a variable that contains the text, or type a command or expression that gets the text.


Using the InputObject parameter isn't the same as sending strings down the pipeline to "Select-String".


When you pipe more than one string to the "Select-String" cmdlet, it searches for the specified text in each string and returns each string that contains the search text.


When you use the InputObject parameter to submit a collection of strings, "Select-String" treats the collection as a single combined string. "Select-String" returns the strings as a unit if it finds the search text in any string.`, `PSObject`),
        new Parameter(`List`, `Only the first instance of matching text is returned from each input file. This is the most efficient way to retrieve a list of files that have contents matching the regular expression.


By default, "Select-String" returns a MatchInfo object for each match it finds.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies the path to the files to be searched. The value of the LiteralPath parameter is used exactly as it's typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences. For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`NotMatch`, `The NotMatch parameter finds text that doesn't match the specified pattern.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path to the files to search. Wildcards are permitted. The default location is the local directory.


Specify files in the directory, such as "log1.txt", " .doc", or " .*". If you specify only a directory, the command fails.`, `String[]`),
        new Parameter(`Pattern`, `Specifies the text to find on each line. Type a string or regular expression. If you type a string, use the SimpleMatch parameter.


To learn about regular expressions, see about_Regular_Expressions (../Microsoft.PowerShell.Core/About/about_Regular_Expressions.md).`, `String[]`),
        new Parameter(`Quiet`, `Indicates that the cmdlet returns a Boolean value (True or False), instead of a MatchInfo object. The value is True if the pattern is found; otherwise the value is False.`, `SwitchParameter`),
        new Parameter(`SimpleMatch`, `Indicates that the cmdlet uses a simple match rather than a regular expression match. In a simple match, "Select-String" searches the input for the text in the Pattern parameter. It doesn't interpret the value of the Pattern parameter as a regular expression statement.`, `SwitchParameter`),
    ], `Finds text in strings and files.`, `Select-String [-Pattern] <String[]> [-AllMatches] [-CaseSensitive] [-Context <Int32[]>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Include <String[]>] -InputObject <PSObject> [-List] [-NotMatch] [-Quiet] [-SimpleMatch] [<CommonParameters>]

Select-String [-Pattern] <String[]> [-AllMatches] [-CaseSensitive] [-Context <Int32[]>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Include <String[]>] [-List] -LiteralPath <String[]> [-NotMatch] [-Quiet] [-SimpleMatch] [<CommonParameters>]

Select-String [-Pattern] <String[]> [-Path] <String[]> [-AllMatches] [-CaseSensitive] [-Context <Int32[]>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Include <String[]>] [-List] [-NotMatch] [-Quiet] [-SimpleMatch] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Select-Xml`, [
        new Parameter(`Content`, `Specifies a string that contains the XML to search. You can also pipe strings to Select-Xml .`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies the paths and file names of the XML files to search. Unlike Path , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Namespace`, `Specifies a hash table of the namespaces used in the XML. Use the format @{<namespaceName> = <namespaceValue>}.


When the XML uses the default namespace, which begins with xmlns, use an arbitrary key for the namespace name. You cannot use xmlns. In the XPath statement, prefix each node name with the namespace name and a colon, such as //namespaceName:Node.`, `Hashtable`),
        new Parameter(`Path`, `Specifies the path and file names of the XML files to search. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Xml`, `Specifies one or more XML nodes.


An XML document will be processed as a collection of XML nodes. If you pipe an XML document to Select-Xml , each document node will be searched separately as it comes through the pipeline.`, `XmlNode[]`),
        new Parameter(`XPath`, `Specifies an XPath search query. The query language is case-sensitive. This parameter is required.`, `String`),
    ], `Finds text in an XML string or document.`, `Select-Xml [-XPath] <String> -Content <String[]> [-Namespace <Hashtable>] [<CommonParameters>]

Select-Xml [-XPath] <String> -LiteralPath <String[]> [-Namespace <Hashtable>] [<CommonParameters>]

Select-Xml [-XPath] <String> [-Path] <String[]> [-Namespace <Hashtable>] [<CommonParameters>]

Select-Xml [-XPath] <String> [-Xml] <XmlNode[]> [-Namespace <Hashtable>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Send-MailMessage`, [
        new Parameter(`Attachments`, `Specifies the path and file names of files to be attached to the email message. You can use this parameter or pipe the paths and file names to "Send-MailMessage".`, `String[]`),
        new Parameter(`Bcc`, `Specifies the email addresses that receive a copy of the mail but are not listed as recipients of the message. Enter names (optional) and the email address, such as "Name <someone@fabrikam.com>".`, `String[]`),
        new Parameter(`Body`, `Specifies the content of the email message.`, `String`),
        new Parameter(`BodyAsHtml`, `Specifies that the value of the Body parameter contains HTML.`, `SwitchParameter`),
        new Parameter(`Cc`, `Specifies the email addresses to which a carbon copy (CC) of the email message is sent. Enter names (optional) and the email address, such as "Name <someone@fabrikam.com>".`, `String[]`),
        new Parameter(`Credential`, `Specifies a user account that has permission to perform this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 . Or, enter a PSCredential object, such as one from the "Get-Credential" cmdlet.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`DeliveryNotificationOption`, `Specifies the delivery notification options for the email message. You can specify multiple values. None is the default value. The alias for this parameter is DNO .


The delivery notifications are sent to the address in the From parameter.


The acceptable values for this parameter are as follows:


- None : No notification. - OnSuccess : Notify if the delivery is successful. - OnFailure : Notify if the delivery is unsuccessful. - Delay : Notify if the delivery is delayed. - Never : Never notify.`, `DeliveryNotificationOptions`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`From`, `The From parameter is required. This parameter specifies the sender's email address. Enter a name (optional) and email address, such as "Name <someone@fabrikam.com>".`, `String`),
        new Parameter(`Port`, `Specifies an alternate port on the SMTP server. The default value is 25, which is the default SMTP port.`, `Int32`),
        new Parameter(`Priority`, `Specifies the priority of the email message. Normal is the default. The acceptable values for this parameter are Normal, High, and Low.`, `MailPriority`),
        new Parameter(`ReplyTo`, `Specifies additional email addresses (other than the From address) to use to reply to this message. Enter names (optional) and the email address, such as "Name <someone@fabrikam.com>".


This parameter was introduced in PowerShell 6.2.`, `String[]`),
        new Parameter(`SmtpServer`, `Specifies the name of the SMTP server that sends the email message.


The default value is the value of the "$PSEmailServer" preference variable. If the preference variable is not set and this parameter is not used, the "Send-MailMessage" command fails.`, `String`),
        new Parameter(`Subject`, `The Subject parameter is required. This parameter specifies the subject of the email message.`, `String`),
        new Parameter(`To`, `The To parameter is required. This parameter specifies the recipient's email address. If there are multiple recipients, separate their addresses with a comma (","). Enter names (optional) and the email address, such as "Name <someone@fabrikam.com>".`, `String[]`),
        new Parameter(`UseSsl`, `The Secure Sockets Layer (SSL) protocol is used to establish a secure connection to the remote computer to send mail. By default, SSL is not used.`, `SwitchParameter`),
    ], `Sends an email message.`, `Send-MailMessage [-To] <String[]> [-Subject] <String> [[-Body] <String>] [[-SmtpServer] <String>] [-Attachments <String[]>] [-Bcc <String[]>] [-BodyAsHtml] [-Cc <String[]>] [-Credential <PSCredential>] [-DeliveryNotificationOption {None | OnSuccess | OnFailure | Delay | Never}] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] -From <String> [-Port <Int32>] [-Priority {Normal | High | Low}] [-ReplyTo <String[]>] [-UseSsl] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Acl`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Alias`, [
        new Parameter(`Description`, `Specifies a description of the alias. You can type any string. If the description includes spaces, enclose it single quotation marks.`, `String`),
        new Parameter(`Force`, `Use the Force parameter to change or delete an alias that has the Option parameter set to ReadOnly .


The Force parameter cannot change or delete an alias with the Option parameter set to Constant .`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies the name of a new alias. An alias name can contain alphanumeric characters and hyphens. Alias names cannot be numeric, such as 123.`, `String`),
        new Parameter(`Option`, `Sets the Option property value of the alias. Values such as ReadOnly and Constant protect an alias from unintended changes. To see the Option property of all aliases in the session, type "Get-Alias | Format-Table -Property Name, Options -Autosize".


The acceptable values for this parameter are as follows:


- AllScope The alias is copied to any new scopes that are created. - Constant Cannot be changed or deleted. - None Sets no options and is the default. - Private The alias is available only in the current scope. - ReadOnly Cannot be changed or deleted unless the Force parameter is used. - Unspecified`, `ScopedItemOptions`),
        new Parameter(`PassThru`, `Returns an object that represents the alias. Use a format cmdlet such as "Format-List" to display the object. By default, "Set-Alias" does not generate any output.`, `SwitchParameter`),
        new Parameter(`Scope`, `Specifies the scope in which this alias is valid. The default value is Local . For more information, see about_Scopes (../Microsoft.PowerShell.Core/About/about_Scopes.md).


The acceptable values are as follows:


- Global


- Local


- Private


- Numbered scopes


- Script`, `String`),
        new Parameter(`Value`, `Specifies the name of the cmdlet or command that the alias runs. The Value parameter is the alias's Definition property.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates or changes an alias for a cmdlet or other command in the current PowerShell session.`, `Set-Alias [-Name] <String> [-Value] <String> [-Description <String>] [-Force] [-Option {AllScope | Constant | None | Private | ReadOnly | Unspecified}] [-PassThru] [-Scope {Global | Local | Private | Numbered scopes | Script}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-AppBackgroundTaskResourcePolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-AppxDefaultVolume`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-AppXProvisionedDataFile`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-AuthenticodeSignature`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-CimInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Content`, [
        new Parameter(`AsByteStream`, `Specifies that the content should be read as a stream of bytes. This parameter was introduced in PowerShell 6.0.


A warning occurs when you use the AsByteStream parameter with the Encoding parameter. The AsByteStream parameter ignores any encoding and the output is returned as a stream of bytes.`, `SwitchParameter`),
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Encoding`, `Specifies the type of encoding for the target file. The default value is UTF8NoBOM .


Encoding is a dynamic parameter that the FileSystem provider adds to "Set-Content". This parameter works only in file system drives.


The acceptable values for this parameter are as follows:


- ASCII : Uses the encoding for the ASCII (7-bit) character set. - BigEndianUnicode : Encodes in UTF-16 format using the big-endian byte order. - OEM : Uses the default encoding for MS-DOS and console programs. - Unicode : Encodes in UTF-16 format using the little-endian byte order. - UTF7 : Encodes in UTF-7 format. - UTF8 : Encodes in UTF-8 format. - UTF8BOM : Encodes in UTF-8 format with Byte Order Mark (BOM) - UTF8NoBOM : Encodes in UTF-8 format without Byte Order Mark (BOM) - UTF32 : Encodes in UTF-32 format.


Beginning with PowerShell 6.2, the Encoding parameter also allows numeric IDs of registered code pages (like "-Encoding 1251") or string names of registered code pages (like "-Encoding "windows-1251""). For more information, see the .NET documentation for Encoding.CodePage (/dotnet/api/system.text.encoding.codepage?view=netcore-2.2).`, `Encoding`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to set the contents of a file, even if the file is read-only. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md). The Force parameter does not override security restrictions.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`NoNewline`, `The string representations of the input objects are concatenated to form the output. No spaces or newlines are inserted between the output strings. No newline is added after the last output string.`, `SwitchParameter`),
        new Parameter(`PassThru`, `Returns an object that represents the content. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path of the item that receives the content. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Stream`, `Specifies an alternative data stream for content. If the stream does not exist, this cmdlet creates it. Wildcard characters are not supported. Stream is a dynamic parameter that the FileSystem provider adds to "Set-Content". This parameter works only in file system drives.


You can use the "Set-Content" cmdlet to change the content of the Zone.Identifier alternate data stream. However, we do not recommend this as a way to eliminate security checks that block files that are downloaded from the Internet. If you verify that a downloaded file is safe, use the "Unblock-File" cmdlet.


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`Value`, `Specifies the new content for the item.`, `Object[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Writes new content or replaces existing content in a file.`, `Set-Content [-Value] <Object[]> [-AsByteStream] [-Credential <PSCredential>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-NoNewline] [-PassThru] [-Stream <String>] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-Content [-Path] <String[]> [-Value] <Object[]> [-AsByteStream] [-Credential <PSCredential>] [-Encoding {ASCII | BigEndianUnicode | OEM | Unicode | UTF7 | UTF8 | UTF8BOM | UTF8NoBOM | UTF32}] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-NoNewline] [-PassThru] [-Stream <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Culture`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Date`, [
        new Parameter(`Adjust`, `Specifies the value for which this cmdlet adds or subtracts from the current date and time. can type an adjustment in standard date and time format for your locale or use the Adjust parameter to pass a TimeSpan object from "New-TimeSpan" to "Set-Date".`, `TimeSpan`),
        new Parameter(`Date`, `Changes the date and time to the specified values. You can type a new date in the short date format and a time in the standard time format for your locale. Or, you can pass a DateTime object from "Get-Date".


If you specify a date, but not a time, "Set-Date" changes the time to midnight on the specified date. If you specify only a time, it does not change the date.`, `DateTime`),
        new Parameter(`DisplayHint`, `Specifies which elements of the date and time are displayed.The acceptable values for this parameter are:


- Date.   displays only the date. - Time.   displays only the time. - DateTime.   displays the date and time.


This parameter affects only the display. It does not affect the DateTime object that "Get-Date" retrieves.`, `DisplayHintType`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Changes the system time on the computer to a time that you specify.`, `Set-Date [-Adjust] <TimeSpan> [-DisplayHint {Date | Time | DateTime}] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-Date [-Date] <DateTime> [-DisplayHint {Date | Time | DateTime}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DeliveryOptimizationStatus`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DODownloadMode`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DOPercentageMaxBackgroundBandwidth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-DOPercentageMaxForegroundBandwidth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-ExecutionPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Item`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to set items that cannot otherwise be changed, such as read-only alias or variables. The cmdlet cannot change constant aliases or variables. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md). Even using the Force parameter, the cmdlet cannot override security restrictions.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`PassThru`, `Passes an object that represents the item to the pipeline. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies a path of the location of the items. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Value`, `Specifies a new value for the item.`, `Object`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Changes the value of an item to the value specified in the command.`, `Set-Item [[-Value] <Object>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-Item [-Path] <String[]> [[-Value] <Object>] [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-ItemProperty`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies, as a string array, an item or items that this cmdlet excludes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as " .txt". Wildcard characters are permitted. The Exclude * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter to qualify the Path parameter. The FileSystem (../Microsoft.PowerShell.Core/About/about_FileSystem_Provider.md)provider is the only installed PowerShell provider that supports the use of filters. You can find the syntax for the FileSystem filter language in about_Wildcards (../Microsoft.PowerShell.Core/About/about_Wildcards.md). Filters are more efficient than other parameters, because the provider applies them when the cmdlet gets the objects rather than having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Force`, `Forces the cmdlet to set a property on items that cannot otherwise be accessed by the user. Implementation varies from provider to provider. For more information, see about_Providers (../Microsoft.PowerShell.Core/About/about_Providers.md).`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies, as a string array, an item or items that this cmdlet includes in the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "" .txt"". Wildcard characters are permitted. The Include * parameter is effective only when the command includes the contents of an item, such as "C:\\Windows*", where the wildcard character specifies the contents of the "C:\\Windows" directory.`, `String[]`),
        new Parameter(`InputObject`, `Specifies the object that has the properties that this cmdlet changes. Enter a variable that contains the object or a command that gets the object.`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies a path to one or more locations. The value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


For more information, see about_Quoting_Rules (../Microsoft.Powershell.Core/About/about_Quoting_Rules.md).`, `String[]`),
        new Parameter(`Name`, `Specifies the name of the property.`, `String`),
        new Parameter(`PassThru`, `Returns an object that represents the item property. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path of the items with the property to modify. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Value`, `Specifies the value of the property.`, `Object`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Creates or changes the value of a property of an item.`, `Set-ItemProperty [-Path] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -InputObject <PSObject> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-ItemProperty [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -InputObject <PSObject> -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-ItemProperty [-Name] <String> [-Value] <Object> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] -LiteralPath <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-ItemProperty [-Path] <String[]> [-Name] <String> [-Value] <Object> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Force] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-LocalGroup`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-LocalUser`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Location`, [
        new Parameter(`LiteralPath`, `Specifies a path of the location. The value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.


PowerShell keeps a history of the last 20 locations you have set. If the path is the "-" character, then the new working location will be the previous working location in history (if it exists). Similarly, if the path is the "+" character, then the new working location will be the next working location in history (if it exists). This is similar to using "Pop-Location" and "Push-Location" except that the history is a list, not a stack, and there is no way to display this history list.`, `String`),
        new Parameter(`PassThru`, `Returns a PathInfo object that represents the location. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Path`, `Specify the path of a new working location. If no path is provided, "Set-Location" defaults to the current user's home directory. When wildcards are used, the cmdlet chooses the first path that matches the wildcard pattern.


PowerShell keeps a history of the last 20 locations you have set. If the path is the "-" character, then the new working location will be the previous working location in history (if it exists). Similarly, if the path is the "+" character, then the new working location will be the next working location in history (if it exists). This is similar to using "Pop-Location" and "Push-Location" except that the history is a list, not a stack, and there is no way to display this history list.`, `String`),
        new Parameter(`StackName`, `Specifies the location stack name that this cmdlet makes the current location stack. Enter a location stack name. To indicate the unnamed default location stack, type "$null" or an empty string ("").


The " -Location" cmdlets act on the current stack unless you use the StackName * parameter to specify a different stack.`, `String`),
    ], `Sets the current working location to a specified location.`, `Set-Location -LiteralPath <String> [-PassThru] [<CommonParameters>]

Set-Location [[-Path] <String>] [-PassThru] [<CommonParameters>]

Set-Location [-PassThru] [-StackName <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-MarkdownOption`, [
        new Parameter(`BoldForegroundColor`, ``, `string`),
        new Parameter(`Code`, ``, `string`),
        new Parameter(`Header1Color`, ``, `string`),
        new Parameter(`Header2Color`, ``, `string`),
        new Parameter(`Header3Color`, ``, `string`),
        new Parameter(`Header4Color`, ``, `string`),
        new Parameter(`Header5Color`, ``, `string`),
        new Parameter(`Header6Color`, ``, `string`),
        new Parameter(`ImageAltTextForegroundColor`, ``, `string`),
        new Parameter(`InputObject`, ``, `psobject`),
        new Parameter(`ItalicsForegroundColor`, ``, `string`),
        new Parameter(`LinkForegroundColor`, ``, `string`),
        new Parameter(`PassThru`, ``, `switch`),
        new Parameter(`Theme`, ``, `string`),
    ], `Set-MarkdownOption [-Header1Color <string>] [-Header2Color <string>] [-Header3Color <string>] [-Header4Color <string>] [-Header5Color <string>] [-Header6Color <string>] [-Code <string>] [-ImageAltTextForegroundColor <string>] [-LinkForegroundColor <string>] [-ItalicsForegroundColor <string>] [-BoldForegroundColor <string>] [-PassThru] [<CommonParameters>]

Set-MarkdownOption -Theme <string> [-PassThru] [<CommonParameters>]

Set-MarkdownOption [-InputObject] <psobject> [-PassThru] [<CommonParameters>]`, `syntaxItem
----------
{@{name=Set-MarkdownOption; CommonParameters=True; parameter=System.Object[]}, @{name=Set-MarkdownOption; CommonParamet…`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-NonRemovableAppsPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PackageSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-ProcessMitigation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSBreakpoint`, [
        new Parameter(`Action`, `Specifies commands that run at each breakpoint instead of breaking. Enter a script block that contains the commands. You can use this parameter to set conditional breakpoints or to perform other tasks, such as testing or logging.


If this parameter is omitted, or no action is specified, execution stops at the breakpoint, and the debugger starts.


When the Action parameter is used, the Action script block runs at each breakpoint. Execution does not stop unless the script block includes the Break keyword. If you use the Continue keyword in the script block, execution resumes until the next breakpoint.


For more information, see about_Script_Blocks (../Microsoft.PowerShell.Core/About/about_Script_Blocks.md), about_Break (../Microsoft.PowerShell.Core/About/about_Break.md), and about_Continue (../Microsoft.PowerShell.Core/About/about_Continue.md).`, `ScriptBlock`),
        new Parameter(`Column`, `Specifies the column number of the column in the script file on which execution stops. Enter only one column number. The default is column 1.


The Column value is used with the value of the Line parameter to specify the breakpoint. If the Line parameter specifies multiple lines, the Column parameter sets a breakpoint at the specified column on each of the specified lines. PowerShell stops executing before the statement or expression that includes the character at the specified line and column position.


Columns are counted from the top left margin beginning with column number 1 (not 0). If you specify a column that does not exist in the script, an error is not declared, but the breakpoint is never executed.`, `Int32`),
        new Parameter(`Command`, `Sets a command breakpoint. Enter cmdlet names, such as "Get-Process", or function names. Wildcards are permitted.


Execution stops just before each instance of each command is executed. If the command is a function, execution stops each time the function is called and at each BEGIN, PROCESS, and END section.`, `String[]`),
        new Parameter(`Line`, `Sets a line breakpoint in a script. Enter one or more line numbers, separated by commas. PowerShell stops immediately before executing the statement that begins on each of the specified lines.


Lines are counted from the top left margin of the script file beginning with line number 1 (not 0). If you specify a blank line, execution stops before the next non-blank line. If the line is out of range, the breakpoint is never hit.`, `Int32[]`),
        new Parameter(`Mode`, `Specifies the mode of access that triggers variable breakpoints. The default is Write .


This parameter is valid only when the Variable parameter is used in the command. The mode applies to all breakpoints set in the command. The acceptable values for this parameter are:


- Write - Stops execution immediately before a new value is written to the variable. - Read - Stops execution when the variable is read, that is, when its value is accessed, either   to be assigned, displayed, or used. In read mode, execution does not stop when the value of the   variable changes. - ReadWrite - Stops execution when the variable is read or written.`, `VariableAccessMode`),
        new Parameter(`Script`, `Specifies an array of script files that this cmdlet sets a breakpoint in. Enter the paths and file names of one or more script files. If the files are in the current directory, you can omit the path. Wildcards are permitted.


By default, variable breakpoints and command breakpoints are set on any command that runs in the current session. This parameter is required only when setting a line breakpoint.`, `String[]`),
        new Parameter(`Variable`, `Specifies an array of variables that this cmdlet sets breakpoints on. Enter a comma-separated list of variables without dollar signs ("$").


Use the Mode parameter to determine the mode of access that triggers the breakpoints. The default mode, Write, stops execution just before a new value is written to the variable.`, `String[]`),
    ], `Sets a breakpoint on a line, command, or variable.`, `Set-PSBreakpoint [[-Script] <String[]>] [-Line] <Int32[]> [[-Column] <Int32>] [-Action <ScriptBlock>] [<CommonParameters>]

Set-PSBreakpoint [[-Script] <String[]>] [-Action <ScriptBlock>] -Command <String[]> [<CommonParameters>]

Set-PSBreakpoint [[-Script] <String[]>] [-Action <ScriptBlock>] [-Mode {Read | Write | ReadWrite}] -Variable <String[]> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSDebug`, [
        new Parameter(`Off`, `Turns off all script debugging features.`, `SwitchParameter`),
        new Parameter(`Step`, `Turns on script stepping. Before each line runs, PowerShell prompts you to stop, continue, or enter a new interpreter level to inspect the state of the script.


Specifying the Step parameter automatically sets a trace level of "1".`, `SwitchParameter`),
        new Parameter(`Strict`, `Specifies that variables must be assigned a value before being referenced in a script. If a variable is referenced before a value is assigned, PowerShell returns an exception error. This is equivalent to "Set-StrictMode -Version 1". For more information, see Set-StrictMode (Set-StrictMode.md).`, `SwitchParameter`),
        new Parameter(`Trace`, `Specifies the trace level for each line in a script. Each line is traced as it's run.


The acceptable values for this parameter are as follows:


- 0: Turn script tracing off.


- 1: Trace script lines as they run.


- 2: Trace script lines, variable assignments, function calls, and scripts.`, `Int32`),
    ], `Turns script debugging features on and off, sets the trace level, and toggles strict mode.`, `Set-PSDebug [-Off] [<CommonParameters>]

Set-PSDebug [-Step] [-Strict] [-Trace <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSReadLineKeyHandler`, [
        new Parameter(`Chord`, `The key or sequence of keys to be bound to a Function or ScriptBlock. A single binding is specified with a single string. If the binding is a sequence of keys, the keys are separated with a comma, e.g. "Ctrl+X,Ctrl+X". Note that this parameter accepts multiple strings. Each string is a separate binding, not a sequence of keys for a single binding.`, `String[]`),
        new Parameter(`ScriptBlock`, `The ScriptBlock is called when the Chord is entered. The ScriptBlock is passed one or sometimes two arguments. The first argument is the key pressed (a ConsoleKeyInfo.)  The second argument could be any object depending on the context.`, `ScriptBlock`),
        new Parameter(`BriefDescription`, `A brief description of the key binding. Used in the output of cmdlet Get-PSReadLineKeyHandler.`, `String`),
        new Parameter(`Description`, `A more verbose description of the key binding. Used in the output of the cmdlet Get-PSReadLineKeyHandler.`, `String`),
        new Parameter(`Function`, `The name of an existing key handler provided by PSReadLine. This parameter allows one to rebind existing key bindings or to bind a handler provided by PSReadLine that is currently unbound.


Using the ScriptBlock parameter, one can achieve equivalent functionality by calling the method directly from the ScriptBlock. This parameter is preferred though - it makes it easier to determine which functions are bound and unbound.`, `String`),
        new Parameter(`ViMode`, `Specify which vi mode the binding applies to.


Valid values are:


-- Insert


-- Command`, `ViMode`),
    ], `Binds or rebinds keys to user defined or PSReadLine provided key handlers.`, `Set-PSReadLineKeyHandler [-Chord] <String[]> [-ScriptBlock] <ScriptBlock> [-BriefDescription <String>] [-Description <String>] [-ViMode <ViMode>] [<CommonParameters>]

Set-PSReadLineKeyHandler [-Chord] <String[]> [-Function] <String> [-ViMode <ViMode>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSReadLineOption`, [
        new Parameter(`EditMode`, `Specifies the command line editing mode. This will reset any key bindings set by Set-PSReadLineKeyHandler.


Valid values are:


-- Windows: Key bindings emulate PowerShell/cmd with some bindings emulating Visual Studio.


-- Emacs: Key bindings emulate Bash or Emacs.


-- Vi: Key bindings emulate Vi.`, `EditMode`),
        new Parameter(`PromptText`, `When there is a parse error, PSReadLine changes a part of the prompt red. PSReadLine analyzes your prompt function to determine how it can change just the color of part of your prompt, but this analysis cannot be 100% reliable.


Use this option if PSReadLine is changing your prompt in surprising ways, be sure to include any trailing whitespace.


For example, if my prompt function looked like:


function prompt { Write-Host -NoNewLine -ForegroundColor Yellow "$pwd"; return "# " }


Then set:


Set-PSReadLineOption -PromptText "# "`, `String`),
        new Parameter(`ContinuationPrompt`, `Specifies the string displayed at the beginning of the second and subsequent lines when multi-line input is being entered. Defaults to '>> '. The empty string is valid.`, `String`),
        new Parameter(`HistoryNoDuplicates`, `Repeated commands will usually be added to history to preserve ordering during recall, but typically you don't want to see the same command multiple times when recalling or searching the history.


This option controls the recall behavior - duplicates will are still added to the history file, but if this option is set, only the most recent invocation will appear when recalling commands.`, `SwitchParameter`),
        new Parameter(`AddToHistoryHandler`, `Specifies a ScriptBlock that can be used to control which commands get added to PSReadLine history.


The ScriptBlock is passed the command line. If the ScriptBlock returns "$true", the command line is added to history, otherwise it is not.`, `Func[String, Boolean]`),
        new Parameter(`CommandValidationHandler`, `Specifies a ScriptBlock that is called from ValidateAndAcceptLine. If an exception is thrown, validation fails and the error is reported.


"ValidateAndAcceptLine" is used to avoid cluttering your history with commands that can't work, e.g. specifying parameters that do not exist.`, `Action[CommandAst]`),
        new Parameter(`HistorySearchCursorMovesToEnd`, `When using "HistorySearchBackward" and "HistorySearchForward", the default behavior leaves the cursor at the end of the search string if any.


To move the cursor to end of the line just like when there is no search string, set this option to "$true".`, `SwitchParameter`),
        new Parameter(`MaximumHistoryCount`, `Specifies the maximum number of commands to save in PSReadLine history.


Note that PSReadLine history is separate from PowerShell history.`, `Int32`),
        new Parameter(`MaximumKillRingCount`, `Specifies the maximum number of items stored in the kill ring.`, `Int32`),
        new Parameter(`ShowToolTips`, `When displaying possible completions, show tooltips in the list of completions.


This option was not enabled by default in earliers versions of PSReadLine, but is enabled by default now. To disable, set this option to "$false".`, `SwitchParameter`),
        new Parameter(`ExtraPromptLineCount`, `Use this option if your prompt spans more than one line.


This option is needed less than in previous version of PSReadLine, but is useful when the "InvokePrompt" function is used.`, `Int32`),
        new Parameter(`Colors`, `The Colors parameter is used to specify various colors used by PSReadLine.


The argument is a Hashtable where the keys specify which element and the values specify the color.


Colors can be either a value from ConsoleColor, e.g. [ConsoleColor]::Red, or a valid escape sequence. Valid escape sequences depend on your terminal, e.g. "$([char]0x1b)[91m" (Windows PowerShell) or ""e[91m" (PowerShell 6.0) specifies Red in most terminals. You can specify other escape sequences as well, including but not limited to:


-- 256 color


-- 24 bit color


-- Foreground, background, or both


-- Inverse, bold




The valid keys include:


-- ContinuationPrompt: The color of the continuation prompt.


-- Emphasis: The emphasis color, e.g. the matching text when searching history.


-- Error: The error color, e.g. in the prompt.


-- Selection: The color to highlight the menu selection or selected text.


-- Default: The default token color.


-- Comment: The comment token color.


-- Keyword: The keyword token color.


-- String: The string token color.


-- Operator: The operator token color.


-- Variable: The variable token color.


-- Command: The command token color.


-- Parameter: The parameter token color.


-- Type: The type token color.


-- Number: The number token color.

-- Member: The member name token color.`, `Hashtable`),
        new Parameter(`DingTone`, `When BellStyle is set to Audible, specifies the tone of the beep.`, `Int32`),
        new Parameter(`DingDuration`, `When BellStyle is set to Audible, specifies the duration of the beep.`, `Int32`),
        new Parameter(`BellStyle`, `Specifies how PSReadLine should respond to various error and ambiguous conditions.


Valid values are:


-- Audible: a short beep


-- Visible: a brief flash is performed


-- None: no feedback`, `BellStyle`),
        new Parameter(`CompletionQueryItems`, `Specifies the maximum number of completion items that will be shown without prompting.


If the number of items to show is greater than this value, PSReadLine will prompt y/n before displaying the completion items.`, `Int32`),
        new Parameter(`WordDelimiters`, `Specifies the characters that delimit words for functions like ForwardWord or KillWord.`, `string`),
        new Parameter(`HistorySearchCaseSensitive`, `Specifies the searching history is case sensitive in functions like ReverseSearchHistory or HistorySearchBackward.`, `SwitchParameter`),
        new Parameter(`HistorySaveStyle`, `Specifies how PSReadLine should save history.


Valid values are:


-- SaveIncrementally: save history after each command is executed - and share across multiple instances of PowerShell


-- SaveAtExit: append history file when PowerShell exits


-- SaveNothing: don't use a history file`, `HistorySaveStyle`),
        new Parameter(`HistorySavePath`, `Specifies the path to the file where history is saved.`, `String`),
        new Parameter(`AnsiEscapeTimeout`, `This option is specific to Windows when input is redirected, e.g. when running under "tmux" or "screen".


With redirected input on Windows, many keys are sent as a sequence of characters starting with the Escape character, so it is, in general, impossible to distinguish between a single Escape followed by other key presses.


The assumption is the terminal sends the characters quickly, faster than a user types, so PSReadLine waits for this timeout before concluding it won't see an escape sequence.


You can experiment with this timeout if you see issues or random unexpected characters when you type.`, `int`),
        new Parameter(`ViModeIndicator`, `This option sets the visual indication for the current mode in Vi mode - either insert mode or command mode.


Valid values are:


-- None - there is no indication


-- Prompt - the prompt changes color


-- Cursor - the cursor changes size`, `ViModeStyle`),
    ], `Customizes the behavior of command line editing in PSReadLine.`, `Set-PSReadLineOption [-EditMode <EditMode>] [-PromptText <String>] [-ContinuationPrompt <String>] [-HistoryNoDuplicates] [-AddToHistoryHandler <Func[String, Boolean]>] [-CommandValidationHandler <Action[CommandAst]>] [-HistorySearchCursorMovesToEnd] [-MaximumHistoryCount <Int32>] [-MaximumKillRingCount <Int32>] [-ShowToolTips] [-ExtraPromptLineCount <Int32>] [-Colors <Hashtable>] [-DingTone <Int32>] [-DingDuration <Int32>] [-BellStyle <BellStyle>] [-CompletionQueryItems <Int32>] [-WordDelimiters <string>] [-HistorySearchCaseSensitive] [-HistorySaveStyle <HistorySaveStyle>] [-HistorySavePath <String>] [-AnsiEscapeTimeout <int>] [-ViModeIndicator <ViModeStyle>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-PSSessionConfiguration`, [
        new Parameter(`AccessMode`, `Enables and disables the session configuration and determines whether it can be used for remote or local sessions on the computer. The acceptable values for this parameter are:


- Disabled. Disables the session configuration. It cannot be used for remote or local access to the   computer. This value sets the Enabled property of the session configuration   ("WSMan:<ComputerName>\\PlugIn<SessionConfigurationName>\\Enabled") to False . - Local. Adds a Network_Deny_All entry to security descriptor of the session configuration.   Users of the local computer can use the session configuration to create a local loopback session   on the same computer, but remote users are denied access. - Remote. Removes Deny_All and Network_Deny_All entries from the security descriptors of the   session configuration. Users of local and remote computers can use the session configuration to   create sessions and run commands on this computer.


The default value is Remote .


Other cmdlets can override the value of this parameter later. For example, the "Enable-PSRemoting" cmdlet enables all session configurations on the computer and permits remote access to them, and the "Disable-PSRemoting" cmdlet permits only local access to all session configurations on the computer.


This parameter was introduced in PowerShell 3.0.`, `PSSessionConfigurationAccessMode`),
        new Parameter(`ApplicationBase`, `Specifies the path of the assembly file (*.dll) that is specified in the value of the AssemblyName parameter.`, `String`),
        new Parameter(`AssemblyName`, `Specifies the assembly name. This cmdlet creates a session configuration based on a class that is defined in an assembly.


Enter the filename or full path of an assembly .dll file that defines a session configuration. If you enter only the file name, you can enter the path in the value of the ApplicationBase parameter.`, `String`),
        new Parameter(`ConfigurationTypeName`, `Specifies the type of the session configuration that is defined in the assembly in the AssemblyName parameter. The type that you specify must implement the System.Management.Automation.Remoting.PSSessionConfiguration class.


This parameter is required when you specify an assembly name.`, `String`),
        new Parameter(`Force`, `Suppresses all user prompts, and restarts the WinRM service without prompting. Restarting the service makes the configuration change effective.


To prevent a restart and suppress the restart prompt, use the NoServiceRestart parameter.`, `SwitchParameter`),
        new Parameter(`MaximumReceivedDataSizePerCommandMB`, `Specifies the limit on the amount of data that can be sent to this computer in any single remote command. Enter the data size in megabytes (MB). The default is 50 MB.


If a data size limit is defined in the configuration type that is specified in the ConfigurationTypeName parameter, the limit in the configuration type is used. The value of this parameter is ignored.`, `Double`),
        new Parameter(`MaximumReceivedObjectSizeMB`, `Specifies the limits on the amount of data that can be sent to this computer in any single object. Enter the data size in megabytes. The default is 10 MB.


If an object size limit is defined in the configuration type that is specified in the ConfigurationTypeName parameter, the limit in the configuration type is used. The value of this parameter is ignored.`, `Double`),
        new Parameter(`ModulesToImport`, `Specifies the modules and snap-ins that are automatically imported into sessions that use the session configuration. Enter the module and snap-in names.


By default, only the Microsoft.PowerShell.Core snap-in is imported into sessions, but unless the cmdlets are excluded, you can use the "Import-Module" and Add-PSSnapin cmdlets to add modules and snap-ins to the session.


The modules specified in this parameter value are imported in additions to modules specified in the session configuration file ("New-PSSessionConfigurationFile"). However, settings in the session configuration file can hide the commands exported by modules or prevent users from using them.


The modules specified in this parameter value replace the list of modules specified by using the ModulesToImport parameter of the "Register-PSSessionConfiguration" cmdlet.


This parameter was introduced in PowerShell 3.0.`, `Object[]`),
        new Parameter(`Name`, `Specifies the name of the session configuration that you want to change.


You cannot use this parameter to change the name of the session configuration.`, `String`),
        new Parameter(`NoServiceRestart`, `Does not restart the WinRM service, and suppresses the prompt to restart the service.


By default, when you run "Set-PSSessionConfiguration", you are prompted to restart the WinRM service to make the new session configuration effective. Until the WinRM service is restarted, the new session configuration is not effective.


To restart the WinRM service without prompting, use the Force parameter. To restart the WinRM service manually, use the "Restart-Service" cmdlet.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the path of a session configuration file (.pssc), such as one created by the "New-PSSessionConfigurationFile" cmdlet. If you omit the path, the default is the current directory.


For information about how to modify a session configuration file, see the help topic for the "New-PSSessionConfigurationFile" cmdlet.


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`PSVersion`, `Specifies the version of PowerShell in sessions that use this session configuration.


The value of this parameter takes precedence over the value of the PowerShellVersion key in the session configuration file.


This parameter was introduced in PowerShell 3.0.`, `Version`),
        new Parameter(`RunAsCredential`, `Specifies credentials for commands in the session. By default, commands run with the permissions of the current user.


This parameter was introduced in PowerShell 3.0.`, `PSCredential`),
        new Parameter(`SecurityDescriptorSddl`, `Specifies a different Security Descriptor Definition Language (SDDL) string for the configuration.


This string determines the permissions that are required to use the new session configuration. To use a session configuration in a session, users must have at least Execute(Invoke) permission for the configuration.


To use the default security descriptor for the configuration, enter an empty string ("") or a value of "$Null". The default is the root SDDL in the WSMan: drive.


If the security descriptor is complex, consider using the ShowSecurityDescriptorUI parameter instead of this one. You cannot use both parameters in the same command.`, `String`),
        new Parameter(`SessionTypeOption`, `Specifies type-specific options for the session configuration. Enter a session type options object, such as the PSWorkflowExecutionOption object that the "New-PSWorkflowExecutionOption" cmdlet returns.


The options of sessions that use the session configuration are determined by the values of session options and the session configuration options. Unless specified, options set in the session, such as by using the "New-PSSessionOption" cmdlet, take precedence over options set in the session configuration. However, session option values cannot exceed maximum values set in the session configuration.


This parameter was introduced in PowerShell 3.0.`, `PSSessionTypeOption`),
        new Parameter(`ShowSecurityDescriptorUI`, `Indicates that this cmdlet a property sheet that helps you create a new SDDL for the session configuration. The property sheet appears after you run the "Set-PSSessionConfiguration" command and then restart the WinRM service.


When you set permissions to the configuration, remember that users must have at least Execute(Invoke) permission to use the session configuration in a session.


You cannot use the SecurityDescriptorSDDL parameter and this parameter in the same command.`, `SwitchParameter`),
        new Parameter(`StartupScript`, `Specifies the startup script for the configuration. Enter the fully qualified path of a PowerShell script. The specified script runs in the new session that uses the session configuration.


To delete a startup script from a session configuration, enter an empty string ("") or a value of "$Null".


You can use a startup script to further configure the user session. If the script generates an error, even a non-terminating error, the session is not created and the "New-PSSession" command fails.`, `String`),
        new Parameter(`ThreadOptions`, `Specifies the thread options setting in the configuration. This setting defines how threads are created and used when a command is executed in the session. The acceptable values for this parameter are:


- Default


- ReuseThread


- UseCurrentThread


- UseNewThread




The default value is UseCurrentThread .

For more information, see PSThreadOptions Enumeration (/dotnet/api/system.management.automation.runspaces.psthreadoptions).`, `PSThreadOptions`),
        new Parameter(`TransportOption`, `Specifies the transport options for the session configuration. Enter a transport options object, such as the WSManConfigurationOption object that the "New-PSTransportOption" cmdlet returns.


The options of sessions that use the session configuration are determined by the values of session options and the session configuration options. Unless specified, options set in the session, such as by using the "New-PSSessionOption" cmdlet, take precedence over options set in the session configuration. However, session option values cannot exceed maximum values set in the session configuration.


This parameter was introduced in PowerShell 3.0.`, `PSTransportOption`),
        new Parameter(`UseSharedProcess`, `Use only one process to host all sessions that are started by the same user and use the same session configuration. By default, each session is hosted in its own process.


This parameter was introduced in PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Changes the properties of a registered session configuration.`, `Set-PSSessionConfiguration [-Name] <String> [-AccessMode {Disabled | Local | Remote}] [-ApplicationBase <String>] [-Force] [-MaximumReceivedDataSizePerCommandMB <Double>] [-MaximumReceivedObjectSizeMB <Double>] [-ModulesToImport <Object[]>] [-NoServiceRestart] [-PSVersion <Version>] [-RunAsCredential <PSCredential>] [-SecurityDescriptorSddl <String>] [-SessionTypeOption <PSSessionTypeOption>] [-ShowSecurityDescriptorUI] [-StartupScript <String>] [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}] [-TransportOption <PSTransportOption>] [-UseSharedProcess] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-PSSessionConfiguration [-Name] <String> [-AssemblyName] <String> [-ConfigurationTypeName] <String> [-AccessMode {Disabled | Local | Remote}] [-ApplicationBase <String>] [-Force] [-MaximumReceivedDataSizePerCommandMB <Double>] [-MaximumReceivedObjectSizeMB <Double>] [-ModulesToImport <Object[]>] [-NoServiceRestart] [-PSVersion <Version>] [-RunAsCredential <PSCredential>] [-SecurityDescriptorSddl <String>] [-SessionTypeOption <PSSessionTypeOption>] [-ShowSecurityDescriptorUI] [-StartupScript <String>] [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}] [-TransportOption <PSTransportOption>] [-UseSharedProcess] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-PSSessionConfiguration [-Name] <String> [-AccessMode {Disabled | Local | Remote}] [-Force] [-MaximumReceivedDataSizePerCommandMB <Double>] [-MaximumReceivedObjectSizeMB <Double>] [-NoServiceRestart] -Path <String> [-RunAsCredential <PSCredential>] [-SecurityDescriptorSddl <String>] [-ShowSecurityDescriptorUI] [-StartupScript <String>] [-ThreadOptions {Default | UseNewThread | ReuseThread | UseCurrentThread}] [-TransportOption <PSTransportOption>] [-UseSharedProcess] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-SecureBootUEFI`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Service`, [
        new Parameter(`Confirm`, `Prompts you for confirmation before running "Set-Service".`, `SwitchParameter`),
        new Parameter(`Credential`, `Specifies the account used by the service as the Service Logon Account (/windows/desktop/ad/about-service-logon-accounts).


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object, such as one generated by the "Get-Credential" cmdlet. If you type a user name, this cmdlet prompts you for a password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).


This parameter was introduced in PowerShell 6.0.`, `PSCredential`),
        new Parameter(`Description`, `Specifies a new description for the service.


The service description appears in Computer Management, Services . The Description isn't a property of the "Get-Service" ServiceController object. To see the service description, use "Get-CimInstance" that returns a Win32_Service object that represents the service.`, `String`),
        new Parameter(`DisplayName`, `Specifies a new display name for the service.`, `String`),
        new Parameter(`Force`, `Specifies the Stop mode of the service. This parameter only works when "-Status Stopped" is used. If enabled, "Set-Service" stops the dependent services before the target service is stopped. By default, exceptions are raised when other running services depend on the target service.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies a ServiceController object that represents the service to change. Enter a variable that contains the object, or type a command or expression that gets the object, such as a "Get-Service" command. You can use the pipeline to send a service object to "Set-Service".`, `ServiceController`),
        new Parameter(`Name`, `Specifies the service name of the service to be changed. Wildcard characters aren't permitted. You can use the pipeline to send a service name to "Set-Service".`, `String`),
        new Parameter(`PassThru`, `Returns a ServiceController object that represents the services that were changed. By default, "Set-Service" doesn't generate any output.`, `SwitchParameter`),
        new Parameter(`StartupType`, `Specifies the start mode of the service.


The acceptable values for this parameter are as follows:


- Automatic - The service is started or was started by the operating system, at system start-up.   If an automatically started service depends on a manually started service, the manually started   service is also started automatically at system startup. - AutomaticDelayedStart - Starts shortly after the system boots. - Disabled - The service is disabled and cannot be started by a user or application. - InvalidValue - Has no effect. The cmdlet does not return an error but the StartupType of the   service is not changed. - Manual - The service is started only manually, by a user, using the Service Control Manager,   or by an application.`, `ServiceStartupType`),
        new Parameter(`Status`, `Specifies the status for the service.


The acceptable values for this parameter are as follows:


- Paused . Suspends the service. - Running . Starts the service. - Stopped . Stops the service.`, `String`),
        new Parameter(`WhatIf`, `Shows what would happen if "Set-Service" runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Starts, stops, and suspends a service, and changes its properties.`, `Set-Service [-InputObject] <ServiceController> [-Confirm] [-Credential <PSCredential>] [-Description <String>] [-DisplayName <String>] [-Force] [-PassThru] [-StartupType {Automatic | AutomaticDelayedStart | Disabled | InvalidValue | Manual}] [-Status {Paused | Running | Stopped}] [-WhatIf] [<CommonParameters>]

Set-Service [-Name] <String> [-Confirm] [-Credential <PSCredential>] [-Description <String>] [-DisplayName <String>] [-Force] [-PassThru] [-StartupType {Automatic | AutomaticDelayedStart | Disabled | InvalidValue | Manual}] [-Status {Paused | Running | Stopped}] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-StrictMode`, [
        new Parameter(`Off`, `Indicates that this cmdlet turns strict mode off for the current scope and all child scopes.`, `SwitchParameter`),
        new Parameter(`Version`, `Specifies the conditions that cause an error in strict mode. This parameter accepts any valid PowerShell version number. Any number higher than 3 is treated as Latest .


The effective values for this parameter are:


- 1.0   - Prohibits references to uninitialized variables, except for uninitialized variables in strings. - 2.0   - Prohibits references to uninitialized variables. This includes uninitialized variables in strings.   - Prohibits references to non-existent properties of an object.   - Prohibits function calls that use the syntax for calling methods. - 3.0   - Prohibits references to uninitialized variables. This includes uninitialized variables in strings.   - Prohibits references to non-existent properties of an object.   - Prohibits function calls that use the syntax for calling methods.   - Prohibit out of bounds or unresolvable array indexes. - Latest   - Selects the latest version available. The latest version is the most strict. Use this value to     make sure that scripts use the strictest available version, even when new versions are added to     PowerShell.`, `Version`),
    ], `Establishes and enforces coding rules in expressions, scripts, and script blocks.`, `Set-StrictMode -Off [<CommonParameters>]

Set-StrictMode -Version <Version> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-TimeZone`, [
        new Parameter(`Id`, `Specifies the ID of the time zone that this cmdlet sets. A full list of Time Zone IDs can be obtained by running the following command: "Get-TimeZone -ListAvailable".`, `String`),
        new Parameter(`InputObject`, `Specifies a TimeZoneInfo object to use as input.`, `TimeZoneInfo`),
        new Parameter(`Name`, `Specifies the name of the time zone that this cmdlet sets. A full list of Time Zone names can be obtained by running the following command: "Get-TimeZone -ListAvailable".`, `String`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Sets the system time zone to a specified time zone.`, `Set-TimeZone -Id <String> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-TimeZone [-InputObject] <TimeZoneInfo> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Set-TimeZone [-Name] <String> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-TpmOwnerAuth`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-TraceSource`, [
        new Parameter(`Debugger`, `Indicates that the cmdlet sends the trace output to the debugger. You can view the output in any user-mode or kernel mode debugger or in Microsoft Visual Studio. This parameter also selects the default trace listener.`, `SwitchParameter`),
        new Parameter(`FilePath`, `Specifies a file that this cmdlet sends the trace output to. This parameter also selects the file trace listener. If you use this parameter to start the trace, use the RemoveFileListener parameter to stop the trace.`, `String`),
        new Parameter(`Force`, `Indicates that the cmdlet overwrites a read-only file. Use with the FilePath parameter.`, `SwitchParameter`),
        new Parameter(`ListenerOption`, `Specifies optional data to the prefix of each trace message in the output. The acceptable values for this parameter are:


- None


- LogicalOperationStack


- DateTime


- Timestamp


- ProcessId


- ThreadId


- Callstack




None is the default.

To specify multiple options, separate them with commas, but with no spaces, and enclose them in quotation marks, such as "ProcessID,ThreadID".`, `TraceOptions`),
        new Parameter(`Name`, `Specifies which components are traced. Enter the name of the trace source of each component. Wildcards are permitted.`, `String[]`),
        new Parameter(`Option`, `Specifies the type of events that are traced. The acceptable values for this parameter are:


- None


- Constructor


- Dispose


- Finalizer


- Method


- Property


- Delegates


- Events


- Exception


- Lock


- Error


- Errors


- Warning


- Verbose


- WriteLine


- Data


- Scope


- ExecutionFlow


- Assert


- All




All is the default.


The following values are combinations of other values:


- ExecutionFlow: (Constructor, Dispose, Finalizer, Method, Delegates, Events, and Scope)


- Data: (Constructor, Dispose, Finalizer, Property, Verbose, and WriteLine)


- Errors: (Error and Exception).



To specify multiple options, separate them with commas, but with no spaces, and enclose them in quotation marks, such as "Constructor,Dispose".`, `PSTraceSourceOptions`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`PSHost`, `ndicates that this cmdlet sends the trace output to the PowerShell host. This parameter also selects the PSHost trace listener.`, `SwitchParameter`),
        new Parameter(`RemoveFileListener`, `Stops the trace by removing the file trace listener associated with the specified file. Enter the path and file name of the trace output file.`, `String[]`),
        new Parameter(`RemoveListener`, `Stops the trace by removing the trace listener.


Use the following values with RemoveListener :


- To remove PSHost (console), type "Host".


- To remove Debugger, type "Debug".


- To remove all trace listeners, type "*".




To remove the file trace listener, use the RemoveFileListener parameter.`, `String[]`),
    ], `Configures, starts, and stops a trace of PowerShell components.`, `Set-TraceSource [-Name] <String[]> [[-Option] {None | Constructor | Dispose | Finalizer | Method | Property | Delegates | Events | Exception | Lock | Error | Errors | Warning | Verbose | WriteLine | Data | Scope | ExecutionFlow | Assert | All}] [-Debugger] [-FilePath <String>] [-Force] [-ListenerOption {None | LogicalOperationStack | DateTime | Timestamp | ProcessId | ThreadId | Callstack}] [-PassThru] [-PSHost] [<CommonParameters>]

Set-TraceSource [-Name] <String[]> [-RemoveFileListener <String[]>] [<CommonParameters>]

Set-TraceSource [-Name] <String[]> [-RemoveListener <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-Variable`, [
        new Parameter(`Description`, `Specifies the description of the variable.`, `String`),
        new Parameter(`Exclude`, `Specifies an array of items that this cmdlet excludes from the operation. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcards are permitted.`, `String[]`),
        new Parameter(`Force`, `Allows you to create a variable with the same name as an existing read-only variable, or to change the value of a read-only variable.


By default, you can overwrite a variable, unless the variable has an option value of ReadOnly or Constant. For more information, see the Option parameter.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies an array of items that this cmdlet includes in the operation. The value of this parameter qualifies the Name parameter. Enter a name or name pattern, such as "c*". Wildcards are permitted.`, `String[]`),
        new Parameter(`Name`, `Specifies the variable name.`, `String[]`),
        new Parameter(`Option`, `Specifies the value of the Options property of the variable.


Valid values are:


- None: Sets no options. ("None" is the default.)


- ReadOnly: Can be deleted. Cannot be changed, except by using the Force parameter.


- Constant: Cannot be deleted or changed. "Constant" is valid only when you are creating a variable. You cannot change the options of an existing variable to "Constant".


- Private: The variable is available only in the current scope.


- AllScope: The variable is copied to any new scopes that are created.




To see the Options property of all variables in the session, type "Get-Variable | Format-Table -Property name, options -Autosize".`, `ScopedItemOptions`),
        new Parameter(`PassThru`, `Returns an object representing the new variable. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Scope`, `Specifies the scope of the variable.The acceptable values for this parameter are:


- Global


- Local


- Script


- Private


- A number relative to the current scope (0 through the number of scopes, where 0 is the current scope and 1 is its parent).




Local is the default.

For more information, see about_Scopes (../Microsoft.PowerShell.Core/About/about_scopes.md).`, `String`),
        new Parameter(`Value`, `Specifies the value of the variable.`, `Object`),
        new Parameter(`Visibility`, `Determines whether the variable is visible outside of the session in which it was created. This parameter is designed for  use in scripts and commands that will be delivered to other users.


Valid values are:


- Public:  The variable is visible. ("Public" is the default.)


- Private: The variable is not visible.




When a variable is private, it does not appear in lists of variables, such as those returned by Get-Variable, or in displays of the Variable: drive. Commands to read or change the value of a private variable return an error. However, the user can run commands that use a private variable if the commands were written in the session in which the variable was defined.`, `SessionStateEntryVisibility`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Sets the value of a variable. Creates the variable if one with the requested name does not exist.`, `Set-Variable [-Name] <String[]> [[-Value] <Object>] [-Description <String>] [-Exclude <String[]>] [-Force] [-Include <String[]>] [-Option {None | ReadOnly | Constant | Private | AllScope | Unspecified}] [-PassThru] [-Scope <String>] [-Visibility {Public | Private}] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WheaMemoryPolicy`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinAcceptLanguageFromLanguageListOptOut`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinCultureFromLanguageListOptOut`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinDefaultInputMethodOverride`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WindowsEdition`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WindowsProductKey`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WindowsSearchSetting`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinHomeLocation`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinLanguageBarOption`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinSystemLocale`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinUILanguageOverride`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WinUserLanguageList`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WSManInstance`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Set-WSManQuickConfig`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Show-Markdown`, [
        new Parameter(`InputObject`, `A Markdown string that will be shown in the terminal. If you do not pass in a supported format, "Show-Markdown" will emit an error.`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies the path to a Markdown file. Unlike the Path parameter, the value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the path to a Markdown file to be rendered.`, `String[]`),
        new Parameter(`UseBrowser`, `Compiles the Markdown input as HTML and opens it in your default browser.`, `SwitchParameter`),
    ], `Shows a Markdown file or string in the console in a friendly way using VT100 escape sequences or in a browser using HTML.`, `Show-Markdown -InputObject <PSObject> [-UseBrowser] [<CommonParameters>]

Show-Markdown -LiteralPath <String[]> [-UseBrowser] [<CommonParameters>]

Show-Markdown [-Path] <String[]> [-UseBrowser] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Show-WindowsDeveloperLicenseRegistration`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Sort-Object`, [
        new Parameter(`Bottom`, `Specifies the number of objects to get from the end of a sorted object array. This results in a stable sort.


This parameter was introduced in PowerShell 6.0.`, `Int32`),
        new Parameter(`CaseSensitive`, `Indicates that the sort is case-sensitive. By default, sorts are not case-sensitive.`, `SwitchParameter`),
        new Parameter(`Culture`, `Specifies the cultural configuration to use for sorts. Use "Get-Culture" to display the system's culture configuration.`, `String`),
        new Parameter(`Descending`, `Indicates that "Sort-Object" sorts the objects in descending order. The default is ascending order.


To sort multiple properties with different sort orders, use a hash table. For example, with a hash table you can sort one property in ascending order and another property in descending order.`, `SwitchParameter`),
        new Parameter(`InputObject`, `To sort objects, send them down the pipeline to "Sort-Object". If you use the InputObject parameter to submit a collection of items, "Sort-Object" receives one object that represents the collection. Because one object cannot be sorted, "Sort-Object" returns the entire collection unchanged.`, `PSObject`),
        new Parameter(`Property`, `Specifies the property names that "Sort-Object" uses to sort the objects. Wildcards are permitted. Objects are sorted based on the property values. If you do not specify a property, "Sort-Object" sorts based on default properties for the object type.


Multiple properties can be sorted in ascending order, descending order, or a combination of sort orders. When you specify multiple properties, the objects are sorted by the first property. If multiple objects have the same value for the first property, those objects are sorted by the second property. This process continues until there are no more specified properties or no groups of objects.


The Property parameter's value can be a calculated property. To create a calculated property, use a hash table.


Valid keys for a hash table are as follows:


- Expression <string> or <script block>


- Ascending <Boolean>


- Descending <Boolean>`, `Object[]`),
        new Parameter(`Top`, `Specifies the number of objects to get from the start of a sorted object array. This results in a stable sort.


This parameter was introduced in PowerShell 6.0.`, `Int32`),
        new Parameter(`Unique`, `Indicates that "Sort-Object" eliminates duplicates and returns only the unique members of the collection. The first instance of a unique value is included in the sorted output. Unique is case-insensitive. Strings that only differ by character case are considered the same. For example, character and CHARACTER.`, `SwitchParameter`),
        new Parameter(`Stable`, `The sorted objects are delivered in the order they were received when the sort criteria are equal.


This parameter was added in PowerShell v6.2.0.`, `SwitchParameter`),
    ], `Sorts objects by property values.`, `Sort-Object [[-Property] <Object[]>] -Bottom <Int32> [-CaseSensitive] [-Culture <String>] [-Descending] [-InputObject <PSObject>] [-Unique] [<CommonParameters>]

Sort-Object [[-Property] <Object[]>] [-CaseSensitive] [-Culture <String>] [-Descending] [-InputObject <PSObject>] -Top <Int32> [-Unique] [<CommonParameters>]

Sort-Object [[-Property] <Object[]>] [-CaseSensitive] [-Culture <String>] [-Descending] [-InputObject <PSObject>] [-Unique] [-Stable] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Split-Path`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Extension`, `Indicates that this cmdlet returns only the extension of the leaf. For example, in the path "C:\\Test\\Logs\\Pass1.log", it returns only ".log".


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`IsAbsolute`, `Indicates that this cmdlet returns $True if the path is absolute and $False if it is relative. An absolute path has a length greater than zero and does not use a dot (.) to indicate the current path.`, `SwitchParameter`),
        new Parameter(`Leaf`, `Indicates that this cmdlet returns only the last item or container in the path. For example, in the path "C:\\Test\\Logs\\Pass1.log", it returns only Pass1.log.`, `SwitchParameter`),
        new Parameter(`LeafBase`, `Indicates that this cmdlet returns only base name of the leaf. For example, in the path "C:\\Test\\Logs\\Pass1.log", it returns only "Pass1".


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies the paths to be split. Unlike Path , the value of LiteralPath is used exactly as it is typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`NoQualifier`, `Indicates that this cmdlet returns the path without the qualifier. For the FileSystem or registry providers, the qualifier is the drive of the provider path, such as C: or HKCU:. For example, in the path "C:\\Test\\Logs\\Pass1.log", it returns only \\Test\\Logs\\Pass1.log.`, `SwitchParameter`),
        new Parameter(`Parent`, `Indicates that this cmdlet returns only the parent containers of the item or of the container specified by the path. For example, in the path "C:\\Test\\Logs\\Pass1.log", it returns C:\\Test\\Logs. The Parent parameter is the default split location parameter.`, `SwitchParameter`),
        new Parameter(`Path`, `Specifies the paths to be split. Wildcard characters are permitted. If the path includes spaces, enclose it in quotation marks. You can also pipe a path to this cmdlet.`, `String[]`),
        new Parameter(`Qualifier`, `Indicates that this cmdlet returns only the qualifier of the specified path. For the FileSystem or registry providers, the qualifier is the drive of the provider path, such as C: or HKCU:.`, `SwitchParameter`),
        new Parameter(`Resolve`, `Indicates that this cmdlet displays the items that are referenced by the resulting split path instead of displaying the path elements.`, `SwitchParameter`),
    ], `Returns the specified part of a path.`, `Split-Path [-Path] <String[]> [-Credential <PSCredential>] [-Extension] [-Resolve] [<CommonParameters>]

Split-Path [-Path] <String[]> [-Credential <PSCredential>] [-IsAbsolute] [-Resolve] [<CommonParameters>]

Split-Path [-Path] <String[]> [-Credential <PSCredential>] [-Leaf] [-Resolve] [<CommonParameters>]

Split-Path [-Path] <String[]> [-Credential <PSCredential>] [-LeafBase] [-Resolve] [<CommonParameters>]

Split-Path [-Credential <PSCredential>] -LiteralPath <String[]> [-Resolve] [<CommonParameters>]

Split-Path [-Path] <String[]> [-Credential <PSCredential>] [-NoQualifier] [-Resolve] [<CommonParameters>]

Split-Path [-Path] <String[]> [-Credential <PSCredential>] [-Parent] [-Resolve] [<CommonParameters>]

Split-Path [-Path] <String[]> [[-Qualifier]] [-Credential <PSCredential>] [-Resolve] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Split-WindowsImage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-Job`, [
        new Parameter(`ArgumentList`, `Specifies an array of arguments, or parameter values, for the script that is specified by the FilePath parameter or a command specified with the ScriptBlock parameter.


Arguments must be passed to ArgumentList as single-dimension array argument. For example, a comma-separated list. For more information about array dimensions, see about_Arrays (./about/about_arrays.md#rank).`, `Object[]`),
        new Parameter(`Authentication`, `Specifies the mechanism that is used to authenticate user credentials.


The acceptable values for this parameter are as follows:


- Default


- Basic


- Credssp


- Digest


- Kerberos


- Negotiate


- NegotiateWithImplicitCredential




The default value is Default.


CredSSP authentication is available only in Windows Vista, Windows Server 2008, and later versions of the Windows operating system.


For more information about the values of this parameter, see AuthenticationMechanism (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).

> [!CAUTION] > Credential Security Support Provider (CredSSP) authentication, in which the user's credentials are > passed to a remote computer to be authenticated, is designed for commands that require > authentication on more than one resource, such as accessing a remote network share. This mechanism > increases the security risk of the remote operation. If the remote computer is compromised, the > credentials that are passed to it can be used to control the network session.`, `AuthenticationMechanism`),
        new Parameter(`Credential`, `Specifies a user account that has permission to perform this action. If the Credential parameter isn't specified, the command uses the current user's credentials.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`DefinitionName`, `Specifies the definition name of the job that this cmdlet starts. Use this parameter to start custom job types that have a definition name, such as scheduled jobs.


When you use "Start-Job" to start an instance of a scheduled job, the job starts immediately, regardless of job triggers or job options. The resulting job instance is a scheduled job, but it isn't saved to disk like triggered scheduled jobs. You can't use the ArgumentList parameter of "Start-Job" to provide values for parameters of scripts that run in a scheduled job.


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`DefinitionPath`, `Specifies path of the definition for the job that this cmdlet starts. Enter the definition path. The concatenation of the values of the DefinitionPath and DefinitionName parameters is the fully qualified path of the job definition. Use this parameter to start custom job types that have a definition path, such as scheduled jobs.


For scheduled jobs, the value of the DefinitionPath parameter is "$home\\AppData\\Local\\Windows\\PowerShell\\ScheduledJob".


This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`FilePath`, `Specifies a local script that "Start-Job" runs as a background job. Enter the path and file name of the script or use the pipeline to send a script path to "Start-Job". The script must be on the local computer or in a folder that the local computer can access.


When you use this parameter, PowerShell converts the contents of the specified script file to a script block and runs the script block as a background job.`, `String`),
        new Parameter(`InitializationScript`, `Specifies commands that run before the job starts. To create a script block, enclose the commands in curly braces ("{}").


Use this parameter to prepare the session in which the job runs. For example, you can use it to add functions, snap-ins, and modules to the session.`, `ScriptBlock`),
        new Parameter(`InputObject`, `Specifies input to the command. Enter a variable that contains the objects, or type a command or expression that generates the objects.


In the value of the ScriptBlock parameter, use the "$input" automatic variable to represent the input objects.`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies a local script that this cmdlet runs as a background job. Enter the path of a script on the local computer.


"Start-Job" uses the value of the LiteralPath parameter exactly as it's typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`Name`, `Specifies a friendly name for the new job. You can use the name to identify the job to other job cmdlets, such as the "Stop-Job" cmdlet.


The default friendly name is "Job#", where "#" is an ordinal number that is incremented for each job.`, `String`),
        new Parameter(`PSVersion`, `Specifies a version. "Start-Job" runs the job with the version of PowerShell. The acceptable values for this parameter are: "2.0" and "3.0".


This parameter was introduced in PowerShell 3.0.`, `Version`),
        new Parameter(`RunAs32`, `Indicates that "Start-Job" runs the job in a 32-bit process. RunAs32 forces the job to run in a 32-bit process, even on a 64-bit operating system.


On 64-bit versions of Windows 7 and Windows Server 2008 R2, when the "Start-Job" command includes the RunAs32 parameter, you can't use the Credential parameter to specify the credentials of another user.`, `SwitchParameter`),
        new Parameter(`ScriptBlock`, `Specifies the commands to run in the background job. To create a script block, enclose the commands in curly braces ("{}"). Use the "$input" automatic variable to access the value of the InputObject parameter. This parameter is required.`, `ScriptBlock`),
        new Parameter(`Type`, `Specifies the custom type for jobs started by "Start-Job". Enter a custom job type name, such as PSScheduledJob for scheduled jobs or PSWorkflowJob for workflows jobs. This parameter isn't valid for standard background jobs.


This parameter was introduced in PowerShell 3.0.`, `String`),
    ], `Starts a PowerShell background job.`, `Start-Job [-ScriptBlock] <ScriptBlock> [[-InitializationScript] <ScriptBlock>] [-ArgumentList <Object[]>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-Credential <PSCredential>] [-InputObject <PSObject>] [-Name <String>] [-PSVersion <Version>] [-RunAs32] [<CommonParameters>]

Start-Job [-FilePath] <String> [[-InitializationScript] <ScriptBlock>] [-ArgumentList <Object[]>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-Credential <PSCredential>] [-InputObject <PSObject>] [-Name <String>] [-PSVersion <Version>] [-RunAs32] [<CommonParameters>]

Start-Job [[-InitializationScript] <ScriptBlock>] [-ArgumentList <Object[]>] [-Authentication {Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos}] [-Credential <PSCredential>] [-InputObject <PSObject>] -LiteralPath <String> [-Name <String>] [-PSVersion <Version>] [-RunAs32] [<CommonParameters>]

Start-Job [-DefinitionName] <String> [[-DefinitionPath] <String>] [[-Type] <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-OSUninstall`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-Process`, [
        new Parameter(`ArgumentList`, `Specifies parameters or parameter values to use when this cmdlet starts the process. If parameters or parameter values contain a space, they need surrounded with escaped double quotes.`, `String[]`),
        new Parameter(`Credential`, `Specifies a user account that has permission to perform this action. By default, the cmdlet uses the credentials of the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`FilePath`, `Specifies the optional path and filename of the program that runs in the process. Enter the name of an executable file or of a document, such as a .txt or .doc file, that is associated with a program on the computer. This parameter is required.


If you specify only a filename, use the WorkingDirectory parameter to specify the path.`, `String`),
        new Parameter(`LoadUserProfile`, `Indicates that this cmdlet loads the Windows user profile stored in the HKEY_USERS registry key for the current user.


This parameter does not affect the PowerShell profiles. For more information, see about_Profiles (../Microsoft.PowerShell.Core/About/about_Profiles.md).`, `SwitchParameter`),
        new Parameter(`NoNewWindow`, `Start the new process in the current console window. By default PowerShell opens a new window.


You cannot use the NoNewWindow and WindowStyle parameters in the same command.`, `SwitchParameter`),
        new Parameter(`PassThru`, `Returns a process object for each process that the cmdlet started. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`RedirectStandardError`, `Specifies a file. This cmdlet sends any errors generated by the process to a file that you specify. Enter the path and filename. By default, the errors are displayed in the console.`, `String`),
        new Parameter(`RedirectStandardInput`, `Specifies a file. This cmdlet reads input from the specified file. Enter the path and filename of the input file. By default, the process gets its input from the keyboard.`, `String`),
        new Parameter(`RedirectStandardOutput`, `Specifies a file. This cmdlet sends the output generated by the process to a file that you specify. Enter the path and filename. By default, the output is displayed in the console.`, `String`),
        new Parameter(`UseNewEnvironment`, `Indicates that this cmdlet uses new environment variables specified for the process. By default, the started process runs with the environment variables specified for the computer and user.`, `SwitchParameter`),
        new Parameter(`Verb`, `Specifies a verb to use when this cmdlet starts the process. The verbs that are available are determined by the filename extension of the file that runs in the process.


The following table shows the verbs for some common process file types.


| File type |                Verbs                | | --------- | ----------------------------------- | | .cmd      | Edit, Open, Print, RunAs, RunAsUser | | .exe      | Open, RunAs, RunAsUser              | | .txt      | Open, Print, PrintTo                | | .wav      | Open, Play                          |


To find the verbs that can be used with the file that runs in a process, use the "New-Object" cmdlet to create a System.Diagnostics.ProcessStartInfo object for the file. The available verbs are in the Verbs property of the ProcessStartInfo object. For details, see the examples.`, `String`),
        new Parameter(`Wait`, `Indicates that this cmdlet waits for the specified process and its descendants to complete before accepting more input. This parameter suppresses the command prompt or retains the window until the processes finish.`, `SwitchParameter`),
        new Parameter(`WindowStyle`, `Specifies the state of the window that is used for the new process. The acceptable values for this parameter are: Normal , Hidden , Minimized , and Maximized . The default value is Normal .


You cannot use the WindowStyle and NoNewWindow parameters in the same command.`, `ProcessWindowStyle`),
        new Parameter(`WorkingDirectory`, `Specifies the location of the executable file or document that runs in the process. The default is the folder for the new process.`, `String`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.


This parameter was introduced in PowerShell 6.0.`, `SwitchParameter`),
    ], `Starts one or more processes on the local computer.`, `Start-Process [-FilePath] <String> [[-ArgumentList] <String[]>] [-Credential <PSCredential>] [-LoadUserProfile] [-NoNewWindow] [-PassThru] [-RedirectStandardError <String>] [-RedirectStandardInput <String>] [-RedirectStandardOutput <String>] [-UseNewEnvironment] [-Wait] [-WindowStyle {Normal | Hidden | Minimized | Maximized}] [-WorkingDirectory <String>] [-Confirm] [-WhatIf] [<CommonParameters>]

Start-Process [-FilePath] <String> [[-ArgumentList] <String[]>] [-PassThru] [-Verb <String>] [-Wait] [-WindowStyle {Normal | Hidden | Minimized | Maximized}] [-WorkingDirectory <String>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-Service`, [
        new Parameter(`DisplayName`, `Specifies the display names of the services to start. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Exclude`, `Specifies services that this cmdlet omits. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Include`, `Specifies services that this cmdlet starts. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies ServiceController objects representing the services to be started. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `ServiceController[]`),
        new Parameter(`Name`, `Specifies the service names for the service to be started.


The parameter name is optional. You can use Name or its alias, ServiceName , or you can omit the parameter name.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object that represents the service. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Starts one or more stopped services.`, `Start-Service -DisplayName <String[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Start-Service [-InputObject] <ServiceController[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Start-Service [-Name] <String[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-Sleep`, [
        new Parameter(`Milliseconds`, `Specifies how long the resource sleeps in milliseconds. The parameter can be abbreviated as m .`, `Int32`),
        new Parameter(`Seconds`, `Specifies how long the resource sleeps in seconds. You can omit the parameter name or you can abbreviate it as s . Beginning in PowerShell 6.2.0, this parameter now accepts fractional values.`, `Double`),
    ], `Suspends the activity in a script or session for the specified period of time.`, `Start-Sleep -Milliseconds <Int32> [<CommonParameters>]

Start-Sleep [-Seconds] <Double> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-ThreadJob`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Start-Transcript`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-Computer`, [
        new Parameter(`ComputerName`, `Specifies the computers to stop. The default is the local computer.


Type the NETBIOS name, IP address, or fully qualified domain name of one or more computers in a comma-separated list. To specify the local computer, type the computer name or localhost.


This parameter doesn't rely on PowerShell remoting. You can use the ComputerName parameter even if your computer isn't configured to run remote commands.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`Credential`, `Specifies a user account that has permission to do this action. The default is the current user.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`Force`, `Forces an immediate shut down of the computer.`, `SwitchParameter`),
        new Parameter(`WsmanAuthentication`, `Specifies the mechanism that is used to authenticate the user credentials when this cmdlet uses the WSMan protocol. The default value is Default .


The acceptable values for this parameter are:


- Basic


- CredSSP


- Default


- Digest


- Kerberos


- Negotiate.




For more information about the values of this parameter, see AuthenticationMechanism (/dotnet/api/system.management.automation.runspaces.authenticationmechanism).


> [!CAUTION] > Credential Security Service Provider (CredSSP) authentication, in which the user credentials are > passed to a remote computer to be authenticated, is designed for commands that require > authentication on more than one resource, such as accessing a remote network share. This mechanism > increases the security risk of the remote operation. If the remote computer is compromised, the > credentials that are passed to it can be used to control the network session.

This parameter was introduced in PowerShell 3.0.`, `String`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Stops (shuts down) local and remote computers.`, `Stop-Computer [[-ComputerName] <String[]>] [[-Credential] <PSCredential>] [-Confirm] [-Force] [-WsmanAuthentication {Default | Basic | Negotiate | CredSSP | Digest | Kerberos}] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-Job`, [
        new Parameter(`Filter`, `Specifies a hash table of conditions. This cmdlet stops jobs that satisfy all of the conditions. Enter a hash table where the keys are job properties and the values are job property values.


This parameter works only on custom job types, such as workflow jobs and scheduled jobs. It does not work on standard background jobs, such as those created by using the Start-Job cmdlet. For information about support for this parameter, see the help topic for the job type.


This parameter was introduced in Windows PowerShell 3.0.`, `Hashtable`),
        new Parameter(`Id`, `Specifies the IDs of jobs that this cmdlet stops. The default is all jobs in the current session.


The ID is an integer that uniquely identifies the job in the current session. It is easier to remember and type than the instance ID, but it is unique only in the current session. You can type one or more IDs, separated by commas. To find the ID of a job, type "Get-Job".`, `Int32[]`),
        new Parameter(`InstanceId`, `Specifies the instance IDs of jobs that this cmdlet stops. The default is all jobs.


An instance ID is a GUID that uniquely identifies the job on the computer. To find the instance ID of a job, use Get-Job.`, `Guid[]`),
        new Parameter(`Job`, `Specifies the jobs that this cmdlet stops. Enter a variable that contains the jobs or a command that gets the jobs. You can also use a pipeline operator to submit jobs to the Stop-Job cmdlet. By default, Stop-Job deletes all jobs that were started in the current session.`, `Job[]`),
        new Parameter(`Name`, `Specifies friendly names of jobs that this cmdlet stops. Enter the job names in a comma-separated list or use wildcard characters (*) to enter a job name pattern. By default, Stop-Job stops all jobs created in the current session.


Because the friendly name is not guaranteed to be unique, use the WhatIf and Confirm parameters when stopping jobs by name.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`State`, `Specifies a job state. This cmdlet stops only jobs in the specified state. The acceptable values for this parameter are:


- NotStarted


- Running


- Completed


- Failed


- Stopped


- Blocked


- Suspended


- Disconnected


- Suspending


- Stopping




For more information about job states, see JobState Enumeration (https://msdn.microsoft.com/library/system.management.automation.jobstate)in the MSDN library.`, `JobState`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Stops a PowerShell background job.`, `Stop-Job [-Filter] <Hashtable> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Job [-Id] <Int32[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Job [-InstanceId] <Guid[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Job [-Job] <Job[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Job [-Name] <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Job [-State] {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint} [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-Process`, [
        new Parameter(`Force`, `Stops the specified processes without prompting for confirmation. By default, Stop-Process prompts for confirmation before stopping any process that is not owned by the current user.


To find the owner of a process, use the Get-WmiObject cmdlet to get a Win32_Process object that represents the process, and then use the GetOwner method of the object.`, `SwitchParameter`),
        new Parameter(`Id`, `Specifies the process IDs of the processes to stop. To specify multiple IDs, use commas to separate the IDs. To find the PID of a process, type "Get-Process".`, `Int32[]`),
        new Parameter(`InputObject`, `Specifies the process objects to stop. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `Process[]`),
        new Parameter(`Name`, `Specifies the process names of the processes to stop. You can type multiple process names, separated by commas, or use wildcard characters.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object that represents the process. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Stops one or more running processes.`, `Stop-Process [-Id] <Int32[]> [-Force] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Process [-InputObject] <Process[]> [-Force] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Process [-Force] -Name <String[]> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-Service`, [
        new Parameter(`DisplayName`, `Specifies the display names of the services to stop. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Exclude`, `Specifies services that this cmdlet omits. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as s*. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Force`, `Forces the cmdlet to stop a service even if that service has dependent services.`, `SwitchParameter`),
        new Parameter(`Include`, `Specifies services that this cmdlet stops. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as s*. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies ServiceController objects that represent the services to stop. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `ServiceController[]`),
        new Parameter(`Name`, `Specifies the service names of the services to stop. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`NoWait`, `Indicates that this cmdlet uses the no wait option.`, `SwitchParameter`),
        new Parameter(`PassThru`, `Returns an object that represents the service. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Stops one or more running services.`, `Stop-Service -DisplayName <String[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-NoWait] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Service [-InputObject] <ServiceController[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-NoWait] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Stop-Service [-Name] <String[]> [-Exclude <String[]>] [-Force] [-Include <String[]>] [-NoWait] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Stop-Transcript`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Suspend-Service`, [
        new Parameter(`DisplayName`, `Specifies the display names of the services to be suspended. Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Exclude`, `Specifies services to omit from the specified services. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Include`, `Specifies services to suspend. The value of this parameter qualifies the Name parameter. Enter a name element or pattern, such as "s*". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`InputObject`, `Specifies ServiceController objects that represent the services to suspend. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `ServiceController[]`),
        new Parameter(`Name`, `Specifies the service names of the services to suspend. Wildcard characters are permitted.


The parameter name is optional. You can use Name or its alias, ServiceName , or you can omit the parameter name.`, `String[]`),
        new Parameter(`PassThru`, `Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Suspends (pauses) one or more running services.`, `Suspend-Service -DisplayName <String[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Suspend-Service [-InputObject] <ServiceController[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]

Suspend-Service [-Name] <String[]> [-Exclude <String[]>] [-Include <String[]>] [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Tee-Object`, [
        new Parameter(`Append`, `Indicates that the cmdlet appends the output to the specified file. Without this parameter, the new content replaces any existing content in the file without warning.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`FilePath`, `Specifies a file that this cmdlet saves the object to Wildcard characters are permitted, but must resolve to a single file.`, `String`),
        new Parameter(`InputObject`, `Specifies the object to be saved and displayed. Enter a variable that contains the objects or type a command or expression that gets the objects. You can also pipe an object to "Tee-Object".


When you use the InputObject parameter with "Tee-Object", instead of piping command results to "Tee-Object", the InputObject value is treated as a single object even if the value is a collection.`, `PSObject`),
        new Parameter(`LiteralPath`, `Specifies a file that this cmdlet saves the object to. Unlike FilePath , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String`),
        new Parameter(`Variable`, `Specifies a variable that the cmdlet saves the object to. Enter a variable name without the preceding dollar sign ("$").`, `String`),
    ], `Saves command output in a file or variable and also sends it down the pipeline.`, `Tee-Object [-FilePath] <String> [-Append] [-InputObject <PSObject>] [<CommonParameters>]

Tee-Object [-InputObject <PSObject>] -LiteralPath <String> [<CommonParameters>]

Tee-Object [-InputObject <PSObject>] -Variable <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-Connection`, [
        new Parameter(`BufferSize`, `Specifies the size, in bytes, of the buffer sent with this command. The default value is 32.`, `Int32`),
        new Parameter(`Continues`, `Causes the cmdlet to send ping requests continuously. This parameter can't be used with the Count parameter.`, `SwitchParameter`),
        new Parameter(`Count`, `Specifies the number of echo requests to send. The default value is 4.`, `Int32`),
        new Parameter(`Delay`, `Specifies the interval between pings, in seconds.`, `System.Int32`),
        new Parameter(`DontFragment`, `This parameter sets the Don't Fragment flag in the IP header. You can use this parameter with the BufferSize parameter to test the Path MTU size. For more information about Path MTU, see the Path MTU Discovery (https://wikipedia.org/wiki/Path_MTU_Discovery)article in wikipedia.`, `SwitchParameter`),
        new Parameter(`IPv4`, `Forces the cmdlet to use the IPv4 protocol for the test.`, `SwitchParameter`),
        new Parameter(`IPv6`, `Forces the cmdlet to use the IPv6 protocol for the test.`, `SwitchParameter`),
        new Parameter(`MaxHops`, `Sets the maximum number of hops that an ICMP request message can be sent. The default value is controlled by the operating system. The default value for Windows 10 is 128 hops.`, `Int32`),
        new Parameter(`MTUSizeDetect`, `This parameter is used to discover the Path MTU size. The cmdlet returns a PingReply#MTUSize object that contains the Path MTU size to the target. For more information about Path MTU, see the Path MTU Discovery (https://wikipedia.org/wiki/Path_MTU_Discovery)article in wikipedia.`, `SwitchParameter`),
        new Parameter(`Ping`, `Causes the cmdlet to do a ping test, which is the default action.`, `SwitchParameter`),
        new Parameter(`Quiet`, `The Quiet parameter returns a Boolean value in a System.Boolean object. Using this parameter suppresses all errors.


Each connection that's tested returns a Boolean value. If the TargetName parameter specifies multiple computers, an array of Boolean values is returned.


If any ping succeeds, "$True" is returned.


If all pings fail, "$False" is returned.`, `SwitchParameter`),
        new Parameter(`ResolveDestination`, `Causes the cmdlet to attempt to resolve the DNS name of the target.`, `SwitchParameter`),
        new Parameter(`Source`, `Specifies the names of the computers where the ping originates. Enter a comma-separated list of computer names. The default is the local computer.`, `String`),
        new Parameter(`TargetName`, `Specifies the computers to test. Type the computer names or type IP addresses in IPv4 or IPv6 format. Wildcard characters aren't permitted. This parameter is required. ComputerName is an alias for this parameter.`, `String[]`),
        new Parameter(`TCPPort`, `Specifies the TCP port number on the target to be used in the TCP connection test. The cmdlet will attempt to make a TCP connection to the specified port on the target.`, `Int32`),
        new Parameter(`TimeoutSeconds`, `Sets the timeout value for the test. The test fails if a response isn't received before the timeout expires. The default is five seconds.


This parameter was introduced in PowerShell 6.0.`, `Int32`),
        new Parameter(`Traceroute`, `Causes the cmdlet to do a traceroute test. When this parameter is used, the cmdlet returns a "TestConnectionCommand+TraceRouteResult" object.`, `SwitchParameter`),
    ], `Sends ICMP echo request packets, or pings, to one or more computers.`, `Test-Connection [-TargetName] <String[]> [-BufferSize <Int32>] [-Count <Int32>] [-Delay <System.Int32>] [-DontFragment] [-IPv4] [-IPv6] [-MaxHops <Int32>] [-Ping] [-Quiet] [-ResolveDestination] [-Source <String>] [-TimeoutSeconds <Int32>] [<CommonParameters>]

Test-Connection [-TargetName] <String[]> [-BufferSize <Int32>] [-Continues] [-Delay <System.Int32>] [-DontFragment] [-IPv4] [-IPv6] [-MaxHops <Int32>] [-Ping] [-Quiet] [-ResolveDestination] [-Source <String>] [-TimeoutSeconds <Int32>] [<CommonParameters>]

Test-Connection [-TargetName] <String[]> [-IPv4] [-IPv6] [-MaxHops <Int32>] [-Quiet] [-ResolveDestination] [-Source <String>] [-TimeoutSeconds <Int32>] -Traceroute [<CommonParameters>]

Test-Connection [-TargetName] <String[]> [-IPv4] [-IPv6] -MTUSizeDetect [-Quiet] [-ResolveDestination] [-TimeoutSeconds <Int32>] [<CommonParameters>]

Test-Connection [-TargetName] <String[]> [-IPv4] [-IPv6] [-Quiet] [-ResolveDestination] [-Source <String>] -TCPPort <Int32> [-TimeoutSeconds <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-FileCatalog`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-Json`, [
        new Parameter(`Json`, `Specifies the JSON string to test for validity. Enter a variable that contains the string, or type a command or expression that gets the string. You can also pipe a string to "Test-Json".


The Json parameter is required.`, `String`),
        new Parameter(`Schema`, `Specifies a Schema to validate the JSON input against. If passed "Test-Json" will validate that the Json input conforms to the spec specified by the Schema parameter and return "$True" only if the input conforms to the provided Schema.


For more information, see JSON Schema (https://json-schema.org/).`, `String`),
    ], `Tests whether a string is a valid JSON document`, `Test-Json [-Json] <String> [[-Schema] <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-ModuleManifest`, [
        new Parameter(`Path`, `Specifies a path and file name for the manifest file. Enter an optional path and name of the module manifest file that has the .psd1 file name extension. The default location is the current directory. Wildcard characters are supported, but must resolve to a single module manifest file. This parameter is required. You can also pipe a path to Test-ModuleManifest .`, `String`),
    ], `Verifies that a module manifest file accurately describes the contents of a module.`, `Test-ModuleManifest [-Path] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-Path`, [
        new Parameter(`Credential`, `> [!NOTE] > This parameter is not supported by any providers installed with PowerShell. > To impersonate another user, or elevate your credentials when running this cmdlet, > use Invoke-Command (../Microsoft.PowerShell.Core/Invoke-Command.md).`, `PSCredential`),
        new Parameter(`Exclude`, `Specifies items that this cmdlet omits. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`Filter`, `Specifies a filter in the format or language of the provider. The value of this parameter qualifies the Path parameter. The syntax of the filter, including the use of wildcard characters, depends on the provider. Filters are more efficient than other parameters, because the provider applies them when it retrieves the objects instead of having PowerShell filter the objects after they are retrieved.`, `String`),
        new Parameter(`Include`, `Specifies paths that this cmdlet tests. The value of this parameter qualifies the Path parameter. Enter a path element or pattern, such as "*.txt". Wildcard characters are permitted.`, `String[]`),
        new Parameter(`IsValid`, `Indicates that this cmdlet tests the syntax of the path, regardless of whether the elements of the path exist. This cmdlet returns "$True" if the path syntax is valid and "$False" if it is not.`, `SwitchParameter`),
        new Parameter(`LiteralPath`, `Specifies a path to be tested. Unlike Path , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`NewerThan`, `Specify a time as a DateTime object.`, `DateTime`),
        new Parameter(`OlderThan`, `Specify a time as a DateTime object.`, `DateTime`),
        new Parameter(`Path`, `Specifies a path to be tested. Wildcard characters are permitted. If the path includes spaces, enclose it in quotation marks.`, `String[]`),
        new Parameter(`PathType`, `Specifies the type of the final element in the path. This cmdlet returns "$True" if the element is of the specified type and "$False" if it is not. The acceptable values for this parameter are:


- Container.   An element that contains other elements, such as a directory or registry key. - Leaf.   An element that does not contain other elements, such as a file. - Any.   Either a container or a leaf.


Tells whether the final element in the path is of a particular type.


> [!CAUTION] > > Up to PowerShell version 6.1.2, when the IsValid and PathType switches are > specified together, the "Test-Path" cmdlet ignores the PathType switch and only > validates the syntactic path without validating the path type. > > According to issue #8607 (https://github.com/PowerShell/PowerShell/issues/8607), fixing this > behavior may be a breaking change in a future version, where the IsValid and PathType > switches belong to separate parameter sets, and thus, cannot be used together avoiding this > confusion.`, `TestPathType`),
    ], `Determines whether all elements of a path exist.`, `Test-Path [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] [-IsValid] -LiteralPath <String[]> [-NewerThan <DateTime>] [-OlderThan <DateTime>] [-PathType {Any | Container | Leaf}] [<CommonParameters>]

Test-Path [-Path] <String[]> [-Credential <PSCredential>] [-Exclude <String[]>] [-Filter <String>] [-Include <String[]>] [-IsValid] [-NewerThan <DateTime>] [-OlderThan <DateTime>] [-PathType {Any | Container | Leaf}] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-PSSessionConfigurationFile`, [
        new Parameter(`Path`, `Specifies the path and filename of a session configuration file (.pssc). If you omit the path, the default is the current folder. Wildcard characters are supported, but they must resolve to a single file. You can also pipe a session configuration file path to "Test-PSSessionConfigurationFile".`, `String`),
    ], `Verifies the keys and values in a session configuration file.`, `Test-PSSessionConfigurationFile [-Path] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Test-WSMan`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Trace-Command`, [
        new Parameter(`ArgumentList`, `Specifies the parameters and parameter values for the command being traced. The alias for ArgumentList is Args . This feature is especially useful for debugging dynamic parameters.`, `Object[]`),
        new Parameter(`Command`, `Specifies a command that is being processed during the trace.`, `String`),
        new Parameter(`Debugger`, `Indicates that the cmdlet sends the trace output to the debugger. You can view the output in any user-mode or kernel mode debugger or in Visual Studio. This parameter also selects the default trace listener.`, `SwitchParameter`),
        new Parameter(`Expression`, `Specifies the expression that is being processed during the trace. Enclose the expression in braces ({}).`, `ScriptBlock`),
        new Parameter(`FilePath`, `Specifies a file that the cmdlet sends the trace output to. This parameter also selects the file trace listener.`, `String`),
        new Parameter(`Force`, `Forces the command to run without asking for user confirmation. Used with the FilePath parameter. Even using the Force parameter, the cmdlet cannot override security restrictions.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies input to the expression that is being processed during the trace.


You can enter a variable that represents the input that the expression accepts, or pass an object through the pipeline.`, `PSObject`),
        new Parameter(`ListenerOption`, `Specifies optional data to the prefix of each trace message in the output. The acceptable values for this parameter are:


- None


- LogicalOperationStack


- DateTime


- Timestamp


- ProcessId


- ThreadId


- Callstack




None is the default.

To specify multiple options, separate them with commas, but with no spaces, and enclose them in quotation marks, such as "ProcessID,ThreadID".`, `TraceOptions`),
        new Parameter(`Name`, `Specifies an array of PowerShell components that are traced. Enter the name of the trace source of each component. Wildcards are permitted. To find the trace sources on your computer, type "Get-TraceSource".`, `String[]`),
        new Parameter(`Option`, `Determines the type of events that are traced. The acceptable values for this parameter are:


- None


- Constructor


- Dispose


- Finalizer


- Method


- Property


- Delegates


- Events


- Exception


- Lock


- Error


- Errors


- Warning


- Verbose


- WriteLine


- Data


- Scope


- ExecutionFlow


- Assert


- All




All is the default.


The following values are combinations of other values:


- ExecutionFlow: (Constructor, Dispose, Finalizer, Method, Delegates, Events, and Scope)


- Data: (Constructor, Dispose, Finalizer, Property, Verbose, and WriteLine)


- Errors: (Error and Exception).



To specify multiple options, separate them with commas, but with no spaces, and enclose them in quotation marks, such as "Constructor,Dispose".`, `PSTraceSourceOptions`),
        new Parameter(`PSHost`, `Indicates that the cmdlet sends the trace output to the PowerShell host. This parameter also selects the PSHost trace listener.`, `SwitchParameter`),
    ], `Configures and starts a trace of the specified expression or command.`, `Trace-Command [-Name] <String[]> [-Command] <String> [[-Option] {None | Constructor | Dispose | Finalizer | Method | Property | Delegates | Events | Exception | Lock | Error | Errors | Warning | Verbose | WriteLine | Data | Scope | ExecutionFlow | Assert | All}] [-ArgumentList <Object[]>] [-Debugger] [-FilePath <String>] [-Force] [-InputObject <PSObject>] [-ListenerOption {None | LogicalOperationStack | DateTime | Timestamp | ProcessId | ThreadId | Callstack}] [-PSHost] [<CommonParameters>]

Trace-Command [-Name] <String[]> [-Expression] <ScriptBlock> [[-Option] {None | Constructor | Dispose | Finalizer | Method | Property | Delegates | Events | Exception | Lock | Error | Errors | Warning | Verbose | WriteLine | Data | Scope | ExecutionFlow | Assert | All}] [-Debugger] [-FilePath <String>] [-Force] [-InputObject <PSObject>] [-ListenerOption {None | LogicalOperationStack | DateTime | Timestamp | ProcessId | ThreadId | Callstack}] [-PSHost] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unblock-File`, [
        new Parameter(`LiteralPath`, `Specifies the files to unblock. Unlike Path , the value of the LiteralPath parameter is used exactly as it is typed. No characters are interpreted as wildcards. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Path`, `Specifies the files to unblock. Wildcard characters are supported.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Unblocks files that were downloaded from the Internet.`, `Unblock-File -LiteralPath <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]

Unblock-File [-Path] <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unblock-Tpm`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Uninstall-Package`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unprotect-CmsMessage`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-Event`, [
        new Parameter(`Force`, `Cancels all event subscriptions, including subscriptions that were hidden by using the SupportEvent parameter of Register-ObjectEvent , Register-WmiEvent , and Register-EngineEvent .`, `SwitchParameter`),
        new Parameter(`SourceIdentifier`, `Specifies a source identifier that this cmdlet cancels event subscriptions.


A SourceIdentifier or SubscriptionId parameter must be included in every command.`, `String`),
        new Parameter(`SubscriptionId`, `Specifies a source identifier ID that this cmdlet cancels event subscriptions.


A SourceIdentifier or SubscriptionId parameter must be included in every command.`, `Int32`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Cancels an event subscription.`, `Unregister-Event [-SourceIdentifier] <String> [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]

Unregister-Event [-SubscriptionId] <Int32> [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-PackageSource`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-PSSessionConfiguration`, [
        new Parameter(`Force`, `Indicates that the cmdlet does not prompt you for confirmation, and restarts the WinRM service without prompting. Restarting the service makes the configuration change effective.


To prevent a restart and suppress the restart prompt, use the NoServiceRestart parameter.`, `SwitchParameter`),
        new Parameter(`Name`, `Specifies the names of the session configurations to delete. Enter one session configuration name or a configuration name pattern. Wildcard characters are permitted. This parameter is required.


You can also pipe a session configurations to "Unregister-PSSessionConfiguration".`, `String`),
        new Parameter(`NoServiceRestart`, `Indicates that this cmdlet does not restart the WinRM service, and suppresses the prompt to restart the service.


By default, when you run an "Unregister-PSSessionConfiguration" command, you are prompted to restart the WinRM service to make the change effective. Until the WinRM service is restarted, users can still use the unregistered session configuration, even though "Get-PSSessionConfiguration" does not find it.


To restart the WinRM service without prompting, specify the Force parameter. To restart the WinRM service manually, use the "Restart-Service" cmdlet.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Deletes registered session configurations from the computer.`, `Unregister-PSSessionConfiguration [-Name] <String> [-Force] [-NoServiceRestart] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Unregister-WindowsDeveloperLicense`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-FormatData`, [
        new Parameter(`AppendPath`, `Specifies formatting files that this cmdlet adds to the session. The files are loaded after PowerShell loads the built-in formatting files.


When formatting .NET objects, PowerShell uses the first formatting definition that it finds for each .NET type. If you use the AppendPath parameter, PowerShell searches the data from the built-in files before it encounters the formatting data that you are adding.


Use this parameter to add a file that formats a .NET object that is not referenced in the built-in formatting files.`, `String[]`),
        new Parameter(`PrependPath`, `Specifies formatting files that this cmdlet adds to the session. The files are loaded before PowerShell loads the built-in formatting files.


When formatting .NET objects, PowerShell uses the first formatting definition that it finds for each .NET type. If you use the PrependPath parameter, PowerShell searches the data from the files that you are adding before it encounters the formatting data from the built-in files.


Use this parameter to add a file that formats a .NET object that is also referenced in the built-in formatting files.`, `String[]`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Updates the formatting data in the current session.`, `Update-FormatData [[-AppendPath] <String[]>] [-PrependPath <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-Help`, [
        new Parameter(`Credential`, `Specifies credentials of a user who has permission to access the file system location specified by SourcePath . This parameter is valid only when the SourcePath or LiteralPath parameter is used in the command.


The Credential parameter enables you to run "Update-Help" commands with the SourcePath parameter on remote computers. By providing explicit credentials, you can run the command on a remote computer and access a file share on a third computer without encountering an access denied error or using CredSSP authentication to delegate credentials.


Type a user name, such as User01 or Domain01\\User01 , or enter a PSCredential object generated by the "Get-Credential" cmdlet. If you type a user name, you're prompted to enter the password.


Credentials are stored in a PSCredential (/dotnet/api/system.management.automation.pscredential)object and the password is stored as a SecureString (/dotnet/api/system.security.securestring).


> [!NOTE] > For more information about SecureString data protection, see > How secure is SecureString? (/dotnet/api/system.security.securestring#how-secure-is-securestring).`, `PSCredential`),
        new Parameter(`Force`, `Indicates that this cmdlet doesn't follow the once-per-day limitation, skips version checking, and downloads files that exceed the 1 GB limit.


Without this parameter, "Update-Help" runs only once in each 24-hour period. Downloads are limited to 1 GB of uncompressed content per module and help files are only installed when they're newer than the existing files on the computer.


The once-per-day limit protects the servers that host the help files and makes it practical for you to add an "Update-Help" command to your PowerShell profile without incurring the resource cost of repeated connections or downloads.


To update help for a module in multiple UI cultures without the Force parameter, include all UI cultures in the same command, such as:


"Update-Help -Module PSScheduledJobs -UICulture en-US, fr-FR, pt-BR"`, `SwitchParameter`),
        new Parameter(`FullyQualifiedModule`, `Specifies modules with names that are specified in the form of ModuleSpecification objects. These modules are described in the Remarks section of ModuleSpecification Constructor (Hashtable) (/dotnet/api/microsoft.powershell.commands.modulespecification.-ctor?view=powershellsdk-1.1.0#Microsoft_PowerShell_Commands_ModuleSpecification__ctor_System_Collections_Hashtable_).


For example, the FullyQualifiedModule parameter accepts a module name that is specified in the format:


"@{ModuleName = "modulename"; ModuleVersion = "version_number"}"


or


"@{ModuleName = "modulename"; ModuleVersion = "version_number"; Guid = "GUID"}." ModuleName and ModuleVersion are required, but Guid is optional.


You can't specify the FullyQualifiedModule parameter in the same command as a Module parameter.`, `ModuleSpecification[]`),
        new Parameter(`LiteralPath`, `Specifies the folder for updated help files instead of downloading them from the internet. Use this parameter or SourcePath if you've used the "Save-Help" cmdlet to download help files to a directory.


You can pipeline a directory object, such as from the "Get-Item" or "Get-ChildItem" cmdlets, to "Update-Help".


Unlike the value of SourcePath , the value of LiteralPath is used exactly as it's typed. No characters are interpreted as wildcard characters. If the path includes escape characters, enclose it in single quotation marks. Single quotation marks tell PowerShell not to interpret any characters as escape sequences.`, `String[]`),
        new Parameter(`Module`, `Updates help for the specified modules. Enter one or more module names or name patterns in a comma-separated list, or specify a file that lists one module name on each line. Wildcard characters are permitted. You can pipeline modules from the "Get-Module" cmdlet to the "Update-Help" cmdlet.


The modules that you specify must be installed on the computer, but they don't have to be imported into the current session. You can specify any module in the session or any module that is installed in a location listed in the "$env:PSModulePath" environment variable.


A value of "*" (all) attempts to update help for all modules that are installed on the computer. Modules that don't support Updatable Help are included. This value might generate errors when the command encounters modules that don't support Updatable Help. Instead, run "Update-Help" without parameters.


The Module parameter of the "Update-Help" cmdlet doesn't accept the full path of a module file or module manifest file. To update help for a module that isn't in a "$env:PSModulePath" location, import the module into the current session before you run the "Update-Help" command.`, `String[]`),
        new Parameter(`Recurse`, `Performs a recursive search for help files in the specified directory. This parameter is valid only when the command uses the SourcePath parameter.`, `SwitchParameter`),
        new Parameter(`Scope`, `Specifies the system scope where help is updated. Updates at the AllUsers scope require administrative privileges on Windows systems. The "-Scope" parameter was introduced in PowerShell Core version 6.1. CurrentUser is the default scope for help files in PowerShell 6.1 and above. AllUsers can be specified to install or update help for all users. On Unix systems "sudo" privileges are required to update help for all users. For example: "sudo pwsh -c Update-Help"


The acceptable values are:


- CurrentUser


- AllUsers`, `UpdateHelpScope`),
        new Parameter(`SourcePath`, `Specifies a file system folder where "Update-Help" gets updated help files, instead of downloading them from the internet. Enter the path of a folder. Don't specify a file name or file name extension. You can pipeline a folder, such as one from the "Get-Item" or "Get-ChildItem" cmdlets, to "Update-Help".


By default, "Update-Help" downloads updated help files from the internet. Use SourcePath when you've used the "Save-Help" cmdlet to download updated help files to a directory.


To specify a default value for SourcePath , go to Group Policy , Computer Configuration , and Set the default source path for Update-Help . This Group Policy setting prevents users from using "Update-Help" to download help files from the internet. For more information, see about_Group_Policy_Settings (./About/about_Group_Policy_Settings.md).`, `String[]`),
        new Parameter(`UICulture`, `Specifies UI culture values that "Update-Help" uses to get updated help files. Enter one or more language codes, such as es-ES , a variable that contains culture objects, or a command that gets culture objects, such as a "Get-Culture" or "Get-UICulture" command. Wildcard characters aren't permitted and you can't submit a partial language code, such as de .


By default, "Update-Help" gets help files in the UI culture set for the operating system. If you specify the UICulture parameter, "Update-Help" looks for help only for the specified UI culture.


Commands that use the UICulture parameter succeed only when the module provides help files for the specified UI culture. If the command fails because the specified UI culture isn't supported, an error message is displayed.`, `CultureInfo[]`),
        new Parameter(`UseDefaultCredentials`, `Indicates that "Update-Help" runs the command, including the internet download, by using the credentials of the current user. By default, the command runs without explicit credentials.


This parameter is effective only when the web download uses NT LAN Manager (NTLM), negotiate, or Kerberos-based authentication.`, `SwitchParameter`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet isn't run.`, `SwitchParameter`),
    ], `Downloads and installs the newest help files on your computer.`, `Update-Help [[-Module] <String[]>] [[-UICulture] <CultureInfo[]>] [-Credential <PSCredential>] [-Force] [-FullyQualifiedModule <ModuleSpecification[]>] [-LiteralPath <String[]>] [-Recurse] [-Scope <UpdateHelpScope>] [-UseDefaultCredentials] [-Confirm] [-WhatIf] [<CommonParameters>]

Update-Help [[-Module] <String[]>] [[-SourcePath] <String[]>] [[-UICulture] <CultureInfo[]>] [-Credential <PSCredential>] [-Force] [-FullyQualifiedModule <ModuleSpecification[]>] [-Recurse] [-Scope <UpdateHelpScope>] [-UseDefaultCredentials] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-TypeData`, [
        new Parameter(`AppendPath`, `Specifies the path to optional .ps1xml files. The specified files are loaded in the order that they are listed after the built-in files are loaded. You can also pipe an AppendPath value to Update-TypeData .`, `String[]`),
        new Parameter(`DefaultDisplayProperty`, `Specifies the property of the type that is displayed by the Format-Wide cmdlet when no other properties are specified.


Type the name of a standard or extended property of the type. The value of this parameter can be the name of a type that is added in the same command.


This value is effective only when there are no wide views defined for the type in a Format.ps1xml file.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`DefaultDisplayPropertySet`, `Specifies one or more properties of the type. These properties are displayed by the Format-List cmdlet when no other properties are specified.


Type the names of standard or extended properties of the type. The value of this parameter can be the names of types that are added in the same command.


This value is effective only when there are no list views defined for the type in a Format.ps1xml file.


This parameter was introduced in Windows PowerShell 3.0.`, `String[]`),
        new Parameter(`DefaultKeyPropertySet`, `Specifies one or more properties of the type. These properties are used by the Group-Object and Sort-Object cmdlets when no other properties are specified.


Type the names of standard or extended properties of the type. The value of this parameter can be the names of types that are added in the same command.


This parameter was introduced in Windows PowerShell 3.0.`, `String[]`),
        new Parameter(`Force`, `Indicates that the cmdlet uses the specified type data, even if type data has already been specified for that type.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`InheritPropertySerializationSet`, `Indicates whether the set of properties that are serialized is inherited. The default value is $Null. The acceptable values for this parameter are:


- $True. The property set is inherited. - $False. The property set is not inherited. - $Null. Inheritance is not defined.


This parameter is valid only when the value of the SerializationMethod parameter is SpecificProperties. When the value of this parameter is $False, the PropertySerializationSet parameter is required.


This parameter was introduced in Windows PowerShell 3.0.`, `Boolean`),
        new Parameter(`MemberName`, `Specifies the name of a property or method.


Use this parameter with the TypeName , MemberType , Value and SecondValue parameters to add or change a property or method of a type.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`MemberType`, `Specifies the type of the member to add or change.


Use this parameter with the TypeName , MemberType , Value and SecondValue parameters to add or change a property or method of a type. The acceptable values for this parameter are:


- AliasProperty


- CodeMethod


- CodeProperty


- Noteproperty


- ScriptMethod


- ScriptProperty




For information about these values, see PSMemberTypes Enumeration (https://msdn.microsoft.com/library/system.management.automation.psmembertypes)in the MSDN library.

This parameter was introduced in Windows PowerShell 3.0.`, `PSMemberTypes`),
        new Parameter(`PrependPath`, `Specifies the path to the optional .ps1xml files. The specified files are loaded in the order that they are listed before the built-in files are loaded.`, `String[]`),
        new Parameter(`PropertySerializationSet`, `Specifies the names of properties that are serialized. Use this parameter when the value of the SerializationMethod parameter is SpecificProperties .`, `String[]`),
        new Parameter(`SecondValue`, `Specifies additional values for AliasProperty , ScriptProperty , CodeProperty , or CodeMethod members.


Use this parameter with the TypeName , MemberType , Value , and SecondValue parameters to add or change a property or method of a type.


When the value of the MemberType parameter is AliasProperty, the value of the SecondValue parameter must be a data type. PowerShell converts (that is, casts) the value of the alias property to the specified type. For example, if you add an alias property that provides an alternate name for a string property, you can also specify a SecondValue of System.Int32 to convert the aliased string value to an integer.


When the value of the MemberType parameter is ScriptProperty, you can use the SecondValue parameter to specify an additional script block. The script block in the value of the Value parameter gets the value of a variable. The script block in the value of the SecondValue parameter set the value of the variable.


This parameter was introduced in Windows PowerShell 3.0.`, `Object`),
        new Parameter(`SerializationDepth`, `Specifies how many levels of type objects are serialized as strings. The default value, 1, serializes the object and its properties. A value of 0 serializes the object, but not its properties. A value of 2 serializes the object, its properties, and any objects in property values.


This parameter was introduced in Windows PowerShell 3.0.`, `Int32`),
        new Parameter(`SerializationMethod`, `Specifies a serialization method for the type. A serialization method determines which properties of the type are serialized and the technique that is used to serialize them. The acceptable values for this parameter are:


- AllPublicProperties. Serialize all public properties of the type. You can use the SerializationDepth parameter to determine whether child properties are serialized. - String. Serialize the type as a string. You can use the StringSerializationSource to specify a property of the type to use as the serialization result. Otherwise, the type is serialized by using the ToString method of the object. - SpecificProperties. Serialize only the specified properties of this type. Use the PropertySerializationSet parameter to specify the properties of the type that are serialized. You can also use the InheritPropertySerializationSet parameter to determine whether the property set is inherited and the SerializationDepth parameter to determine whether child properties are serialized.


In PowerShell, serialization methods are stored in PSStandardMembers internal objects.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`StringSerializationSource`, `Specifies the name of a property of the type. The value of specified property is used as the serialization result. This parameter is valid only when the value of the SerializationMethod parameter is String.`, `String`),
        new Parameter(`TargetTypeForDeserialization`, `Specifies the type to which object of this type are converted when they are deserialized.


This parameter was introduced in Windows PowerShell 3.0.`, `Type`),
        new Parameter(`TypeAdapter`, `Specifies the type of a type adapter, such as Microsoft.PowerShell.Cim.CimInstanceAdapter . A type adapter enables PowerShell to get the members of a type.


This parameter was introduced in Windows PowerShell 3.0.`, `Type`),
        new Parameter(`TypeConverter`, `Specifies a type converter to convert values between different types. If a type converter is defined for a type, an instance of the type converter is used for the conversion.


Enter a System.Type value that is derived from the System.ComponentModel.TypeConverter or System.Management.Automation.PSTypeConverter classes.


This parameter was introduced in Windows PowerShell 3.0.`, `Type`),
        new Parameter(`TypeData`, `Specifies an array of type data that this cmdlet adds to the session. Enter a variable that contains a TypeData object or a command that gets a TypeData object, such as a Get-TypeData command. You can also pipe a TypeData object to Update-TypeData .


This parameter was introduced in Windows PowerShell 3.0.`, `TypeData[]`),
        new Parameter(`TypeName`, `Specifies the name of the type to extend.


For types in the System namespace, enter the short name. Otherwise, the full type name is required. Wildcards are not supported.


You can pipe type names to Update-TypeData . When you pipe an object to Update-TypeData , Update-TypeData gets the type name of the object and type data to the object type.


Use this parameter with the MemberName , MemberType , Value and SecondValue parameters to add or change a property or method of a type.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`Value`, `Specifies the value of the property or method.


If you add an AliasProperty, CodeProperty, ScriptProperty, or CodeMethod member, you can use the SecondValue parameter to add additional information.


Use this parameter with the MemberName , MemberType , Value and SecondValue parameters to add or change a property or method of a type.


This parameter was introduced in Windows PowerShell 3.0.`, `Object`),
        new Parameter(`Confirm`, `Prompts you for confirmation before running the cmdlet.`, `SwitchParameter`),
        new Parameter(`WhatIf`, `Shows what would happen if the cmdlet runs. The cmdlet is not run.`, `SwitchParameter`),
    ], `Updates the extended type data in the session.`, `Update-TypeData [[-AppendPath] <String[]>] [-PrependPath <String[]>] [-Confirm] [-WhatIf] [<CommonParameters>]

Update-TypeData [-DefaultDisplayProperty <String>] [-DefaultDisplayPropertySet <String[]>] [-DefaultKeyPropertySet <String[]>] [-Force] [-InheritPropertySerializationSet <Boolean>] [-MemberName <String>] [-MemberType {NoteProperty | AliasProperty | ScriptProperty | CodeProperty | ScriptMethod | CodeMethod}] [-PropertySerializationSet <String[]>] [-SecondValue <Object>] [-SerializationDepth <Int32>] [-SerializationMethod <String>] [-StringSerializationSource <String>] [-TargetTypeForDeserialization <Type>] [-TypeAdapter <Type>] [-TypeConverter <Type>] -TypeName <String> [-Value <Object>] [-Confirm] [-WhatIf] [<CommonParameters>]

Update-TypeData [-TypeData] <TypeData[]> [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Update-WIMBootEntry`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Use-WindowsUnattend`, [], `See help file for details.`, ``, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Wait-Debugger`, [], `Stops a script in the debugger before running the next statement in the script.`, `Wait-Debugger [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Wait-Event`, [
        new Parameter(`SourceIdentifier`, `Specifies the source identifier that this cmdlet waits for events. By default, Wait-Event waits for any event.`, `String`),
        new Parameter(`Timeout`, `Specifies the maximum time, in seconds, that Wait-Event waits for the event to occur. The default, -1, waits indefinitely. The timing starts when you submit the Wait-Event command.


If the specified time is exceeded, the wait ends and the command prompt returns, even if the event has not been raised. No error message is displayed.`, `Int32`),
    ], `Waits until a particular event is raised before continuing to run.`, `Wait-Event [[-SourceIdentifier] <String>] [-Timeout <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Wait-Job`, [
        new Parameter(`Any`, `Indicates that this cmdlet displays the command prompt, and returns the job object, when any job finishes. By default, Wait-Job waits until all of the specified jobs are complete before it displays the prompt.`, `SwitchParameter`),
        new Parameter(`Filter`, `Specifies a hash table of conditions. This cmdlet waits for jobs that satisfy all of the conditions in the hash table. Enter a hash table where the keys are job properties and the values are job property values.


This parameter works only on custom job types, such as workflow jobs and scheduled jobs. It does not work on standard background jobs, such as those created by using the Start-Job cmdlet. For information about support for this parameter, see the help topic for the job type.


This parameter was introduced in Windows PowerShell 3.0.`, `Hashtable`),
        new Parameter(`Force`, `Indicates that this cmdlet continues to wait for jobs in the Suspended or Disconnected state. By default, Wait-Job returns, or ends  the wait, when jobs are in one of the following states:


- Completed


- Failed


- Stopped


- Suspended


- Disconnected




This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Id`, `Specifies an array of IDs of jobs for which this cmdlet waits.


The ID is an integer that uniquely identifies the job in the current session. It is easier to remember and type than the instance ID, but it is unique only in the current session. You can type one or more IDs, separated by commas. To find the ID of a job, type "Get-Job".`, `Int32[]`),
        new Parameter(`InstanceId`, `Specifies an array of instance IDs of jobs for which this cmdlet waits. The default is all jobs.


An instance ID is a GUID that uniquely identifies the job on the computer. To find the instance ID of a job, use Get-Job .`, `Guid[]`),
        new Parameter(`Job`, `Specifies the jobs for which this cmdlet waits. Enter a variable that contains the job objects or a command that gets the job objects. You can also use a pipeline operator to send job objects to the Wait-Job cmdlet. By default, Wait-Job waits for all jobs created in the current session.`, `Job[]`),
        new Parameter(`Name`, `Specifies friendly names of jobs for which this cmdlet waits.`, `String[]`),
        new Parameter(`State`, `Specifies a job state. This cmdlet waits only for jobs in the specified state. The acceptable values for this parameter are:


- NotStarted


- Running


- Completed


- Failed


- Stopped


- Blocked


- Suspended


- Disconnected


- Suspending


- Stopping




For more information about job states, see JobState Enumeration (https://msdn.microsoft.com/library/system.management.automation.jobstate)in the MSDN library.`, `JobState`),
        new Parameter(`Timeout`, `Specifies the maximum wait time for each background job, in seconds. The default value, -1, indicates that the cmdlet waits until the job finishes. The timing starts when you submit the Wait-Job command, not the Start-Job command.


If this time is exceeded, the wait ends and the command prompt returns, even if the job is still running. The command does not display any error message.`, `Int32`),
    ], `Suppresses the command prompt until one or all of the PowerShell background jobs running in the session are completed.`, `Wait-Job [-Filter] <Hashtable> [-Any] [-Force] [-Timeout <Int32>] [<CommonParameters>]

Wait-Job [-Id] <Int32[]> [-Any] [-Force] [-Timeout <Int32>] [<CommonParameters>]

Wait-Job [-InstanceId] <Guid[]> [-Any] [-Force] [-Timeout <Int32>] [<CommonParameters>]

Wait-Job [-Job] <Job[]> [-Any] [-Force] [-Timeout <Int32>] [<CommonParameters>]

Wait-Job [-Name] <String[]> [-Any] [-Force] [-Timeout <Int32>] [<CommonParameters>]

Wait-Job [-State] {NotStarted | Running | Completed | Failed | Stopped | Blocked | Suspended | Disconnected | Suspending | Stopping | AtBreakpoint} [-Any] [-Force] [-Timeout <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Wait-Process`, [
        new Parameter(`Id`, `Specifies the process IDs of the processes. To specify multiple IDs, use commas to separate the IDs. To find the PID of a process, type "Get-Process".`, `Int32[]`),
        new Parameter(`InputObject`, `Specifies the processes by submitting process objects. Enter a variable that contains the process objects, or type a command or expression that gets the process objects, such as the Get-Process cmdlet.`, `Process[]`),
        new Parameter(`Name`, `Specifies the process names of the processes. To specify multiple names, use commas to separate the names. Wildcard characters are not supported.`, `String[]`),
        new Parameter(`Timeout`, `Specifies the maximum time, in seconds, that this cmdlet waits for the specified processes to stop. When this interval expires, the command displays a non-terminating error that lists the processes that are still running, and ends the wait. By default, there is no time-out.`, `Int32`),
    ], `Waits for the processes to be stopped before accepting more input.`, `Wait-Process [-Id] <Int32[]> [[-Timeout] <Int32>] [<CommonParameters>]

Wait-Process [[-Timeout] <Int32>] -InputObject <Process[]> [<CommonParameters>]

Wait-Process [-Name] <String[]> [[-Timeout] <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Where-Object`, [
        new Parameter(`CContains`, `Indicates that this cmdlet gets objects from a collection if the property value of the object is an exact match for the specified value. This operation is case-sensitive.


For example: "Get-Process | where ProcessName -CContains "svchost"" CContains refers to a collection of values and is true if the collection contains an item that is an exact match for the specified value. If the input is a single object, PowerShell converts it to a collection of one object.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CEQ`, `Indicates that this cmdlet gets objects if the property value is the same as the specified value. This operation is case-sensitive.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CGE`, `Indicates that this cmdlet gets objects if the property value is greater than or equal to the specified value. This operation is case-sensitive.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CGT`, `Indicates that this cmdlet gets objects if the property value is greater than the specified value. This operation is case-sensitive.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CIn`, `Indicates that this cmdlet gets objects if the property value includes the specified value. This operation is case-sensitive.


For example: "Get-Process | where -Value "svchost" -CIn ProcessName" CIn resembles CContains , except that the property and value positions are reversed. For example, the following statements are both true.


"abc", "def" -CContains "abc"


"abc" -CIn "abc", "def"


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CLE`, `Indicates that this cmdlet gets objects if the property value is less-than or equal to the specified value. This operation is case-sensitive.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CLike`, `Indicates that this cmdlet gets objects if the property value matches a value that includes wildcard characters. This operation is case-sensitive.


For example: "Get-Process | where ProcessName -CLike "*host""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CLT`, `Indicates that this cmdlet gets objects if the property value is less-than the specified value. This operation is case-sensitive.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CMatch`, `Indicates that this cmdlet gets objects if the property value matches the specified regular expression. This operation is case-sensitive. When the input is scalar, the matched value is saved in "$Matches" automatic variable.


For example: "Get-Process | where ProcessName -CMatch "Shell""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CNE`, `Indicates that this cmdlet gets objects if the property value is different than the specified value. This operation is case-sensitive.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CNotContains`, `Indicates that this cmdlet gets objects if the property value of the object is not an exact match for the specified value. This operation is case-sensitive.


For example: "Get-Process | where ProcessName -CNotContains "svchost""


"NotContains" and "CNotContains refer to a collection of values and are true when the collection does not contains any items that are an exact match for the specified value. If the input is a single object, PowerShell converts it to a collection of one object.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CNotIn`, `Indicates that this cmdlet gets objects if the property value is not an exact match for the specified value. This operation is case-sensitive.


For example: "Get-Process | where -Value "svchost" -CNotIn -Property ProcessName" NotIn and CNotIn operators resemble NotContains and CNotContains , except that the property and value positions are reversed. For example, the following statements are true.


"abc", "def" -CNotContains "Abc"


"abc" -CNotIn "Abc", "def"`, `SwitchParameter`),
        new Parameter(`CNotLike`, `Indicates that this cmdlet gets objects if the property value does not match a value that includes wildcard characters. This operation is case-sensitive.


For example: "Get-Process | where ProcessName -CNotLike "*host""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`CNotMatch`, `Indicates that this cmdlet gets objects if the property value does not match the specified regular expression. This operation is case-sensitive. When the input is scalar, the matched value is saved in "$Matches" automatic variable.


For example: "Get-Process | where ProcessName -CNotMatch "Shell""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Contains`, `Indicates that this cmdlet gets objects if any item in the property value of the object is an exact match for the specified value.


For example: "Get-Process | where ProcessName -Contains "Svchost""


If the property value contains a single object, PowerShell converts it to a collection of one object.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`EQ`, `Indicates that this cmdlet gets objects if the property value is the same as the specified value.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`FilterScript`, `Specifies the script block that is used to filter the objects. Enclose the script block in braces ( {} ).


The parameter name, FilterScript , is optional.`, `ScriptBlock`),
        new Parameter(`GE`, `Indicates that this cmdlet gets objects if the property value is greater than or equal to the specified value.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`GT`, `Indicates that this cmdlet gets objects if the property value is greater than the specified value.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`In`, `Indicates that this cmdlet gets objects if the property value matches any of the specified values.


For example: "Get-Process | where -Property ProcessName -in -Value "Svchost", "TaskHost", "WsmProvHost""


If the value of the Value parameter is a single object, PowerShell converts it to a collection of one object.


If the property value of an object is an array, PowerShell uses reference equality to determine a match. "Where-Object" returns the object only if the value of the Property parameter and any value of Value are the same instance of an object.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`InputObject`, `Specifies the objects to be filtered. You can also pipe the objects to "Where-Object".


When you use the InputObject parameter with "Where-Object", instead of piping command results to "Where-Object", the InputObject value is treated as a single object. This is true even if the value is a collection that is the result of a command, such as "-InputObject (Get-Process)". Because InputObject cannot return individual properties from an array or collection of objects, we recommend that, if you use "Where-Object" to filter a collection of objects for those objects that have specific values in defined properties, you use "Where-Object" in the pipeline, as shown in the examples in this topic.`, `PSObject`),
        new Parameter(`Is`, `Indicates that this cmdlet gets objects if the property value is an instance of the specified .NET Framework type. Enclose the type name in square brackets.


For example, "Get-Process | where StartTime -Is [DateTime]"


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`IsNot`, `Indicates that this cmdlet gets objects if the property value is not an instance of the specified .NET Framework type.


For example, "Get-Process | where StartTime -IsNot [DateTime]"


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`LE`, `Indicates that this cmdlet gets objects if the property value is less than or equal to the specified value.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Like`, `Indicates that this cmdlet gets objects if the property value matches a value that includes wildcard characters.


For example: "Get-Process | where ProcessName -Like "*host""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`LT`, `Indicates that this cmdlet gets objects if the property value is less than the specified value.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Match`, `Indicates that this cmdlet gets objects if the property value matches the specified regular expression. When the input is scalar, the matched value is saved in "$Matches" automatic variable.


For example: "Get-Process | where ProcessName -Match "shell""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`NE`, `Indicates that this cmdlet gets objects if the property value is different than the specified value.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Not`, `Indicates that this cmdlet gets objects if the property does not exist or has a value of null or false.


For example: "Get-Service | where -Not "DependentServices""


This parameter was introduced in Windows PowerShell 6.1.`, `SwitchParameter`),
        new Parameter(`NotContains`, `Indicates that this cmdlet gets objects if none of the items in the property value is an exact match for the specified value.


For example: "Get-Process | where ProcessName -NotContains "Svchost"" NotContains refers to a collection of values and is true if the collection does not contain any items that are an exact match for the specified value. If the input is a single object, PowerShell converts it to a collection of one object.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`NotIn`, `Indicates that this cmdlet gets objects if the property value is not an exact match for any of the specified values.


For example: "Get-Process | where -Value "svchost" -NotIn -Property ProcessName"


If the value of Value is a single object, PowerShell converts it to a collection of one object.


If the property value of an object is an array, PowerShell uses reference equality to determine a match. "Where-Object" returns the object only if the value of Property and any value of Value are not the same instance of an object.


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`NotLike`, `Indicates that this cmdlet gets objects if the property value does not match a value that includes wildcard characters.


For example: "Get-Process | where ProcessName -NotLike "*host""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`NotMatch`, `Indicates that this cmdlet gets objects when the property value does not match the specified regular expression. When the input is scalar, the matched value is saved in "$Matches" automatic variable.


For example: "Get-Process | where ProcessName -NotMatch "PowerShell""


This parameter was introduced in Windows PowerShell 3.0.`, `SwitchParameter`),
        new Parameter(`Property`, `Specifies the name of an object property.


The parameter name, Property , is optional.


This parameter was introduced in Windows PowerShell 3.0.`, `String`),
        new Parameter(`Value`, `Specifies a property value. The parameter name, Value , is optional. This parameter accepts wildcard characters when used with the following comparison parameters:


- CLike - CNotLike - Like - NotLike This parameter was introduced in Windows PowerShell 3.0.`, `Object`),
    ], `Selects objects from a collection based on their property values.`, `Where-Object [-Property] <String> [[-Value] <Object>] -CContains [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CEQ [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CGE [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CGT [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CIn [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CLE [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CLike [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CLT [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CMatch [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CNE [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CNotContains [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CNotIn [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CNotLike [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -CNotMatch [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -Contains [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-EQ] [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-FilterScript] <ScriptBlock> [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -GE [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -GT [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] -In [-InputObject <PSObject>] [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -Is [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -IsNot [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -LE [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -Like [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -LT [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -Match [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -NE [<CommonParameters>]

Where-Object [-InputObject <PSObject>] -Not [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -NotContains [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -NotIn [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -NotLike [<CommonParameters>]

Where-Object [-Property] <String> [[-Value] <Object>] [-InputObject <PSObject>] -NotMatch [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Debug`, [
        new Parameter(`Message`, `Specifies the debug message to send to the console.`, `String`),
    ], `Writes a debug message to the console.`, `Write-Debug [-Message] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Error`, [
        new Parameter(`Category`, `Specifies the category of the error. The default value is NotSpecified . The acceptable values for this parameter are:


- NotSpecified


- OpenError


- CloseError


- DeviceError


- DeadlockDetected


- InvalidArgument


- InvalidData


- InvalidOperation


- InvalidResult


- InvalidType


- MetadataError


- NotImplemented


- NotInstalled


- ObjectNotFound


- OperationStopped


- OperationTimeout


- SyntaxError


- ParserError


- PermissionDenied


- ResourceBusy


- ResourceExists


- ResourceUnavailable


- ReadError


- WriteError


- FromStdErr


- SecurityError


- ProtocolError


- ConnectionError


- AuthenticationError


- LimitsExceeded


- QuotaExceeded


- NotEnabled




For information about the error categories, see ErrorCategory Enumeration (https://go.microsoft.com/fwlink/?LinkId=143600).`, `ErrorCategory`),
        new Parameter(`CategoryActivity`, `Specifies the action that caused the error.`, `String`),
        new Parameter(`CategoryReason`, `Specifies how or why the activity caused the error.`, `String`),
        new Parameter(`CategoryTargetName`, `Specifies the name of the object that was being processed when the error occurred.`, `String`),
        new Parameter(`CategoryTargetType`, `Specifies the type of the object that was being processed when the error occurred.`, `String`),
        new Parameter(`ErrorId`, `Specifies an ID string to identify the error. The string should be unique to the error.`, `String`),
        new Parameter(`ErrorRecord`, `Specifies an error record object that represents the error. Use the properties of the object to describe the error.


To create an error record object, use the "New-Object" cmdlet or get an error record object from the array in the "$Error" automatic variable.`, `ErrorRecord`),
        new Parameter(`Exception`, `Specifies an exception object that represents the error. Use the properties of the object to describe the error.


To create an exception object, use a hash table or use the "New-Object" cmdlet.`, `Exception`),
        new Parameter(`Message`, `Specifies the message text of the error. If the text includes spaces or special characters, enclose it in quotation marks. You can also pipe a message string to "Write-Error".`, `String`),
        new Parameter(`RecommendedAction`, `Specifies the action that the user should take to resolve or prevent the error.`, `String`),
        new Parameter(`TargetObject`, `Specifies the object that was being processed when the error occurred. Enter the object, a variable that contains the object, or a command that gets the object.`, `Object`),
    ], `Writes an object to the error stream.`, `Write-Error [-Message] <String> [-Category {NotSpecified | OpenError | CloseError | DeviceError | DeadlockDetected | InvalidArgument | InvalidData | InvalidOperation | InvalidResult | InvalidType | MetadataError | NotImplemented | NotInstalled | ObjectNotFound | OperationStopped | OperationTimeout | SyntaxError | ParserError | PermissionDenied | ResourceBusy | ResourceExists | ResourceUnavailable | ReadError | WriteError | FromStdErr | SecurityError | ProtocolError | ConnectionError | AuthenticationError | LimitsExceeded | QuotaExceeded | NotEnabled}] [-CategoryActivity <String>] [-CategoryReason <String>] [-CategoryTargetName <String>] [-CategoryTargetType <String>] [-ErrorId <String>] [-RecommendedAction <String>] [-TargetObject <Object>] [<CommonParameters>]

Write-Error [-Message] <String> [-Category {NotSpecified | OpenError | CloseError | DeviceError | DeadlockDetected | InvalidArgument | InvalidData | InvalidOperation | InvalidResult | InvalidType | MetadataError | NotImplemented | NotInstalled | ObjectNotFound | OperationStopped | OperationTimeout | SyntaxError | ParserError | PermissionDenied | ResourceBusy | ResourceExists | ResourceUnavailable | ReadError | WriteError | FromStdErr | SecurityError | ProtocolError | ConnectionError | AuthenticationError | LimitsExceeded | QuotaExceeded | NotEnabled}] [-CategoryActivity <String>] [-CategoryReason <String>] [-CategoryTargetName <String>] [-CategoryTargetType <String>] [-ErrorId <String>] -Exception <Exception> [-RecommendedAction <String>] [-TargetObject <Object>] [<CommonParameters>]

Write-Error [-CategoryActivity <String>] [-CategoryReason <String>] [-CategoryTargetName <String>] [-CategoryTargetType <String>] -ErrorRecord <ErrorRecord> [-RecommendedAction <String>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Host`, [
        new Parameter(`BackgroundColor`, `Specifies the background color. There is no default. The acceptable values for this parameter are:


- Black


- DarkBlue


- DarkGreen


- DarkCyan


- DarkRed


- DarkMagenta


- DarkYellow


- Gray


- DarkGray


- Blue


- Green


- Cyan


- Red


- Magenta


- Yellow


- White`, `ConsoleColor`),
        new Parameter(`ForegroundColor`, `Specifies the text color. There is no default. The acceptable values for this parameter are:


- Black


- DarkBlue


- DarkGreen


- DarkCyan


- DarkRed


- DarkMagenta


- DarkYellow


- Gray


- DarkGray


- Blue


- Green


- Cyan


- Red


- Magenta


- Yellow


- White`, `ConsoleColor`),
        new Parameter(`NoNewline`, `The string representations of the input objects are concatenated to form the output. No spaces or newlines are inserted between the output strings. No newline is added after the last output string.`, `SwitchParameter`),
        new Parameter(`Object`, `Objects to display in the host.`, `Object`),
        new Parameter(`Separator`, `Specifies a separator string to insert between objects displayed by the host.`, `Object`),
    ], `Writes customized output to a host.`, `Write-Host [[-Object] <Object>] [-BackgroundColor {Black | DarkBlue | DarkGreen | DarkCyan | DarkRed | DarkMagenta | DarkYellow | Gray | DarkGray | Blue | Green | Cyan | Red | Magenta | Yellow | White}] [-ForegroundColor {Black | DarkBlue | DarkGreen | DarkCyan | DarkRed | DarkMagenta | DarkYellow | Gray | DarkGray | Blue | Green | Cyan | Red | Magenta | Yellow | White}] [-NoNewline] [-Separator <Object>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Information`, [
        new Parameter(`MessageData`, `Specifies an informational message that you want to display to users as they run a script or command. For best results, enclose the informational message in quotation marks. An example is "Test complete."`, `Object`),
        new Parameter(`Tags`, `Specifies a simple string that you can use to sort and filter messages that you have added to the information stream with "Write-Information". This parameter works similarly to the Tags parameter in "New-ModuleManifest".`, `String[]`),
    ], `Specifies how PowerShell handles information stream data for a command.`, `Write-Information [-MessageData] <Object> [[-Tags] <String[]>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Output`, [
        new Parameter(`InputObject`, `Specifies the objects to send down the pipeline. Enter a variable that contains the objects, or type a command or expression that gets the objects.`, `PSObject[]`),
        new Parameter(`NoEnumerate`, `By default, the Write-Output cmdlet always enumerates its output. The NoEnumerate parameter suppresses the default behavior, and prevents Write-Output from enumerating output. The NoEnumerate parameter has no effect on collections that were created by wrapping commands in parentheses, because the parentheses force enumeration.


> [!NOTE] > This switch only works correctly with PowerShell Core 6.2 and newer. On older > versions of PowerShell Core, the collection is still enumerated even with > use of this switch.  The behavior in PowerShell Core 6.2 is consistent with > Windows PowerShell.`, `SwitchParameter`),
    ], `Sends the specified objects to the next command in the pipeline. If the command is the last command in the pipeline, the objects are displayed in the console.`, `Write-Output [-InputObject] <PSObject[]> [-NoEnumerate] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Progress`, [
        new Parameter(`Activity`, `Specifies the first line of text in the heading above the status bar. This text describes the activity whose progress is being reported.`, `String`),
        new Parameter(`Completed`, `Indicates whether the progress bar is visible. If this parameter is omitted, "Write-Progress" displays progress information.`, `SwitchParameter`),
        new Parameter(`CurrentOperation`, `Specifies the line of text below the progress bar. This text describes the operation that is currently taking place.`, `String`),
        new Parameter(`Id`, `Specifies an ID that distinguishes each progress bar from the others. Use this parameter when you are creating more than one progress bar in a single command. If the progress bars do not have different IDs, they are superimposed instead of being displayed in a series.`, `Int32`),
        new Parameter(`ParentId`, `Specifies the parent activity of the current activity. Use the value -1 if the current activity has no parent activity.`, `Int32`),
        new Parameter(`PercentComplete`, `Specifies the percentage of the activity that is completed. Use the value -1 if the percentage complete is unknown or not applicable.`, `Int32`),
        new Parameter(`SecondsRemaining`, `Specifies the projected number of seconds remaining until the activity is completed. Use the value -1 if the number of seconds remaining is unknown or not applicable.`, `Int32`),
        new Parameter(`SourceId`, `Specifies the source of the record.`, `Int32`),
        new Parameter(`Status`, `Specifies the second line of text in the heading above the status bar. This text describes current state of the activity.`, `String`),
    ], `Displays a progress bar within a PowerShell command window.`, `Write-Progress [-Activity] <String> [[-Status] <String>] [[-Id] <Int32>] [-Completed] [-CurrentOperation <String>] [-ParentId <Int32>] [-PercentComplete <Int32>] [-SecondsRemaining <Int32>] [-SourceId <Int32>] [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Verbose`, [
        new Parameter(`Message`, `Specifies the message to display. This parameter is required. You can also pipe a message string to Write-Verbose .`, `String`),
    ], `Writes text to the verbose message stream.`, `Write-Verbose [-Message] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
    new ConsoleCommand(`Write-Warning`, [
        new Parameter(`Message`, `Specifies the warning message.`, `String`),
    ], `Writes a warning message.`, `Write-Warning [-Message] <String> [<CommonParameters>]`, "", (parameters, paramDictionary) => {
    }),
];
export const PSCoreCommands = commands;
//# sourceMappingURL=PSCoreCommands.js.map