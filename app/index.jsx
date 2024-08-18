import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '../constants/images'
import CustomButton from 'components/CustomButton';

export default function App() {
  return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
        >

          <View className="w-full flex justify-center items-center min-h-[85vh] space-y-3">

            <Image
              source={images.logo}
              className='w-[142px] h-[142px]'
              resizeMode='contain'
            />
            <Text className='text-slate-50 font-popBold text-3xl'>Na régua</Text>

            <Text className='text-lg text-slate-50 mt-10 me-8 ms-8 text-center font-popRegular pt-14'>
              Fique sempre na régua, agendamentos sem complicações !
            </Text>

          <CustomButton 
            title="Entrar com usuário"
            handlePress={() => router.push('/login')}
            containerStyles="w-11/12 mt-7"
          />

          </View>
        </ScrollView>

        <StatusBar backgroundColor='#1E1C1F' style='light'>
          
        </StatusBar>
        
      </SafeAreaView>
  );
}
