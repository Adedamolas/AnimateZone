import "./App.css";
import MoonLineIcon from "remixicon-react/MoonLineIcon";
import { motion } from "framer-motion";

interface NavbarProps {
  theme: boolean;
  toggleTheme: () => void;
}
export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={theme ? `bg-red` : `bg-none`}
    >
      <nav className="fixed top-0 flex flex-row justify-evenly w-full py-2 border-grey z-20 bg-redtrans backdrop-blur-lg">
        <ul className="flex flex-row w-full justify-evenly align-middle place-items-center">
          <li>Logo</li>
          <div className="flex flex-row gap-8">
            <a href="">Discover</a>
            <a href="">Make your Meal</a>
          </div>
          <li>Lodge comment</li>
          <div>
            <button
              className={theme ? `text-white border-white` : `text-black`}
              onClick={toggleTheme}
            >
              <MoonLineIcon />
            </button>
          </div>
        </ul>
      </nav>
    </motion.div>
  );
}
