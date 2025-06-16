import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Images from '@/assets/images/Images';
import { useNavigation } from '@react-navigation/native';
import styles from '@/Components/Styles';


const HomeScreen = ({  }) => {
  const navigation = useNavigation()
  const Data = [
    { id: '1', title: 'Create', text: 'Quiz',color:'#FF506A', onPress: () => navigation.navigate("CreateQuiz") },
    { id: '2', title: 'Join in', text: 'Quiz',color:'#4c8cff', onPress: () => navigation.navigate("LeaderBoard") },
    { id: '3', title: 'Random', text: 'Quiz',color:'#63cc42', onPress: () => navigation.navigate("CreateQuiz") },
    { id: '4', title: 'Challenge', text: 'Friends',color:'#02DBF5', onPress: () => navigation.navigate("History") },
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
      <TouchableOpacity style={styles.arrow}  onPress={item.onPress} activeOpacity={0.7}>
      <Icon name="arrowright" size={20} color={item.color} style={{opacity:0.8}}/>
      </TouchableOpacity>
    </View>
  );
  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={[styles.card,{backgroundColor:'white'}]} activeOpacity={0.7} onPress={()=> navigation.navigate('Details',{item})}>
      <Image  source={item.Image} style={styles.image}/>
      <Text style={[styles.cardText, {color:item.color}, {fontSize:20}]}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f7', alignItems: 'center' }}>
      <View style={styles.con}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.iconbox} activeOpacity={0.7}>
            <Icon name="appstore1" size={20} color="#fff"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconbox} activeOpacity={0.7}>
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
        <TouchableOpacity>
        <Text style={{color:'#02DBF5', fontWeight:'bold'}}>See All</Text>
        </TouchableOpacity>
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


