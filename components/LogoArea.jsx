import { Text, Image, View } from 'react-native'
import React from 'react'

import images from '../constants/images'

const LogoArea = ({ width = 145, height = 145, fontSize = "text-3xl" }) => {
  return (
    <View className="space-y-3">
        <Image
        source={images.logo}
        style={{ width: width, height: height }}
        />
        <Text className={`text-slate-50 font-popBold ${fontSize}`}>Na régua</Text>
    </View>
  )
}

export default LogoArea