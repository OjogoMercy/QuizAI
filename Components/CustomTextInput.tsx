import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

export default function CustomTextInput({value,onChangeText, placeholder, keyboardType='dafault', secureTextEntry=false, icon,isPassword=false}) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  // const [secureTextEntry, setSecureTextEntry] = useState(true);
``
  return (
    <View style={styles.inputContainer}>
          <MaterialIcons name={icon} size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
          />
            {isPassword && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <MaterialIcons
            name={hidePassword ? 'visibility-off' : 'visibility'}
            size={20}
            color="#888"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
        </View>
  )
}