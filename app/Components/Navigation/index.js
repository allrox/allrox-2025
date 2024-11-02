import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Logo} from "./Logo.js";

export default function Navigation() {
  return (
    <Navbar position="static" className="py-8 text-white mx-auto w-fit">
      <NavbarBrand>
        <Logo/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#sobre">
            Sobre nós
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#como-funciona">
            Como funciona?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#depoimentos">
            Opiniões de clientes
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}