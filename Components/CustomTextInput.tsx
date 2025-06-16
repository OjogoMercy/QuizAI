import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import styles from './Styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

export default function CustomTextInput({value,onChangeText, placeholder, secureTextEntry=false, icon,isPassword=false}) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  return (
    <View style={styles.inputContainer}>
          <MaterialIcons name={icon} size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            keyboardType='default'
            onChangeText={onChangeText}
            secureTextEntry={isPassword ? hidePassword : secureTextEntry}
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