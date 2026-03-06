import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Internship / Experience</h2>
        <div className="space-y-8">
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-accent mb-2">1M1B Green Internship Program</h3>
            <p className="text-slate-400 mb-4">AICTE Collaboration</p>
            <p className="text-slate-300">
              Completed the program exploring sustainability, technology, and leadership to develop practical climate solutions.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-accent mb-2">Seventh Sense Company</h3>
            <p className="text-slate-400 mb-4">Training Program</p>
            <p className="text-slate-300">
              Successfully completed interview preparation and soft skills training focusing on resume building, communication skills, mock interviews, and technical interview strategies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;