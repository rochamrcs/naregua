import { Tabs, Redirect } from 'expo-router'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

import icons from '../../../constants/icons'

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({icon, color, name, focused}) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className='w-6 h-6'
      />
      <Text
        className={'${focused ? "font-popSemibold" : "font-popRegular"} text-xs'}
        style={{color: color}}
      >
        {name}
      </Text>
    </View>
  )
}


const TabsLayout:React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused}) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout