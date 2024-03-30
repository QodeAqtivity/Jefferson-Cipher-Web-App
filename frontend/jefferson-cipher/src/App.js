// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
// import CipherCreate from './CipherCreate';
import Home from './pages/Home';
import JeffersonCipher from './pages/JeffersonCipher';
import VigenereCipher from './pages/VigenereCipher';
import CaesarCipher from './pages/CaesarCipher';
import About from './pages/About';
import Ciphers from './pages/Ciphers';
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
              path="/ciphers"
              element={<Ciphers />}
            />
            <Route 
              path="/ciphers/jefferson-cipher"
              element={<JeffersonCipher />}
            />
            <Route
                path="/ciphers/vigenere-cipher"
                element={<VigenereCipher />}
            />
            <Route
                path="/ciphers/caesar-cipher"
                element={<CaesarCipher />}
            />

            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
