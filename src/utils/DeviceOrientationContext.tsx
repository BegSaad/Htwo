import React, { createContext, ReactNode, useContext } from 'react';
import { useDeviceOrientation, DeviceOrientationType } from '@react-native-community/hooks';

// Define the context type.
// The useDeviceOrientation hook returns an object of type DeviceOrientationType
type OrientationContextType = DeviceOrientationType | null;

// Create context with initial null value
const DeviceOrientationContext = createContext<OrientationContextType>(null);

interface DeviceOrientationProviderProps {
  children: ReactNode;
}

export const DeviceOrientationProvider = ({ children }: DeviceOrientationProviderProps) => {
  const orientation = useDeviceOrientation();

  return (
    <DeviceOrientationContext.Provider value={orientation}>
      {children}
    </DeviceOrientationContext.Provider>
  );
};

// Custom hook for consuming the context with proper typing
export const useDeviceOrientationContext = (): OrientationContextType => {
  const context = useContext(DeviceOrientationContext);
  if (context === null) {
    throw new Error('useDeviceOrientationContext must be used within a DeviceOrientationProvider');
  }
  return context;
};
