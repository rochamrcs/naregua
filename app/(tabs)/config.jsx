import { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from 'components/CustomButton';

// Dias da semana
const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function AdminPanel() {
  const [selectedDays, setSelectedDays] = useState([]); // Guarda os dias selecionados
  const [showPicker, setShowPicker] = useState(false); // Controla a exibição do DateTimePicker
  const [selectedDay, setSelectedDay] = useState(null); // Guarda o dia atual para adicionar o horário
  const [selectedTime, setSelectedTime] = useState(new Date()); // Guarda o horário selecionado

  // Função chamada quando o horário é selecionado no DateTimePicker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setShowPicker(false);
    setSelectedTime(currentDate);

    // Adiciona o horário ao dia da semana selecionado
    if (selectedDay !== null) {
      setSelectedDays((prevDays) => {
        const newDays = [...prevDays];
        const dayIndex = newDays.findIndex((day) => day.name === selectedDay);
        
        if (dayIndex !== -1) {
          newDays[dayIndex].times.push(currentDate.toLocaleTimeString());
        } else {
          newDays.push({ name: selectedDay, times: [currentDate.toLocaleTimeString()] });
        }

        return newDays;
      });
    }
  };

  // Função para remover um horário específico
  const handleRemoveTime = (dayName, time) => {
    setSelectedDays((prevDays) => {
      return prevDays.map((day) => {
        if (day.name === dayName) {
          return {
            ...day,
            times: day.times.filter((t) => t !== time)
          };
        }
        return day;
      }).filter((day) => day.times.length > 0); // Remove o dia se não houver horários
    });
  };

  // Função para remover um dia específico
  const handleRemoveDay = (dayName) => {
    Alert.alert(
      'Confirmar exclusão',
      `Você tem certeza que deseja remover o ${dayName}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Remover',
          onPress: () => {
            setSelectedDays((prevDays) => prevDays.filter((day) => day.name !== dayName));
          }
        }
      ]
    );
  };

  // Função chamada ao selecionar o dia da semana para adicionar um horário
  const handleAddTime = (day) => {
    setSelectedDay(day);
    setShowPicker(true); // Exibe o DateTimePicker
  };

  // Renderiza o componente de dia e botão para adicionar horário
  const renderDay = ({ item }) => (
    <View style={{ padding: 10 }} >
      <Text className="text-white font-popBold">{item.name}</Text>
      <FlatList
        data={item.times}
        keyExtractor={(time) => time}
        renderItem={({ item: time }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text className="text-white font-popRegular">{time}</Text>
            </View>
            <View className="mb-2">
              <Button color="#dc2626" title="Remover horário" onPress={() => handleRemoveTime(item.name, time)} />
            </View>
          </View>
        )}
      />
      <View className="mt-3 mb-3" >
        <Button title="Adicionar horário" color="#4d7c0f" onPress={() => handleAddTime(item.name)} />
      </View>
      <View className="mb-3" >
        <Button title="Remover dia" color="#dc2626" onPress={() => handleRemoveDay(item.name)} />
      </View>
    </View>
  );

  return (
    <View className="bg-primary h-full" style={{ padding: 20 }}>
      <Text className="text-white font-popRegular">Configurar horários de funcionamento da barbearia</Text>

      {/* Exibe os dias da semana */}
      <FlatList
        data={daysOfWeek}
        keyExtractor={(day) => day}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAddTime(item)}>
            <Text className={`text-center p-2 m-1 rounded-[5px] border-solid border-[1px] border-secondary text-white font-popRegular`}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Exibe os dias e horários selecionados */}
      <FlatList className={`text-center p-2 m-1 rounded-[5px] border-solid border-[1px] border-secondary text-white font-popRegular`}
        data={selectedDays}
        keyExtractor={(day) => day.name}
        renderItem={renderDay}
      />

      {/* DateTimePicker só aparece se showPicker for verdadeiro */}
      {showPicker && (
        <DateTimePicker className="text-white font-popRegular"
          value={selectedTime}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}

      <CustomButton
            title="Confirmar agenda"
            handlePress={console.log('Em contrução')}
            //containerStyles="w-full mt-[84px]"
      />
    </View>
  );
}
