import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

export default function CustomHeader({title,iconName,onPress,iconName2,onPress2}) {
  return (
    <View style={styles.con2}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.iconbox} activeOpacity={0.7} onPress={onPress}>
            <Icon name={iconName} size={20} color="#fff"  />
          </TouchableOpacity>
          <Text style={styles.title1}>{title}</Text>
          <TouchableOpacity style={styles.iconbox} activeOpacity={0.7} onPress={onPress2}>
            <Icon1 name={iconName2} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
    </View>
  )
}