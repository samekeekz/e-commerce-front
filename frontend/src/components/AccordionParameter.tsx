import '@mantine/core/styles.css';
import { Accordion } from '@mantine/core';

const AccordionParameter = () => {
  const groceries = [
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
                  <input className="mr-2 cursor-pointer" type="checkbox" name={item.value} />
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
