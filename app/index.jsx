import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-950">
      <Text className="font-popBold text-3xl text-slate-50">NaRégua</Text>
      <Link href={"./home"} className='mt-5 text-slate-200'>Vá para Perfil</Link>
      <StatusBar style="auto" />
    </View>
  );
}
