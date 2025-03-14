
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import logo from "../assets/logo.jpeg";


export default function NavbarComponent() {
  return (
    <Navbar fluid>
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-9 sm:h-16" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">
          About
        </Navbar.Link>
       <DarkThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
}
