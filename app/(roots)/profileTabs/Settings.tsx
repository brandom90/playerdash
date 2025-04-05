import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import icons from '@/constants/icons';
interface SettingsProps {
  setOnProfile: (value: any) => void; // Replace 'any' with the appropriate type if known
}

const Settings: React.FC<SettingsProps> = ({ setOnProfile }) => {

  return (
    <View className='w-full'>
      <View className='flex justify-center items-center mt-8'>
        <Text className=' color-[#C9A227] font-rubik-bold text-[27px]'>Settings</Text>
      </View>
      <View className='rounded-xl bg-[#C9A227] w-full mt-5'>
        <View className='p-4'>
          <Text className='border-b-4 border-black text-[20px] font-rubik-bold'>Personal Info</Text>
          <View className='flex-row items-center p-2  '>
          <Image source={icons.MailIcon}  className="mr-2 w-6 h-6 color-white" style={{ tintColor: 'black',resizeMode: 'contain' }} />
            <Text>Change Email</Text>
          </View>
          <View className='flex-row items-center p-2  '>
          <Image source={icons.LockedIcon}  className="mr-2 w-6 h-6 color-white" style={{ tintColor: 'black',resizeMode: 'contain' }} />
            <Text>Chnage Password</Text>
          </View>
        </View>
        <View className='p-4'>
          <Text className='border-b-4 border-black text-[20px] font-rubik-bold'>Miscellaneous</Text>
          <View className='flex-row items-center p-2  '>
            <Image source={icons.BellIcon}  className="mr-2 w-6 h-6 color-white" style={{ tintColor: 'black',resizeMode: 'contain' }} />
            <Text>Notification Settings</Text>
          </View>
          <View className='flex-row items-center p-2  '>
            <Image source={icons.DayNightIcon}  className="mr-2 w-6 h-6 color-white" style={{ tintColor: 'black',resizeMode: 'contain' }} />
            <Text>Dark Mode</Text>
          </View>
        </View>
        <View className='flex justify-center items-center p-5'>
          <TouchableOpacity style={{elevation: 15, shadowColor: '#000',shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.8,shadowRadius: 1,backgroundColor: '#C01010',borderRadius: 12,padding: 16,paddingLeft: 40,paddingRight: 40,}}onPress={() => setOnProfile(true)}>
            <Text className='color-black font-rubik-bold text-[17px]'>Return</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Settings