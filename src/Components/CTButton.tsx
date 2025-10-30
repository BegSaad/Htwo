import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { hp,wp } from '../utils/Responsiveness';
import { colors } from '../theme/colors';

type Props = {
  onPress?: (data?: any) => void;
  title: string;
  btnStyle?: object;
  textStyle?: object;
  disabled?: boolean;
  style?: object;
};

const CTButton = ({
  onPress,
  title,
  style,
  btnStyle,
  textStyle,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        btnStyle,
        disabled && { opacity: 0.5 }, // make faded when disabled
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7} // press effect
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CTButton;

const styles = StyleSheet.create({
  button: {
  //  backgroundColor: colors.blue500,
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom:hp(1),
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
    width: wp(70),
    elevation: 3,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
