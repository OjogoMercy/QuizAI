import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../assets/images/Images'
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'react-native';


const { width, height } = Dimensions.get('window');
const slides = [
  {
    key: '1',
    title: 'Create your own game',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image:Images.book,
  },
  {
    key: '2',
    title: 'Challenge Your Friends',
    text: 'QuizAI’s mission is to deliver high-quality questions in every topic you can imagine.Make your Quiz and challenge your friends instantly',
    image:Images.friend,
  },
  {
    key: '3',
    title: 'Watch Leaderboard',
    text: 'Our leaderboard allows you to measure your progress and see how you stack up against players from all over the world.',
    image: Images.trophy,
  },
];

export default function Onboarding ({ navigation }) {
  // Navigate to Home on Done
  const onDone = () => {
    navigation.replace('SignUp');
  };

  // Render each slide
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <StatusBar backgroundColor='#000fff'/>
      <View style={{backgroundColor:'#000fff',borderBottomLeftRadius:30,borderBottomRightRadius:30,width: width*1,height:height*0.5,justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'#2b5be3',height:220, width:220,marginTop:30,borderRadius:200}}>
          </View>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <Animatable.Text
        animation="slideInUp"
        direction="alternate" style={styles.title}>{item.title}</Animatable.Text>
      <Animatable.Text 
      animation="slideInUp"
      direction="alternate" style={styles.text}>{item.text}</Animatable.Text>
    </View>
  );

  // Custom buttons
  const renderNextButton = () => (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );

  const renderSkipButton = () => (
    <TouchableOpacity  onPress={onDone}>
      <Text style={{color:'#666',fontWeight:'bold',fontSize:16,marginTop:10}}>Skip</Text>
    </TouchableOpacity>
  );

  const renderDoneButton = () => (
    <TouchableOpacity style={styles.button}  onPress={onDone}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      onSkip={onDone}
      showSkipButton
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width:230,
    height: 230,
    position:'absolute'
   

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#374DE2',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#bbb',
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
});
