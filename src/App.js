import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <nav className="nav">
        <h1 className="head">Math Magicians</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <span />
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <span />
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
