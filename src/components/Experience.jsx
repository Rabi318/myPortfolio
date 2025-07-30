import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Web_Bocket",
      date: "July 2024 - Aug 2024",
      description: [
        "Developed and maintained full-stack web applications using the MERN stack.",
        "Collaborated with designers to create responsive and user-friendly interfaces.",
        "Implemented RESTful APIs and integrated with various third-party services.",
        "Optimized application performance, resulting in a 30% reduction in load times.",
      ],
    },
    {
      role: "MERN Developer Intern",
      company: "SearchingYard Group",
      date: "Jan 2024 - Jun 2024",
      description: [
        "Assisted in building and styling React components for a large-scale e-commerce platform.",
        "Worked closely with the UX team to translate wireframes into functional UI.",
        "Participated in code reviews and agile development cycles.",
        "Gained hands-on experience with modern frontend tools and libraries.",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center bg-gray-900/50 py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase /> Professional Experience
        </motion.h2>
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* The vertical timeline bar */}
          <div
            className="absolute h-full border border-gray-700 border-dashed"
            style={{ left: "50%" }}
          ></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
