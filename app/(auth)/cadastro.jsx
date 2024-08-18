import { View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link} from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';

import LogoArea from 'components/LogoArea';
import CustomFormFild from 'components/CustomFormField';
import CustomButton from '../../components/CustomButton';

const Cadastro = () => {

    const db = useSQLiteContext();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    //function to handle registration logic
    const handleRegister = async() => {
        if  (userName.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            Alert.alert('Atenção!', 'Por favor preencha todos os campos!.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Atenção!', 'As senhas não são iguais!');
            return;
        }
        try {
            const existingUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
            if (existingUser) {
                Alert.alert('Erro', 'Usuário existente');
                return;
            }

            // Verificar se o email já existe
            const existingEmail = await db.getFirstAsync('SELECT * FROM users WHERE email = ?', [userEmail]);
            if (existingEmail) {
                Alert.alert('Error', 'Email existente');
                return;
            }

            await db.runAsync('INSERT INTO users (username, password, role) VALUES (?, ?, "User")', [userName, password]);
            Alert.alert('Sucesso', 'Cadastro concluído');
            navigation.navigate('login', {user : userName});
        } catch (error) {
            console.log('Erro durante o cadastro : ', error);
        }

      } 
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
              value={userName}
              handleChangeText={setUserName}
              otherStyles="mt-7"
            />

            <CustomFormFild
              title="Email"
              placeholder="Digite seu e-mail"
              value={userEmail}
              handleChangeText={setUserEmail}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <CustomFormFild
              title="Senha"
              placeholder="Digite sua senha"
              value={password}
              handleChangeText={setPassword}
              otherStyles="mt-7"
            />

            <CustomFormFild
              title="Senha"
              titleStyles="text-primary"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              handleChangeText={setConfirmPassword}
              otherStyles="mt-0"
            />

            <CustomButton
              title="Cadastrar"
              handlePress={handleRegister}
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