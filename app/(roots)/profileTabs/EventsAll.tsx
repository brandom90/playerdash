import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons';
import Calender from '@/components/Calender';
interface EventProps {
  setOnProfile: (value: any) => void; 
}

const EventsAll: React.FC<EventProps> = ({setOnProfile}) => {
  return (
    <SafeAreaView style={{ flex: 1, height:'100%' }}>
      <View className='bg-[#1e90ff] h-[110px] flex-row  '
       style={{
        borderBottomLeftRadius: 20,  // Adjust the radius as needed
        borderBottomRightRadius: 20, // Adjust the radius as needed
        overflow: 'hidden',          // Ensures child content respects rounded corners
      }}>
        <View className='flex-row w-[50%] justify-between'>
          <TouchableOpacity className='justify-center items-center flex' onPress={() => setOnProfile(true)}>
            <Image source={icons.RightArrowIcon} style={{ width: 44, height: 44, tintColor: 'white', transform: [{ scaleX: -1 }] }} />
          </TouchableOpacity>
          <View className='justify-center items-center flex ml-[30px]'>
            <Text className='color-white text-[30px] font-rubik-bold'>Events</Text>
          </View>
        </View>
        <View className='justify-center items-center flex ml-[60px]' style={{ height: 120 }}>
          <View style={{ position: 'absolute', overflow: 'hidden', top: 20, left: -30 }}>
            <Image 
              source={icons.CalendarIcon} 
              style={{ 
                width: 75, 
                height: 75, 
                tintColor: 'white', 
                marginRight: 100,  
                transform: [{ rotate: '-10deg' }], opacity:.7
              }} 
            />
          </View>
          <View style={{ position: 'absolute', overflow: 'hidden', top: -20, left: -10 }}>
            <Image 
              source={icons.CalendarIcon} 
              style={{ 
                width: 85, 
                height: 85, 
                tintColor: 'white', 
                marginLeft: 50, 
                transform: [{ rotate: '30deg' }] , opacity:.7
              }} 
            />
          </View>
          <View style={{ position: 'absolute', overflow: 'hidden', top: 70, left: 40 }}>
            <Image 
              source={icons.CalendarIcon} 
              style={{ 
                width: 80, 
                height: 80, 
                tintColor: 'white', 
                marginRight: 80, 
                transform: [{ rotate: '10deg' }] , opacity:.7
              }} 
            />
          </View>
        </View>
      </View>
      <View>
        <Calender />
      </View>
    </SafeAreaView>
  )
}

export default EventsAll