import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { mahasiswaData } from '../data';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mahasiswaData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/mahasiswa/${item.id}`} asChild>
            <TouchableOpacity style={styles.item}>
              <Ionicons name="person-circle-outline" size={24} color="#333" style={styles.icon} />
              <Text style={styles.nama}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});