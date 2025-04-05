import { View, Text } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
// unused page ahh

const EventPage = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();


  return (
    <View>
      <SafeAreaView>
        <Text>{id}</Text>
      </SafeAreaView>
    </View>
  )
}

export default EventPage