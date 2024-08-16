import { View, ScrollView, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link} from 'expo-router';

import LogoArea from 'components/LogoArea';
import CustomFormFild from 'components/CustomFormField';
import CustomButton from '../../components/CustomButton';


const Cadastro = () => {

  return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
            <LogoArea
              width={100}
              height={100}
              fontSize='text-[21px]'
            />

            <CustomFormFild
              title="Usuário"
              placeholder="Digite seu usuario"
              value=""
              handleChangeText=""
              otherStyles="mt-7"
            />

            <CustomFormFild
              title="Email"
              placeholder="Digite seu e-mail"
              value=""
              handleChangeText=""
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <CustomFormFild
              title="Senha"
              placeholder="Digite sua senha"
              value=""
              handleChangeText=""
              otherStyles="mt-7"
            />

            <CustomFormFild
              title="Senha"
              titleStyles="text-primary"
              placeholder="Confirme sua senha"
              value=""
              handleChangeText=""
              otherStyles="mt-0"
            />

            <CustomButton
              title="Cadastrar"
              handlePress=""
              containerStyles="w-full mt-[64px]"
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Link className="text-[15px] font-popSemibold text-[#4D4D4D]" href={"/login"}>Voltar</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default Cadastro;