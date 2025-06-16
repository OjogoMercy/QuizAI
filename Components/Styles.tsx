import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
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
    signIn: {
      color: '#02DBF5'},
    form: {
      padding: 20,
      marginTop: 10,
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
    button: {
      backgroundColor: '#1D4ED8',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
      elevation:5
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
    },
    rag:{width:300,
      height:14,
      backgroundColor:'#2b5be3',
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
    alignSelf:'center'},
    eyeIcon:{marginLeft:10},
    iconbox: {
      backgroundColor: '#1d5ed8',
      width: '10%',
      height: 35,
      padding: 6,
      elevation: 5,
      borderRadius: 10,
      marginBottom: 15,
    },
    arrow:{backgroundColor:'white',
    width:40,
    height:30,
    padding:5,
    borderRadius:5,
    opacity:0.8,
    paddingHorizontal:10,
    marginTop:15},
    flatListContainer: {
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    profile:{
      height:100,
      width:100,
      borderRadius:100,
      borderWidth:3,
      borderColor:'white',
      alignSelf:'center'
    },
    float:{
      backgroundColor:'white',
      width:'90%',
      borderRadius:20,
      alignSelf:'center',
      alignItems:'center',
      height:250,
      padding:20,
    },
    badge: {
      width: 70,
      height: 70,
      backgroundColor: '#2D46B9',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      marginHorizontal: 10,
    },
    cover:{
          flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    },
    icons: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
    float1:{
      backgroundColor:'white',
      width:'90%',
      borderRadius:20,
      alignSelf:'center',
      alignItems:'center',
      height:250,
      padding:20,
    },
    fly:{
      width: 35,
      height: 35,
      position: 'absolute',
      bottom: 15,
      left: 75,
    
    },
    letter:{
     color:'white'
    },
    box:{
      backgroundColor:'#1D4ED8',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      padding:10,
      margin:5
    },
    con:{ backgroundColor: '#1D4ED8',
     height: 200,
      borderBottomEndRadius: 30,
       borderBottomLeftRadius: 30, 
       width: '100%', 
    padding: 15 },
    con2:{ backgroundColor: '#1D4ED8',
     height: 130,
     width: '100%', 
    padding: 15 },
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
    title1:{
      fontSize: 23,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  export default styles
  