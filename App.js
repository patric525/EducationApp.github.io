import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Course from './src/screens/Course';
import About from   './src/screens/About';
import Student from "./src/screens/Student";
import Contact from "./src/screens/Contact";



const App =()=>{
  const Stack = createNativeStackNavigator();

   return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="course" component={Course}
      options={{
        headerTitle:'Courses',
        headerTitleAlign:'center'
      }} />
      <Stack.Screen name="student" component={Student} 
       options={{
        headerTitle:'Our Students', 
        headerTitleAlign:'center'
      }}
      />
      <Stack.Screen name="about" component={About}
       options={{
        headerTitle:'About Us',
        headerTitleAlign:'center'
      }}
      />
      <Stack.Screen name="contact" component={Contact}
       options={{
        headerTitle:'Contact Us',
        headerTitleAlign:'center'
      }}
       />
    </Stack.Navigator>
  </NavigationContainer>
   )
}

export default App