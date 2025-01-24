import { View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity, ScrollView, ImageBackground, Modal } from 'react-native';
import React, { useState } from 'react';
import { weeklyWorkouts } from '../../../dummyData';
import ProgressBars from '@/components/ProgressBars';
import NoResults from '@/components/NoResults';
import images from "@/constants/images";
import AnalyticsWorkout from '@/components/AnalyticsWorkout';

interface Workout {
  day: string;
  category: string;
  exercises: string[];
  complete?: boolean; // Optional property
}

const WorkoutScreen = () => {
  const [dayModalVisible, setDayModalVisible] = useState(false);
  const [dayModalData, setDayModalData] = useState<Workout | null>(null);

  const filteredWeekly = weeklyWorkouts.filter(item => item.athleteId === "athlete1");
  
  const handleEventPress = (item: Workout) => { setDayModalVisible(true); setDayModalData(item); };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View className='mt-5 mr-auto mb-5 ml-auto'>
        <Text className='text-[20px] font-rubik-bold color-white'>Your Workouts</Text>
      </View>
      <ScrollView>
        <View>
          <View className='mt-5 pt-5 bg-[#3a4046] h-[100%]'>
            <ProgressBars amount={1} />
            <TouchableOpacity style={{ marginBottom: 0, marginTop: 20, marginRight: "auto", marginLeft: "auto", flex: 1, width: '100%', height: 60, maxHeight: 60, backgroundColor: "#1e90ff", justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }} className='font-rubik-bold text-[18px]'>Go to today's workout</Text>
            </TouchableOpacity>
            <View className='mt-7'>
              <FlatList
                data={filteredWeekly[0].workouts}
                keyExtractor={(item) => item.day} 
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleEventPress(item)}>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, borderRadius: 10, marginHorizontal: 5 }}>
                      <ImageBackground
                        source={item.complete ? images.finishedWorkout : images.workoutBox}
                        style={{ width: 110, height: 100, justifyContent: 'center', alignItems: 'center' }}
                        imageStyle={{ borderRadius: 10, borderWidth: 2, borderColor: 'black' }}
                      >
                        <Text className='text-center font-rubik-bold text-[17px]'>{item.day}</Text>
                        <Text className='mt-2 text-center font-rubik-bold'>{item.complete ? 'COMPLETED' : item.category}</Text>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 32 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<NoResults />}
                horizontal
              />

              <View className='flex justify-center items-center'>
                <AnalyticsWorkout />
              </View>
            </View>
          </View>
        </View>
  {/* Modal stuff*/}
      <Modal
        animationType="slide" transparent={true} visible={dayModalVisible} onRequestClose={() => setDayModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '80%', height: '60%', backgroundColor: '#a8abb0', borderRadius: 10,}}>
            <View className='w-[100%] bg-[#1e90ff]' style={{borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
              <Text className='pt-5  text-[20px] font-rubik-bold color-white text-center mb-4  w-[80%] mr-auto ml-auto'>{dayModalData?.day}</Text>
            </View>
            <View className='w-[100%] flex-1 mt-2'> 
              <Text className='text-[20px] font-rubik-medium color-black text-center'>Your Workouts</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%'}}>
                {dayModalData?.exercises.map((item, key) => (
                  <View key={key} style={{ borderRadius: 10, backgroundColor: 'white', width: '40%', margin: 5, height: '30%',display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text className='text-center'>{item}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                onPress={() => setDayModalVisible(false)}
                style={{backgroundColor: '#1e90ff', width: '80%',height: '20%',justifyContent: 'center',alignItems: 'center',alignSelf: 'center',borderRadius: 10,marginTop: 20,}}
              >
                <Text style={{ color: 'white', fontSize: 16 }} className='font-rubik-bold'>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutScreen;