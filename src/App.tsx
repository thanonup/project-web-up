import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="container">
      <div id="header-container">
        <h1 id="header-name">Portfolio</h1>

        <h1 id="header-button">
          <img src="image/Hambuerger.png" alt="buttonpng" />
        </h1>
      </div>
    </div>
    // <div id="canvas-container">
    //   <Canvas>
    //     <ambientLight intensity={0.1} />
    //     <directionalLight color="red" position={[0, 0, 5]} />
    //     <mesh>
    //       <boxGeometry />
    //       <meshStandardMaterial />
    //     </mesh>
    //   </Canvas>
    // </div>
  );
}

export default App;
