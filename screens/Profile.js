import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '@/Components/Styles'
import CustomHeader from '@/Components/CustomHeader'
import Images from '@/assets/images/Images'

const Profile = () => {
  const badges =[1,2,3];
  return (
    <View style={styles.container}>
      <CustomHeader title={'Profile'} iconName={'appstore1'} iconName2={'notifications'}/>
      <View style={[styles.float, {position:'absolute',top:70}]}>
        <View>
        <Image source={Images.profile} style={styles.profile}/>
        <Image source={Images.tag} style={styles.fly}/>
        </View>
        <Text style={[styles.title,{color:'gray'}]}>Ojogo Mercy</Text>
        <View style={{flexDirection:'row',alignSelf:'center',}}>
          <TouchableOpacity style={[styles.box,]}>
            <Text style={styles.letter}>35 Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box,{backgroundColor:'#517891'}]}>
            <Text style={styles.letter}>135 Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.float1, {position:'absolute',bottom:80,height:250}]}>
        <View style={{padding:5,backgroundColor:'#f2f2f2',borderRadius:10}}>
        <Text style={{color:'gray',alignSelf:'flex-start',fontWeight:'bold',marginLeft:10}}>Badges</Text>
          <View style={styles.cover}>
          {
            badges.map((_,index) =>(
              <View key={index} style={styles.badge}>
                <Image source={Images.tag} style={styles.icons}/>
              </View>
            ))
          }
          </View>
        </View>
        
         
      </View>
    </View>
  )
}

export default Profile
