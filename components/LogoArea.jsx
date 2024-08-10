import { Text, Image, View } from 'react-native'
import React from 'react'

import images from '../constants/images'

const LogoArea = () => {
  return (
    <View className="space-y-3">
        <Image
        source={images.logo}
        className='w-[142px] h-[142px]'
        resizeMode='contain'
        />
        <Text className='text-slate-50 font-popBold text-3xl'>Na régua</Text>
    </View>
  )
}

export default LogoArea