import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { mobileScreenSize, tabletScreenSize } from "../../constants";
import { Room } from "./Room";
import Hero from "../../sections/Hero";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${tabletScreenSize}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileScreenSize}px)`,
  });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      
      {/* Light for the 3D office model */}
      <HeroLights/> 

      {/* Allow users to move model */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5} // controls angle of the camera
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={isMobile ? 0.75 : 1} position={[0, -3.5, 0]} rotation={[0, Math.PI/4, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
