import { Subcategory } from '../types';

const DropdownMenu = ({ items }: { items: Subcategory[] }) => {
  return (
    <div className="absolute left-0 top-[115px] z-20 w-full border-[#000c2d] bg-white px-10 pb-6 pt-8">
      <h3 className="pb-[6px] text-[13px] font-bold leading-5">SHOP BY CATEGORY</h3>
      <ul className="w-1/2 columns-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              className="hover:decoration-[rgb(0, 12, 45)] pb-[6px] pr-[6px] pt-[6px] text-sm leading-8 hover:underline hover:decoration-solid"
              href="/"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
