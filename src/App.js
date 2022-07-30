import './App.css';
import { Routes, Route } from 'react-router-dom';
import Detail from './page/Detail';
import Header from './Header';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
