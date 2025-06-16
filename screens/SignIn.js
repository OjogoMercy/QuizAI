import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '@/Components/Styles';
import { StatusBar } from 'react-native';
import Header from '@/Components/Header';
import Button from '@/Components/Button';
import CustomTextInput from '@/Components/CustomTextInput';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar backgroundColor={'#1D4ED8'}/>
      <Header title={'Already Have An Account?'} text={'Sign in'} Custom={'Already have an account?'}/>
      <View style={styles.form}>     
      <CustomTextInput value={email} placeholder={'Enter your email'} onChangeText={setEmail} icon={'email'}/>
      <CustomTextInput value={password} placeholder={'Enter your password'} onChangeText={setPassword} icon={'lock-outline'} isPassword={true} secureTextEntry={secureTextEntry}/>       
      </View>
      <View style={{paddingHorizontal:35,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
        <Text>Remember me</Text>
        <Text style={{ color: '#02DBF5'}} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
      </View>
      <View style={{width:'90%',alignSelf:'center'}}>
      <Button text={'Sign In'} onPress={()=> navigation.navigate('BottomTab')}/>
      </View>
    </View>
  )
}

export default SignIn
