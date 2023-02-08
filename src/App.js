import React from "react";

function Food({ name , image }){
  return <div>
    <h1>I like {name}.</h1>
    <img src={image} width='400' />
    </div>;
}

// const renderFood = dish => <Food name={dish.name} image={dish.image} />;
function renderFood(dish) {
  return <Food name={dish.name} image={dish.image} />;
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg',
  },
  {
    name: 'Samgyepsal',
    image: 'https://sitem.ssgcdn.com/04/30/92/item/1000047923004_i1_1100.jpg',
  },
  {
    name: 'Bibimbap',
    image: 'https://blog.kakaocdn.net/dn/I2AZS/btqK6NWoIvs/UVkqDQEo4Ez1J7NmEmPi60/img.jpg',
  },
  {
    name: 'Doncasu',
    image: 'https://t1.daumcdn.net/cfile/tistory/9951473F5D4633FD2C',
  },
  {
    name: 'Kimbap',
    image: 'https://t1.daumcdn.net/cfile/tistory/262BE44C590FD33514',
  },

];

function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;