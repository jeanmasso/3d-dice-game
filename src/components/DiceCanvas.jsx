import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DiceMesh from './DiceMesh';
import { LIGHTING_CONFIG, CANVAS_CONFIG } from '../config/diceConfig';
import { sections } from '../styles/components';

const DiceCanvas = ({ rotation, isRolling }) => {
  const { ambient, mainLight, accentLight } = LIGHTING_CONFIG;

  return (
    <div style={sections.canvas}>
      <Canvas style={CANVAS_CONFIG.style}>
        <ambientLight intensity={ambient.intensity} />
        <pointLight 
          position={mainLight.position} 
          intensity={mainLight.intensity} 
        />
        <pointLight 
          position={accentLight.position} 
          intensity={accentLight.intensity} 
          color={accentLight.color} 
        />
        <DiceMesh rotation={rotation} isRolling={isRolling} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default DiceCanvas;
