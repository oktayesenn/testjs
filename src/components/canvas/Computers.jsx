import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import texture from '../../assets/ceaser.avif';


function Computers() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </Canvas>
  );
}



export default Computers;