import ProductCarousel from './ProductCarousel/ProductCarousel';

const ProductCard = () => {
  return (
    <li className="col-span-4 relative">
      <a href="#">
        <div>
          <div className="flex flex-1 max-w-full pb-3">
            <ProductCarousel />
          </div>
          <div className="px-3 mb-3">
            <h4 className="text-sm mb-1 text-[#000c2d]">Check Flap Pocket Slim Fit Jacket</h4>
            <span className="text-[13px] font-bold text-[#000c2d]">£390.00</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
