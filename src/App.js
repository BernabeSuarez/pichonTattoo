
import './App.css';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/hero/Hero';
import Gallery from './components/gallery/Gallery';
import { Dialog } from './components/dialog/Dialog';
import { useOpenImg } from './hooks/useOpenImg'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const openImg = useOpenImg()

  return (
    <BrowserRouter>
      <div className="App">
        <Dialog {...openImg} />
        <Menu />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery {...openImg} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
