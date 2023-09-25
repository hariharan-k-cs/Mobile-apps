import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {rootStackpramList} from '../App'
import Productitems from '../components/Productitems'
import Seperator from '../components/Seperator'
import { PRODUCTS_LIST } from '../data/contants'

type Homeprops = NativeStackScreenProps<rootStackpramList,'Home'>

const Home = ({navigation}:Homeprops) => {
  return (
    <View style={styles.container}>
     <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={item=>item.id}
      ItemSeparatorComponent={Seperator}
      renderItem={({item})=>(
        <Pressable
        onPress={()=>{
          navigation.navigate('Details',{
            product:item
          })
        }}
        >
          <Productitems product={item}/>
        </Pressable>
      )}
     />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});