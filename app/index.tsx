import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';

interface ImageData {
  id: string;
  primary: string;
  alternate: string;
}

const imageData: ImageData[] = [
  { id: '1', primary: 'https://picsum.photos/id/10/80', alternate: 'https://picsum.photos/id/11/80' },
  { id: '2', primary: 'https://picsum.photos/id/12/80', alternate: 'https://picsum.photos/id/13/80' },
  { id: '3', primary: 'https://picsum.photos/id/14/80', alternate: 'https://picsum.photos/id/15/80' },
  { id: '4', primary: 'https://picsum.photos/id/16/80', alternate: 'https://picsum.photos/id/17/80' },
  { id: '5', primary: 'https://picsum.photos/id/18/80', alternate: 'https://picsum.photos/id/19/80' },
  { id: '6', primary: 'https://picsum.photos/id/20/80', alternate: 'https://picsum.photos/id/21/80' },
  { id: '7', primary: 'https://picsum.photos/id/22/80', alternate: 'https://picsum.photos/id/23/80' },
  { id: '8', primary: 'https://picsum.photos/id/24/80', alternate: 'https://picsum.photos/id/25/80' },
  { id: '9', primary: 'https://picsum.photos/id/26/80', alternate: 'https://picsum.photos/id/27/80' },
];

const { width } = Dimensions.get('window');
const GRID_COLS = 3;
const GAP = 12; 
const IMAGE_SIZE = Math.min(
  (width - (GAP * (GRID_COLS + 1))) / GRID_COLS,
  80 
);

type ImageState = {
  currentScale: number;
  isMain: boolean;
  uri: string;
};

export default function App() {
  const [imageStates, setImageStates] = useState<{ [key: string]: ImageState }>(() => {
    const initialState: { [key: string]: ImageState } = {};
    imageData.forEach(img => {
      initialState[img.id] = {
        currentScale: 1,
        isMain: true,
        uri: img.primary,
      };
    });
    return initialState;
  });

  const handleImagePress = (id: string) => {
    setImageStates(prevStates => {
      const currentState = prevStates[id];
      if (!currentState) return prevStates;

      let newScale = currentState.currentScale * 1.2;
      if (newScale > 2) newScale = 2;

      const imgData = imageData.find(img => img.id === id);
      if (!imgData) return prevStates;

      const newIsMain = !currentState.isMain;
      const newUri = newIsMain ? imgData.primary : imgData.alternate;

      return {
        ...prevStates,
        [id]: {
          currentScale: newScale,
          isMain: newIsMain,
          uri: newUri,
        },
      };
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageGrid}>
        {imageData.map((imgData) => {
          const state = imageStates[imgData.id];
          if (!state) return null;
          
          return (
            <TouchableOpacity
              key={imgData.id}
              onPress={() => handleImagePress(imgData.id)}
              style={[
                styles.gridItem,
                { transform: [{ scale: state.currentScale }] }
              ]}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: state.uri }}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
    padding: GAP,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: GAP,
    width: '100%',
    maxWidth: IMAGE_SIZE * GRID_COLS + GAP * (GRID_COLS - 1),
  },
  gridItem: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    margin: GAP / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});