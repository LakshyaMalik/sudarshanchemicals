import { Routes , Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/header/header';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/home';
import { About } from './pages/About/About';
import {Certificates} from './pages/Certificates/Certificates';
import { Contact } from './pages/Contact us/contact';
import { Enquiry } from './pages/Enquiry/enq';
import { Product } from './pages/Products/product';

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/product" element={ <Product /> } />
      <Route path="/Certificates" element={ <Certificates /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/enquiry" element={ <Enquiry /> } />
    </Routes>
    <Footer />   
    </>
  );
}

export default App
