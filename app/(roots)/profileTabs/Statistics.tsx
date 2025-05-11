import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons';
import WorkoutStats from '@/components/WorkoutStats';
import SeasonalStats from '@/components/SeasonalStats';
import TimelineStats from '@/components/TimelineStats';

interface StatisticsProps {
  setOnProfile: (value: any) => void; 
  onPress?: () => void;
}

const Statistics:React.FC<StatisticsProps> = ({setOnProfile}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (name: string) => {
    setOnTab(name)
    setIsMenuOpen(false)
  }
  const [onTab, setOnTab] = useState('Workouts')

  const renderTabComponent = () => {
    switch (onTab) {
      case 'Workouts':
        return <WorkoutStats/>;
      case 'Season':
        return <SeasonalStats/>;
      case 'Timeline':
         return <TimelineStats />;
  };
  }
  
  return (
    <SafeAreaView style={{ flex: 1, }} >
      <ScrollView contentContainerStyle={{ overflow: 'visible' }} >
        <View style={{overflow: 'visible', zIndex: 100,backgroundColor:'#1E90FF', height:80, flex:1,flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth: 2, borderBottomColor: 'black'}}>
          <TouchableOpacity  onPress={() => setOnProfile(true)}>
            <Image source={icons.RightArrowIcon} className="size-9" style={{marginLeft:10, tintColor: 'white',  transform: [{ scaleX: -1 }]  }}   />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => toggleMenu()}>
            <Image source={icons.menu} className="size-9" style={{tintColor: 'white', marginRight:15   }}   />
          </TouchableOpacity>
        
        </View>
        {isMenuOpen && (
            <View style={{ position: 'absolute',top: 70,right:15, height:'auto', backgroundColor: 'white', minWidth:110, padding: 10,borderRadius: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.3,shadowRadius: 3,elevation: 5,zIndex: 101,}}>
              
              <TouchableOpacity onPress={() => handleTabClick("Workouts")} style={{backgroundColor:'white', borderRadius:5, width:'100%', height:'auto',padding:10, flexDirection:'row', alignItems:'center'}}>
                <Image source={icons.dumbell} className="size-7" style={{ tintColor: 'black', marginRight:6, transform: [{ scaleX: -1 }]  }}   />
                <Text style={{color:'black', }} className='font-rubik-regular'>Workouts</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTabClick("Season")} style={{backgroundColor:'white', borderRadius:5, width:'100%', height:'auto',padding:10, flexDirection:'row', alignItems:'center'}}>
                <Image source={icons.LineChartIcon} className="size-7" style={{ tintColor: 'black', marginRight:6, transform: [{ scaleX: -1 }]  }}   />
                <Text style={{color:'black', }} className='font-rubik-regular'>Season</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTabClick("Timeline")} style={{backgroundColor:'white', borderRadius:5, width:'100%', height:'auto',padding:10, flexDirection:'row', alignItems:'center'}}>
                <Image source={icons.BarChartIcon} className="size-7" style={{ tintColor: 'black', marginRight:6, transform: [{ scaleX: -1 }]  }}   />
                <Text style={{color:'black', }} className='font-rubik-regular'>Timeline</Text>
              </TouchableOpacity>
            </View>
          )}
        <View>
         {renderTabComponent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Statistics