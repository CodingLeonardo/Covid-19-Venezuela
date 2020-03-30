import React from "react";
import ParticlesJS from "react-particles-js";
import VirusPurple from "../assets/images/virus-purple.svg";
import VirusYellow from "../assets/images/virus-yellow.svg";
import VirusGreen from "../assets/images/virus-green.svg";
import VirusCian from "../assets/images/virus-cian.svg";

const colors = ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"];

const configParticle = {
  particles: {
    number: {
      value: 88,
      density: {
        enable: true,
        value_area: 700
      }
    },
    color: {
      value: [...colors]
    },
    shape: {
      type: ["images"],
      images: [
        {
          src: VirusPurple,
          height: 20,
          width: 23
        },
        {
          src: VirusYellow,
          height: 20,
          width: 23
        },
        {
          src: VirusGreen,
          height: 20,
          width: 23
        },
        {
          src: VirusCian,
          height: 20,
          width: 23
        }
      ],
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 15
      }
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false
      }
    },
    size: {
      value: 10,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#33b1f8",
      opacity: 0.25,
      width: 2
    },
    move: {
      enable: true,
      speed: 5,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 15,
        duration: 2,
        opacity: 10,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const Particles = props => {
  const { children } = props;
  return (
    <div className="flex justify-center items-center absolute">
      <div className="absolute z-10">{children}</div>
      <ParticlesJS
        className="h-almost absolute w-screen bg-secondary-200"
        params={configParticle}
      />
    </div>
  );
};

export default Particles;
