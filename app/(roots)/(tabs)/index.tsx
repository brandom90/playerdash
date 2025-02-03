import { Link, router, useLocalSearchParams } from 'expo-router';
import { Text, View, FlatList, SafeAreaView, Button, TouchableOpacity, StatusBar } from "react-native";
import NoResults from "@/components/NoResults";
import Events from '@/components/Events';
import {  events } from '../../../dummyData';
import Leaderboard from '@/components/Leaderboard';
import ProgressBars from '@/components/ProgressBars';
import Improvements from '@/components/Improvements';
import WorkoutList from '@/app/(roots)/WorkoutList';

export default function Index() {
  const placeholder = [""]
  const params = useLocalSearchParams<{ query?: string; filter?: string}>();
  const handleEventPress = (id: string) => router.push(`./specEvent/${id}`)

  const handleWorkoutPagePress = () => router.push(`./WorkoutList/`)
  return (
    <SafeAreaView style={{ flex: 1}} className="bg-black">
      {/* top bar of the site that is just added with my say so*/}
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View className=' mt-2 mr-auto ml-auto'>
        <Text className='text-[20px] font-rubik-bold color-white'>Dashboard</Text>
      </View>
      <FlatList
        data={placeholder}
        renderItem={({ item }) => <Text>{item}</Text>}
        numColumns={2}
 
        contentContainerStyle={{ paddingBottom: 32 }}
        columnWrapperStyle={{ flexDirection: 'row', gap: 5, paddingHorizontal: 5 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoResults />}

        ListHeaderComponent={
          <View className='bg-black mt-1 mr-5 mb-5 ml-5'>
            <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-3 mt-3">
              <Text className="font-rubik-bold text-[22px] ml-5 color-[white]">Upcoming Events</Text>
              <View className="flex flex-col w-full  h-30">
           

              {events.length > 0 ? (
                <View style={{ flexDirection: "column", backgroundColor:'#3a4046',  }}>
                  {events.slice(0,3).map((item, key) => (
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
              <TouchableOpacity  onPress={() => handleWorkoutPagePress()} style={{ flex: 1, marginHorizontal: 0, height: 70,backgroundColor: "#1e90ff", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white' }} className='font-rubik-bold text-[18px]'>Go to your workouts</Text>
              </TouchableOpacity>
            </View>
            

            <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
              <Leaderboard />
            </View>
            <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
              <ProgressBars amount={3} />
            </View>
            <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
              <Improvements player={"athlete2"}/>
            </View>

            <View className="bg-[#3a4046] shadow-md shadow-zinc-600 rounded-xl w-full py-5 mt-3 h-auto">
              <View style={{ justifyContent: 'space-between', margin: 10 }}>
              <Text className='font-rubik-bold text-[18px] text-center ml-auto mr-auto color-white'>Want to help your team? Donate!</Text>
                <TouchableOpacity style={{ flex: 1, marginHorizontal: 5, height: 50,backgroundColor: "#1e90ff", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                  <Text style={{ color: 'white' }} className='font-rubik-bold text-[18px]'>Donate</Text>
                </TouchableOpacity>
              
              </View>
              </View>
            </View>
            
        
        }
      />
    </SafeAreaView>
  );
}
