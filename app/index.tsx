import React, { useState } from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

const imageData = [
  { id: "1", primary: "https://i.pinimg.com/736x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg", alternate: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/408/2025/04/18/30151-17448211994315-1920-4226333009.jpg" },
  { id: "2", primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkn5bBQzskYbpmlsXij2M58vwNC9okifkCQ&s", alternate: "https://cdnwpseller.gramedia.net/wp-content/uploads/2023/02/roronoza-zoro.webp" },
  { id: "3", primary: "https://i.pinimg.com/736x/88/2f/e7/882fe729340b6d27ff3f397e594c3f5d.jpg", alternate: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/01/05/1731101867.jpg" },
  { id: "4", primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsF5m9Jr0fgOFNNfwfWXQRInjkO_IJkPLavw&s", alternate: "https://i.pinimg.com/736x/19/fb/aa/19fbaa5fc273d44b56f2dee1dd270f81.jpg" },
  { id: "5", primary: "https://i.pinimg.com/736x/81/7e/a5/817ea5ea5fbaf170065fcfb312f50dff.jpg", alternate: "https://assets.jabarekspres.com/sukabumi/2023/12/Usopp.png" },
  { id: "6", primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmB3zHWx4URjmsu7RietyY8oP5OP8huGL9Q&s", alternate: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtzb6mC3IEdTfTgor-15kzMw6C9Y1I0vkrw&s" },
  { id: "7", primary: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/854/2024/12/23/Nico-Robin-Kid-young-One-Piece-3001585893.jpg", alternate: "https://cdn.rri.co.id/berita/Bengkulu/o/1736514139954-nico-robin-and-poneglyph/f9fu7pog1p8mh0u.jpeg" },
  { id: "8", primary: "https://i.pinimg.com/736x/36/7b/18/367b18a117159121cfd90a10bf91d258.jpg", alternate: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo6IC2tFhEWKdftQgckfz-84u7iE1JrKDvQ&s" },
  { id: "9", primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco9vE3AJCcRJo3qaM4fyixdfNPWopoEj438AZ66zQgIPFSRf_Bcn2qqj6I4tA7AZyDPQ&usqp=CAU", alternate: "https://image.ggwp.id/post/20250306/teknikjinbe5.jpg" },
];

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;
const margin = 8;
const padding = 16;
const cellSize = (screenWidth - padding * 2 - margin * (numColumns - 1)) / numColumns;

// Konstanta untuk penskalaan
const SCALE_INCREMENT = 0.3;
const MAX_SCALE = 2.0;
const MIN_SCALE = 1.0;

export default function ImageGrid() {
  const [states, setStates] = useState(
    imageData.map(() => ({
      isAlternate: false,
      scale: MIN_SCALE,
    }))
  );

  const handlePress = (index) => {
    setStates((prev) =>
      prev.map((state, i) => {
        if (i !== index) return state;

        // Hitung skala berikutnya
        let nextScale = state.scale + SCALE_INCREMENT;
        
        // Jika sudah mencapai maksimum, reset ke minimum
        if (nextScale > MAX_SCALE) {
          nextScale = MIN_SCALE;
        }
        
        // Batasi skala maksimum
        nextScale = Math.min(nextScale, MAX_SCALE);
        
        return {
          isAlternate: !state.isAlternate,
          scale: Number(nextScale.toFixed(1)),
        };
      })
    );
  };

  // Fungsi untuk reset semua gambar ke skala normal
  const resetAllScales = () => {
    setStates((prev) =>
      prev.map((state) => ({
        ...state,
        scale: MIN_SCALE,
      }))
    );
  };

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => handlePress(index)}
      onLongPress={resetAllScales} // Long press untuk reset semua
      style={[
        styles.cell,
        { 
          transform: [{ scale: states[index].scale }],
          zIndex: states[index].scale > MIN_SCALE ? 1 : 0, // Gambar yang diperbesar di atas
        },
      ]}
    >
      <Image
        source={{
          uri: states[index].isAlternate ? item.alternate : item.primary,
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={numColumns}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: margin,
        }}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: padding,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  cell: {
    width: cellSize,
    height: cellSize,
    backgroundColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});