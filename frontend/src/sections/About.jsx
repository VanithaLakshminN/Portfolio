import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
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