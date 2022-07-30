import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import data from '../data';
import bg from '../img/apple-brands.svg';

const Home = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    setShoes(data);
    if (!shoes || shoes.length === 0) {
      return;
    }
    return () => {};
  }, [shoes]);

  if (!shoes) {
    return <></>;
  }

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      <div className="container text-center">
        <div className="row">
          {shoes.map((item, index) => {
            return (
              <Card
                key={`${item.id}_${index}`}
                shoes={item.title}
                price={item.price}
                i={index}
              />
            );
          })}
        </div>
        <Button
          shoes={shoes}
          setShoes={setShoes}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </>
  );
};

export default Home;
