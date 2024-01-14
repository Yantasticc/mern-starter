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
            <Route path='/' element={<Create />} />
            <Route path='/all' element={<Read />} />
            <Route path='/:id' element={<Update/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
