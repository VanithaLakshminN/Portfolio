import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Achievements = () => {
  const { isDark } = useContext(ThemeContext);
  const awards = ["SIH COllege level 3rd winner", "Deloitte Data Analytics Certificate", "EY Microsoft AI Skills Passport"];

  return (
    <section id="achievements" className="py-20">
      <h2 className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}><span className="text-accent">04.</span> Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {awards.map((award, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className={`p-6 rounded-lg text-center transition ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700' : 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300'}`}>
            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{award}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Achievements;