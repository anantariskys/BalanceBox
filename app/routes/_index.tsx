import type { MetaFunction } from "@remix-run/node";
import PageLayout from "~/layouts/PageLayout";
import HeroImage from "../../app/assets/hero.png";
import Button from "~/components/Button";
import SearchBar from "~/components/SearchBar";
import Dropdown from "~/components/Dropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FoodCard from "~/components/FoodCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Balance Box" },
    { name: "description", content: "Welcome to Balance Box!" },
  ];
};
const foodData = [
  { distance: 0.5, nama: "Bayam Bening", rating: 5, price: 12, time: 10 },
  { distance: 1.2, nama: "Nasi Goreng", rating: 1.2, price: 15, time: 15 },
  { distance: 2.0, nama: "Mie Ayam", rating: 4.2, price: 10, time: 12 },
  { distance: 0.8, nama: "Soto Ayam", rating: 4.7, price: 14, time: 18 },
  { distance: 1.5, nama: "Ayam Geprek", rating: 4.6, price: 13, time: 20 },
  { distance: 1.1, nama: "Rendang Padang", rating: 4.9, price: 20, time: 25 },
  { distance: 0.7, nama: "Pecel Lele", rating: 4.3, price: 11, time: 15 },
  { distance: 2.3, nama: "Bakso Malang", rating: 4.4, price: 9, time: 10 },
  { distance: 1.8, nama: "Sate Ayam", rating: 3.5, price: 16, time: 22 },
  { distance: 0.9, nama: "Gado-Gado", rating: 2.5, price: 8, time: 12 },
];


export default function Index() {
  return (
    <PageLayout>
      <header className="h-screen w-full">
        <main className="container h-full flex justify-between items-center">
          <section className="max-w-2xl space-y-4">
            <h1 className="text-5xl text-primary font-bold">
              Siap menjalani hidup sehat? BalanceBox siap menemanimu
            </h1>
            <p className="text-lg">
              Kami mengatur asupan nutrisi dengan mudah. Yuk, mulai bersama
              BalanceBox!
            </p>
            <Button type="button" variant="default" width="w-fit">
              Mulai
            </Button>
          </section>
          <section className="w-1/2 p-10">
            <img src={HeroImage} alt="heroImage" draggable='false' className="w-full" />
          </section>
        </main>
      </header>
      <section className="container">
        <SearchBar width="w-fit" placeholder="Cari makanan anda" />
      </section>
      <section className="py-10 container space-y-4">
        <h3 className="text-neutral-950 font-bold text-2xl">
          Kategori Makanan
        </h3>
        <Dropdown onSelect={(category) => console.log(category)} />
        <Swiper
          spaceBetween={16}
          slidesPerView={5}
          navigation
    
        
        >
          {
            foodData.map((food, index) => (
              <SwiperSlide key={index}>
                <FoodCard distance={food.distance} nama={food.nama} rating={food.rating} price={food.price} time={food.time}/>
              </SwiperSlide>
            ))
          }
       
         
        </Swiper>
      </section>
    </PageLayout>
  );
}
