import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Dice = () => {
  const meshRef = useRef();

  // Animation de rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Dice3D = () => {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Dice />
      <OrbitControls />
    </Canvas>
  );
};

export default Dice3D;
