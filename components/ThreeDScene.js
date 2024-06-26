import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';


const ThreeDScene = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} />
            <Text
                color="white"
                fontSize={1}
                maxWidth={200}
                lineHeight={1}
                textAlign={'center'}
                font="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxM.woff"
                anchorX="center"
                anchorY="middle"
            >
                Dip Pandey
            </Text>
        </Canvas>
    );
};

export default ThreeDScene;
