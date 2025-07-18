import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // --- FONT VARIABEL ---
    'FiraCode-Variable': require('../assets/fonts/FiraCode-VariableFont_wght.ttf'),
    'Inter-Italic': require('../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
    'Manrope-Variable': require('../assets/fonts/Manrope-VariableFont_wght.ttf'),
    'Oswald-Variable': require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    'Raleway-Italic': require('../assets/fonts/Raleway-Italic-VariableFont_wght.ttf'),
    // --- FONT STATIS ---
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),      
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),       
    'MySoul-Regular': require('../assets/fonts/MySoul-Regular.ttf'),       
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),      
    'Roboto-ExtraBoldItalic': require('../assets/fonts/Roboto-ExtraBoldItalic.ttf'),
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}