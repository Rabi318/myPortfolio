// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const resumeUrl =
    "https://drive.google.com/file/d/1PdpkIfX1fxMUzqley62kKkOo-uAlaeqf/view?usp=sharing";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-950 overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Rabi
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full Stack MERN Developer 🚀
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-cyan-400 hover:text-gray-950 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-10 justify-center text-white text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a
            href="https://github.com/Rabi318"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rabinarayan-sahoo-97a593222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@rabicodes?si=ln3NZAXKAjfaS-DF"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaYoutube />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
