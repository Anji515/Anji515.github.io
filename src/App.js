import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Skills from './Components/Skills';
import { Projects } from './Components/Projects';


function App() {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <Home/>
      <br/>
      <br/>
      <Skills/>
      <br/>
      <br/>
      <Projects/>
      <br/>
      <br/>
      <Footer />
      
    </>
  );
}

export default App;
