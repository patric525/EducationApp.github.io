import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput,  TouchableOpacity, Alert } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const navigation =useNavigation()
  const[name , setName]=useState()
  const[password , setPassword]=useState()
  const[mobile , setMobile]=useState()
  const[text , setText]=useState()
  const[agree ,setAgree]=useState(false)

  const Submit =()=>{
    if(!name || !password || !mobile || !text){
      Alert.alert('plzz fill the fileds properly')
    }
    else{
      Alert.alert(`Thank you ${name}`)
      navigation.navigate('Home')
    }
  }

  return (
    <View>
      <Text style={style.login}>Login to reach us</Text>
      <View style={style.form}>
        <View>
         <Text style={style.label}>Enter your name</Text>
         <TextInput
         value={name}
         onChangeText={(actualdata)=>{
          setName(actualdata)
         }}
         autoCapitalize='none'
         autoCorrect={false}
         style={style.input}
         />
        </View>
        <View>
         <Text style={style.label}>Enter your password</Text>
         <TextInput
         value={password}
         onChangeText={(actualdata)=>{
          setPassword(actualdata)
         }}
         autoCapitalize='none'
         autoCorrect={false}
         secureTextEntry={true}
         style={style.input}
         />
        </View>
        <View>
         <Text style={style.label}>Enter your mobile number</Text>
         <TextInput
         onChangeText={(actualdata)=>{
          setMobile(actualdata)
         }}
         value={mobile}
         autoCapitalize='none'
         autoCorrect={false}
         secureTextEntry={true}
         style={style.input}
         />
        </View>
        <View>
         <Text style={style.label}>How can we help you?</Text>
         <TextInput
         onChangeText={(actualdata)=>{
          setText(actualdata)
         }}
         value={text}
         autoCapitalize='none'
         autoCorrect={false}
         numberOfLines={5}
         placeholder={'Any Suggestions'}
         style={style.input}
         multiline={true}
         />
        </View>
        <View style={style.Checkbox}>
          <Checkbox
          color={agree?'blue':undefined}
          value={agree}
          onValueChange={()=>{
            setAgree(!agree)
          }}
          />
          <Text style={style.checktxt}>I have read the terms and condition</Text>
        </View>
          <TouchableOpacity
          style={[
            style.btn,
            {
              backgroundColor:agree? '#4630EB' : 'grey'
            }
          ]}
          disabled={!agree}
          onPress={()=>Submit()}
          >
            <Text style={style.btntxt}>Contact us</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  btn:{
   borderRadius:6,
   marginVertical:15
  },
  btntxt:{
    fontSize:25,
    textAlign:'center',
    color:'white'
  },
  login: {
      fontSize:30,
      textAlign:'left',
      paddingHorizontal:8,
      paddingVertical:10
  },
  label:{
    fontSize:20,
    marginVertical:10
  },
  input:{
    borderWidth:1,
    width:'100%',
    marginTop:10,
   // borderColor:'grey',
    paddingLeft:10
  },
  form:{
    paddingHorizontal:30
  },
  checktxt:{
    marginLeft:12,
    fontSize:15
  },
  Checkbox:{
    display:'flex',
    flexDirection:'row',
    marginTop:20
  }
})
export default Contact
