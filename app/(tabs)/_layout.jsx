import { View, Text, Image} from 'react-native'
import { Tabs, Redirect} from 'expo-router'

import icons from '../../constants/icons'


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className={'items-center justify-center gap-1'}>
      <Image
        source = {icon}
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

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#D49929',
          tabBarInactiveTintColor: '#A7896E',
          tabBarStyle: {
            backgroundColor: '#231F1E',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? icons.homeFilled : icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
                <Tabs.Screen
          name="agenda"
          options={{
            title: "Agenda",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? icons.agendaFilled : icons.agenda}
                color={color}
                name="Agenda"
                focused={focused}
              />
            )
          }}
        />
                <Tabs.Screen
          name="perfil"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? icons.perfilFilled : icons.perfil}
                color={color}
                name="Perfil"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout