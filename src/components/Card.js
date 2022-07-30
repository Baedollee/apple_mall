import React from 'react';

const Card = ({ shoes, price, i }) => {
  return (
    <div className="col">
      <img
        src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
        alt="profile"
        width="80%"
      />
      <h4>{shoes}</h4>
      <p>{price}</p>
    </div>
  );
};

export default Card;
