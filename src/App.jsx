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
      <br />
      <Home />
      <br/>
      <About />
      <br/>
      <Skills />
      <Tools />
      <br/>
      <Projects/>
      <br/>
      <GitCalender />
      <GitStats />
      <br/>
      <ContactMe />
      <Footer />
    </div>
 );
}

export default App;
