import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Experience = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>Internship / Experience</h2>
        <div className="space-y-8">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
            <h3 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-accent' : 'text-blue-600'}`}>1M1B Green Internship Program</h3>
            <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>AICTE Collaboration</p>
            <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              Completed the program exploring sustainability, technology, and leadership to develop practical climate solutions.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
            <h3 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-accent' : 'text-blue-600'}`}>Data Analytics Internship</h3>
            <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Rooman Technology (Ongoing)</p>
            <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              Currently working on data analytics projects, developing skills in data analysis, visualization, and business intelligence.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
            <h3 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-accent' : 'text-blue-600'}`}>Full Stack Development with Java Internship</h3>
            <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>TAP Academy (Ongoing)</p>
            <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              Currently working on full stack web development projects using Java, building end-to-end solutions with modern backend and frontend technologies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;