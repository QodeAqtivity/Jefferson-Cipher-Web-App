import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JeffersonCipher from './pages/JeffersonCipher';
import VigenereCipher from './pages/VigenereCipher';
import CaesarCipher from './pages/CaesarCipher';
import About from './pages/About';
import Ciphers from './pages/Ciphers';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JeffersonCiphersContextProvider } from './context/JeffersonCipherContext.jsx';
import { CaesarCiphersContextProvider } from './context/CaesarCiphersContext.jsx';



function App() {
  return (
    <div className="App" class='bg-black text-green-500'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/" //homepage route
              element={<Home />}  
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route 
              path="/ciphers"
              element={<Ciphers />}
            />
            <Route 
              path="/ciphers/jefferson-cipher"
              element={
                <JeffersonCiphersContextProvider>
                  <JeffersonCipher />    
                </JeffersonCiphersContextProvider>
              }
            />
            <Route
                path="/ciphers/vigenere-cipher"
                element={<VigenereCipher />}
            />
            <Route
                path="/ciphers/caesar-cipher"
                element={
                <CaesarCiphersContextProvider>
                  <CaesarCipher />
                </CaesarCiphersContextProvider>
                
              }
            />

            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path='/donate'
              element={<Donate />}
            />
          </Routes>
        </div>
        <div className="flex flex-col justify-end h-screen">
          <Footer />
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
