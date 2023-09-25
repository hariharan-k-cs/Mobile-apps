import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
type Homeprops = NativeStackScreenProps<RootStackParamList,'Home'>
const Home = ({navigation}:Homeprops) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.smallText}>Home screens</Text>
      <Button title='go to details' 
    //   onPress={()=>navigation.navigate('Details',{
    //     productid:'90'
    //   })}
    // onPress={()=>navigation.navigate('Details')}
    onPress={()=>navigation.push('Details',{
        product:'90'
    })}
      
      ></Button>
    </View>
  )
}

export default Home

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