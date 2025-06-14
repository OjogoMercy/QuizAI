import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './Styles'

export default function Button({onPress,text}) {
  return (
    <TouchableOpacity style={styles.button}  onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  )
}