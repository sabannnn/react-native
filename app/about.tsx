import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi Ini</Text>
      <Text style={styles.description}>
        Aplikasi mobile ini dibuat sebagai bagian dari tugas mata kuliah pengembangan aplikasi mobile.
        Tujuan utama aplikasi ini adalah untuk mendemonstrasikan penggunaan Expo Router dalam membangun
        aplikasi React Native dengan navigasi tab bar yang sederhana namun fungsional.
      </Text>
      <Text style={styles.subtitle}>Fungsi Masing-masing Halaman:</Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>Home:</Text> Halaman ini menyajikan informasi umum tentang Universitas Muhammadiyah Makassar,
        termasuk deskripsi singkat dan gambar pendukung.
      </Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>About:</Text> Halaman ini menjelaskan tujuan dan fungsi dari aplikasi ini secara keseluruhan,
        serta memberikan gambaran singkat tentang setiap halaman yang ada.
      </Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>Profil:</Text> Halaman ini menampilkan data diri pribadi pembuat aplikasi,
        lengkap dengan foto profil lokal.
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#555',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#666',
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
});