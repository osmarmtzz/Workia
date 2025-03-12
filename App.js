import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, Button, Provider as PaperProvider, Text } from 'react-native-paper';
import { theme } from './src/theme';
import { Platform, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Login
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Menu from './screens/MenuScreen';
import HomeTab from './screens/Menu/HomeTab';



const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>  setLoading(false), 3000);
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
     
          {isLoading ? (
            <View style={styles.body}>
              <ActivityIndicator size="large" color="#113663" />
              <Text style={{ fontSize: 16, color: '#113663', marginTop: 10 }}>Loading</Text>
            </View>
          ) : (
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: { backgroundColor: 'black' },
                  headerTintColor: '#fff',
                  headerTitleStyle: { fontWeight: 'bold' },
                  headerTitleAlign: 'center',
                }}
                initialRouteName="Iniciar sesión"
              >
                {/* Rutas para el inicio de sesión */}
                <Stack.Screen name="Iniciar sesión" component={LoginScreen}  />
                <Stack.Screen name="Registro" component={RegisterScreen} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />

                {/* Rutas para el menu */}
                <Stack.Screen name="HomeTab" component={HomeTab} />


             
              </Stack.Navigator>
            </NavigationContainer>
          )}
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#9DE1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
