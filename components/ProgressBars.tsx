import { View, Text, Animated, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, } from 'react-native';
import React, { useState, useEffect, useRef} from 'react';
import Svg, { Circle, Text as SvgText } from 'react-native-svg'; // Import necessary components
import { FontAwesome } from '@expo/vector-icons'; // Import an icon library

// Create an animated version of the Circle component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ProgressBarsProps {
  amount: number;
  color: string
}

const ProgressBars: React.FC<ProgressBarsProps> = ({ amount, color }) => {
  const [athleticProgress, setAthleticProgress] = useState(0); // State to hold the progress percentage
  const [gameProgress, setGameProgress] = useState(0);
  const [practiceProgress, setPracticeProgress] = useState(0);

  const radius = 50;  // Radius of the circular progress bar
  const strokeWidth = 15;  // Stroke width of the circle
  const circumference = 2 * Math.PI * radius;  // Circumference of the circle

  const spinValue = useRef(new Animated.Value(0)).current;
  const [showThisWeek, setShowThisWeek] = useState(true);
  // Animated value for the strokeDashoffsetAthletics to handle the animation
  const strokeDashoffsetAthletics = useState(new Animated.Value(circumference))[0];
  const strokeDashoffsetGame = useState(new Animated.Value(circumference))[0];
  const strokeDashoffsetPractice = useState(new Animated.Value(circumference))[0];

 
  // Calculate the strokeDashoffsetAthletics based on the progress
  useEffect(() => {

    const offset = circumference - (circumference * athleticProgress) / 100;
    Animated.timing(strokeDashoffsetAthletics, {
      toValue: offset,
      duration: 500,  // Transition duration
      useNativeDriver: false,  // We can't use native driver for strokeDashoffsetAthletics
    }).start();
    const offset2 = circumference - (circumference * gameProgress) / 100;
    Animated.timing(strokeDashoffsetGame, {
      toValue: offset2,
      duration: 500,
      useNativeDriver: false,  
    }).start();
    const offset3 = circumference - (circumference * practiceProgress) / 100;
    Animated.timing(strokeDashoffsetPractice, {
      toValue: offset3,
      duration: 500, 
      useNativeDriver: false,  
    }).start();
  }, [athleticProgress, gameProgress, practiceProgress]);

  useEffect(() => {
    setAthleticProgress(showThisWeek ? thisWeekData.playerImprovement : lastWeekData.playerImprovement);
    setGameProgress(showThisWeek ? thisWeekData.defensiveGoals : lastWeekData.defensiveGoals);
    setPracticeProgress(showThisWeek ? thisWeekData.offensiveGoals : lastWeekData.offensiveGoals);
 
  }, [showThisWeek]);

    // Dummy data for this week and last week
    const thisWeekData = {
      playerImprovement: 60,
      defensiveGoals: 100,
      offensiveGoals: 5,
    };
    const lastWeekData = {
      playerImprovement: 40,
      defensiveGoals: 55,
      offensiveGoals: 20,
    };
  const handleWidthChange = () => {
    setShowThisWeek(prev => !prev);
    //const newWidth = athleticProgress < 100 ? athleticProgress + 10 : 0; // Increment by 10 and reset if > 100
    setAthleticProgress(showThisWeek ? thisWeekData.playerImprovement : lastWeekData.playerImprovement);
    setGameProgress(showThisWeek ? thisWeekData.defensiveGoals : lastWeekData.defensiveGoals);
    setPracticeProgress(showThisWeek ? thisWeekData.offensiveGoals : lastWeekData.offensiveGoals);
      // Start the spin animation
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Reset the spin value after the animation completes
        spinValue.setValue(0);
      });
    };

   // Interpolate the spin value to create a rotation
   const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // For iOS use 'padding', for Android use 'height'
    style={{ flex: 1 }}
  >
    <View>
      {amount === 3 ? (
        <>
          <View className="flex-row justify-between items-center px-3 my-2">
            <Text className="font-rubik-bold text-[22px] ml-2" style={{ color: color === 'blue' ? 'white' : 'black' }}>Progress</Text>
  
            <View className='flex flex-row items-center ml-auto mr-3'>
              <Text className="font-rubik-bold text-[14px] mr-3" style={{ color: color === 'blue' ? 'white' : 'black' }}>{showThisWeek ? "This Week" : "Last Week"}</Text>
              <TouchableOpacity onPress={handleWidthChange}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  <FontAwesome name="refresh" size={24} style={{ color: color === 'blue' ? '#1e90ff' : 'black' }}/>
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>

  
          <View className="flex flex-row items-center ml-auto mr-auto">
            
              <View className="flex flex-column items-center mr-10">
                <Text style={{ color: color === 'blue' ? 'white' : 'black' }}>Athletics</Text>
                <Svg width={120} height={120} viewBox="0 0 120 120">
                  <Circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={ color === 'blue' ? '#e6e6e6' : 'black' }
                    strokeWidth={strokeWidth}
                    fill="none" />
                  <AnimatedCircle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={ color === 'blue' ? '#1e90ff' : '#C01010' }
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffsetAthletics}
                    strokeLinecap="round" />
                  <SvgText
                    x="55"
                    y="65"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="bold"
                    fill={ color === 'blue' ? 'white' : 'black' }
                  >
                    {athleticProgress}%
                  </SvgText>
                </Svg>
              </View>
  
            <View className="flex flex-column items-center">
              <Text style={{ color: color === 'blue' ? 'white' : 'black' }}>Game</Text>
              <Svg width={120} height={120} viewBox="0 0 120 120">
                <Circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke={ color === 'blue' ? '#e6e6e6' : 'black' }
                  strokeWidth={strokeWidth}
                  fill="none" />
                <AnimatedCircle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke={ color === 'blue' ? '#1e90ff' : '#C01010' }
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffsetGame}
                  strokeLinecap="round" />
                <SvgText
                  x="55"
                  y="65"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                  fill={ color === 'blue' ? 'white' : 'black' }
                >
                  {gameProgress}%
                </SvgText>
              </Svg>
            </View>
          </View>
  
          <View className="ml-5 mr-5 justify-center items-center">
            <Text style={{ color: color === 'blue' ? 'white' : 'black' }}>Practice</Text>
            <Svg width={120} height={120} viewBox="0 0 120 120">
              <Circle
                cx="60"
                cy="60"
                r={radius}
                stroke={ color === 'blue' ? '#e6e6e6' : 'black' }
                strokeWidth={strokeWidth}
                fill="none" />
              <AnimatedCircle
                cx="60"
                cy="60"
                r={radius}
                stroke={ color === 'blue' ? '#1e90ff' : '#C01010' }
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffsetPractice}
                strokeLinecap="round" />
              <SvgText
                x="55"
                y="65"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fill={ color === 'blue' ? 'white' : 'black' }
              >
                {practiceProgress}%
              </SvgText>
            </Svg>
          </View>
        </>
      ) : (
        <View className="ml-5 mr-5 justify-center items-center">
          <Text className='mb-2 text-[20px] font-rubik-bold color-white'>Weekly Workout Progress</Text>
          <Svg width={120} height={120} viewBox="0 0 120 120">
            <Circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#fff"
              strokeWidth={strokeWidth}
              fill="none" />
            <AnimatedCircle
              cx="60"
              cy="60"
              r={radius}
              stroke="#1e90ff"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffsetPractice}
              strokeLinecap="round" />
            <SvgText
              x="55"
              y="65"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fill="white"
            >
              {practiceProgress}%
            </SvgText>
          </Svg>
        </View>
      )}
    </View>
  </KeyboardAvoidingView>
  );
};

export default ProgressBars;