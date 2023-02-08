import React from "react";
import PropTypes from 'prop-types';

function Food({ name , image , rating }){
  return <div>
    <h1>I like {name}.</h1>
    <h4>{rating}/10.0</h4>
    <img src={image} alt={name} width='400' />
    </div>;
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyepsal',
    image: 'https://sitem.ssgcdn.com/04/30/92/item/1000047923004_i1_1100.jpg',
    rating: 6,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://blog.kakaocdn.net/dn/I2AZS/btqK6NWoIvs/UVkqDQEo4Ez1J7NmEmPi60/img.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://t1.daumcdn.net/cfile/tistory/9951473F5D4633FD2C',
    rating: 3,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://t1.daumcdn.net/cfile/tistory/262BE44C590FD33514',
    rating: 7,
  },

];

function App() {
  return  (
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;