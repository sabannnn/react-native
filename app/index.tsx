import React, { useState } from "react";

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

export default function App() {
  const [states, setStates] = useState(
    Array(imageData.length).fill(0).map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index) => {
    setStates((prevStates) =>
      prevStates.map((state, i) => {
        if (i !== index) return state;

    const nextScale = Math.min
      (state.scale * 1.2, 2);
        return {
          isAlt: !state.isAlt,
          scale: nextScale,
        };
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {imageData.map((img, index) => (
          <div
            key={img.id}
            onClick={() => handlePress(index)}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              aspectRatio: "1 / 1",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              display: "flex",
            }}
          >
            <img
              src={states[index].isAlt ? img.alternate : img.primary}
              alt={`Gambar ${img.id}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: `scale(${states[index].scale})`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
