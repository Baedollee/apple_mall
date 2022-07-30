import React from 'react';
import data from '../data';

const Button = ({ shoes, setShoes, loading, setLoading }) => {
  const dummyData = {
    id: data.length - 1,
    title: 'Grey Yordan',
    content: 'Born in the States',
    price: 130000,
  };
  const handleButtonClick = () => {
    data.push(dummyData);
    setLoading(loading + 1);
  };
  return (
    <>
      <button onClick={handleButtonClick}>버튼</button>
    </>
  );
};

export default Button;
