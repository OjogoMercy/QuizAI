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
       <CustomTextInput value={fullName} placeholder={'Enter your name'} onChangeText={setFullName}  />

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Ionicons
              name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={secureTextEntry}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
         <Button onPress={()=> navigation.navigate('SignIn')} text={'Sign Up'}/>
      </ScrollView>
     
    </View>
  );
};


export default SignUp;
