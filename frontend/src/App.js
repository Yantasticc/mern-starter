import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Create />} />
            <Route exact path='/all' element={<Read />} />
            <Route exact path='/update' element={<Update/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
