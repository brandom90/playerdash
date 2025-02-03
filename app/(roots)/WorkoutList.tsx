import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native';

import { weeklyWorkouts } from '../../dummyData';
import icons from '@/constants/icons';
import { router } from 'expo-router';


const WorkoutList = () => {
  
  const [isGrid, setIsGrid] = useState(false);


  const currentPlayerId = "athlete1"

  const currentPlayerWorkoutSet = weeklyWorkouts.filter(item => item.athleteId == currentPlayerId)

  const handleDetailsPress = (id: string, date: string, day: string) => {

    router.push(`./workoutsSpecific/${id}?date=${date}&day=${day}`);
  };
  



  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <StatusBar barStyle="light-content" />
      <View className='bg-white flex-1'>

      <View className='border-b-2 border-black'>
        <View className=" items-center bg-white mr-5 ml-5 mt-6 flex-row justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.nextIcon} className="w-10 h-10 color-white" style={{resizeMode: 'contain' }} />
          </TouchableOpacity>
          <Text className="text-center text-black font-rubik-bold text-[24px]">Weekly Workouts</Text>
          <TouchableOpacity onPress={() => setIsGrid(!isGrid)} >
            {isGrid ? (
              // 2x2 grid "icon"
              <>
                <View className=" w-7 h-4 flex flex-row">
                  <View className="w-3 h-3 bg-black m-0.5" />
                  <View className="w-3 h-3 bg-black m-0.5" />
                </View>
                <View className=" w-7 h-4 flex flex-row">
                <View className="w-3 h-3 bg-black m-0.5" />
                <View className="w-3 h-3 bg-black m-0.5" />
                </View>
              </>
            ) : ( 
              <Image
                source={icons.menu}
                className="w-7 h-7"
                style={{ resizeMode: 'contain',  }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-2 mb-2 ">
          <Text className=" bg-gray-400 rounded-full p-2 w-[45%] text-center text-black mr-2 font-rubik-bold">Current Week</Text>
          <Text className=" bg-gray-400 rounded-full p-2 w-[45%] text-center text-black font-rubik-bold">Past Week</Text>
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
                <TouchableOpacity key={index}>
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