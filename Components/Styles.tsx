import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
  });
  export default styles
  