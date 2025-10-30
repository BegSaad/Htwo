

import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import React,{useEffect, useState} from 'react';
import { colors } from '../../theme/colors';
import { en } from '../../translation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import images from '../../theme/images';
import { wp, hp, listenOrientationChange, removeOrientationListener, isTablet } from '../../utils/Responsiveness';


type LaunchScreenProp = NativeStackNavigationProp<RootStackParamList, 'Launch'>;

const Launch = () => {
  const navigation = useNavigation<LaunchScreenProp>();

  const [orientation, setOrientation] = useState<string>(
    Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
  );


 useEffect(()=>{
   const timer= setTimeout(()=>{
    navigation.navigate('OnboardOne');
 },30000);

 listenOrientationChange({
  setState: ({ orientation }: { orientation: string }) => {
    setOrientation(orientation);
  }
 })
  return ()=>{
    removeOrientationListener();
    clearTimeout(timer);}
  },[]);
  
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{en.Launch.title}</Text>

      <Image
        source={images.iconmain}
        style={{ width: wp(25), height: hp(25), marginBottom: 30 }}
/>


     
    </View>
  );
};

export default Launch;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',//horizontal
    alignItems: 'center',//vertical
    backgroundColor: colors.maingreen,
  },
  title: {
  fontSize: hp(5), // ~2.5% of screen height
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: hp(2), // responsive spacing
  padding: hp(1.2),
  borderRadius: wp(2),
  color: colors.oceanbluebutton,
},

});
