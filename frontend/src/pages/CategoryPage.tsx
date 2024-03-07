import AccordionParameter from '../components/AccordionParameter';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      discount: 10,
      category: 'Coats & Jackets',
      subcategory: 'Subcategory 1.1',
      images: [
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
      ],
      variants: [
        {
          id: 1,
          color: 'Red',
          images: ['img1.jpg', 'img2.jpg'],
          sizes: [
            { size: 'XS', quantity: 10 },
            { size: 'S', quantity: 20 },
            { size: 'M', quantity: 15 },
          ],
        },
        {
          id: 2,
          color: 'Blue',
          sizes: [
            { size: 'XS', quantity: 5 },
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 8 },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      discount: 5,
      category: 'Shoes',
      subcategory: 'Subcategory 2.1',
      images: [
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
        'https://tommy-europe.scene7.com/is/image/TommyEurope/THJ2002512_910_main?$b2c_uplp_listing_1920$',
      ],
      variants: [
        {
          id: 1,
          color: 'Red',
          images: ['img1.jpg', 'img2.jpg'],
          sizes: [
            { size: 'XS', quantity: 10 },
            { size: 'S', quantity: 20 },
            { size: 'M', quantity: 15 },
          ],
        },
        {
          id: 2,
          color: 'Blue',
          sizes: [
            { size: 'XS', quantity: 5 },
            { size: 'S', quantity: 10 },
            { size: 'M', quantity: 8 },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mx-10 mt-20">
      <div className="mb-5 flex justify-between">
        <h1 className="font-Futura text-[34px] font-bold leading-10 text-[#000c2d]">Clothing</h1>
        <p className="self-end text-sm">1800 items</p>
      </div>
      <div className="grid auto-rows-[minmax(min-content,_max-content)] grid-cols-12">
        <div className="sticky top-[112px] col-span-3 self-start">
          <AccordionParameter />
        </div>
        <div className="col-span-9 col-start-4 bg-white">
          <ul className="mb-5 grid auto-rows-[minmax(min-content,_max-content)] grid-cols-12 gap-2">
            {products.map(card => (
              <ProductCard {...card} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
