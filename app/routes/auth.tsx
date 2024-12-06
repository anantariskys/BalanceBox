import { Outlet } from "@remix-run/react";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "~/components/auth/FoodCard";
import { dummy } from "~/data/dummy";



const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen  container ">
      <main className="w-full h-full  flex">
        <section className="w-1/2 relative  flex justify-center items-center">
          <Swiper
            className="w-full "
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 2000 }}
            modules={[Pagination, Autoplay]}
          >
            {dummy.map((item) => (
              <SwiperSlide className="py-10" key={item.id}>
                <FoodCard
                  key={item.id}
                  name={item.name}
                  img={item.image}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
