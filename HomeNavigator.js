import *as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

const HomeStackScreen=()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="BLΛƆKPIИK" component={HomeScreen} options={{
                headerStyle:{
                    backgroundColor:'pink'
                },
                    headerTintColor:'black',
                    
            }}/>
        </HomeStack.Navigator>
    )
}

const AboutStackScreen=()=>{
    return(
        <AboutStack.Navigator>
            <AboutStack.Screen name="About" component={AboutScreen}/>
        </AboutStack.Navigator>
    )
}

const HomeNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="About" component={AboutStackScreen}/>
        </Tab.Navigator>
    )
}
export default HomeNavigator;