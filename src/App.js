import './App.css';
import Detail from './page/Detail';
import Header from './Header';
import Home from './page/Home';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

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
