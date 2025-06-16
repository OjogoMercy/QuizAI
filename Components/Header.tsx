import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

export default function Header({navigation,title,Custom,text,onPress}) {
  return (
    <>
    <View style={styles.header}>
    <View style={{flexDirection:'row'}}><Text style={styles.logo}>Qui</Text><Text style={{fontSize:34,color:'#fff',fontWeight:'bold'}}>zai</Text></View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>
      {Custom}
      <Text style={styles.signIn} onPress={onPress}>
       {text}
      </Text>
    </Text>
  </View>
  <View style={styles.rag}></View>
  <View style={[styles.rag, {backgroundColor:'#406ae3',width:'70%'}]}></View>
  </>
  )
}