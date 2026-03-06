import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useContext(ThemeContext);
  const skills = ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'React', 'Node.js', 'GitHub', 'VS Code'];

  return (
    <section id="skills" className="py-20">
      <h2 className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}><span className="text-accent">02.</span> Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <motion.div key={i} whileHover={{ scale: 1.1 }} className={`px-6 py-3 rounded-lg font-medium shadow-lg transition ${isDark ? 'bg-slate-800 border border-slate-700 text-accent' : 'bg-blue-100 border border-blue-300 text-blue-700'}`}>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;