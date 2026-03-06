import { Link } from 'react-scroll';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const items = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Achievements', 'Contact'];
  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 py-4 px-6 md:px-24 border-b transition-colors ${isDark ? 'bg-darkBg/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-accent' : 'text-blue-600'}`}>Portfolio.</h1>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6">
            {items.map((item) => (
              <li key={item}>
                <Link to={item.toLowerCase()} smooth={true} duration={500} className={`cursor-pointer transition ${isDark ? 'text-slate-300 hover:text-accent' : 'text-slate-700 hover:text-blue-600'}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className={`p-2 rounded-full transition ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'}`}>
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;