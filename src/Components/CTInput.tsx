import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { hp,wp } from '../utils/Responsiveness';
type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  inputStyle?: object;
};

const CTInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  inputStyle = {},
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default CTInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: wp(70),
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
