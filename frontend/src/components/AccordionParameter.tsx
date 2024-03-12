import '@mantine/core/styles.css';
import { Accordion } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { useGetProductsWithFiltersQuery } from '../store/products/products.api';

const AccordionParameter = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const filters: { [key: string]: string[] } = Object.fromEntries(
    [...searchParams.entries()].reduce((acc: [PropertyKey, string[]][], [key, value]) => {
      if (acc.some(([k]) => k === key)) {
        const index = acc.findIndex(([k]) => k === key);
        acc[index][1].push(value);
      } else {
        acc.push([key, [value]]);
      }
      return acc;
    }, []),
  );

  const { data } = useGetProductsWithFiltersQuery(filters);

  // console.log(filters);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const currentParams = new URLSearchParams(searchParams);

    if (checked) {
      currentParams.append(name.toLowerCase(), value);
    } else {
      const values = currentParams.getAll(name.toLowerCase());
      const updatedValues = values.filter(val => val !== value);

      currentParams.delete(name.toLowerCase());
      updatedValues.forEach(val => currentParams.append(name.toLowerCase(), val));
    }

    setSearchParams(currentParams.toString());
  };

  const groceries = [
    {
      value: 'Sort By',
      checkboxes: [
        'Recommended',
        'Best sellers',
        'New arrivals',
        'Price: High to Low',
        'Price: Low to High',
      ],
    },
    {
      value: 'Category',
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
    },
    {
      value: 'Colour',
      checkboxes: ['Black', 'Blue', 'Shoes', 'Costume'],
    },
    {
      value: 'Material',
      checkboxes: ['Linen', 'Cotton', 'Organic Materials', 'Recycled Materials'],
    },
    {
      value: 'Label',
      checkboxes: ['TOMMY HILFIGER', 'TOMMY JEANS'],
    },
    {
      value: 'Price',
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
    },
    {
      value: 'Size',
      checkboxes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
    },
  ];

  const items = groceries.map(item => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>
        {
          <ul className="">
            {item.checkboxes.map((checkbox, index) => (
              <li key={index} className={`py-2 ${index === 0 ? 'pt-0' : ''}`}>
                <label className="cursor-pointer">
                  <input
                    className="mr-2 cursor-pointer"
                    type="checkbox"
                    name={item.value}
                    value={checkbox}
                    onChange={handleCheckboxChange}
                  />
                  <span>{checkbox}</span>
                </label>
              </li>
            ))}
          </ul>
        }
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="h-[1200px] max-h-[1315px] overflow-hidden overflow-y-auto pb-7 pr-7">
      <Accordion
        defaultValue={['Category']}
        multiple={true}
        styles={{
          label: {
            fontFamily: 'Futura',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            cursor: 'pointer',
            padding: '16px 0 16px 0',
          },
          panel: {
            fontFamily: 'Futura',
            fontSize: '14px',
            lineHeight: '20px',
          },
          control: {
            padding: 0,
          },
          content: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }}
      >
        {items}
      </Accordion>
    </div>
  );
};

export default AccordionParameter;
