import './App.css';
import Detail from './page/Detail';
import Header from './Header';
import Home from './page/Home';
import data from './data';
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  const [shoes] = useState(data);
  let { id } = useParams();
  console.log(id);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는페이지요!</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
