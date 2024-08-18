import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState }from 'react'

import { useUser } from "context/UserContext";
import CustomButton from 'components/CustomButton';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState('10');
  const [selectedTime, setSelectedTime] = useState('09:00');

  const { user } = useUser();

  const dates = [
    { day: 'SEG', date: '10' },
    { day: 'TER', date: '11' },
    { day: 'QUA', date: '12' },
    { day: 'QUI', date: '13' },
    { day: 'SEX', date: '14' },
    { day: 'SAB', date: '15' },
  ];

  const times = [
    '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30',
  ];

  return (
    <SafeAreaView className="bg-primary h-full">
        <View className="w-full min-h-[85vh] px-[20px] my-[25px]">
          <Text className="text-center text-[22px] font-popMedium text-white">{`Bem-vindo(a)! ${user}`}</Text>

          <View className="my-[17px]">
            <Text className="text-white font-popRegular">Seus agendamentos</Text>
            <View className="bg-card rounded-[5px] pl-[16px] pt-[8px] pb-[14px] pr-[31px]">
              <Text className="text-white font-popSemibold text-[28px]">Nada agendado para hoje</Text>
              <Text className="text-white font-popMedium text-[16px]">Próximo agendamento em: 17/09/2024</Text>
            </View>
          </View>

          <View>
            <Text className="text-white font-popRegular">Escolha a melhor data</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((item) => (
            <TouchableOpacity 
              key={item.date} 
              onPress={() => setSelectedDate(item.date)} 
              className={`p-4 mx-1 rounded-[5px] border-solid border-[0.5px] ${selectedDate === item.date ? 'border-secondary' : 'border-[#454545]'}`}>
              <Text className={`pt-[7px] pb-[3px] px-[10px] font-popBold text-center text-[25px] ${selectedDate === item.date ? 'text-secondary' : 'text-white'}`}>{item.date}</Text>
              <Text className={`pb-[3px] font-popRegular text-center text-[15px] ${selectedDate === item.date ? 'text-secondary' : 'text-white'}`}>{item.day}</Text>
            </TouchableOpacity>))}
            </ScrollView>
          </View>

          <View className="my-[17px]">
            <Text className="text-white font-popRegular">Escolha o melhor horário</Text>
            <ScrollView vertical showsHorizontalScrollIndicator={true} className="h-[200px]">
              {times.map((time) => (
              <TouchableOpacity 
                key={time} 
                onPress={() => setSelectedTime(time)}
                disabled={time === '12:00' || time === '12:30'}
                className={`p-4 m-1 rounded-lg border-solid border-[0.5px] ${selectedTime === time ? 'border-secondary' : time === '12:00' || time === '12:30' ? 'bg-[#A5A5A5]' : 'bg-primary' && 'border-[#454545]'}`}>
                <Text className={`text-center text-white font-popSemibold ${selectedTime === time ? 'text-secondary' : 'text-white'}`}>{time}</Text>
              </TouchableOpacity>))}
            </ScrollView>
          </View>
          <CustomButton
            title="Confirmar agendamento"
            handlePress={console.log('Em contrução')}
            //containerStyles="w-full mt-[84px]"
          />
        </View>
    </SafeAreaView>
  )
}

export default Home