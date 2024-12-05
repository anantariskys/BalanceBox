import React from "react";
import Image from "../../public/favicon.png";
import Button from "./Button";
import { Link } from "@remix-run/react";
const Navbar = () => {
  return (
    <nav className="w-full py-5 ">
      <main className="container flex justify-between items-center ">
        <Link to={'/'}>

        <img src={Image} draggable="false" className="w-56" alt="Logo" />
        </Link>

        <div className="flex gap-4">
          <Link to={'/register'}>
          <Button type="button" variant="primary-outline" width="w-fit">
            Daftar
          </Button>
          </Link>
          <Link to={'/login'}>
          <Button type="button" variant="default" width="w-fit">
            Masuk
          </Button>
          </Link>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
