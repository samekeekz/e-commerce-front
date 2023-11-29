import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import DropdownMenu from '../components/DropdownMenu';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const items = [
    'Menu 1',
    'Menu 2',
    'Menu 1',
    'Menu 1',
    'Menu 1',
    'Menu 1',
    'Menu 1',
    'Menu 1',
    'Menu 1',
  ];
  return (
    <header className="px-10 pt-6 sticky top-0 left-0 border-b border-b-[#e5e7ed]">
      <div className="grid grid-cols-[auto_minmax(340px,_600px)_auto] gap-5 items-start h-12">
        <NavBar />
        <div className="relative mt-[-13px] col-span-1">
          <form className="flex items-center border-[#e5e5e5] border-[1px] py-3 pl-10 pr-14">
            <div className="absolute left-[0.75rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="max-w-[600px] min-w-[340px] w-full bg-transparent placeholder:text-sm placeholder:text-[#5a5c66] placeholder:leading-[14px] focus-visible:outline-0 focus-visible:border-[#e5e5e5] transition-all duration-200 ease-linear	text-[#000c2d] leading-5"
            />
          </form>
        </div>
        <div className="flex items-center gap-x-5 col-auto justify-self-end">
          <div className="flex items-center">
            <svg
              className="text-[20px] mr-[10px]"
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
            <svg
              className="text-[20px]"
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
            <svg
              className="text-[20px]"
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
        <ul onMouseLeave={handleMouseLeave} className="flex flex-row flex-wrap mt-4">
          <li className="relative group h-[30px]">
            <a
              onMouseEnter={handleMouseEnter}
              href="/"
              className="mt-1 mr-3 mb-5 duration-300 group/item"
            >
              <span className="text-sm">New In</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Clothing</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Coats & Jackets</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Shoes</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Lingerie & Loungewear</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Bags</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Accessories</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Collections</span>
            </a>
          </li>
          <li>
            <a onMouseEnter={handleMouseEnter} href="/" className="mt-1 mr-3 mb-5 ml-3">
              <span className="text-sm">Tommy Jeans</span>
            </a>
          </li>
          {isDropdownVisible && <DropdownMenu items={items} />}
        </ul>
      </div>
    </header>
  );
};

export default Header;
