import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">홈</Link>
          <Nav className="me-auto">
            <Link to="/detail">상세페이지</Link>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
              href="#features">
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
              href="#pricing">
              상세페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
