import { Link, router, useLocalSearchParams } from 'expo-router';
import { Text, View, FlatList, SafeAreaView, Button, TouchableOpacity, StatusBar, Image, Modal, TextInput } from "react-native";
import NoResults from "@/components/NoResults";
import Events from '@/components/Events';
import {  Event, announcements, athletes,weeklyWorkouts } from '../../../dummyData';
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
  
  //This checks if The user has been in the dashboard when they clicked into EventsAll (I had to make this roundabout path because I didn't plan for Events)
  //All page to be accessed from other ways
  const handleEventsAllPagePress = () => {
    router.push(`/profileTabs/EventsAll`);
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

// all for notifications
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
    
 // placeholder to find the current logged in user, will change once I add auth (it'll be more like how we used Bundlr)
  const currentUser = athletes.find(item => item.id == 'athlete1')

  // Workout Category puller
  const currentPlayerWorkoutSet = weeklyWorkouts.filter(item => item.athleteId == 'athlete1')

  const EventAvailable = Event.filter(item => item.type == 'event')
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} className="flex justify-center items-center bg-black">
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        {/* IN APP NOTIFICATION POPUPS*/}
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
              <View className='mt-[20px] mr-auto '>
                <Text className='text-[13px] font-rubik-bold color-white' style={{opacity:.4}}>Welcome, {currentUser?.name}</Text>
                <Text className='text-[25px] font-rubik-semibold color-white' style={{marginTop:-5}}>Dashboard</Text>
              </View>
              {/* First Divider */}
              <View style={{borderRadius: 5, height:5, width: '100%', backgroundColor: '#3A3939', marginVertical:2}}/>

              <View className=" rounded-xl w-full mt-[2%] mb-[2%]">
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
                  <Text className="font-rubik-medium text-[17px]  color-[white]">Upcoming Events</Text>
                  <TouchableOpacity onPress={() => { handleEventsAllPagePress(); }}>
                    <Text className="font-rubik-medium text-[14px]  color-[#FFD700]" style={{opacity:.7}}>See All</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-col w-full ">
                  {EventAvailable.length > 0 ? (
                    <View style={{ flexDirection: "column", marginBottom:'2%' }}>
                      {Event.slice(0, 3).map((item, key) => (
                        item.type === "event" &&
                        <Events
                          key={item.id} // Ensure a unique key
                          item={item}
                          onPress={() => handleEventPress(item.id.toString())}
                        />
                      ))}
                    </View>
                  ) : (
                    <View className="flex items-center p-2">
                      <Text style={{ fontFamily: 'Rubik-SemiBold', color: '#FFD700', fontSize: 16 }}>
                        No Results
                      </Text>
                      <Text className="text-base text-black-100 mt-2">
                        No events scheduled currently
                      </Text>
                    </View>
                  )}
                </View>
              </View>
               {/* Second Divider */}
              <View style={{borderRadius: 5, height:5, width: '100%', backgroundColor: '#3A3939'}}/>

              <View className=" rounded-xl h-auto"  style={{marginBottom:'5%', }}>
                <Text style={{  marginTop:'3%',marginBottom:'3%', fontFamily: 'Rubik-SemiBold', color: 'white', fontSize: 17 }}>
                  Today's Workout
                </Text>
                <View style={{ padding:15,flex: 1, height: 'auto', backgroundColor: "#333333", justifyContent: 'center',  borderRadius: 5 }}>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:'-2%'}}>
                    <Text style={{ fontFamily: 'Rubik-SemiBold', color: 'white', fontSize: 25,textAlign:'left' }}>
                      {currentPlayerWorkoutSet[0].workouts[0].category}
                    </Text>
                    <Image source={icons.dumbell} style={{width:34, height:34, tintColor:'#FFD700', marginRight:10 }} />
                  </View>
                  <TouchableOpacity onPress={() => handleWorkoutPagePress()} style={{width:'50%',backgroundColor:'#FFD700', padding:10, borderRadius:5, marginTop:'2%'}}>
                    <Text style={{ color: 'black', textAlign:'center' }} className='font-rubik-semibold text-[15px]'>Go to Workout</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
               {/* 3rd Divider */}
              <View style={{borderRadius: 5, height:5, width: '100%', backgroundColor: '#3A3939'}}/>

              <View className=" rounded-xl w-full h-auto" style={{marginTop:'3%',}}>
                <Leaderboard />
              </View>

               {/* 4th Divider */}
              <View style={{borderRadius: 5, height:5, width: '100%', backgroundColor: '#3A3939'}}/>

              <View className="b w-full  h-auto mb-20" style={{marginTop:'3%',}}>
                <Improvements player={"athlete2"} />
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

          }
        />
       
      </SafeAreaView>
      
    </GestureHandlerRootView>

    
  );
}
