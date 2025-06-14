import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
    <View style={{flexDirection:'row'}}><Text style={styles.logo}>Qui</Text><Text style={{fontSize:34,color:'#fff',fontWeight:'bold'}}>zai</Text></View>
    <Text style={styles.title}>Register New Account</Text>
    <Text style={styles.subtitle}>
      Already have an account? 
      <Text style={styles.signIn} onPress={() => navigation.navigate('SignIn')}>
        Sign In
      </Text>
    </Text>
  </View>
  )
}