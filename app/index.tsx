import { Text, View, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="home" size={32} color="#e74c3c" />
        <Text style={{ marginTop: 6 }}>Home Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="user" size={32} color="#2980b9" />
        <Text style={{ marginTop: 6 }}>User Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="checkcircle" size={32} color="#27ae60" />
        <Text style={{ marginTop: 6 }}>Check Circle Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="windows" size={32} color="#8e44ad" />
        <Text style={{ marginTop: 6 }}>Windows Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="smile-circle" size={32} color="#f1c40f" />
        <Text style={{ marginTop: 6 }}>Smile Circle Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="pushpin" size={32} color="#e67e22" />
        <Text style={{ marginTop: 6 }}>Pushpin Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="eye" size={32} color="#16a085" />
        <Text style={{ marginTop: 6 }}>Eye Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="piechart" size={32} color="#34495e" />
        <Text style={{ marginTop: 6 }}>Piechart Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="dotchart" size={32} color="#c0392b" />
        <Text style={{ marginTop: 6 }}>Dotchart Icon</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <AntDesign name="barchart" size={32} color="#2ecc71" />
        <Text style={{ marginTop: 6 }}>Barchart Icon</Text>
      </View>
    </ScrollView>
  );
}