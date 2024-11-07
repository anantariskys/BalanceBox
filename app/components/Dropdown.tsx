import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface DropdownProps {
  onSelect: (category: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Pilih Kategori");

  const categories = ["Sarapan", "Makan Siang", "Makan Malam"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    onSelect(category);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
      >
        <span>{selectedCategory}</span>
        <Icon icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"} className="text-xl" />
      </button>
      
      {isOpen && (
        <ul className="absolute w-full mt-2 border z-20 border-gray-300 rounded-lg bg-white shadow-lg">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleSelect(category)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
