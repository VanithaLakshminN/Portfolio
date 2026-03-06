import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useContext(ThemeContext);
  
  const bgStyle = {
    backgroundImage: `
      linear-gradient(135deg, ${isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.95)'} 0%, ${isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(241, 245, 249, 0.95)'} 100%),
      linear-gradient(45deg, ${isDark ? 'transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%' : 'transparent 30%, rgba(59, 130, 246, 0.08) 50%, transparent 70%'}),
      url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23${isDark ? '3b82f6' : '3b82f6'};stop-opacity:0.1" /%3E%3Cstop offset="100%25" style="stop-color:%23${isDark ? '1e40af' : '1e40af'};stop-opacity:0.05" /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx="50" cy="50" r="40" fill="url(%23grad)" stroke="%23${isDark ? '64748b' : 'cbd5e1'})" stroke-width="0.5" opacity="0.3"/%3E%3C/svg%3E')
    `,
    backgroundSize: '100%, 100%, 100px 100px',
    backgroundAttachment: 'fixed',
    backgroundColor: isDark ? '#0f172a' : '#ffffff'
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center pt-20 relative"
      style={bgStyle}
    >
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-accent mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Vanitha Lakshmin N</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          I am a{' '}
          <span className="text-accent">
            <Typewriter words={['Software Developer', 'Data Analytics Enthusiast', 'AI Learner']} loop cursor />
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Aspiring to contribute to a forward-thinking organization where innovation meets impact. Eager to apply my technical skills and creative mindset to solve real-world problems, enhance existing technologies, and continuously grow as a learner and developer in a collaborative environment.
        </p>
        <div className="flex gap-4">
            <a href="/VANITHA_BE_CSE_2026.pdf" download="Vanitha_Lakshmi_Resume.pdf" className="px-6 py-3 border-2 border-accent text-accent rounded hover:bg-accent/10 transition text-center">
            Download Resume
            </a>
            <a href="https://github.com/VanithaLakshminN" target="_blank" rel="noreferrer" className="px-6 py-3 bg-accent text-darkBg font-semibold rounded hover:bg-accent/90 transition">
            View GitHub
            </a>
        </div>
      </motion.div>
    </section>
  );
};
export default About;