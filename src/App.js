import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/apple-brands.svg';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route path="/about" />
      </Routes>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Baedolle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mac</Nav.Link>
            <Nav.Link href="#features">iPhone</Nav.Link>
            <Nav.Link href="#pricing">iPad</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: 'url(' + bg + ')' }}></div>

      <div class="container text-center">
        <div class="row">
          {shoes.map((item, index) => {
            return (
              <Card shoes={item.title} price={item.price} i={index}></Card>
            );
          })}
        </div>
      </div>
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
