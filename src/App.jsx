import styled from "styled-components";
import { gsap, Expo } from "gsap";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HomePage from "./components/Home";
import Project from "./components/Project";
import "./App.css";
import logo from "./assets/logo1.png";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

function App() {

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", {
        opacity: 0,
        duration: 0.4,
        display: "none",
      })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.5,
        delay: 0.1,
      })
      .to(".loading", {
        display: "none",
      })
      .to(".content", {
        display: "block",
        width: "100%",
        duration: 0.5,
        ease: Expo.easeInOut,
      });
  };



  return (
    <AppContainer>
      <Loading reveal={reveal}></Loading>
      <Content className="content">
        <img src={logo} className="img-css" />
        <HomePage></HomePage>
        <Project></Project>
        <Skills></Skills>
        <Contact></Contact>
        <Navbar></Navbar>
      </Content>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  background-color: #f48049;
  color: #000000;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  width: 0;
  height: 100%;
  background-color: #121212;
  padding: auto;
  z-index: 3;
  overflow: hidden;
  color: #fff;
  display: none;
`;
