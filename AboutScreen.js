import *as React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';



const AboutScreen=()=>{
    return(
        <View style={styles.container}>
                <Image style={{width:350,height:350}} source={require('../assets/bbbbbb.png')} />
               <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>Background information</Text>
               <Text style={{}}>Origin :  Seoul,South Korea</Text>
               <Text style={{}}>Genres : K-pop , EDM , hiphop</Text>
               <Text style={{}}>Years active : 2016-present</Text>
               <Text style={{}}>Lables : YG , interscope</Text>
               <Text style={{}}>Associated acts : YG Family</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})
export default AboutScreen;