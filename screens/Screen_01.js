import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const Screen_01 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{padding:18}}>
        <Image source={require("../assets/DATA/Container 17.png")}/>
        <Text style={{fontSize:20, fontWeight:700, marginTop:18, marginLeft:15}}>Boost Productivity</Text>
        <Text style={{marginLeft:15,marginTop:13}}>Simplify tasks, boost productivity</Text>
        <TouchableOpacity style={{backgroundColor:'#25c3d9',marginTop:15,borderRadius:999,padding:8,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate("Screen_02")}}>
          <Text style={{color:'white'}}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:10,borderRadius:999,padding:8,alignItems:'center',justifyContent:'center'}}>
          <Text style={{}}>Login</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Screen_01;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})