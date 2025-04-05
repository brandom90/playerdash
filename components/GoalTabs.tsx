import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import { personalGoals } from '@/dummyData'
import icons from '@/constants/icons'

interface gridProps {
    isGrid:boolean
}
const GoalTabs = (isGrid: gridProps) => {
  const filteredPersonalGoals = personalGoals.filter(item => item.athleteId === 'athlete1')

  return (
    <View>
       <View className=' pt-2 flex-1'>
        { isGrid.isGrid ?
          <View className='flex-row flex-wrap'>
            {filteredPersonalGoals.map((item) => (
            <View key={item.id} className="w-[45%] p-.5 bg-[#C01010] m-2 rounded-xl p-2 flex justify-center items-center"> 
                <Text  className='font-rubik-bold text-center'>
                    {item.title}
                </Text>
                <View className='bg-black rounded-xl p-1 w-[100%] flex justify-center items-center'>
                    <Text className='color-white'>{item.currentValue} / {item.targetValue}</Text>
                </View>
            </View>
            ))}
          </View>

        : (
          <>
          {filteredPersonalGoals.map((item) => (
              <TouchableOpacity key={item.id} className='bg-[#C9A227] mb-2' style={{borderRadius: 5}}>
                <View className='bg-black'style={{borderRadius: 5}}>
                    <View className=' flex-row p-2 justify-between' >
                        <Text className='color-white mr-2'>{item.title}</Text>
                        <Text className='bg-[#C01010] color-white rounded p-1'>{item.category}</Text>
                    </View>
                    <View className='bg-[#C01010] flex-row justify-center items-center p-2' style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                        <Text className='bg-black color-white rounded-xl p-2 mr-5'>{item.currentValue} / {item.targetValue} {item.unit}</Text> 
                        <Text className='bg-black color-white rounded-xl p-2 '>{item.timestamp.slice(0,10)}</Text> 
                    </View>
                </View>
              </TouchableOpacity>
          ))}
        </>
        )}
      </View>
    </View>
  )
}

export default GoalTabs