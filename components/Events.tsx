import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {  EventType } from '../dummyData.js';


interface EventsProps {
  item: EventType; // the type of the item prop
  onPress: () => void; // the type of the onPress handler
}


const Events = ({item: {title, location, month,day, year, time, type }, onPress} :EventsProps) => {



  useEffect(() => { 
    
  })
  
  return (
    <View
      style={{
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        margin: 7,
        backgroundColor: '#cccfd3',
        shadowColor: '#000', // Lighter shadow color
        shadowOffset: { width: 0, height: 4 }, // Increased shadow offset
        shadowOpacity: 0.5, // Increased shadow opacity
        shadowRadius: 15, // Increased shadow radius
        elevation: 10, // Increased elevation for Android
      }}
    >
      <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-100 relative" >
        <Text className='font-rubik-medium'>{title}</Text>
        <Text className='font-rubik-light'>{month}-{day} {year}</Text>
        <Text className='font-rubik-light'>Location: {location}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Events