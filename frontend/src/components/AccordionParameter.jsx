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
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
    },
    {
      value: 'Material',
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
    },
    {
      value: 'Label',
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
    },
    {
      value: 'Price',
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
    },
    {
      value: 'Size',
      checkboxes: ['Coats & Jackets', 'Knitwear', 'Shoes', 'Costume'],
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
    <div className="pr-7 pb-7 max-h-[1315px] h-[1200px] overflow-hidden overflow-y-auto">
      <Accordion
        defaultValue={['Category']}
        multiple={true}
        styles={{
          label: {
            fontFamily: 'Futura',
            fontSize: '16px',
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
