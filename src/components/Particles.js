import React from "react";
import ParticlesJS from "react-particles-js";
import { createPortal } from "react-dom";

const colors = ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"];

const configParticle = {
  particles: {
    number: {
      value: 88,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: [...colors],
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 15,
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#33b1f8",
      opacity: 0.25,
      width: 2,
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
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 8,
        duration: 2,
        opacity: 10,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const Particles = (props) => {
  const { children } = props;
  return (
    <>
      <div className="absolute w-full h-full z-10">
        <ParticlesJS
          className="relative h-full w-full bg-secondary-200"
          params={configParticle}
        />
      </div>
    </>
  );
};

export default Particles;
