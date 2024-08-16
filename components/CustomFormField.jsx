import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import icons from "../constants/icons"

const CustomFormFild = ({ title, value, placeholder, handleChangeText, otherStyles,titleStyles = "text-gray-100", ...props}) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`sapece-y-2 ${otherStyles}`}>
        <Text className={`text-base ${titleStyles} mb-1`}>
            {title}
        </Text>
        <View className="border-2 border-black w-full h-[55px] px-4 bg-black rounded-[3px] focus:border-secondary items-center flex flex-row">
            <TextInput
                className="flex-1 text-white font-popRegular text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#4D4D4D"
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Senha' && !showPassword	}
                {...props}
            />

            {title === 'Senha' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image
                        source={!showPassword ? icons.exibir : icons.ocultar}
                        className="w-5 h-5"
                        resizeMode= 'contain' 
                    />
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default CustomFormFild