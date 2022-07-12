import React,{Component} from 'react';
import {View,Text,TouchableOppacity,StyleSheet,Image} from 'react-native';

export default class GSLVScreen extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.Title}>
         GSLV
        </Text>
         <View>
        <Text style ={{marginTop:20,fontSize:20,color:'white'}}>
            The Geosynchronous Satellite Launch Vehicle Mark III (GSLV Mk III), also referred to as the Launch Vehicle Mark 3 (LVM3), is a three-stage medium-lift launch vehicle developed by the Indian Space Research Organisation (ISRO). Primarily designed to launch communication satellites into geostationary orbit, it is also identified as the launch vehicle for crewed missions under the Indian Human Spaceflight Programme and dedicated science missions like Chandrayaan-2. The GSLV Mk III has a higher payload capacity than the similarly named GSLV Mk II.
        </Text>
        <Image style = {{width:'50%',height:90,marginLeft:70,marginTop:30}}source={require('../assets/GSLVmkIII.jpg')}/>
        </View>
      </View>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#530ca3'
  },
  Title:{
    fontSize:40,
    color:'#e80baa',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
  }
})