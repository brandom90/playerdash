import { View, Text, ScrollView,Image, Alert,TouchableOpacity, ImageComponent, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "@/constants/icons"
import images from "@/constants/images"
import {  athletes } from '../../../dummyData';
import { router } from 'expo-router'
import { AthleteInfo, EventsAll, Goals, Notes, Settings, Statistics } from '../profileTabs'



interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  // below means it returns nothing
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}
  
const Profile = () => {

  // interface is needed for thes props because then it'll assume the type can be any which could lead to errors
// this is for the indiv items in settings
const navigation = useNavigation();
  const SettingsItem = ({icon, title, textStyle, showArrow = true
  }: SettingsItemProps) => (
  <TouchableOpacity onPress={() => handleTabClick(title)} className="flex flex-row items-center justify-between py-3">
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' style={{tintColor: 'white' }} />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle} color-white`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.RightArrowIcon} className="size-7" style={{tintColor: 'white' }}  />}
  </TouchableOpacity>
)

  
  const filteredPlayerList = athletes.find(item =>  item.id === ("athlete1"))
  const [onProfile, setOnProfile] = useState(true)
  const handleTabClick = (name: string) => {
    if (name == "Events") {
      router.push(`/profileTabs/EventsAll`);
    }
  }
  const [onTab, setOnTab] = useState('Settings')

  
    /// get rid of them one by one like in line 46
  const renderTabComponent = () => {
    switch (onTab) {
      case 'Settings':
        return <Settings setOnProfile={setOnProfile}/>;
      case 'Achievements/Goals':
        return <Goals setOnProfile={setOnProfile}/>;
     
      case 'Statistics':
         return <Statistics setOnProfile={setOnProfile}/>;
      case 'Athlete Info':
        return <AthleteInfo setOnProfile={setOnProfile}/>;
      case 'Notes':
        return <Notes setOnProfile={setOnProfile}/>;
      default:
        return null;
    }
  };
  return (
    <SafeAreaView className='h-full bg-black'>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerClassName=' '
      >

        <View className='flex flex-row items-center justify-between mt-5 px-7 '>
          <Text className="text-xl font-rubik-bold color-white">Profile</Text>
          <TouchableOpacity className="flex flex-row items-center justify-between py-3">
            <Image source={icons.BellIcon} className="size-7" style={{tintColor: 'white' }} />
          </TouchableOpacity>
        </View>
        
        <View className='flex-row justify-center flex mt-5 '>
          <View className="flex flex-col items-center relative mt-5 ">
            {/* 
              Fetch the URI from a link, like 
              source={{ uri: "https://example.com/image.jpg" }} 
            */}
            <Image source={icons.ProfileIcon} style={{tintColor: 'white',objectFit: 'cover' }} className='tintColor-black size-30 relative rounded-full'/>
              <TouchableOpacity className="absolute bottom-9 right-[90px] bg-[#4A759A] rounded-xl p-2">
                <Image source={icons.EditIcon} className="size-7" style={{tintColor: 'white' }} />
              </TouchableOpacity>
              {filteredPlayerList ? (
                <View className='flex-row'>
                  <Text className='text-2xl font-rubik-bold mt-2 color-white'>
                    {filteredPlayerList.name} 
                    
                  </Text>
                  <Text className='text-2xl font-rubik-bold mt-2 color-white mr-2 ml-2'>|</Text>
                  <Text className='text-2xl font-rubik-bold mt-2 color-white'>
                    {filteredPlayerList.school} 
                  </Text>
                </View>
              ) : (
                <Text className='text-2xl font-rubik-bold mt-2'>
                  Player not found
                </Text>
              )}
          </View>
        </View>
        {/* List of Tabs for settings */}
        <View className="flex flex-col mt-10 pt-5 border-t-2 border-b-2 pb-5 border-white bg-black px-7 ">
            <SettingsItem icon={icons.Achievementicon} title="Achievements/Goals"/>
            <SettingsItem icon={icons.DemographicIcon} title="Athlete Info"/>
            <SettingsItem icon={icons.StatsIcon} title="Statistics"/>
            <SettingsItem icon={icons.MegaphoneIcon} title="Events"/>
            <SettingsItem icon={icons.NotesIcon} title="Notes"/>
            <SettingsItem icon={icons.SettingIcon} title="Settings"/>
        </View>
        <View className="flex flex-col border-t mt-0 pt-5 border-primary-200 px-7 pb-32">
          <SettingsItem
            icon={icons.LogoutIcon}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
          />
        </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile