import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TEXTURE_PATHS, ANIMATION_CONFIG } from '../config/diceConfig';

const DiceMesh = ({ rotation, isRolling }) => {
  const meshRef = useRef();

  // Charger les textures
  const texture1 = useLoader(THREE.TextureLoader, TEXTURE_PATHS[1]);
  const texture2 = useLoader(THREE.TextureLoader, TEXTURE_PATHS[2]);
  const texture3 = useLoader(THREE.TextureLoader, TEXTURE_PATHS[3]);
  const texture4 = useLoader(THREE.TextureLoader, TEXTURE_PATHS[4]);
  const texture5 = useLoader(THREE.TextureLoader, TEXTURE_PATHS[5]);
  const texture6 = useLoader(THREE.TextureLoader, TEXTURE_PATHS[6]);

  // Mémoriser les matériaux
  const materials = React.useMemo(() => {
    return [
      new THREE.MeshStandardMaterial({ map: texture1 }), // Face 0
      new THREE.MeshStandardMaterial({ map: texture2 }), // Face 1
      new THREE.MeshStandardMaterial({ map: texture3 }), // Face 2
      new THREE.MeshStandardMaterial({ map: texture4 }), // Face 3
      new THREE.MeshStandardMaterial({ map: texture5 }), // Face 4
      new THREE.MeshStandardMaterial({ map: texture6 }), // Face 5
    ];
  }, [texture1, texture2, texture3, texture4, texture5, texture6]);

  useFrame((state, delta) => {
    if (meshRef.current && isRolling) {
      // Animation de rotation pendant le lancer
      const { speed, speedMultipliers } = ANIMATION_CONFIG;
      meshRef.current.rotation.x += delta * speed * speedMultipliers.x;
      meshRef.current.rotation.y += delta * speed * speedMultipliers.y;
      meshRef.current.rotation.z += delta * speed * speedMultipliers.z;
    } else if (meshRef.current) {
      // Interpolation douce vers la position finale
      const { lerpFactor } = ANIMATION_CONFIG;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, rotation.x, lerpFactor);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotation.y, lerpFactor);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, rotation.z, lerpFactor);
    }
  });

  return (
    <mesh ref={meshRef} material={materials}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default DiceMesh;
