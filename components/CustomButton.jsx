import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-[3px] min-h-[55px] justify-center items-center ${containerStyles} ${isLoading} ? 'opacity-50': '' `}
        disabled={isLoading}
    >
      <Text className={`text-slate-50 font-popBold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton