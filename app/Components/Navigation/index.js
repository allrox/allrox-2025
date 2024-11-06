import { useState } from "react";
import Logo from '../Navigation/Logo.js';

export default function Navigation() {

  const link = "hover:text-[#ffcd48] hover:font-bold";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center py-8 mx-auto w-full text-white">
      <div>
        <Logo />
      </div>

      <button
        className="text-xl sm:hidden text-white mt-4"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <nav role="navigation" className={`${isOpen ? "block" : "hidden"} sm:flex`}>
        <ul className="text-lg md:text-base flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 sm:ml-10 text-center leading-snug" justify="center">
          <li>
            <a
              className={link}
              onClick={toggleMenu}
              href="#sobre">
              Sobre nós
            </a>
          </li>
          <li>
            <a
              className={link}
              onClick={toggleMenu}
              href="#como-funciona">
              Como funciona?
            </a>
          </li>
          <li>
            <a
              className={link}
              onClick={toggleMenu}
              href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a
              className={link}
              onClick={toggleMenu}
              href="#depoimentos">
              Opiniões de clientes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
