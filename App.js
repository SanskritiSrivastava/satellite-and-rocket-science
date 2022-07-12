import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from './components/AppHeader';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/Home';
import Chandrayan from './screens/Chandrayan';
import MOM from './screens/MOM';
import GSLV from './screens/GSLV';
import Arybhata from './screens/Arybhata';

var Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name = 'Home' component ={HomeScreen}/>
      <Stack.Screen name = 'Chandrayan' component ={Chandrayan}/>
      <Stack.Screen name = 'MOM' component ={MOM}/>
       <Stack.Screen name = 'GSLV' component ={GSLV}/>
       <Stack.Screen name = 'Arybhata' component ={Arybhata}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
