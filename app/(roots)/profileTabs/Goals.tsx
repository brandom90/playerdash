import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProgressBars from '@/components/ProgressBars';
import GoalTabs from '@/components/GoalTabs';
import icons from '@/constants/icons';
import AchievementTabs from '@/components/AchievementTabs';

interface GoalsProps {
  setOnProfile: (value: any) => void; 
}

const Goals: React.FC<GoalsProps> = ({setOnProfile}) => {
  const [isGrid, setIsGrid] = useState(true);

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View>
        <View className='flex justify-content items-center p-3'>
          <Text className='font-rubik-bold text-[32px] color-white'>Your Progress</Text>
        </View>
        <View className='bg-[#C9A227] rounded-xl'>
          <ProgressBars amount={3} color={'gold'}/>
        </View>
        <View className='flex justify-content items-center p-3'>
          <Text className='font-rubik-bold text-[32px] color-white'>Goals</Text>
        </View>
        <View className='bg-[#C9A227] rounded-xl'>
          <View className='p-3'>
          <View className='flex-row items-center justify-between'>
            <TouchableOpacity onPress={() => setIsGrid(!isGrid)} >
              {isGrid ? (
                // 2x2 grid "icon"
                <View>
                  <View className=" w-7 h-4 flex flex-row"><View className="w-3 h-3 bg-black m-0.5" /><View className="w-3 h-3 bg-black m-0.5" /></View>
                  <View className=" w-7 h-4 flex flex-row"><View className="w-3 h-3 bg-black m-0.5" /><View className="w-3 h-3 bg-black m-0.5" /></View>
                </View>
              ) : ( 
                <Image source={icons.menu}className="w-7 h-7"style={{ resizeMode: 'contain', tintColor:'black'  }}/>)}
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={icons.PlusIcon} className='size-8' style={{tintColor: 'black' }}/>
            </TouchableOpacity>
            </View>
            <GoalTabs isGrid={isGrid}/>
          </View>
        </View>

        <View className='flex justify-content items-center p-3'>
          <Text className='font-rubik-bold text-[32px] color-white'>Achievements</Text>
        </View>
        <View className='bg-[#C9A227] rounded-xl'>
          <AchievementTabs />
        </View>
        <View className='flex justify-content items-center p-3'>
          <Text className='font-rubik-bold text-[32px] color-white'>Coach Feedback</Text>
        </View>
        <View className='bg-[#C9A227] rounded-xl'>
          <View className='justify-center items-center'>
            <Text className='text-[20px] font-rubik-bold '>No data</Text>
          </View>
        </View>
       <View className='flex justify-center items-center p-5 mb-[70px]'>
          <TouchableOpacity style={{elevation: 15, shadowColor: '#000',shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.8,shadowRadius: 1,backgroundColor: '#C01010',borderRadius: 12,padding: 16,paddingLeft: 40,paddingRight: 40,}}onPress={() => setOnProfile(true)}>
            <Text className='color-black font-rubik-bold text-[17px]'>Return</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView >
    </SafeAreaView>
  )
}

export default Goals