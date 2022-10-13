import React from 'react'
import { Text, View ,StyleSheet, Image, TouchableOpacity } from 'react-native'

const About =()=> {
    return (
      <View>
        <View style={style.texts}>
        <Text style={style.text}>Anuj</Text>
        <Text style={style.text}>I am a full stack developer</Text>
        </View>
        <View style={style.imgcon}>
          <Image
          style={style.img}
          source={{uri:'https://p.kindpng.com/picc/s/236-2366677_male-student-icon-png-transparent-png.png'}}
          />
        </View>
        <View style={style.about}>
          <Text style={style.large}>About me</Text>
          <Text style={style.desc}>When you create a professional profile, blog or website, it's important to help customers or potential employers form a personal connection to you through an "about me" section. This is because personal connections can help individuals learn more about you and potentially increase their interest i</Text>
        </View>
        <View style={style.main}>
        <Text style={style.social}>Follow me on Social Media</Text>
        <View style={style.iconcon}>
          <TouchableOpacity>
            <Image
            style={style.icon}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            style={style.icon}
            source={{uri:'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            style={style.icon}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5bZO4UwyrB8Dj-28Twil_mkDUP33h33ayvS5BJ8&s'}}
            />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
}
const style=StyleSheet.create({
  text:{
    fontSize:25,
    textAlign:'center',
    color:'grey'
  },
  texts:{
    paddingHorizontal:40,
    paddingVertical:10,
  },
  img:{
    width:150,
    height:undefined,
    aspectRatio:1,
    borderRadius:400
  },
  imgcon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20
  },
  about:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:40,
    marginVertical:10,
    color:'white',
    backgroundColor:'#ADD8E6'
  },
  desc:{
    textAlign:'center'
  },
  large:{
    fontSize:30
  },
  icon:{
    width:60,
    height:undefined,
    aspectRatio:1
  },
  iconcon:{
  //  backgroundColor:'black'
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:5
  },
  social:{
    fontSize:25,
    textAlign:'center'
  },
  main:{
    marginVertical:27
  }
})
export default About
