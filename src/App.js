import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/apple-brands.svg';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './page/Detail';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">홈</Link>
          <Nav className="me-auto">
            <Link to="/detail">상세페이지</Link>
            <Nav.Link href="#features">iPhone</Nav.Link>
            <Nav.Link href="#pricing">iPad</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: 'url(' + bg + ')' }}></div>
              <div class="container text-center">
                <div class="row">
                  {shoes.map((item, index) => {
                    return (
                      <Card
                        shoes={item.title}
                        price={item.price}
                        i={index}></Card>
                    );
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

const Card = ({ shoes, price, i }) => {
  return (
    <div class="col">
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

export default App;
