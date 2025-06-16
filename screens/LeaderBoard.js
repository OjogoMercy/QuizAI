import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '@/Components/CustomHeader'
import styles from '@/Components/Styles'

const LeaderBoard = () => {
  return (
    <View style={styles.container}>
        <CustomHeader title={'Leaderboard'} iconName={'appstore1'} iconName2={'notifications'}/>
    </View>
  )
}

export default LeaderBoard
