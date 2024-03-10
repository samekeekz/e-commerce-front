import { useParams } from 'react-router-dom';
import AccordionParameter from '../components/AccordionParameter';
import ProductCard from '../components/ProductCard';
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../store/products/products.api';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { data: products, isLoading } = useGetProductsByCategoryQuery(categoryName || 'clothing');

  return (
    <div className="mx-10 mt-20">
      <div className="mb-5 flex justify-between">
        <h1 className="font-Futura text-[34px] font-bold uppercase leading-10 text-[#000c2d]">
          Clothing
        </h1>
        <p className="self-end text-sm">1800 items</p>
      </div>
      <div className="grid auto-rows-[minmax(min-content,_max-content)] grid-cols-12">
        <div className="sticky top-[112px] col-span-3 self-start">
          <AccordionParameter />
        </div>
        <div className="col-span-9 col-start-4 bg-white">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul className="mb-5 grid auto-rows-[minmax(min-content,_max-content)] grid-cols-12 gap-2">
              {products?.map(card => <ProductCard {...card} key={card.name} />)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
