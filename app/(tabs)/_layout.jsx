import { View, Text, Image} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {Drawer} from 'expo-router/drawer'

import icons from '../../constants/icons'
import { useUser } from "context/UserContext";
import CustomDrawerContent from '../../components/CustomDrowerMenuTitle'

const TabIcon = ({ icon }) => {
  return (
    <View className={'items-center justify-center gap-1'}>
      <Image
        source = {icon}
        resizeMode="contain"
        className='w-6 h-6'
      />
    </View>
  )
}

const CustomDrowerMenuTitle = ({ title }) => (
  <Text style={{ color: '#FFFFFF', marginTop: 35, marginBottom: 20, fontFamily: 'font-popSemibold', fontSize: 18, textAlign: 'center' }}>
    {title}
  </Text>
);

const CustomHeaderTitle = ({ title }) => (
  <Text className="text-white mt-[35px] mb-[20px] font-popSemibold text-[18px] text-center">{title}</Text>
);

const TabsLayout = () => {

  const { user } = useUser();

  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{
        headerShown: true,
        headerTintColor: "#D49929",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#1E1C1F",
          elevation: 0,
          height: 130,
        },
        headerTitle: () => <CustomHeaderTitle title={`Bem-vindo(a)! ${user}`} />,
        drawerStyle: {
          backgroundColor: "#1E1C1F"
        },
        drawerLabelStyle: {
          color: "#FFFFFF"
        },
        drawerActiveBackgroundColor: "#D49929",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name='home'
          options={{
            drawerLabel: 'Home',
            drawerIcon: () => <TabIcon icon={icons.home}/>
          }}/>
        <Drawer.Screen
          name='perfil'
          options={{
            drawerLabel: 'Perfil',
            drawerIcon: () => <TabIcon icon={icons.perfil}/>
          }}/>
        <Drawer.Screen
          name='config'
          options={{
            drawerLabel: 'Painel Admin',
            drawerIcon: () => <TabIcon icon={icons.definicoes}/>
          }}/>
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default TabsLayout