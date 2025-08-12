// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Daftar Mahasiswa' }} />
      <Stack.Screen name="mahasiswa/[id]" options={{ title: 'Detail Mahasiswa' }} />
    </Stack>
  );
}