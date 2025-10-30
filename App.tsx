import React,{useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';  // ✅
import { RootStackParamList } from './src/navigation/types';
import Launch from './src/screens/Launch/Launch';
import OnboardOne from './src/screens/Onboarding/OnboardOne';
import OnboardTwo from './src/screens/Onboarding/OnboardTwo';
import { colors } from './src/theme/colors';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {DeviceOrientationProvider} from './src/utils/DeviceOrientationContext'


const StackNav = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>   {/* ✅ Wrap navigation */}
        <DeviceOrientationProvider>
        <NavigationContainer>
          <StackNav.Navigator
            initialRouteName="Launch"
            screenOptions={{ headerShown: false }}
          >
            <StackNav.Screen name="Launch" component={Launch} />
            <StackNav.Screen name="OnboardOne" component={OnboardOne} />
            <StackNav.Screen name="OnboardTwo" component={OnboardTwo} />
          </StackNav.Navigator>
        </NavigationContainer>
        </DeviceOrientationProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.maingreen , // optional: theme color for top & bottom safe zones
  },
});
