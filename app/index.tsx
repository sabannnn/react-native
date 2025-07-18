import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";

const imageData = [
  {
    id: "1",
    primary: "https://i.pinimg.com/736x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg",
    alternate: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/408/2025/04/18/30151-17448211994315-1920-4226333009.jpg",
  },
  {
    id: "2",
    primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkn5bBQzskYbpmlsXij2M58vwNC9okifkCQ&s",
    alternate: "https://cdnwpseller.gramedia.net/wp-content/uploads/2023/02/roronoza-zoro.webp",
  },
  {
    id: "3",
    primary: "https://i.pinimg.com/736x/88/2f/e7/882fe729340b6d27ff3f397e594c3f5d.jpg",
    alternate: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/01/05/1731101867.jpg",
  },
  {
    id: "4",
    primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsF5m9Jr0fgOFNNfwfWXQRInjkO_IJkPLavw&s",
    alternate: "https://i.pinimg.com/736x/19/fb/aa/19fbaa5fc273d44b56f2dee1dd270f81.jpg",
  },
  {
    id: "5",
    primary: "https://i.pinimg.com/736x/81/7e/a5/817ea5ea5fbaf170065fcfb312f50dff.jpg",
    alternate: "https://assets.jabarekspres.com/sukabumi/2023/12/Usopp.png",
  },
  {
    id: "6",
    primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmB3zHWx4URjmsu7RietyY8oP5OP8huGL9Q&s",
    alternate: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtzb6mC3IEdTfTgor-15kzMw6C9Y1I0vkrw&s",
  },
  {
    id: "7",
    primary: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/854/2024/12/23/Nico-Robin-Kid-young-One-Piece-3001585893.jpg",
    alternate: "https://cdn.rri.co.id/berita/Bengkulu/o/1736514139954-nico-robin-and-poneglyph/f9fu7pog1p8mh0u.jpeg",
  },
  {
    id: "8",
    primary: "https://i.pinimg.com/736x/36/7b/18/367b18a117159121cfd90a10bf91d258.jpg",
    alternate: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo6IC2tFhEWKdftQgckfz-84u7iE1JrKDvQ&s",
  },
  {
    id: "9",
    primary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco9vE3AJCcRJo3qaM4fyixdfNPWopoEj438AZ66zQgIPFSRf_Bcn2qqj6I4tA7AZyDPQ&usqp=CAU",
    alternate: "https://image.ggwp.id/post/20250306/teknikjinbe5.jpg",
  },
];

const { width } = Dimensions.get("window");
const cellMargin = 5;
const numColumns = 3;
const cellSize = (width - cellMargin * 2 * numColumns - 100) / numColumns;

export default function HomeScreen() {
  const [states, setStates] = useState(
    Array(9)
      .fill(0)
      .map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index) => {
    setStates((prevStates) =>
      prevStates.map((state, i) => {
        if (i !== index) return state;
        const nextScale = Math.min(state.scale * 1.2, 2);
        const toggleAlt = !state.isAlt;
        return {
          isAlt: toggleAlt,
          scale: nextScale >= 2 ? 2 : nextScale,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden />
      <View style={styles.grid}>
        {imageData.map((img, index) => (
          <TouchableOpacity
            key={img.id}
            onPress={() => handlePress(index)}
            style={styles.cell}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: states[index].isAlt ? img.alternate : img.primary,
              }}
              style={[
                styles.image,
                { transform: [{ scale: states[index].scale }] },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    width: cellSize,
    height: cellSize,
    margin: cellMargin,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  image: {
    width: cellSize - 10,
    height: cellSize - 10,
    borderRadius: 10,
  },
});
