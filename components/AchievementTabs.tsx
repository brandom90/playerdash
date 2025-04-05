import { View, Text,Image } from 'react-native'
import React from 'react'
import { achivements } from '@/dummyData'
import icons from '@/constants/icons'
//ThropyIcon
const AchievementTabs = () => {
  const filteredAchivements = achivements.filter(item => item.athleteId === 'athlete1')
  return (
    <View>
      {
        filteredAchivements.map((item) => (
          <View key={item.id}className=' flex-row items-center p-4 bg-[#C01010] rounded-xl m-3'>
            <View className='mr-2'>
                <Image source={icons.ThropyIcon} className="w-10 h-10"style={{ resizeMode: 'contain', tintColor:'black'  }}/>
            </View>
            <View>
                <Text className='font-rubik-bold text-[16px]'>{item.name}</Text>
                <Text>Achieved: {item.timestamp.slice(0,10)}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default AchievementTabs