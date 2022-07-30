import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/apple-brands.svg';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
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
          <Card shoes={shoes[0]}></Card>
          <Card shoes={shoes[1]}></Card>
          <Card shoes={shoes[2]}></Card>
        </div>
      </div>
    </div>
  );
}

const Card = ({ shoes }) => {
  return (
    <div class="col">
      <img
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        alt="profile"
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
};
export default App;
