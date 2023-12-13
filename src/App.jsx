// import { useState } from 'react';
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/header/header';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact us/contact';
import { Certificate } from './pages/Certificates/cert';
import { Enquiry } from './pages/Enquiry/enq';
import { Ourclient } from './pages/Our Clients/ourclient';
import { Product } from './pages/Products/product';
import ScrollBtn from './components/scrollbtn/scroll'

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/product" element={ <Product /> } />
      <Route path="/ourclient" element={ <Ourclient /> } />
      <Route path="/certificate" element={ <Certificate /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/enquiry" element={ <Enquiry /> } />
    </Routes>

    <ScrollBtn/>

    <Footer />   
    </>
  );
}

export default App
