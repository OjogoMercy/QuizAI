import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar backgroundColor={'#1D4ED8'}/>
       <View style={styles.header}>
        <View style={{flexDirection:'row'}}><Text style={styles.logo}>Qui</Text><Text style={{fontSize:34,color:'#fff',fontWeight:'bold'}}>zai</Text></View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Already have an account? 
          <Text style={{ color: '#02DBF5'}} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
      <View style={{width:300,height:15,backgroundColor:'#2b5be3',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignSelf:'center'}}></View>
      <View style={{width:250,height:15,backgroundColor:'#406ae3',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignSelf:'center'}}></View>
      
      <View style={styles.form}>     
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
      </View>
      <View style={{paddingHorizontal:35,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
        <Text>Remember me</Text>
        <Text style={{ color: '#02DBF5'}} onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </Text>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('BottomTab')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#1D4ED8',
    paddingVertical: 50,
    paddingHorizontal:20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#02DBF5',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fd',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    height:40
  },
  icon: {
    marginRight: 10,
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1D4ED8',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    elevation:5,
    width:'90%',
    alignSelf:'center'

  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
 });
