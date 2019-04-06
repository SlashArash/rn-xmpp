const mapDeviceType = (
  deviceType: string
): 'lamp' | 'thermostat' | 'curtain' | undefined => {
  if (deviceType === '1') {
    return 'curtain';
  } else if (deviceType === '2') {
    return 'lamp';
  } else if (deviceType === '3') {
    return 'thermostat';
  }
  return;
};

export default mapDeviceType;
