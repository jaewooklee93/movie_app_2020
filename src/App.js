import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="20%"/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating : 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/43985271_2187452558181775_6353639645311457179_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=zcE5Awi4jJMAX9SqnaZ&oh=8a75e5697b88e0fd4090992a18d91f70&oe=5F4814D8',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://mykoreankitchen.com/wp-content/uploads/2006/10/1.-Easy-Kimbap.jpg',
    rating: 3,
  },
];


function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
