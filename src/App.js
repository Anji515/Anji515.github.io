import './App.css';
import Footer from './Components/Footer';
import GitCalender from './Components/GitCalender';
import GitStats from './Components/GitStats';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import ContactMe from './Pages/ContactMe';
import Tools from './Pages/Tools';
import { About } from './Pages/About';
import Projects from './Pages/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Tools />
      {/* <Projects/> */}
      <GitCalender />
      <GitStats />
      <ContactMe />
      <Footer />
    </div>
 );
}

export default App;
