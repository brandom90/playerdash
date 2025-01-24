import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { performanceData, athletes } from '../dummyData';
import NoResults from './NoResults';
import icons from "@/constants/icons";
import { router } from 'expo-router';

type Performance = {
    strength: { backsquat: number; bench: number; };
    power: { clean: number; pushPress: number; };
    explosive: { medballPush: number; broadJump: number; vertical: number; };
    speed: { dash10yd: number; dash40yd: number; };
  };


const Improvements = ({player}: { player: string }) => {
  // <{ metric: { [key: string]: number } }[]>, 
  // metric is type for dictionary. Keys are type string, values are type number
  const [improvementStats, setImprovementStats] = useState<{ metric: { [key: string]: string } }[]>([]);

    // assuming practice is each week....
  const getMostRecentPerformance = (athleteId: string) => {
    const athleteData = performanceData
      .filter(entry => entry.athleteId === athleteId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
    return athleteData[0]; // Most recent performance data
  };

  //: { [key: string]: string } added this to adhere to typescript
  const units: { [key: string]: string } = {
    "Backsquat": "lbs",
    "Bench press": "lbs",
    "Clean": "lbs",
    "Push press": "lbs",
    "Medball push": "lbs", 
    "Broad jump": "ft",
    "Vertical jump": "in",
    "Ten yard dash": "seconds",
    "Forty yard dash": "seconds",
  };

  
  const getLastWeekPerformance = (athleteId: string) => {
    const athleteData = performanceData
      .filter(entry => entry.athleteId === athleteId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
    return athleteData[1]; // Most recent performance data
  };
  

  useEffect(() => { 
    const thisWeek = getMostRecentPerformance(player);
    const lastWeek = getLastWeekPerformance(player);
  
    // made temp arrays to use my data so no async errors
    const thisWeekStatsTemp: { metric: { [key: string]: number } }[] = [];
    // Last week stats
    const thisLastStatsTemp: { metric: { [key: string]: number } }[] = [];
    const improvementStatsTemp: { metric: { [key: string]: string } }[] = [];

    
  // unkown means I know what im doing (risky)
    const performance = thisWeek.performance as unknown as Performance;
    for (let category in performance) {
      const metrics = performance[category as keyof Performance];
      for (let metric in metrics) {
        thisWeekStatsTemp.push({ metric: { [metric]: metrics[metric as keyof typeof metrics] } });
      }
    }
  
    const performanceLastWeek = lastWeek.performance as unknown as Performance;
    for (let category in performanceLastWeek) {
      const metrics = performanceLastWeek[category as keyof Performance];
      for (let metric in metrics) {
        thisLastStatsTemp.push({ metric: { [metric]: metrics[metric as keyof typeof metrics] } });
       
      }
    }
  
  for (let i = 0; i < thisWeekStatsTemp.length; i++) {
  const metricKey = Object.keys(thisLastStatsTemp[i].metric)[0];
  const unit = units[metricKey]; // Get the unit for the current metric

  // Check if the improvement is positive or negative
  if (thisWeekStatsTemp[i].metric[metricKey] > thisLastStatsTemp[i].metric[metricKey] && metricKey !== "Ten yard dash" && metricKey !== "Forty yard dash") {
    const improvedBy = thisWeekStatsTemp[i].metric[metricKey] - thisLastStatsTemp[i].metric[metricKey];
    const formattedImprovedBy = Math.abs(improvedBy).toFixed(2);
    improvementStatsTemp.push({
      metric: {
        [metricKey]: `${formattedImprovedBy} ${unit}`, // Add the unit to the result
      },
    });
  } else if (thisWeekStatsTemp[i].metric[metricKey] < thisLastStatsTemp[i].metric[metricKey]) {
    const improvedBy = thisWeekStatsTemp[i].metric[metricKey] - thisLastStatsTemp[i].metric[metricKey];
    const formattedImprovedBy = Math.abs(improvedBy).toFixed(2);
    improvementStatsTemp.push({
      metric: {
        [metricKey]: `${formattedImprovedBy} ${unit}`, // Add the unit to the result
      },
    });
  }
}
    setImprovementStats(improvementStatsTemp);
  }, [player]);

  const handleCardPress = (id: string) => router.push(`./workout`)
  
  return (
    <View>
       <Text className='font-rubik-bold text-[22px] ml-5 color-white'>Improvements</Text>
        <View>
        {improvementStats.length > 0 ? 
            improvementStats.map((exercise, key) => (
              <View key={key} style={{ marginVertical: 5, padding: 10, alignSelf: 'center', backgroundColor: '#cccfd3', borderRadius: 10, width: '90%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                  <Text style={{ fontFamily: 'Rubik-Regular', color: 'black', textAlign: 'center' }}>
                      You improved on the {Object.keys(exercise.metric)[0]} by {Object.values(exercise.metric)[0]}
                  </Text>
                </View>
            ))
            :
            <NoResults />
        }
        </View>

        <TouchableOpacity onPress={() => handleCardPress(player)} style={{ backgroundColor:'#cccfd3', marginTop: 5, marginRight:'auto', marginLeft:'auto', height:50, width: '80%', flex: 1, marginHorizontal: 5,  borderColor:'black', borderWidth:2, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
            <View className='flex flex-row items-center gap-2'>
                <Image source={icons.dumbell} className="w-8 h-8 color-white" style={{ tintColor: 'black',resizeMode: 'contain' }} />
                <Text style={{ color: 'black' }} className='font-rubik-medium '>Go To Current Workout</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Improvements