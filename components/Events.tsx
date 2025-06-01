import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import {  EventProps } from '../dummyData.js';
import icons from '@/constants/icons';


interface Eventz {
  item: EventProps; // the type of the item prop
  onPress: () => void; // the type of the onPress handler
}


const Events = ({item: {id,title, location,date,time,type,teamId,practiceId,notes }, onPress} :Eventz) => {



  useEffect(() => { 
    
  })
  
  return (
    <View
      style={{
        borderRadius: 10,
        marginTop:10,
        backgroundColor: '#333333',
        flexDirection: 'row',
         alignItems: 'center'
      }}
    > 
      <View style={{borderRadius: 5, height:'100%', width: '3%', backgroundColor: '#FFD700',  }}/>
      <TouchableOpacity onPress={onPress} style={{flexDirection:'row', alignItems:'center', paddingVertical:10, flex:1}}>
        <View style={{flex:1, marginLeft:'3%'}}>
          <Text style={{ fontFamily: 'Rubik-Medium', color: 'white', fontSize: 16 }}>{title}</Text>
          <Text style={{ fontFamily: 'Rubik-Regular', color: 'white', opacity: 0.5, marginTop: -3 }}>{date}</Text>
        </View>
        <Image source={icons.RightArrowIcon} style={{width:24, height:24, tintColor:'#FFD700', marginRight:10 }} />
      </TouchableOpacity>
      
    </View>
  )
}

export default Events