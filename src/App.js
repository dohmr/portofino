import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Services />
    <Experience />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
