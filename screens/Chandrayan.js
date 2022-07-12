import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

export default class ChandrayanScreen extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.Title}>
         Chandrayaan-1
        </Text>
        <View>
        <Text style ={{marginTop:20,fontSize:20,color:'white'}}>
         Chandrayaan-1 was the first Indian lunar probe under the Chandrayaan program. It   was launched by the Indian Space Research Organisation in October 2008, and        operated until August 2009. The mission included a lunar orbiter and an impactor. India   launched the spacecraft using a PSLV-XL rocket on 22 October 2008 at 00:52  UTC from Satish Dhawan Space Centre, at Sriharikota, Andhra Pradesh.
        </Text>
        <Image style = {{width:200,height:90,marginLeft:60,marginTop:30}}source={require('../assets/Artist-conception-lunar-probe-Chandrayaan-1.webp')}/>
        </View>
      </View>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2fe00f',
  },
  Title:{
    fontSize:40,
    color:'red',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
  }
})