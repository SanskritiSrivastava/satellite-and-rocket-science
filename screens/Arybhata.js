import React,{Component} from 'react';
import {View,Text,TouchableOppacity,StyleSheet,Image} from 'react-native';

export default class ArybhataScreen extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.Title}>
         Arybhata
        </Text>
        <View>
          <Text style ={{marginTop:20,fontSize:20,color:'white'}}>
            Aryabhata was India's first satellite, named after the famous Indian astronomer. It was launched on 19 April 1975 from Kapustin Yar, a Soviet rocket launch and development site in Astrakhan Oblast using a Kosmos-3M launch vehicle. It was built by the ISRO, and launched by the Soviet Union as a part of the Soviet Interkosmos programme which provided access to space for friendly states.
          </Text>
          <Image style = {{width:180,height:90,marginLeft:70,marginTop:30}} source={require('../assets/aryabhata.jpg')}/>
        </View>
      </View>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0b22a8',
  },
  Title:{
    fontSize:40,
    color:'white',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
  }
})