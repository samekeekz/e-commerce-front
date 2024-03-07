import ProductCarousel from './ProductCarousel/ProductCarousel';
import { Product } from '../types';

const ProductCard = ({
  id,
  name,
  price,
  discount,
  category,
  subcategory,
  images,
  variants,
}: Product) => {
  return (
    <li className="relative col-span-4">
      <a href="#">
        <div>
          <div className="flex max-w-full flex-1 pb-3">
            <ProductCarousel images={images} />
          </div>
          <div className="mb-3 px-3">
            <h4 className="mb-1 text-sm text-[#000c2d]">{name}</h4>
            <span className="text-[13px] font-bold text-[#000c2d]">£{price}</span>
          </div>
          <button className="absolute right-3 top-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
            <svg
              className=""
              data-testid="icon-utility-wishlist-svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M10.0099 18.6C9.7299 18.6 9.4699 18.5 9.2399 18.3C8.4999 17.64 7.7999 17.05 7.1199 16.47C5.1699 14.8 3.5399 13.4 2.3799 12.02C1.0299 10.4 0.399902 8.88002 0.399902 7.22002C0.399902 5.69002 0.919902 4.25002 1.8599 3.18002C2.8799 2.03002 4.2699 1.40002 5.7899 1.40002C7.8999 1.40002 9.2499 2.63002 10.0099 3.69002C10.7699 2.63002 12.1099 1.40002 14.2299 1.40002C15.7499 1.40002 17.1499 2.03002 18.1499 3.18002C19.0899 4.26002 19.6099 5.69002 19.6099 7.22002C19.6099 8.88002 18.9799 10.4 17.6299 12.02C16.4799 13.4 14.8499 14.8 12.9599 16.42C12.2199 17.05 11.5199 17.65 10.7599 18.33C10.5499 18.51 10.2899 18.61 10.0199 18.61L10.0099 18.6ZM5.7899 2.60002C4.6199 2.60002 3.5499 3.09002 2.7699 3.97002C2.0199 4.83002 1.6099 5.98002 1.6099 7.22002C1.6099 8.58002 2.1499 9.86002 3.3099 11.25C4.3999 12.55 5.9999 13.92 7.8399 15.51C8.5799 16.15 9.2899 16.75 10.0299 17.41C10.7199 16.75 11.4299 16.15 12.1099 15.56C14.0199 13.93 15.6099 12.56 16.6999 11.25C17.8599 9.86002 18.3999 8.58002 18.3999 7.22002C18.3999 5.98002 17.9899 4.83002 17.2299 3.97002C16.4599 3.09002 15.3899 2.60002 14.2099 2.60002C12.5699 2.60002 11.5199 3.60002 10.9299 4.44002C10.7699 4.67002 10.6399 4.89002 10.5199 5.11002L9.9899 6.10002L9.4599 5.11002C9.3499 4.90002 9.2099 4.67002 9.0499 4.44002C8.4599 3.60002 7.4099 2.60002 5.7699 2.60002H5.7899Z"
                fill="#000C2D"
              ></path>
            </svg>
          </button>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
