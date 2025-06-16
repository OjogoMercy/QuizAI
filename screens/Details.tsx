import { View, Text } from 'react-native'
import React from 'react'
import styles from '@/Components/Styles'

export default function Details() {
  return (  
    <View style={styles.container}>
      <Text>{item.text}</Text>
    </View>
  )
}