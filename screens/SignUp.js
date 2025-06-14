import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import styles from '../Components/Styles'

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
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}><Text style={styles.logo}>Qui</Text><Text style={{fontSize:34,color:'#fff',fontWeight:'bold'}}>zai</Text></View>
        <Text style={styles.title}>Register New Account</Text>
        <Text style={styles.subtitle}>
          Already have an account? 
          <Text style={styles.signIn} onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </View>
      <View style={{width:300,height:15,backgroundColor:'#2b5be3',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignSelf:'center'}}></View>
      <View style={{width:250,height:15,backgroundColor:'#406ae3',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignSelf:'center'}}></View>

      <ScrollView style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

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
         <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
     
    </View>
  );
};


export default SignUp;
