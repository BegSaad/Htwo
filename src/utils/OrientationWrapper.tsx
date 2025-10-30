import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDeviceOrientationContext } from '../utils/DeviceOrientationContext';

export const OrientationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const orientation = useDeviceOrientationContext();

  return (
    <View
      style={[
        styles.container,
        orientation.landscape && styles.landscapeContainer,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  landscapeContainer: { flexDirection: 'row' },
});
