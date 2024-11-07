import  { FC } from "react";
import { Icon } from "@iconify/react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  width : string
}

const SearchBar: FC<SearchBarProps> = ({ placeholder = "Search...", onSearch ,width ='w-fit'}) => {
  return (
    <div className={`${width} flex  items-center border border-gray-300 rounded-lg gap-4 mx-auto px-4 py-2 bg-white`}>
      <button
        onClick={() => {
          const inputValue = document.querySelector<HTMLInputElement>("input")?.value || "";
          if (onSearch) onSearch(inputValue);
        }}
        className="text-gray-500"
      >
        <Icon icon="mdi:magnify" className="text-2xl" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow outline-none text-gray-700"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && onSearch) {
            onSearch(e.currentTarget.value);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
