import Style from "./Nav.module.css"
import {Link} from 'react-scroll';

import DownloadIcon from '@mui/icons-material/Download';
import myResume from "../Logos/Kommu-Anjaneyulu-Resume.pdf"
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
              <li id="resume-button-1" className={[Style.btnRes,"nav-link resume"]} data-tooltip-variant="light"  data-tooltip-content="Resume"><a id="resume-link-1" href={myResume}  download="Kommu-Anjaneyulu-Resume" 
              target={"_blank"} rel="noreferrer">
              Resume <DownloadIcon/>
              {/* <DownloadIcon/>  */}
              {/* <Tooltip anchorId="resume-button-1" /> */}
              </a>   </li>
             
             </ul>
        </div>
      </div>

      
    </>
  );
}