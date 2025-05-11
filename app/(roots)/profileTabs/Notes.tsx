import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { athletes } from '../../../dummyData';

interface NotesProps {
  setOnProfile: (value: any) => void; 
}

const Notes: React.FC<NotesProps> = ({ setOnProfile }) => {
  const chosenAthlete = athletes.find(item => item.id === 'athlete1')
  const notesAll = chosenAthlete!.notes

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Wrap all content in a single parent View with flex:1 */}
      <View style={{ flex: 1 }}>
        {/* Title section - removed flex:1 to prevent taking unnecessary space */}
        <View style={{ justifyContent: 'center', marginTop:10 }} >
          <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Rubik-Bold', fontSize: 35, paddingTop: 35 }}>
            Your Notes
          </Text>
          <TouchableOpacity className='flex justify-center items-center mr-[35px] ml-[35px] mt-2' style={{elevation: 15, shadowColor: '#000',shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.8,shadowRadius: 1,backgroundColor: '#C01010',borderRadius: 12,padding: 16}}onPress={() => setOnProfile(true)}>
              <Text className='color-white font-rubik-bold text-[20px]'>Return</Text>
          </TouchableOpacity>
        </View>

        {/* Blue background section - takes remaining space with flex:1 */}
        <View style={{  backgroundColor: '#1e90ff', marginTop: 25, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden', height:'100%' }}>
          {/* Top decorative lines */}
          <View style={{ height: 5, width: '85%', backgroundColor: '#d3d3d3', marginVertical: 8, marginTop: 30 }} />
          <View style={{ height: 5, width: '65%', backgroundColor: '#d3d3d3', marginVertical: 8 }} />
          <View style={{ height: 5, width: '45%', backgroundColor: '#d3d3d3', marginVertical: 8 }} />

          {/* Content ScrollView */}
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            style={{ marginTop: 20 }}
          >
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 8 }}>
              {notesAll.map((item, index) => (
                <TouchableOpacity key={index} style={{ width: '32%', marginBottom: 16 }}>
                  <View style={{ backgroundColor: '#3CB4AC', borderRadius: 16, aspectRatio: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.9, shadowRadius: 5, elevation: 5 }}>
                    <Text style={{ color: 'white', padding: 8 }} numberOfLines={4}>
                      {item.content.substring(0, 80)}...
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
                    <Text style={{ color: 'white', fontFamily: 'Rubik-Bold', textAlign: 'center' }}>
                      {item.title}
                    </Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>{item.timestamp.substring(0, 10)}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Bottom decorative lines */}
            <View style={{ alignItems: 'flex-end', marginTop: 130, borderBottomWidth: 30, borderBottomColor: 'transparent' }}>
              <View style={{ height: 5, width: '45%', backgroundColor: '#d3d3d3', marginVertical: 8, marginLeft: 'auto' }} />
              <View style={{ height: 5, width: '65%', backgroundColor: '#d3d3d3', marginVertical: 8, marginLeft: 'auto' }} />
              <View style={{ height: 5, width: '85%', backgroundColor: '#d3d3d3', marginVertical: 8, marginLeft: 'auto' }} />
            </View>
          </ScrollView>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Notes