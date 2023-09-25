import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//nav
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home'
import Details from './screens/Details'
//

export type rootStackpramList = {
  Home:undefined;
  Details:{product:product}
}
const stack = createNativeStackNavigator<rootStackpramList>()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen
        name='Home'
        component={Home}
        options={{title:"tradgin products"}}/>
        <stack.Screen
        name='Details'
        component={Details}
        options={{title:"products Details"}}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

