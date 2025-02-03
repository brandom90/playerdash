import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Platform,
    StatusBar,
    SafeAreaView,
  } from "react-native";
import React from 'react'
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";

import { weeklyWorkouts } from '../../../dummyData';
const WorkoutToday = () => {

  const { id } = useLocalSearchParams<{ id: string }>();

  const { date } = useLocalSearchParams<{ date: string }>();

  const { day } = useLocalSearchParams<{ day: string }>();
 
  const currentPlayerWorkoutSet = weeklyWorkouts.filter(item => item.athleteId == id)
  const todaysWorkoutList = currentPlayerWorkoutSet[0].workouts.filter(workout => workout.day == day)

  const newDate = new Date(date.replace(" ", "T")); 
  const options: Intl.DateTimeFormatOptions = { 
    month: "short", 
    day: "numeric", 
    year: "numeric", 
    weekday: "short" 
  };

  const formattedDate: string = newDate.toLocaleDateString("en-US", options).replace(",", "");
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <StatusBar barStyle="light-content" />
         <View className='bg-black'>
          <View className='border-b-2 border-black'>
            <View className=" items-center bg-black mr-5 p-2 flex-row ">
              <TouchableOpacity onPress={() => router.back()}>
                <Image source={icons.nextIcon} className="w-10 h-10 color-black" style={{resizeMode: 'contain' }} />
              </TouchableOpacity>
              <Text className="text-center text-white font-rubik-bold text-[24px] ml-[47px]">{formattedDate}</Text>
            </View>
          </View>
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='bg-[#3a4046]'>
          <View>
          {todaysWorkoutList.map((item, index) => (
             item.exercises.map((workout, index2) => (
              <TouchableOpacity key={index2}>
                <View  className="bg-[#3a4046] border-b-10 border-gray-900">
                   
                       
                      <Text className=" p-5 font-rubik-bold text-[20px] color-white">{workout.name}</Text>

                        {Array.from({ length: workout.sets }, (_, i) => {
                            
                            return (
                                <View key={i} className="bg-[#cccfd3] p-5 flex-row  items-center justify-between">
                                    <Text>{i+1}</Text>
                                </View>
                            ); 
                        })}
                </View>
              </TouchableOpacity>
              ) )
            ))}
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default WorkoutToday