import React from 'react'
import { Text, View ,Image, StyleSheet} from 'react-native'
import Menu from './Menu'

const Home =()=> {
    return (
      <View >
         <Image 
          style={style.img}
         source={require('../../assets/education.webp')}/>
         <View style={style.para}>
         <Text style={style.welcome}>Welcome to</Text>
         <Text style={style.welcome2}>Education App</Text>
         <Text style={style.learn}>Online education is a flexible instructional delivery system that encompasses any kind of learning that takes place via the Internet.</Text>
         </View>
         <Menu/>
      </View>
    )
}
const style=StyleSheet.create({
    img:{
        width:'1%',
        height:150,
        paddingHorizontal:200,
        aspectRatio:1,
        marginVertical:40
    },
    welcome:{
        fontSize:29,
        color:'grey',
        marginHorizontal:100
    },
    welcome2:{
        fontSize:29,
        color:'grey',
        marginHorizontal:85,
        width:200,
    },
    learn:{
        textAlign:'center',
        lineHeight:25,
        width:350,
        color:'grey',
        marginVertical:10
    },
    para:{
        width:'100%',
        paddingHorizontal:15
    }
})
export default Home
