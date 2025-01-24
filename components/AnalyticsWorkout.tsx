import { View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity, ScrollView, ImageBackground, Modal } from 'react-native';
import React, { useState } from 'react';
import { weeklyWorkouts, athletes } from '../dummyData';

const AnalyticsWorkout = () => {
  const filteredAthlete = weeklyWorkouts.filter(item => item.athleteId === "athlete1");
  const improvedLastWeek = athletes[0].improvedLastWeek
  return (
    <View>
      <Text>AnalyticsWorkout</Text>
    </View>
  )
}

export default AnalyticsWorkout