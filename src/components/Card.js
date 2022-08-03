import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, price, i, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="col">
        <img
          src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
          alt="profile"
          width="80%"
        />
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </Link>
  );
};

export default Card;
