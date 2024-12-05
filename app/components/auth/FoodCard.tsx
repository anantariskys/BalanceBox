import React from "react";

interface FoodCardProps {
    name: string,
    img : string,
    description: string
}
const FoodCard: React.FC<FoodCardProps> = ({name, img,description}) => {
  return (
    <div className="relative  w-full  mx-auto">
      <img
        src={img}
        alt="Gulai Ayam"
        draggable="false"
        className="w-3/5 mx-auto object-cover relative z-10 rounded-lg"
      />

      <p className="absolute left-1/2 -translate-x-1/2 top-4  text-5xl font-extrabold text-primary">
        {name}
      </p>
      <p className="absolute text-stroke left-1/2 -translate-x-1/2 top-4 z-20  text-5xl font-extrabold text-transparent ">
        {name}
      </p>
      <p className="text-center max-w-md mx-auto -mt-10">
        {description}
      </p>
    </div>
  );
};

export default FoodCard;
