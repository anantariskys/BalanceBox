import Button from "~/components/Button";
import Logo from "../../public/favicon.png";
import Makanan from "../assets/foodImage.png";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "../styles/swiper.css";
import { dummy } from "~/data/dummy";
import FoodCard from "~/components/auth/FoodCard";
import { Link } from "@remix-run/react";
import AuthLayout from "~/layouts/AuthLayout";
const register = () => {
  return (
    <section className="w-1/2 flex flex-col items-center space-y-8 justify-center">
      <div className="text-center">
        <img
          src={Logo}
          alt="logo"
          draggable="false"
          className="w-2/5 mx-auto"
        />
        <h1 className="text-4xl font-bold">Selamat Datang!</h1>
        <small>Masuk ke akun anda untuk melanjutkan</small>
      </div>
      <form className="w-full max-w-md space-y-4" action="">
        <div className="w-full flex flex-col ">
          <label htmlFor="" className="text-lg font-bold text-primary">
            Nama
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border-primary text-sm p-2 border-2 rounded-lg outline-none"
            placeholder="masukkan alamat email anda"
          />
        </div>
        <div className="w-full flex flex-col ">
          <label htmlFor="" className="text-lg font-bold text-primary">
            Email
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border-primary text-sm p-2 border-2 rounded-lg outline-none"
            placeholder="masukkan alamat email anda"
          />
        </div>
        <div className="w-full flex flex-col ">
          <label htmlFor="" className="text-lg font-bold text-primary">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="border-primary text-sm p-2 border-2 rounded-lg outline-none"
            placeholder="masukkan password anda"
          />
        </div>
        <div className="hidden justify-end">
          <p className="">lupa password?</p>
        </div>
        <Button type="submit" variant="default" width="w-full">
          Daftar
        </Button>
        <p className="text-center text-sm">
          Sudah punya akun?{" "}
          <Link className="underline text-primary" to={"/auth/login"}>
            Masuk
          </Link>
        </p>
      </form>
    </section>
  );
};

export default register;
