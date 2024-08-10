import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>

      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="cadastro"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor='#1E1C1F' style='light'>
                  
      </StatusBar>
    </>
  )
}

export default AuthLayout