import React from 'react'
import { FlatList, Text, View ,Image,StyleSheet, TouchableOpacity, Linking} from 'react-native'
import courses from '../../api/courses'

const Course =()=> {
    return (
      <View>
         <FlatList 
         data={courses}
         renderItem={(element)=>{
           return(
             <View style={style.maincon}>
              <View style={style.imgcont}>
                <Image
                style={style.image}
                source={element.item.image}
                resizeMode='contain'
                />
                <View style={style.struct}>
                  <Text>{element.item.title}</Text>
                  <Text style={style.desc}>{element.item.description}</Text>
                  <TouchableOpacity
                  style={style.btn}
                  >
                    <Text style={style.textbtn}>Enroll Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
             </View>
           )
         }}
         />
      </View>
    )
}
const style=StyleSheet.create({
  image:{
    width:'100%',
    height:undefined,
    aspectRatio:1
  },
  imgcont:{
    paddingHorizontal:40
  },
  struct:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  desc:{
    textAlign:'center'
  },
  btn:{
    backgroundColor:'#ADD8E6',
    borderRadius:4,
    paddingHorizontal:12,
    marginVertical:10
  },
  textbtn:{
    fontSize:30,
    color:'white'
  },
  maincon:{
    backgroundColor:'#E1D9D1',
    marginHorizontal:12,
    marginVertical:12
  }
})
export default Course
 