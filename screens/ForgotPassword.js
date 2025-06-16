import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import Header from '@/Components/Header';
import styles from '@/Components/Styles';
import CustomTextInput from '@/Components/CustomTextInput';
import Button from '@/Components/Button';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar backgroundColor={'#1D4ED8'} />
     <Header title={'Forgot Password'} Custom={'Forgot our password? Dont Worry'}/>
      <View style={styles.form}>
      <CustomTextInput value={email} placeholder={'Enter your email'} onChangeText={setEmail} icon={'email'}  />
      </View>
      <View style={{width:'90%',alignSelf:'center'}}>
        <Button text={'Recover Password'}/>
      </View>
    </View>
  )
}

export default ForgotPassword


