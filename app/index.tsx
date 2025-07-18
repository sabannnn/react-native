import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function IndexPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contoh Semua Font berdasarkan nama teman kelas</Text>
      {}
      {}
      
      <Text style={styles.firaCode}>MUH.FARREL APTA INDRATAMA</Text>
      <Text style={styles.interItalic}>FAUZAN AZHARI RAHMAN</Text>
      <Text style={styles.latoBlack}>MUH. FADIL AHMAD</Text>
      <Text style={styles.manrope}>DAYANG AISYAH</Text>
      <Text style={styles.montserratBold}>ILFAUZA FEBRIANTY FAISAL</Text>
      <Text style={styles.mySoul}>NURFADILA SARI</Text>
      <Text style={styles.openSansItalic}>WA NANDA SULISTRIAN</Text>
      <Text style={styles.oswald}>MUH. TEGAR ALFIKRI</Text>
      <Text style={styles.ralewayItalic}>RAIHANATUL JANNAH</Text>
      <Text style={styles.robotoItalic}>HANNA MARYAM</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  firaCode: {
    fontFamily: 'FiraCode-Variable',
    fontSize: 20,
  },
  interItalic: {
    fontFamily: 'Inter-Italic',
    fontSize: 20,
    fontWeight: '500', // Kita bisa set fontWeight karena ini variable font
  },
  latoBlack: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
  },
  manrope: {
    fontFamily: 'Manrope-Variable',
    fontSize: 20,
  },
  montserratBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
  },
  mySoul: {
    fontFamily: 'MySoul-Regular',
    fontSize: 28,
  },
  openSansItalic: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 20,
  },
  oswald: {
    fontFamily: 'Oswald-Variable',
    fontSize: 22,
    fontWeight: '600',
  },
  ralewayItalic: {
    fontFamily: 'Raleway-Italic',
    fontSize: 20,
  },
  robotoItalic: {
    fontFamily: 'Roboto-ExtraBoldItalic',
    fontSize: 22,
  },
});