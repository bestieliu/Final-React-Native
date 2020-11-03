import *as React from 'react';
import {View, Text, Button, Image,StyleSheet,TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots=({selected})=>{
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)' ;

    return(
        <View
            style={{
                width:5,
                height:5,
                marginHorizontal:3,
                backgroundColor
            }}>

        </View>
    )
}


const Skip=({...props})=>(
    <TouchableOpacity
        title="Skip"
        color="#000000"
        {...props}>
            <Text style={{fontSize:15,fontWeight:'bold',margin:10}}>Skip</Text>
    </TouchableOpacity>


)


const Next=({...props})=>(
    <TouchableOpacity
        title="Next"
        color="#000000"
        {...props}>
            <Text style={{fontSize:15,fontWeight:'bold',margin:10}}>Next</Text>
    </TouchableOpacity>


)

const Done=({...props})=>(
    <TouchableOpacity
        title="Done"
        color="#000000"
        {...props}>
            <Text style={{fontSize:15,fontWeight:'bold',margin:10}}>Done</Text>
    </TouchableOpacity>


)

const OnboardingScreen=({navigation})=>{
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.navigate("Login")}

        pages={[
          {
            backgroundColor: '#E5FCF5',
            image: <Image style={{width:350,height:350}} source={require('../assets/bps.png')} />,
            title: 'BLΛƆKPIИK',
            subtitle: 'BLACKPINK will be coming to you all LIVE!',
            
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image style={{width:450,height:350}}  source={require('../assets/kisspng.png')} />,
            title: 'Ice Cream',
            subtitle: 'Full video is available on YouTube⠀',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image style={{width:450,height:350}} source={require('../assets/light-bp.png')} />,
            title: 'LIGHT STICK',
            subtitle: 'Cheer to the loved ones at the same time.',
          }
        ]}
      />
    )
}
export default OnboardingScreen;