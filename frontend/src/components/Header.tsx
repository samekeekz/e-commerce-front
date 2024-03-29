import React, { useState } from 'react';
import NavBar from './NavBar';
import DropdownMenu from './DropdownMenu';
import { IconSearch } from '@tabler/icons-react';
import useGender from '../hooks/useGender';
import { Link, useLocation } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/categories/categories.api';

const Header = () => {
  const location = useLocation();
  const gender = useGender();
  const { data: categoriesData } = useGetCategoriesQuery(gender);

  const [hoveredCategory, setHoveredCategory] = useState<string | null>();

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    let category: string = (event.target as HTMLElement).dataset.category ?? '';

    if (!category) {
      const elementWithDataCategory = (event.target as HTMLElement).closest('[data-category]');
      if (elementWithDataCategory) {
        category = (elementWithDataCategory as HTMLElement).dataset.category ?? '';
      }
    }

    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  function isCategoryActive(categoryName: string) {
    const pathSegments = location.pathname.split('/');
    return pathSegments.includes(categoryName);
  }

  return (
    <header className="sticky left-0 top-0 z-20 border-b border-b-[#e5e7ed] bg-white pb-1 pt-6">
      <div className="grid h-12 grid-cols-[auto_minmax(340px,_600px)_auto] items-start gap-5">
        <NavBar />
        <div className="relative col-span-1 mt-[-13px]">
          <form className="flex items-center border-[1px] border-[#e5e5e5] py-3 pl-10 pr-14">
            <div className="absolute left-[0.75rem]">
              <IconSearch stroke={1.5} size={20} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full min-w-[340px] max-w-[600px] bg-transparent leading-5 text-[#000c2d] transition-all duration-200 ease-linear placeholder:text-sm placeholder:leading-[14px] placeholder:text-[#5a5c66]	focus-visible:border-[#e5e5e5] focus-visible:outline-0"
            />
          </form>
        </div>
        <div className="col-auto flex items-center gap-x-5 justify-self-end">
          <div className="flex items-center">
            <svg
              className="mr-[10px] text-[20px]"
              data-testid="icon-utility-user-svg"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z"
                stroke="#00174F"
                strokeWidth="1.2"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 15.6569C16.5 12.5327 13.5899 10 10 10C6.41015 10 3.5 12.5327 3.5 15.6569C3.5 18.781 16.5 18.781 16.5 15.6569Z"
                stroke="#00174F"
                strokeWidth="1.2"
              ></path>
            </svg>
            <button className="text-sm text-[#000c2d]">Sign In / Register</button>
          </div>
          <div className="flex items-center gap-x-5">
            <Link to="/wishlist">
              <svg
                className="cursor-pointer text-[20px]"
                data-testid="icon-utility-wishlist-svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4481 4.09582C10.2734 4.34393 10.1248 4.5927 10 4.8268C9.87523 4.5927 9.72666 4.34393 9.55193 4.09582C8.87862 3.1397 7.67786 2 5.78125 2C4.43273 2 3.2011 2.55821 2.31326 3.57178C1.46642 4.53865 1 5.83357 1 7.21798C1 8.72496 1.58475 10.1266 2.84025 11.6289C3.96234 12.9717 5.57661 14.3557 7.4459 15.9584C8.14245 16.5557 8.86277 17.1733 9.62963 17.8484C9.75208 17.9562 9.87604 18 10 18C10.124 18 10.2479 17.9562 10.3473 17.8687C11.1372 17.1733 11.8576 16.5557 12.5542 15.9584C14.4234 14.3558 16.0377 12.9717 17.1597 11.6289C18.4152 10.1266 19 8.72496 19 7.21798C19 5.83357 18.5336 4.53865 17.6867 3.57174C16.7989 2.55818 15.5673 2 14.2188 2C12.3221 2 11.1214 3.1397 10.4481 4.09582Z"
                  stroke="#00174F"
                  strokeWidth="1.2"
                ></path>
              </svg>
            </Link>
            <svg
              className="cursor-pointer text-[20px]"
              data-testid="icon-utility-basket-svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.65044 7.12516L2.00243 17.7188C1.96186 18.3819 2.43494 18.9544 3.05906 18.9975C3.08351 18.9992 3.108 19 3.1325 19H16.8675C17.493 19 18 18.4613 18 17.7968C18 17.7708 17.9992 17.7448 17.9976 17.7188L17.3496 7.12516C17.3109 6.49228 16.8165 6 16.2195 6H3.78052C3.18359 6 2.68915 6.49228 2.65044 7.12516Z"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
              <path
                d="M7 10L7.47704 3.04204C7.55569 1.89537 8.66342 1 10.0034 1C11.3396 1 12.4441 1.8928 12.5226 3.03617L13 10"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <ul onMouseLeave={handleMouseLeave} className="mt-4 flex flex-row flex-wrap pb-1">
          {categoriesData &&
            categoriesData.map(({ name, slug }, index) => (
              <li key={name}>
                <a
                  onMouseEnter={handleMouseEnter}
                  href="/"
                  data-category={name}
                  className={`pr-3 pt-1 ${index === 0 ? '' : 'pl-3'} hover:text-red-500 ${isCategoryActive(slug) ? 'font-bold' : ''}`}
                >
                  <span className="text-sm">{name}</span>
                </a>
              </li>
            ))}
          {hoveredCategory && (
            <DropdownMenu
              items={
                categoriesData?.find(data => data.name === hoveredCategory)?.subcategories || []
              }
            />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
