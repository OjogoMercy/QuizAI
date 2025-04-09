import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Images from '@/assets/images/Images';

const HomeScreen = ({ navigation }) => {
  const Data = [
    { id: '1', title: 'Create', text: 'Quiz',color:'#FF506A' },
    { id: '2', title: 'Join in', text: 'Quiz',color:'#4c8cff' },
    { id: '3', title: 'Compete', text: 'Quiz',color:'#63cc42' },
    { id: '4', title: 'Play', text: 'Games',color:'#02DBF5' },
  ];
  const Data1 = [
    { id: '1', title: 'Create', text: 'Science',color:'#FF506A',Image:Images.plane },
    { id: '2', title: 'Join in', text: 'Geography',color:'#4c8cff', Image: Images.earth },
    { id: '3', title: 'Compete', text: 'Sports',color:'#02DBF5',Image:Images.ball },
    { id: '4', title: 'Play', text: 'Biology',color:'#63cc42', Image:Images.tree },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.card,{backgroundColor:item.color} ]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardText}>{item.text}</Text>
      <TouchableOpacity style={{backgroundColor:'white',width:40,height:30,padding:5,borderRadius:5,opacity:0.8,paddingHorizontal:10,marginTop:15}}  onPress={() => navigation.navigate('CreateQuiz')}>
      <Icon name="arrowright" size={20} color={item.color} style={{opacity:0.8}}/>
      </TouchableOpacity>
    </View>
  );
  const renderItem1 = ({ item }) => (
    <View style={[styles.card,{backgroundColor:'white'}]}>
      <Image  source={item.Image} style={styles.image}/>
      <Text style={[styles.cardText, {color:item.color}, {fontSize:20}]}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f7', alignItems: 'center' }}>
      <View style={{ backgroundColor: '#1D4ED8', height: 200, borderBottomEndRadius: 30, borderBottomLeftRadius: 30, width: '100%', padding: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.iconbox}>
            <Icon name="appstore1" size={20} color="#fff"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconbox}>
            <Icon1 name="notifications" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 18 }}>Welcome Back!</Text>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Ojogo Mercy</Text>
      </View>
      
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        style={{position:'absolute' , top:110}}
      />
      <View style={{flexDirection:'row' ,marginTop:110,width:'92%',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Choose Categories</Text>
        <Text style={{color:'#02DBF5', fontWeight:'bold'}}>See All</Text>
         </View>
         <FlatList
        data={Data1}
        renderItem={renderItem1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        style={{marginTop:10,}}
      />
         
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  iconbox: {
    backgroundColor: '#1d5ed8',
    width: '10%',
    height: 35,
    padding: 6,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    width: 140,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 12,
    alignItems:'flex-start',
    height:150,
    
    
  },
  cardTitle: {
    fontSize: 16,
    color:'white'
  },
  cardText: {
    fontSize: 28,
    textAlign: 'center',
    color:'white',
    fontWeight:'bold'
  },
  image:{
    resizeMode:'contain',
    height:100,
    width:100
  },
});
