import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useState} from 'react'

const SeasonalStats = () => {
  const [statBlocks, setStatBlocks] = useState(['Total Touchdowns', 'Total Sacks', 'Pass Rate'])
  return (
    <SafeAreaView style={{ flex: 1, }} >
      <ScrollView  >
        <View style={{backgroundColor:'#1E90FF', borderRadius:5,padding:10, margin:3,marginTop:8 }}>
            <Text style={{color:'black'}}>Seasonal Stats</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent:'center', marginTop:5 }}>
          {statBlocks.map((item, id) => (
            <View key={id} style={{ width: '31%', aspectRatio: 1, backgroundColor:'#1E90FF', borderRadius:5, padding:5, height:'20%', margin:3 }}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SeasonalStats