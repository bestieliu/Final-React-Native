import *as React from 'react';
import {View, Text, Button, StyleSheet ,TouchableOpacity,Image} from 'react-native';

const LoginScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/lisa.jpg')}/>
            <Text style={styles.box1}>BLACKPINK IN YOUR AREA</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.box3}>Login</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#07090F'

    },
    img:{
        width:450,
        height:350
    },
    box1:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    box2:{
        flexDirection:'row',
        margin:20,
        paddingVertical:5
    },
    box3:{
        fontWeight:'bold',
        fontSize:20,
        width:150,
        padding:10,
        borderColor:'#d76a03',
        borderRadius:50,
        textAlign:'center',
        backgroundColor:'#ff715b'

    }
})
export default LoginScreen;