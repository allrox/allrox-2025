import { useState } from "react";
import { Logo } from "./Logo.js";

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col sm:flex-row py-8 text-white mx-auto w-full sm:justify-center items-center">
      <div>
        <Logo />
      </div>

      <button
        className="text-xl sm:hidden text-white mt-4"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div className={`${isOpen ? "block" : "hidden"} sm:flex`}>
        <ul className="text-xl md:text-base flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 sm:ml-10 text-center leading-snug" justify="center">
          <li>
            <a className="hover:text-[#ffcd48] hover:font-bold" href="#sobre">
              Sobre nós
            </a>
          </li>
          <li>
            <a className="hover:text-[#ffcd48] hover:font-bold" href="#como-funciona">
              Como funciona?
            </a>
          </li>
          <li>
            <a className="hover:text-[#ffcd48] hover:font-bold" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-[#ffcd48] hover:font-bold" href="#depoimentos">
              Opiniões de clientes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
