import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '@/constants/Styles'
import { Link } from 'expo-router'

const CustomHeader = ({title,Custom,text}) => {
  return (
    <View>
        <View style={styles.header}>
 <View style={{flexDirection:'row'}}><Text style={styles.logo}>Qui</Text><Text style={{fontSize:34,color:'#fff',fontWeight:'bold'}}>zai</Text></View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{Custom} 
    <Link href="/Navigation/SignIn">
    <Text style={{ color: '#02DBF5'}}>{text}</Text>
    </Link>
   </Text>
  </View>
   <View style={styles.line}></View>
   <View style={[styles.line, {width:'70%',backgroundColor:'#406ae3'}]}></View>

    </View>
    
   
  )
}

export default CustomHeader

