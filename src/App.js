import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';
import Mywork from './components/mywork/Mywork';
import Hero from './components/navbar/Hero/Hero';
import Navbar from './components/navbar/navbar/Navbar';
import Services from './components/services/Services';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Mywork/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
