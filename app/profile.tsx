// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// export default function ProfileScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Profil Pribadi</Text>
//       <Image
//         source={require('../assets/images/saban.jpg')}
//         style={styles.profileImage}
//       />
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Nama Lengkap:</Text>
//         <Text style={styles.value}>SA'BAN</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>NIM:</Text>
//         <Text style={styles.value}>105841110322</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Kelas:</Text>
//         <Text style={styles.value}>6C</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Jurusan:</Text>
//         <Text style={styles.value}>TEKNIK INFORMATIKA</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Fakultas:</Text>
//         <Text style={styles.value}>Teknik</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     alignSelf: 'center',
//     marginBottom: 20,
//     borderWidth: 3,
//     borderColor: '#007bff',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     width: 120,
//     color: '#333',
//   },
//   value: {
//     fontSize: 16,
//     flex: 1,
//     color: '#666',
//   },
// });