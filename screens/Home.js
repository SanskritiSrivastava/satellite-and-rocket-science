import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground,TouchableOpacity,Image} from 'react-native';

export default class HomeScreen extends Component {

    render(){
         return(
             <View style = {myStyle.container}>
                

                  <ImageBackground style ={myStyle.ImageStyle}
            source={require('../assets/d37d1uw-31f8bc65-046e-4149-837b-fd4a635ee3df.png')}>
             <Text style = {myStyle.TextTitle1}> 
                     Welcome                      
                 </Text>

                  <Text style = {myStyle.TextTitle2}> 
                      to                      
                 </Text>

                  <Text style = {myStyle.TextTitle3}> 
                     satellite & rocket science                     
                 </Text>
            <Image style = {{width:'50%',height:80,marginLeft:70,marginTop:50}} source={require('../assets/space.png')}/>
            
            <TouchableOpacity style = {myStyle.ButtonStyle}
              onPress ={()=>{this.props.navigation.navigate('Arybhata')}}> 
                <Text style = {myStyle.ButtonText}> 
                Arybhata
                </Text>
             </TouchableOpacity>

             <TouchableOpacity style = {myStyle.BUttonAppearance}
              onPress ={()=>{this.props.navigation.navigate('Chandrayan')}}> 
                <Text style = {myStyle.ButtonText}> 
                Chandrayan
                </Text>
             </TouchableOpacity>

              <TouchableOpacity style = {myStyle.BUttonAppearance}
              onPress ={()=>{this.props.navigation.navigate('MOM')}}> 
                <Text style = {myStyle.ButtonText}> 
                MOM
                </Text>
             </TouchableOpacity>

              <TouchableOpacity style = {myStyle.BUttonAppearance}
              onPress ={()=>{this.props.navigation.navigate('GSLV')}}> 
                <Text style = {myStyle.ButtonText}> 
                GSLV MK III
                </Text>
             </TouchableOpacity>
             </ImageBackground>
             </View>    
         )
    }
}

const myStyle = StyleSheet.create({
  container:{
    flex:1,
    backgroundcolor:'blue',  
  },
  TextTitle1:{
    flex:1,
     justifyContent:'center',
    color:'#0b8edd',
    fontWeight:'bold',
    fontSize:32,
    fontFamily:'Sofia,cursive',
    textAlign:'center',
  },
  TextTitle2:{
    flex:1,
     justifyContent:'center',
    color:'#0b8edd',
    fontWeight:'bold',
    fontSize:28,
    fontFamily:'Sofia,cursive',
    textAlign:'center',
  },
  TextTitle3:{
    flex:1,
     justifyContent:'center',
    color:'#0b8edd',
    fontWeight:'bold',
    fontSize:25,
    fontFamily:'Sofia,cursive'
  },
  ImageStyle:{
   
    height:'100%',
  },
  ButtonText:{
    fontSize:15,
    fontWeight:'bold',
    color:'white',
  },
  ButtonStyle:{
    width:110,
    height:40,

    backgroundColor:'#2f28a6',
   marginLeft:100,
    marginTop:40,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    fontStyle:'times',
  },
  BUttonAppearance:{
    width:110,
    height:40,
    backgroundColor:'#2f28a6',
    marginLeft:100,
    marginTop:50,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
  }
})