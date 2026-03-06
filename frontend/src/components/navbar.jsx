import { Link } from 'react-scroll';

const Navbar = () => {
  const items = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Achievements', 'Contact'];
  return (
    <nav className="fixed top-0 w-full bg-darkBg/90 backdrop-blur-sm z-50 py-4 px-6 md:px-24 border-b border-slate-800">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">Portfolio.</h1>
        <ul className="hidden md:flex gap-6">
          {items.map((item) => (
            <li key={item}>
              <Link to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;