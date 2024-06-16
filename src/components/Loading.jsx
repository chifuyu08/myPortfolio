/* eslint-disable react/prop-types */
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styled from "styled-components";
import { useMemo, useState, useEffect } from "react";
const Loading = ({ reveal }) => {
  const [init, setInit] = useState(false);
  const [counter, setCounter] = useState(0);
  //set init for particle
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  //loading count value
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) prev += 1;
        return prev;
      });
    }, 200);
    if (counter === 100) {
      clearInterval(count);
      reveal();
    }
  }, [counter, reveal]);


  const particlesLoaded = (container) => {
    console.log(container);
  };
  const particleComponent = useMemo(
    () =>
      init ? (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ) : null,
    [init]
  );

  return (
    <LoadingDiv className="loading">
      {particleComponent}
      <Follow className="follow"></Follow>
      <ProgressBar
        className="hide"
        id="progress-bar"
        style={{ width: counter + "%" }}
      ></ProgressBar>
      <Count id="count" className="hide">
        {counter}%
      </Count>
    </LoadingDiv>
  );
};
export default Loading;
const LoadingDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #f48049;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;
const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;
const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-55px);
  font-weight: 500;
`;
