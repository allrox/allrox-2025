import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Logo} from "./Logo.js";

export default function DefaultNavbar() {
  return (
    <Navbar position="static " className="py-8 text-white ">
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
      </NavbarContent>
    </Navbar>
  );
}