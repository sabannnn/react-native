import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Unismuh Makassar</Text>
      <Image
        source={require('../assets/images/Unismuh-Makassar.jpg')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Universitas Muhammadiyah Makassar adalah salah satu perguruan tinggi swasta terkemuka di Sulawesi Selatan.
        Berlokasi strategis di Kota Makassar, Unismuh Makassar berkomitmen untuk mencetak lulusan yang unggul, berakhlak mulia,
        dan berdaya saing tinggi di tingkat nasional maupun internasional.
      </Text>
      <Text style={styles.description}>
        Dengan berbagai program studi yang relevan dengan kebutuhan industri dan masyarakat, Unismuh Makassar terus berinovasi
        dalam bidang pendidikan, penelitian, dan pengabdian kepada masyarakat.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#666',
    textAlign: 'justify',
  },
});