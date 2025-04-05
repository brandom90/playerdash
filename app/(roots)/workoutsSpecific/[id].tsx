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
    Modal,
    TextInput,
  } from "react-native";
import React, {useState, useEffect} from 'react'
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";

import { weeklyWorkouts } from '../../../dummyData';
const WorkoutToday = () => {
  const [trigger,SetTrigger] = useState(false)
  const [dayModalVisible, setDayModalVisible] = useState(false);
  const [newReps, setNewReps] = useState(0);

  const [weightModalVisible, setWeightModalVisible] = useState(false);
  const [newWeights, setNewWeights] = useState(0);
 
  const { id } = useLocalSearchParams<{ id: string }>();

  const { date } = useLocalSearchParams<{ date: string }>();

  const { day } = useLocalSearchParams<{ day: string }>();


  const [currentPlayerWorkoutSet, setCurrentPlayerWorkoutSet] = useState(weeklyWorkouts.filter(item => item.athleteId == id))
  const [todaysWorkoutList, setTodaysWorkoutList] = useState(currentPlayerWorkoutSet[0].workouts.filter(workout => workout.day == day))

  const newDate = new Date(date.slice(0,10).replace(" ", "T")); 

  
  const formattedDate: string = newDate.toLocaleDateString("en-US", {
    timeZone: "UTC", // Force UTC to prevent shifts (universal time zone)
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "short"
  }).replace(",", "");

  useEffect(() => {
    setCurrentPlayerWorkoutSet(weeklyWorkouts.filter(item => item.athleteId == id))
    setTodaysWorkoutList(currentPlayerWorkoutSet[0].workouts.filter(workout => workout.day == day))
    
  }, [trigger])
  

  const handleSetCheck = (id: number, sets: { Completed: boolean }[]) => {
      sets[id].Completed = !sets[id].Completed;
      SetTrigger(!trigger)
  }

  const [handleSetDetChangeTemp, setHandleSetDetChangeTemp] = useState<{ workoutIndex: number; exerciseName: string; setIndex: number } | null>(null)

  const handleSetDetailChange = (workoutIndex: number, exerciseName: string, setIndex: number, type: string) => {
    // Create a deep copy of todaysWorkoutList
    const updatedWorkouts = [...todaysWorkoutList];

    const exercise = updatedWorkouts[workoutIndex].exercises.find(ex => ex.name === exerciseName);
    if (!exercise) return; // Exit if exercise is not found
    // Create a copy of the sets array
    const updatedSets = [...exercise.sets];
    if (type === "NameVis") {
      exercise.status = !exercise.status
      
    }
    if (type === "reps") {
      // Find the exercise in the workout
      // Update the specific set
      updatedSets[setIndex] = { ...updatedSets[setIndex], reps: newReps };
      // Assign updated sets back to the exercise
      exercise.sets = updatedSets;
      // Update the state
    } else {
      updatedSets[setIndex] = { ...updatedSets[setIndex], weight: newWeights };
      // Assign updated sets back to the exercise
      exercise.sets = updatedSets;
    }
    setTodaysWorkoutList(updatedWorkouts);
    SetTrigger(!trigger); // Force re-render if needed
  };
  
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

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='bg-[black]'>
          <View>
          {todaysWorkoutList.map((item, index) => (
             item.exercises.map((workout, index2) => (
              
                <View  key={index2} className="bg-[#3a4046] border-b-10 border-gray-900">
                  <TouchableOpacity onPress={() => handleSetDetailChange(0, workout.name, index2, 'NameVis')}>
                    <Text className=" p-5 font-rubik-bold text-[20px] color-white">{workout.name}</Text>
                  </TouchableOpacity>
                    {Array.from({ length: workout.sets.length }, (_, i) => {
                        return (
                          workout.status  &&
                            <View key={i} className="bg-[#cccfd3] p-5 flex-row  items-center justify-between">
                                <Text className="font-rubik-bold">{i+1}</Text>
                                <TouchableOpacity className="flex-column items-center" onPress={() => {setWeightModalVisible(true); setHandleSetDetChangeTemp({workoutIndex: 0, exerciseName: workout.name, setIndex: i})}}>
                                  <Text className="color-black font-rubik-bold text-[15px]">{workout.sets[i].weight}</Text>
                                  <Text className="color-gray text-[13px]">LBS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-column items-center" onPress={() => {setDayModalVisible(true); setHandleSetDetChangeTemp({workoutIndex: 0, exerciseName: workout.name, setIndex: i})}}>
                                  <Text className="color-black font-rubik-bold text-[15px]">{workout.sets[i].reps}</Text>
                                  <Text className="color-gray text-[13px]">REP</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="" onPress={() => handleSetCheck(i, workout.sets)}>
                                  <Image
                                    style={{resizeMode: 'contain' }}
                                    source={workout.sets[i].Completed ? icons.CheckedMark : icons.UncheckedMark}
                                    className=" w-10 h-10 "
                                  />
                                </TouchableOpacity>
                            </View>
                          
                        ); 
                    })}
                </View>
              ))
            ))}
          </View>

           {/* Modal stuff*/}
                <Modal
                  animationType="slide" transparent={true} visible={dayModalVisible} onRequestClose={() => setDayModalVisible(false)}
                >
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: 'auto', backgroundColor: '#a8abb0', borderRadius: 10,}}>
                      <View className='w-[100%] bg-[#1e90ff]' style={{borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                        <Text className='pt-5  text-[20px] font-rubik-bold color-white text-center mb-4  w-[80%] mr-auto ml-auto'>Change Reps</Text>
                      </View>
                      <View className='w-[100%]  mt-2 '> 
                       
                        <View style={{ marginTop:15, alignItems:'center', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto'}}>
                          <TextInput
                              className="w-[200px] pt-[20px] pb-[20px] pl-[30px] pr-[30px] bg-white rounded-xl"
                              onChangeText={(text) => setNewReps(Number(text))}
                              placeholder="Input Desired Reps"
                          />
                        </View>
                        <TouchableOpacity
                          onPress={() => { 
                            if (handleSetDetChangeTemp) {
                              setDayModalVisible(false); 
                              handleSetDetailChange(handleSetDetChangeTemp.workoutIndex, handleSetDetChangeTemp.exerciseName, handleSetDetChangeTemp.setIndex, "reps");
                            }
                          }}
                          style={{backgroundColor: '#1e90ff', width: '80%', padding:15, marginBottom:25, justifyContent: 'center',alignItems: 'center',alignSelf: 'center',borderRadius: 10,marginTop: 20,}}
                        >
                          <Text style={{ color: 'white', fontSize: 16 }} className='font-rubik-bold'>Confirm</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>

                <Modal
                  animationType="slide" transparent={true} visible={weightModalVisible} onRequestClose={() => setWeightModalVisible(false)}
                >
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: 'auto', backgroundColor: '#a8abb0', borderRadius: 10,}}>
                      <View className='w-[100%] bg-[#1e90ff]' style={{borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                        <Text className='pt-5  text-[20px] font-rubik-bold color-white text-center mb-4  w-[80%] mr-auto ml-auto'>Change Weights</Text>
                      </View>
                      <View className='w-[100%]  mt-2 '> 
                       
                        <View style={{ marginTop:15, alignItems:'center', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto'}}>
                          <TextInput
                              className="w-[200px] pt-[20px] pb-[20px] pl-[30px] pr-[30px] bg-white rounded-xl"
                              onChangeText={(text) => setNewWeights(Number(text))}
                              placeholder="Input Desired Weight"
                          />
                        </View>
                        <TouchableOpacity
                          onPress={() => { 
                            if (handleSetDetChangeTemp) {
                              setWeightModalVisible(false); 
                              handleSetDetailChange(handleSetDetChangeTemp.workoutIndex, handleSetDetChangeTemp.exerciseName, handleSetDetChangeTemp.setIndex, 'weights');
                            }
                          }}
                          style={{backgroundColor: '#1e90ff', width: '80%', padding:15, marginBottom:25, justifyContent: 'center',alignItems: 'center',alignSelf: 'center',borderRadius: 10,marginTop: 20,}}
                        >
                          <Text style={{ color: 'white', fontSize: 16 }} className='font-rubik-bold'>Confirm</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
        </ScrollView>
    </SafeAreaView>
  )
}

export default WorkoutToday