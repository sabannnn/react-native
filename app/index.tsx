import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function IndexPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contoh Semua Font berdasarkan nama teman kelas</Text>
      {

      }
      {

      }
    <Text style={styles.interItalic}>
      105841109622 FAUZAN AZHARI RAHMAN</Text>
    <Text style={styles.latoBlack}>
      105841109722 MUH. FADIL AHMAD</Text>
    <Text style={styles.manrope}>
      105841109822 DAYANG AISYAH</Text>
    <Text style={styles.firaCode}>
      105841100122 MUH. ZAIN HIDAYAT</Text>
    <Text style={styles.montserratBold}>
      105841110222 ILFAUZA FEBRIANTY FAISAL</Text>
    <Text style={styles.mySoul}>
      105841110422 NURFADILA SARI</Text>
    <Text style={styles.openSansItalic}>
      105841110522 MUH. HIJRIL ILMAN</Text>
    <Text style={styles.robotoItalic}>
      105841110622 WA NANDA SULISTRIAN</Text>
    <Text style={styles.oswald}>
      105841110722 MUH. TEGAR ALFIKRI</Text>
    <Text style={styles.ralewayItalic}>
      105841110822 RAIHANATUL JANNAH</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  firaCode: {
    fontFamily: 'FiraCode-Variable',
    fontSize: 30,
  },
  interItalic: {
    fontFamily: 'Inter-Italic',
    fontSize: 31,
    fontWeight: '500',
  },
  latoBlack: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
    fontWeight: '900',
  },
  manrope: {
    fontFamily: 'Manrope-Variable',
    fontSize: 33,
  },
  montserratBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
  },
  mySoul: {
    fontFamily: 'MySoul-Regular',
    fontSize: 35,
  },
  openSansItalic: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 36,
  },
  oswald: {
    fontFamily: 'Oswald-Variable',
    fontSize: 37,
    fontWeight: '600',
  },
  ralewayItalic: {
    fontFamily: 'Raleway-Italic',
    fontSize: 38,
  },
  robotoItalic: {
    fontFamily: 'Roboto-ExtraBoldItalic',
    fontSize: 39,
  },
});