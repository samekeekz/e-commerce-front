import AccordionParameter from '../components/AccordionParameter';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mt-20 mx-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-[34px] font-bold font-Futura leading-10 text-[#000c2d]">Clothing</h1>
        <p className="text-sm self-end">1800 items</p>
      </div>
      <div className="grid grid-cols-12 auto-rows-[minmax(min-content,_max-content)]">
        <div className="col-span-3 sticky self-start top-[112px]">
          <AccordionParameter />
        </div>
        <div className="bg-white col-start-4 col-span-9">
          <ul className="grid grid-cols-12 auto-rows-[minmax(min-content,_max-content)] gap-2 mb-5">
            {arr.map(card => (
              <ProductCard key={card} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
