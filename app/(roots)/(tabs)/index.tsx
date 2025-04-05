import { Link, router, useLocalSearchParams } from 'expo-router';
import { Text, View, FlatList, SafeAreaView, Button, TouchableOpacity, StatusBar, Image, Modal, TextInput } from "react-native";
import NoResults from "@/components/NoResults";
import Events from '@/components/Events';
import {  events, announcements } from '../../../dummyData';
import Leaderboard from '@/components/Leaderboard';
import ProgressBars from '@/components/ProgressBars';
import Improvements from '@/components/Improvements';
import WorkoutList from '@/app/(roots)/(tabs)/WorkoutList';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import icons from '@/constants/icons';
import { useEffect, useState } from 'react';

export default function Index() {
  const placeholder = [""];
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const [annoucementVis, setAnnoucementVis] = useState(false)
  const handleEventPress = (id: string) => router.push(`./specEvent/${id}`);

  function getTodayDateFormatted(): string {
    const today = new Date();
    return today.toLocaleDateString('en-CA').slice(0, 10); // 'en-CA' uses YYYY-MM-DD format
  }

  const handleWorkoutPagePress = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

    console.log("athlete1", getTodayDateFormatted(), dayOfWeek);

    router.push(`../workoutsSpecific/${"athlete1"}?date=${getTodayDateFormatted()}&day=${dayOfWeek}`);
  };

  const filteredAnnouncements = announcements.filter(announcement =>
    announcement.recipients.some(recipient => recipient.id === "athlete1" && recipient.status === false)
  );

  //
  // animated stuff
  //
  const SWIPE_THRESHOLD = 150;
  // Track the offset for each notification, by having each item of filtered messages have its own sharedVal
  const notificationOffsets = filteredAnnouncements.map(() => useSharedValue(0)); 

  const isPressed = useSharedValue(false); // Track if a gesture is being performed
  const start = useSharedValue(0); // Starting position for the swipe

  // Animated style for each notification
  const animatedStyles = (index: number) => useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: notificationOffsets[index].value },
      ],
    };
  });

  const gesture = (index: number) => Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
      start.value = notificationOffsets[index].value; // Save the starting offset when swipe begins
    })
    .onUpdate((e) => {
      // Update the offset as the user swipes
      notificationOffsets[index].value = e.translationX + start.value;
    })
    .onEnd(() => {
      // If the swipe distance exceeds the threshold, commit to removing the notification
      if (Math.abs(notificationOffsets[index].value) > SWIPE_THRESHOLD) {
        notificationOffsets[index].value = withTiming(notificationOffsets[index].value > 0 ? 500 : -500, { duration: 300 }); // Slide off-screen
        const recipient = announcements[index].recipients.find(recipient => recipient.id === "athlete1");
        if (recipient) {
          recipient.status = true;
        }
      } else {
        // If not, return to the original position
        notificationOffsets[index].value = withSpring(0, { damping: 10, stiffness: 100 });
      }
      isPressed.value = false;
    })
    .onFinalize(() => {
      isPressed.value = false;
    });


  const [annoucementMessage, setAnnoucementMessage] = useState('')
  const [annoucementIndex, setAnnoucementIndex] = useState(0)
  const singleTap = (annoucement: string, key: number) => Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      runOnJS(setAnnoucementVis)(true);
      runOnJS(setAnnoucementMessage)(annoucement)
      runOnJS(setAnnoucementIndex)(key)
      const recipient = announcements[key].recipients.find(recipient => recipient.id === "athlete1");
      notificationOffsets[key].value = withTiming(notificationOffsets[key].value > 0 ? 500 : -500, { duration: 300 }); 
      if (recipient) {
        recipient.status = true;
      }
    })
    
 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} className="flex justify-center items-center bg-black">
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        {filteredAnnouncements.map((item, key) => (
    
          <GestureDetector key={key} gesture={Gesture.Exclusive(gesture(key), singleTap(item.message, key))}>
              <Animated.View
                className="absolute  left-[auto] right-[auto] bg-[#001F3F] rounded-lg w-[95%] h-[auto] items-center z-50 p-5 flex-row justify-center items-center"
                style={[{ top: `${key * 15}%` }, animatedStyles(key)]}  // Dynamic offset for each item
              > 
                
                <Image source={icons.WarningIcon} className="w-8 h-8 color-white" style={{ tintColor: 'white',resizeMode: 'contain' }} />
                  <View className='ml-5 w-[80%]'>
                    <Text className="text-white text-center font-rubik-bold text-[17px] ">
                      {item.coach}
                    </Text>
                    <Text className="text-white text-center ">
                      {item.message}
                    </Text>
                  </View>
              </Animated.View>  
            </GestureDetector>
        ))}
        <FlatList
          data={placeholder}
          renderItem={({ item }) => <Text>{item}</Text>}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 32 }}
          columnWrapperStyle={{ flexDirection: 'row', gap: 5, paddingHorizontal: 5 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoResults />}
          ListHeaderComponent={
            <View className='bg-black mt-1 mb-5'>
              <View className='mt-2 mr-auto ml-auto'>
                <Text className='text-[20px] font-rubik-bold color-white'>Dashboard</Text>
              </View>
              <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-3 mt-3">
                
       

                <Text className="font-rubik-bold text-[22px] ml-5 color-[white]">Upcoming Events</Text>
                <View className="flex flex-col w-full  h-30">
                  {events.length > 0 ? (
                    <View style={{ flexDirection: "column", backgroundColor:'#3a4046' }}>
                      {events.slice(0, 3).map((item, key) => (
                        item.type === "event" &&
                        <Events
                          key={item.id} // Ensure a unique key
                          item={item}
                          onPress={() => handleEventPress(item.id.toString())}
                        />
                      ))}
                    </View>
                  ) : (
                    <NoResults />
                  )}
                </View>
              </View>

              <View className="shadow-md shadow-zinc-600 rounded-xl   mt-3 h-auto">
                <TouchableOpacity onPress={() => handleWorkoutPagePress()} style={{ flex: 1, marginHorizontal: 0, height: 70, backgroundColor: "#1e90ff", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                  <Text style={{ color: 'white' }} className='font-rubik-bold text-[18px]'>Go to your workouts</Text>
                </TouchableOpacity>
              </View>

              <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
                <Leaderboard />
              </View>
              <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
                <ProgressBars amount={3} color={'blue'}/>
              </View>
              <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
                <Improvements player={"athlete2"} />
              </View>

              <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto mb-20">
                <View style={{ justifyContent: 'space-between', margin: 10,  }}>
                  <Text className='font-rubik-bold text-[18px] text-center ml-auto mr-auto color-white'>Want to help your team? Donate!</Text>
                  <TouchableOpacity style={{ flex: 1, marginHorizontal: 5, height: 50, backgroundColor: "#1e90ff", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white' }} className='font-rubik-bold text-[18px]'>Donate</Text>
                  </TouchableOpacity>
                </View>
              <Modal
                animationType="slide" transparent={true} visible={annoucementVis} onRequestClose={() => setAnnoucementVis(false)}
              >
                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <View style={{ width: '90%', height: '50%', backgroundColor: '#fff', borderRadius: 10,  shadowColor: '#000',}}>



                      <View className='w-[100%] bg-[#1e90ff]' style={{borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                        <Text className='pt-5  text-[20px] font-rubik-bold color-white text-center mb-4  w-[80%] mr-auto ml-auto'>Change Weights</Text>
                      </View>
                      <View className='w-[100%]  mt-2 '>       
                        <View style={{ marginTop:15, alignItems:'center', width: '80%', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto'}}>
                          <Text className='font-rubik-bold text-[20px]'>{annoucementMessage}</Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => { 
                            setAnnoucementVis(false); 
                          }}
                          style={{ backgroundColor: '#1e90ff', width: '80%', padding:15, marginBottom:25, justifyContent: 'center',alignItems: 'center',alignSelf: 'center',borderRadius: 10,marginTop: 30,}}
                        >
                          <Text style={{ color: 'white', fontSize: 16 }} className='font-rubik-bold'>Confirm</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>     
            </View>

          }
        />
       
      </SafeAreaView>
      
    </GestureHandlerRootView>

    
  );
}
