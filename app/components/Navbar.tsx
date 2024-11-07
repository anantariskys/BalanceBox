import React from "react";
import Image from "../../public/favicon.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="w-full py-5 ">
      <main className="container flex justify-between items-center ">
        <img src={Image} draggable="false" className="w-56" alt="Logo" />

        <div className="flex gap-4">
          <Button type="button" variant="primary-outline" width="w-fit">
            Daftar
          </Button>
          <Button type="button" variant="default" width="w-fit">
            Masuk
          </Button>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
