import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '@/Components/CustomHeader'
import styles from '@/Components/Styles'

const History = () => {
  return (
    <View style={styles.container}>
        <CustomHeader title={'History'} iconName={'appstore1'} iconName2={'notifications'}/>
    </View>
  )
}

export default History

