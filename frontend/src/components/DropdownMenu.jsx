import React from 'react';

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute z-20 left-0 top-[115px] w-full border-[#000c2d] bg-white px-10 pt-8 pb-6">
      <h3 className="text-[13px] font-bold leading-5 pb-[6px]">SHOP BY CATEGORY</h3>
      <ul className="columns-2 w-1/2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="text-sm pt-[6px] pr-[6px] pb-[6px] leading-8 hover:decoration-solid hover:underline hover:decoration-[rgb(0, 12, 45)]"
              href="/"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
