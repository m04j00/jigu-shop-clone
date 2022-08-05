import './App.css';
import Main from './components/Main';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
