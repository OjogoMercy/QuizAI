import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '@/Components/Styles'
import CustomHeader from '@/Components/CustomHeader'
import Images from '@/assets/images/Images'

const Profile = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title={'Profile'} iconName={'appstore1'} iconName2={'notifications'}/>
      <View style={styles.float}>
        <Image source={Images.profile} style={styles.profile}/>
      </View>
    </View>
  )
}

export default Profile
