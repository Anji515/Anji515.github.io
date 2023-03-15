import {Link} from "react-scroll"
import { Box, Flex, Image} from '@chakra-ui/react';

export default function Navbar() {

  return (
    <div style={{zIndex:1, position:'sticky'}}>
      <Box
        width={"100%"}
        bg="#2a2b2b"
        mb="0.2vh"
        paddingRight={{ base: "10px", md: "50px", lg: "40px" }}
        pl={{ base: "10px", md: "50px", lg: "40px" }}
        border={"0px solid red"}
        borderBottom={"0px solid yellow"}
        color='black'
        boxShadow="2xl"
        padding={'20px'}
      >
        <Flex
          w={{ base: "90%", md: "70%", lg: "60%" }}
          border={"0px solid blue"}
          h={16}
          alignItems={"center"}
          justifyContent={"space-around"}
          color={"black"}
          fontWeight={"bold"}
        >
          <Box
            fontSize={{ base: "15px" }}
            color="white"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
              Home
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              About
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-140}
              duration={300}
            >
              Skills
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              Projects
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
          >
            <Link
              to="contactme"
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
            >
              Contact
            </Link>
          </Box>

          <Box
            fontSize={{ base: "15px" }}
            color="white"
          >
            <a
              href="https://drive.google.com/file/d/1MhDADid2r2QHYGXwt14iYkO5sJKM8-WA/view?usp=share_link"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: "inherit" }}
            >
              Resume
            </a>
          </Box>
        </Flex>

      </Box>
    </div>
  );
}