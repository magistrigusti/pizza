import React from 'react';
import classNames from 'classnames';

function PizzaBlock ({name, imageUrl, price, types, sizes}) {
  const typeNames = ['tonkoe', 'standart'];
  const availableSize = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  
  const onSelectType = (index) => {
    setActiveType(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  }

  return (
    <div className='pizzas-block'>
      <img className="pizzas-block__image" src={imageUrl} alt='' />

      <h4 className='pizzas-block__title'>{name}</h4>
      <div className='pizzas-block__selector'>
        <ul>
          {
            typeNames.map((type, index) => (
              <li className={classNames({
                active: activeType === index,
                disabled: !types.includes(index)
              })}
                onClick={() => onSelectType(index)}
                key={type}
              >{type}</li>
            ))
          }
        </ul>

        <ul>
          {
            availableSize.map((size, index) => (
              <li className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
                onClick={() => onSelectSize(index)}
                key={size}
              >{size}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default PizzaBlock;