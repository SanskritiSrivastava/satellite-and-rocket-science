import React,{Component} from 'react';
import {View,Text,TouchableOppacity,StyleSheet,Image} from 'react-native';

export default class MOMScreen extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.Title}>
        MOM
        </Text>
        <View>
        <Text style ={{marginTop:20,fontSize:20,color:'white'}}>
          The Mars Orbiter Mission (MOM), also called Mangalyaan  is a space probe orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by the Indian Space Research Organisation (ISRO). It is India's first interplanetary mission and it made it the fourth space agency to achieve Mars orbit, after Roscosmos, NASA, and the European Space Agency. It made India the first Asian nation to reach Martian orbit and the first nation in the world to do so on its maiden attempt.
        </Text>
        <Image style = {{width:180,height:90,marginLeft:70,marginTop:30}}source={require('../assets/MOM2.jpg')}/>
        </View>
      </View>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#29ded4'
  },
  Title:{
    fontSize:40,
    color:'green',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
  }
})