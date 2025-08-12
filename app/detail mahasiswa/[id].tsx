import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { mahasiswaData } from '../../data';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const mahasiswa = mahasiswaData.find((m) => m.id === id);

  if (!mahasiswa) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Mahasiswa tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: mahasiswa.foto }} style={styles.foto} />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama Lengkap:</Text>
        <Text style={styles.value}>{mahasiswa.nama}</Text>
        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>{mahasiswa.nim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#333',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 50,
  },
});