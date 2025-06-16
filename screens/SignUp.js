import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import styles from '../Components/Styles'
import Header from '@/Components/Header';
import Button from '@/Components/Button';
import CustomTextInput from '@/Components/CustomTextInput';
const SignUp = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
``
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1D4ED8'}/>
    <Header title={'Register New Account?'} text={'Sign Up'} Custom={'Already have an account?'}/>
      <ScrollView style={styles.form}>
       <CustomTextInput value={fullName} placeholder={'Enter your name'} onChangeText={setFullName} icon={'person-outline'}/>
       <CustomTextInput value={email} placeholder={'Enter your email'} onChangeText={setEmail} icon={'email'}  />
       <CustomTextInput value={password} placeholder={'Enter your password'} onChangeText={setPassword} icon={'lock-outline'} isPassword={true} secureTextEntry={secureTextEntry}/>       
        <CustomTextInput value={confirmPassword} placeholder={'Confirm your password'} onChangeText={setConfirmPassword} icon={'lock-outline'} isPassword={true} secureTextEntry={secureTextEntry}/>
         <Button onPress={()=> navigation.navigate('SignIn')} text={'Sign Up'}/>
      </ScrollView>
     
    </View>
  );
};


export default SignUp;
