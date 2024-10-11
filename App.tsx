import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView, Button, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,flexDirection:'column'}}> 
    <View style={{flex:1.5,backgroundColor:'black', flexDirection:'row'}}>
      <View style={{flex:1.5,backgroundColor:'#821131',alignItems:'center',justifyContent:'center'}}>
        <Image source={{uri:'./assets/images/legoLogo.png'}} style={{width:300,height:300 }}></Image>
      </View>
      <View style={{flex:1.5,backgroundColor:'#1A2130',alignItems:'center',justifyContent:'center'}} >
        <Text style={{fontSize:50,fontWeight:'600',color:'white'}}>Lego</Text>
      </View>
      <View style={{flex:1.5,backgroundColor:'#8B322C',alignItems:'flex-start',justifyContent:'space-around'}}>
        <Text style={{fontSize:40,color:'white',fontWeight:'700'}}>Adres:istanbul</Text>
        <Text style={{fontSize:40,color:'white',fontWeight:'700'}}>Telefon:+90...</Text>
        <Text style={{fontSize:40,color:'white',fontWeight:'700'}}>Mail:lego@gmail.com</Text>
      </View>
    </View>
    <View style={{flex:2,backgroundColor:'#2C4E80',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <View style={{backgroundColor:'#FABC3'}}>
    <Image source={{uri:'./assets/images/legoEv.jpg'}} style={{width:200,height:200,borderRadius:30,}}></Image>
    <button style={{backgroundColor:'#DCA47C'}}>sipariş ver</button> </View>
    <View style={{backgroundColor:'#FABC3'}}>
    <Image source={{uri:'./assets/images/legoMüze.jpg'}} style={{width:200,height:200,borderRadius:30}}></Image> 
    <button style={{backgroundColor:'#DCA47C'}}>sipariş ver</button>
    </View>
    <View style={{backgroundColor:'#FABC3'}}>
    <Image source={{uri:'./assets/images/legoPolis.jpg'}} style={{width:200,height:200,borderRadius:30}}></Image>
    <button style={{backgroundColor:'#DCA47C'}}>sipariş ver</button>
    </View>
    </View>
    <View style={{flex:0.2,backgroundColor:'white',alignItems:'center'}}>
      <Text style={{fontWeight:400,fontSize:20}}>Bizi tercih ettiğiniz için teşekkür ederiz!</Text>
      </View>  
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
