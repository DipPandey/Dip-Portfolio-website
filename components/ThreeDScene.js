import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
    const { scene } = useGLTF('/path/to/your/3d/model.glb');
    return <primitive object={scene} />;
}

const ThreeDScene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls />
            <Model />
        </Canvas>
    );
};

export default ThreeDScene;
