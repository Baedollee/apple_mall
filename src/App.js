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
          <div class="col">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="profile"
              width="80%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div class="col">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="profile"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div class="col">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="profile"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div class="col">
      <img
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        alt="profile"
        width="80%"
      />
      <h4>{shoes[0].title}</h4>
      <p>{shoes[0].price}</p>
    </div>
  );
};
export default App;
