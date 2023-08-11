import Particles from "react-particles";
import { loadFull } from "tsparticles";
import React from "react";

function Particle() {
  const particlesInit = async (main) => {
    //console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "none",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
          },
        },
        particles: {
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 0,
            value: 60,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: "random",
            random: true,
            value: 0,
          },
          shape: {
            image: [
              {
                src: "https://raw.githubusercontent.com/edraalfig/img/main/gear1.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://raw.githubusercontent.com/edraalfig/img/main/gear2.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://raw.githubusercontent.com/edraalfig/img/main/gear3.png",
                width: 32,
                height: 32,
              },
            ],
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 20,
          },
        },
      }}
    />
  );
}

export default Particle;
