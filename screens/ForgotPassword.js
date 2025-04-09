import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar backgroundColor={'#1D4ED8'} />
     <View style={styles.header}>
        <View style={{flexDirection:'row'}}><Text style={styles.logo}>Qui</Text><Text style={{fontSize:34,color:'#fff',fontWeight:'bold'}}>zai</Text></View>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
         Forgot your password? Don't worry
        </Text>
      </View>
      <View style={{width:300,height:15,backgroundColor:'#2b5be3',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignSelf:'center'}}></View>
      <View style={{width:250,height:15,backgroundColor:'#406ae3',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignSelf:'center'}}></View>
      
      <View style={styles.form}>
        <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={22} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Recover Password</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

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
