import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Home from './Pages/Home';
import Skills from './Pages/Skills';


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Skills/>
      <Footer />
    </div>
  );
}

export default App;
