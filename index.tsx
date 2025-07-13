import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <View
        style={{
          backgroundColor: "black",
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "red",
          }}
        >
          {" "}
          105841110322{" "}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          {" "}
          SABAN{" "}
        </Text>
      </View> */
      
      // }
      // <View
      //   style={{
      //     width: 50,
      //     height: 50,
      //     backgroundColor: "green",
      //     borderRadius: 25,
      //     marginBottom: 20,
      //   }}
      // />

      // {


      }
      <View
    style={{
      width: 180,
      height: 50,
      backgroundColor: "#f5c542",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 20,
      }}
      >
      <Text style={{
        fontWeight: "bold", color: "#222" }}>SABAN
      </Text>
      </View>

      {

      }
      <View
    style={{
      width: 60,
      height: 100,
      backgroundColor: "#42a5f5",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      }}
      >
      <Text style={{ 
        color: "red", fontSize: 10 }}>105841110322
      </Text>
      </View>

      {
       
       
      }
      <View
    style={{
      width: 0,
      height: 0,
      borderLeftWidth: 40,
      borderRightWidth: 40,
      borderBottomWidth: 70,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "#e53935",
      backgroundColor: "transparent",
      }}
      />
    </View>
  );
}