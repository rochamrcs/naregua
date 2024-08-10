import { View, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import LogoArea from 'components/LogoArea'
import CustomFormFild from 'components/CustomFormField'
import CustomButton from '../../components/CustomButton'

const Cadastro = () => {

  const [form, setForm] = useState({
    usuario: '',
    email: '',
    password: ''
  })

const [isSubmitting, setIsSubmitting] = useState(false)

const subtmit = () => {

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
            title="Usuario"
            placeholder="Digite seu e-mail"
            value= {form.usuario}
            handleChangeText={(e) => setForm({ ...form, usuario: e})}
            otherStyles="mt-7"
          />

          <CustomFormFild
            title="Email"
            placeholder="Digite seu e-mail"
            value= {form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-addess"
          />

          <CustomFormFild
            title="Senha"
            placeholder="Digite sua senha"
            value= {form.senha}
            handleChangeText={(e) => setForm({ ...form, senha: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Cadastrar"
            handlePress={subtmit}
            containerStyles="w-full mt-[84px]"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Link className="text-[15px] font-popSemibold text-[#4D4D4D]" href={"/login"}>Voltar</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cadastro