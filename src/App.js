import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
  
      <div className="content">
        <Routes>
          <Route path='/' element={<Home items={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
