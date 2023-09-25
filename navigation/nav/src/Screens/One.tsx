import { View, Text, Button } from 'react-native'
import React from 'react'
import Two from './Two'

const One = ({navigation}:any) => {
  return(
    <View>
        <Button title='one' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

export default One