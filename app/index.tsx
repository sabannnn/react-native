import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function IndexPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Text style={styles.title}>5 nama sebelum </Text>
      <Text style={styles.latoBlack}>FAUZAN AZHARI RAHMAN</Text>
      <Text style={styles.manrope}>MUH.FADHIL AHMAD</Text>
      <Text style={styles.interItalic}>DAYANG AISYAH</Text>
      <Text style={styles.montserratBold}>MUH. ZAIN HIDAYAT</Text>
      <Text style={styles.firaCode}>ILFAUZA FEBRIANTY FAISAL</Text>
      {}
      <Text style={styles.title}>5 nama sesudah</Text>
      <Text style={styles.mySoul}>SA'BAN</Text>
      <Text style={styles.openSansItalic}>NUR FADILLAH SARI</Text>
      <Text style={styles.robotoItalic}>MUH. HIJRIL ILMAN</Text>
      <Text style={styles.oswald}>Wa Nanda Sulystrian</Text>
      <Text style={styles.ralewayItalic}>MUH. TEGAR AL FIKRI</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 18,
    backgroundColor: '#f5f5f5ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },

  latoBlack: {
    fontFamily: 'Lato-Black',
    fontWeight: '900',
    color: '#0d0d0eff',
  },
  montserratBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 23,
    color: '#0b0a0aff',
  },
  mySoul: {
    fontFamily: 'MySoul-Regular',
    color: '#0b0a0bff',
    fontSize: 24,
  },
  openSansItalic: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 22,
    color: '#141413ff',
  },
  robotoItalic: {
    fontFamily: 'Roboto-ExtraBoldItalic', 
    fontSize: 24,
    color: '#0e0f0eff',
  },

  // Variable Fonts
  firaCode: {
    fontFamily: 'FiraCode-Variable',
    fontSize: 20,
    fontWeight: '400',
    color: '#111111ff',
  },
  interItalic: {
    fontFamily: 'Inter-Italic-Variable',
    fontSize: 23,
    fontWeight: '500',
    color: '#151515ff',
  },
  manrope: {
    fontFamily: 'Manrope-Variable',
    fontSize: 25,
    fontWeight: '600',
    color: '#0c0c0cff',
  },
  oswald: {
    fontFamily: 'Oswald-Variable',
    fontSize: 24,
    fontWeight: '600',
    color: '#0e0f0fff',
  },
  ralewayItalic: {
    fontFamily: 'Raleway-Italic-Variable',
    fontSize: 23,
    fontWeight: '400',
    color: '#181718ff',
  },
});