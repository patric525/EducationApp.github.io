import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, Image , StyleSheet} from 'react-native'

const Student = () => {
  const [data, setData] = useState()
  const getuserdata = async () => {
    try {
      const res = await fetch('https://thapatechnical.github.io/userapi/users.json')
      const data = await res.json()
    // console.log(data);
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getuserdata()
  }, [])
  return (
    <View>
      <Text style={style.font}>List of students</Text>
      <FlatList
       showsHorizontalScrollIndicator={false}
      horizontal
        data={data}
        renderItem={(element) => {
          return (
            <View style={style.maincon}>
              <View style={style.imgcon}>
                <Image
                style={style.img}
                  resizeMode='contain'
                  source={{ uri: element.item.image }}
                />
              </View>
              <View style={style.struct}>
              <Text>Name:{element.item.name}</Text>
              <Text>Mobile:{element.item.mobile}</Text>
              <Text style={style.desc}>email:{element.item.email}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}
const style=StyleSheet.create({
  img:{
    width:100,
    height:300,
    aspectRatio:1
  },
  struct:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  desc:{
    textAlign:'left',
   // paddingHorizontal:7
  },
  maincon:{
    backgroundColor:'#E1D9D1',
    marginHorizontal:10,
    marginVertical:20
  },
  font:{
    fontSize:40,
    textAlign:'center'
  }
})
export default Student
