import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Building } from "lucide-react";
import React, { useRef } from "react";

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center w-full"
    >
      {/* Left card on desktop */}
      {isLeft && (
        <motion.div
          className="w-full md:w-5/12 bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 md:mr-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-cyan-400 font-semibold text-sm mb-1">
            {experience.date}
          </p>
          <h3 className="text-xl font-bold text-white mb-1">
            {experience.role}
          </h3>
          <p className="text-gray-400 mb-4">{experience.company}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Timeline Separator */}
      <div className="w-10 h-full flex flex-col items-center relative z-10">
        <div className="h-full w-px bg-gray-700"></div>
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Building className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Right card on desktop */}
      {!isLeft && (
        <motion.div
          className="w-full md:w-5/12 bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 md:ml-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-cyan-400 font-semibold text-sm mb-1">
            {experience.date}
          </p>
          <h3 className="text-xl font-bold text-white mb-1">
            {experience.role}
          </h3>
          <p className="text-gray-400 mb-4">{experience.company}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default ExperienceCard;
