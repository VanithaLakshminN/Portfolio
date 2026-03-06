import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useContext(ThemeContext);
  
  const bgStyle = {
    backgroundImage: `
      linear-gradient(135deg, ${isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)'} 0%, ${isDark ? 'rgba(30, 41, 59, 0.85)' : 'rgba(241, 245, 249, 0.9)'} 100%),
      url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23${isDark ? '334155' : 'e2e8f0'}' fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
    `,
    backgroundSize: '100%, 60px 60px',
    backgroundAttachment: 'fixed'
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