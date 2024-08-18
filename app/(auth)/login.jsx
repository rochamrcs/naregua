import { View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useRouter } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite';

import LogoArea from 'components/LogoArea'
import CustomFormFild from 'components/CustomFormField'
import CustomButton from '../../components/CustomButton'
import { useUser } from "context/UserContext";

const Login = () => {

  const db = useSQLiteContext();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setUser } = useUser();

  //function to handle login logic
  const handleLogin = async() => {
      if(userName.length === 0 || password.length === 0) {
          Alert.alert('Atenção','Preencha os campos com seu usuário e senha');
          return;
      }
      try {
          const user = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
          if (!user) {
              Alert.alert('Erro', 'Esse usuário não existe !');
              return;
          }
          const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password]);
          if(validUser) {
              Alert.alert('Sucesso', 'Bem vindo!');
              setUser(userName);
              router.push('/home', {user:userName});
              setUserName('');
              setPassword('');
          } else {
              Alert.alert('Erro', 'Senha incorreta');
          }
      } catch (error) {
          console.log('Erro durante o login : ', error);
      }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <LogoArea
          />

          <CustomFormFild
            title="Usuário"
            placeholder="Digite seu usuário"
            value= {userName}
            handleChangeText={setUserName}
            otherStyles="mt-7"
          />

          <CustomFormFild
            title="Senha"
            placeholder="Digite sua senha"
            value= {password}
            handleChangeText={setPassword}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Entrar"
            handlePress={handleLogin}
            containerStyles="w-full mt-[84px]"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Link className="text-[15px] font-popSemibold text-[#4D4D4D]" href={"/cadastro"}>Criar uma conta</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login