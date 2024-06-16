/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import css from "../design/Home.module.css";
import Roles from "./Roles";
import styled from "styled-components";
import homepageImage from "../assets/HomePage.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Resume from "./Resume";

const HomePage = () => {
  return (
    <div id="Homeid" className={`home-css common ${css.Home}`}>
      <Resume></Resume>
      <div className={`${css.left}`}>
        <div className={css.wrapper}>
          <h2>
            {" "}
            <span>👋</span>Hi There,{" "}
          </h2>
          <h1>I'm Sujal Payal</h1>
          <h3>
            {" "}
            <Roles></Roles>
          </h3>
        </div>
      </div>
      <Right>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.4} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.3}>
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
        <img src={homepageImage} className={css.homeimg} />
      </Right>
    </div>
  );
};
export default HomePage;
const Right = styled.div`
  flex: 0.5;
  position: relative;
`;
