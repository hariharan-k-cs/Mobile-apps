import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import One from './Screens/One'
import Two from './Screens/Two'
import Newone from './Screens/Newone'
import Newtwo from './Screens/Newtwo'

const stack = createNativeStackNavigator()
const App = () => {
  
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Newone'>
        <stack.Screen name='Newone' component={Newone}/>
        <stack.Screen name = 'Newtwo' component={Newtwo}/>
              </stack.Navigator>
    </NavigationContainer>
  )
}

export default App