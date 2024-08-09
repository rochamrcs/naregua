import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font"
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded, error] = useFonts ({
    "Poppins_Bold": require("../assets/fonts/Poppins_Bold.otf"),
    "Poppins_Medium": require("../assets/fonts/Poppins_Medium.otf"),
    "Poppins_Regular": require("../assets/fonts/Poppins_Regular.otf"),
    "Poppins_SemiBold": require("../assets/fonts/Poppins_SemiBold.otf"),
    "Poppins_Thin": require("../assets/fonts/Poppins_Thin.otf"),
  })

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  );
}