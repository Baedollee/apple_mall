import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({ shoes }) => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  // console.log(shoes);

  useEffect(() => {
    const a1 = shoes.filter((shoe) => shoe.id + '' === id);
    setItem(a1);
    return () => {};
  }, [id, shoes]);

  if (item.length <= 0) {
    return <></>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="profile"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{}</h4>
          <p>{item[0].title}</p>
          <p>{item[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
