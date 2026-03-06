import { motion } from 'framer-motion';

const Education = () => {
  const edu = [
    { degree: "B.E Computer Science Engineering", year: "2022 - 2026", school: "Government Engineering College, Challakere — GPA: 8.50" },
    { degree: "Pre-University", year: "2020 - 2022", school: "SRS PU College, Challakere — 93.33%" },
    { degree: "Secondary School Leaving Certificate", year: "2019 - 2020", school: "Adarsha Vidyalaya [RMSA], Challakere — 94.24%" }
  ];

  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold mb-10"><span className="text-accent">01.</span> Education</h2>
      <div className="border-l-2 border-slate-700 pl-6 space-y-8">
        {edu.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
            <p className="text-accent font-mono text-sm mb-2">{item.year}</p>
            <p className="text-slate-400">{item.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;