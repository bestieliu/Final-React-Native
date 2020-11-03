import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
import HomeNavigator from './screens/HomeNavigator';

const AppStack = createStackNavigator();
 
const App=()=>{
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    })
  },[]);  
  if( isFirstLaunch === null){
    return null;
  }else if (isFirstLaunch === true){
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
          <AppStack.Screen name="Login" component={LoginScreen}/>
          <AppStack.Screen name="Home" component={HomeNavigator}/>
          
        </AppStack.Navigator>
    </NavigationContainer>
    )
    }else {
      return(
        <NavigationContainer>
            <AppStack.Navigator>
              <AppStack.Screen name="Home" component={HomeNavigator} options={{headerShown:false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
      )
  }
}
export default App;