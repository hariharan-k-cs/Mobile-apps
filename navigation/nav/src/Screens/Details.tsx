import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type Detailsprops = NativeStackScreenProps<RootStackParamList,'Details'>
const Details = ({route}:Detailsprops) => {

const {product} =route.params
const navi=useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.constainer}>
      <Text style={styles.smallText}>Details : {product}</Text>
      <Button 
      title='go to home'
      onPress={()=>navi.navigate('Home')}/>
      <Button 
      title='go to first screen'
      onPress={()=>navi.goBack()}/>
      <Button 
      title='go to home'
      onPress={()=>navi.popToTop()}/>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText :{
        color:'#000000'
    }
})