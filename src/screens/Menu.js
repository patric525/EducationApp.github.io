import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Menu =()=> {
    const navigation =useNavigation()
    return (
      <View style={style.container}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('course')}}
        >
           <Image
            source={{uri:'https://icon-library.com/images/courses-icon/courses-icon-5.jpg'}}
            style={style.img}
            /> 
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{navigation.navigate('student')}}
        >
             <Image
            source={{uri:'https://p.kindpng.com/picc/s/236-2366677_male-student-icon-png-transparent-png.png'}}
            style={style.img}
            /> 
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('about')}}
        >
            <Image
            source={{uri:'https://static.thenounproject.com/png/3444142-200.png'}}
            style={style.img}
            /> 
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('contact')}}
        >
            <Image
            source={{uri:'https://icons-for-free.com/iconfiles/png/512/communication+connection+contact+contacts+icon-1320196392476038550.png'}}
            style={style.img}
            /> 
        </TouchableOpacity>
       
      </View>
    )
}
const style=StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:200
  },
  img:{
    width:'100%',
    height:50,
    aspectRatio:1
  }
})
export default Menu
