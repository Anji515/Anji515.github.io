import Style from "./Nav.module.css"
import {Link} from 'react-scroll';
import { Button, color } from '@chakra-ui/react';

// import DownloadIcon from '@mui/icons-material/Download';
import resume from '../DownloadPDF/Kommu-Anjaneyulu-Resume.pdf'
// import { Tooltip } from "@mui/material";
export default function Navbar() {

  return (
    <>
      
      <div id="nav-menu" className={Style.nav}>
        <div className={Style.logo}>
           Kommu Anjaneyulu
        </div>
        <div className={Style.leftMenu} >
             <ul className={Style.ulMenu}>
              <li className="nav-link home"><Link to="home" smooth>Home</Link></li>
              <li className="nav-link about"><Link to="about" smooth>About</Link></li>
              <li className="nav-link skills"><Link to="skills" smooth>Skills</Link></li>
              <li className="nav-link projects"><Link to="projects" smooth>Project</Link></li>
              <li className="nav-link contact"><Link to="contact" smooth>Contact</Link></li>
              <a id="resume-link-1" target={"_blank"} href={resume} rel="noreferrer" >
              <Button id="resume-button-1" background={'blue.400'} className={"nav-link resume"}><Link to="resume-button-2" smooth>Resume</Link></Button></a>
             </ul>
        </div>
      </div>

      
    </>
  );
}