import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native';

import { weeklyWorkouts } from '../../../dummyData';
import icons from '@/constants/icons';
import { router } from 'expo-router';


const WorkoutList = () => {
  
  const [isGrid, setIsGrid] = useState(false);


  const currentPlayerId = "athlete1"

  const currentPlayerWorkoutSet = weeklyWorkouts.filter(item => item.athleteId == currentPlayerId)

  const handleDetailsPress = (id: string, date: string, day: string) => {

    router.push(`../workoutsSpecific/${id}?date=${date}&day=${day}`);
  };
  


  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <StatusBar barStyle="light-content" />
      <View className='bg-[#4A759A] flex-1'>

      <View className='border-black pb-5'>
        <View className=" items-center bg-[#4A759A] mr-5 ml-5 mt-6 flex-row justify-between">
          
          <Text className="text-center text-black font-rubik-bold text-[21px] color-white">Weekly Workouts</Text>
          <TouchableOpacity onPress={() => setIsGrid(!isGrid)} >
            {isGrid ? (
              // 2x2 grid "icon"
              <>
                <View className=" w-7 h-4 flex flex-row">
                  <View className="w-3 h-3 bg-white m-0.5" />
                  <View className="w-3 h-3 bg-white m-0.5" />
                </View>
                <View className=" w-7 h-4 flex flex-row">
                <View className="w-3 h-3 bg-white m-0.5" />
                <View className="w-3 h-3 bg-white m-0.5" />
                </View>
              </>
            ) : ( 
              <Image
                source={icons.menu}
                className="w-7 h-7"
                style={{ resizeMode: 'contain', tintColor:'white'  }}
              />
            )}
          </TouchableOpacity>
        </View>
       
        </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='bg-[#3a4046]'>
        <View className=' pt-2 bg-[#3a4046] flex-1'>
          { isGrid ?
            <View className='flex-row flex-wrap'>
              {currentPlayerWorkoutSet.map((item) => (
                item.workouts.map((workout, index) => (
                  <View key={index} className="w-1/2 p-.5"> 
                    <View key={index} className="bg-white p-5 m-2 rounded-lg h-[150px]">
                      <Text className="text-center text-black font-rubik-bold" style={{ fontSize: 22 }}>{workout.day}</Text>
                      <Text className="text-center text-black font-rubik-medium" style={{ fontSize: 17 }}>{workout.category}</Text>
                      <TouchableOpacity onPress={() => handleDetailsPress(item.athleteId, workout.date, workout.day)} style={{ backgroundColor: '#1e90ff', padding: 10, borderRadius: 5, marginTop: 10 }}>
                        <Text style={{ color: 'white', textAlign: 'center' }} className='text-[17px] font-rubik-medium'>Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
              ))}
            </View>
          : (
            <>
            {currentPlayerWorkoutSet.map((item) => (
              item.workouts.map((workout, index) => (
                <TouchableOpacity key={index} onPress={() => handleDetailsPress(item.athleteId, workout.date, workout.day)}>
                <View key={index} className="bg-white p-5 m-2 rounded-lg">
                  <Text className="text-center text-black font-rubik-bold" style={{ fontSize: 22 }}>{workout.day}</Text>
                  <Text className="text-center text-black font-rubik-medium" style={{ fontSize: 17 }}>{workout.category}</Text>
                  <View className='flex-col mt-2'>
                      {workout.exercises.map((exercise, index) => (
                        <Text key={index} className={`pt-2 pb-2 rounded-xl text-center text-black ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>    
                          • {exercise.name}
                        </Text>
                      ))}
                  </View>
                </View>
                </TouchableOpacity>
              ))
            ))}
          </>
          )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutList;