import { FC } from "react";
import Image from "../../app/assets/foodImage.png";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FoodCardProps {
  nama: string;
  distance: number;
  time: number;
  rating: number;
  price: number;
}

const FoodCard: FC<FoodCardProps> = ({
  distance,
  nama,
  rating,
  time,
  price,
}) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="w-full relative rounded-2xl overflow-hidden group ">
      <div className="relative group-hover:rotate-90 duration-500 z-20 ease-in-out ">
        <div className="absolute group-hover:-rotate-90 bottom-8 duration-500  ease-in-out right-[15%] z-20 bg-primary aspect-square w-14 text-white flex items-center justify-center rounded-full">
          <p className="font-semibold text-xl">{price}K</p>
        </div>
        <img src={Image} className="relative  z-10" alt="" />
      </div>
      <div className="relative z-10 space-y-2 -mt-6 px-8 pb-5">
        <h5 className="text-xl line-clamp-1 font-bold ">{nama}</h5>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1">
            {Array.from({ length: filledStars }).map((_, index) => (
              <Icon
                key={`filled-${index}`}
                icon={"iconamoon:star-fill"}
                className="text-yellow-500"
              />
            ))}

            {Array.from({ length: emptyStars }).map((_, index) => (
              <Icon
                key={`empty-${index}`}
                icon={"iconamoon:star-fill"}
                className="text-gray-500"
              />
            ))}
          </div>
          <small>{rating}</small>
        </div>
        <p className="text-gray-500 text-sm">
          {distance} km | {time} min delivery
        </p>
      </div>
      <div className="w-full h-[70%] bg-gray-200 absolute bottom-0 rounded-t-3xl "></div>
    </div>
  );
};

export default FoodCard;
