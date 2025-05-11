import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { athletes } from '../../../dummyData';
import images from '@/constants/images';
import icons from '@/constants/icons';

interface AthleteProps {
  setOnProfile: (value: any) => void; 
}

const AthleteInfo: React.FC<AthleteProps> = ({ setOnProfile }) => {
  const chosenAthlete = athletes.find(item => item.id == 'athlete1');
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 1. FIXED HEADER (Outside ScrollView) */}
      <View style={{backgroundColor:'#1E90FF', height:50, flex:1, justifyContent:'center', alignItems:'flex-start', borderBottomWidth: 2, borderBottomColor: 'black'}}>
        <TouchableOpacity  onPress={() => setOnProfile(true)}>
          <Image source={icons.RightArrowIcon} className="size-9" style={{marginLeft:10, tintColor: 'white',  transform: [{ scaleX: -1 }]  }}   />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={images.noImage}
        style={styles.headerContainer}
        resizeMode="cover"
      >
        <Image />
      </ImageBackground>

      {/* 2. SCROLLABLE BLUE CONTENT (Inside ScrollView) */}
      
      <ScrollView style={styles.scrollView}>
        {/* Blue background (starts below header) */}
        <View style={styles.blueContainer}>
          {/* Profile icon (half inside header, half in blue) */}
          <View style={styles.profileIconContainer}>
            <Image source={icons.ProfileIcon} style={{ tintColor: "black" }} />
          </View>

          {/* Athlete info */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{chosenAthlete?.name}</Text>
            
            <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', marginLeft:'auto', marginRight:'auto'}}>
              <Text className='font-rubik-regular text-[20px] mr-[10px] ml-[15px]'>{chosenAthlete?.timestamp.substring(0, 4)} <Text className='text-[15px]'>●</Text> {chosenAthlete?.position}</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}>
              <View style={styles.row} className='mt-4'>
                <View className='mr-[20%] '>
                  <Text className='font-rubik-bold text-[20px] '>{chosenAthlete?.height}</Text>
                  <Text className='font-rubik-regular text-[14px]'>Height</Text>
                </View>
                <View className='mr-[20%]'>
                  <Text className='font-rubik-bold text-[20px]'>{chosenAthlete?.weight}</Text>
                  <Text className='font-rubik-regular text-[14px]'>Weight</Text>
                </View>
                <View className=''>
                  <Text className='font-rubik-bold text-[20px]'>{chosenAthlete?.GPA}</Text>
                  <Text className='font-rubik-regular text-[14px]'>GPA</Text>
                </View>
              </View>
              <View className='mt-3'>
                <View className=''>
                  <Text className='font-rubik-bold text-[20px] text-left'>{chosenAthlete?.Hometown}</Text>
                  <Text className='font-rubik-regular text-[14px] text-left'>Home Town</Text>
                </View>
                <View className=''>
                  <Text className='font-rubik-bold text-[20px] text-left'>{chosenAthlete?.school}</Text>
                  <Text className='font-rubik-regular text-[14px] text-left'>High School</Text>
                </View> 
              </View>
              </View>
          </View>   

         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 170,
    width: '100%',
    position: 'absolute',
    top: 50,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 120, // Starts below header
    zIndex: 20
  },
  blueContainer: {
    backgroundColor: '#1E90FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 120, // Space for profile icon
    minHeight: '100%', // Ensures it fills scrollable area
    paddingBottom: 100
  },
  profileIconContainer: {
    position: 'absolute',
    top: 50, // Half in header, half in blue
    alignSelf: 'center',
    zIndex: 2,
  },
  infoContainer: {
    alignItems: 'center',
    paddingTop: 45,
  },
  name: {
    fontFamily: 'Rubik-Bold',
    fontSize: 25,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',

    width: '100%',
    marginBottom: 10,
  },
});

export default AthleteInfo;