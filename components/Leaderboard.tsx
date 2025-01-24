
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { athletes, LeaderboardType } from '../dummyData';
import NoResults from './NoResults';
import icons from "@/constants/icons";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming 
} from 'react-native-reanimated';

const Leaderboard = () => {

  const { width } = Dimensions.get('window');

  const offsetX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }],
      zIndex: 2
    };
  });


  const [currentItem, setCurrentItem] = useState(0)
  const data = [
    { id: '1', label: 'Strength', rank: athletes[0].previousRanks.strength, icon: icons.strength },
    { id: '2', label: 'Power', rank: athletes[0].previousRanks.power, icon: icons.power },
    { id: '3', label: 'Explosiveness', rank: athletes[0].previousRanks.explosive, icon: icons.explosive },
    { id: '4', label: 'Speed', rank: athletes[0].previousRanks.speed, icon: icons.speed },
  ];

  const handleRankChange = (choice: string) => {
    offsetX.value = withTiming(-width, { duration: 250 }, () => {
      // Reset position and update item
      offsetX.value = width;
      offsetX.value = withTiming(0, { duration: 250 });
    });

    if (choice === 'inc') {
      if (currentItem !== 3) {
        setCurrentItem((prev) => prev + 1);
      } else {
        setCurrentItem(0);
      }
    } else if (choice === 'des') {
      if (currentItem !== 0) {
        setCurrentItem((prev) => prev - 1);
      } else {
        setCurrentItem(3);
      }
    }
  };
  
  
  return (
    <View style={{ zIndex: 2,}}>
      <Text className="font-rubik-bold text-[22px] ml-5 color-white">Rankings</Text>
      <View className="w-full mt-2">
        <View className="flex flex-row items-center justify-center mb-[5%]">
          <TouchableOpacity onPress={() => { handleRankChange('des') }} className='mr-[60px]'  style={{ zIndex: 5 }}>
            <Image source={icons.nextIcon} className="w-[30px] h-[35px]" resizeMode="contain" />
          </TouchableOpacity>
          <Animated.View style={[animatedStyle, { width: 100, padding: 0, margin: 0 }]}>
            <View  className="bg-gray-500 border-black border-4 pb-[4.25%] pt-[1.25%] rounded-xl p-4 flex justify-center items-center relative">
              <Text className="color-white text-center font-rubik-bold text-[60px]">{data[currentItem].rank}</Text>
              <Image
                source={data[currentItem].icon}
                className={`absolute ${data[currentItem].icon === icons.power ? 'top-[-20px]' : 'top-[-25px]'} left-1/2 transform ${data[currentItem].icon === icons.explosive ? '-translate-x-[43%]' : '-translate-x-[42%]'} h-[180px] ${data[currentItem].icon === icons.explosive ? 'w-[190px]' : 'w-[160px]'}`}
                resizeMode="contain"
              />
            </View>
          </Animated.View>
          <TouchableOpacity onPress={() => { handleRankChange('inc') }} className='ml-[60px]'>
            <Image style={[{ transform: [{ scaleX: -1 }] }]} source={icons.nextIcon} className="w-[30px] h-[35px]" resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Leaderboard

