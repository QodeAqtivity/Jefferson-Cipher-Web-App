// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import CipherCreate from './CipherCreate';
import Home from './pages/Home';
import JeffersonCipher from './pages/JeffersonCipher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/" //homepage route
              element={<Home />}  
            />
            <Route 
              path="/jefferson-cipher"
              element={<JeffersonCipher />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
