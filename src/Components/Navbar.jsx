import { React, ReactNode, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Text,
  Image,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./SideBar";
import Resume from "../DownloadPDF/Kommu-Anjaneyulu-Resume.pdf"
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "black.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    toggleColorMode("dark");
  }, []);

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(colorMode);
  function handleResume() {
   window.open(`${Resume}`)
  }
  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        w="100%"
        h='13vh'
        padding={'10px'}
        zIndex={"1000"}
        top={"0px"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          m="auto"
          width={"94%"}
        >
          <Flex w={{ base: "50%", sm: "20%" }} fontSize={"25px"} >
          <Text as='em'>Kommu Anjaneyulu</Text>
          <Image src="https://i.ibb.co/myw6h6c/Kommu-Anjaneyulu-2.png" 
          w='80px'
          h='80px'
          borderRadius={'50%'}
          alt='my logo'/>
          </Flex>
          
          <Flex
            w="50%"
            display={{ base: "none", lg: "block" }}
            alignItems={"center"}
            justifyContent="end"
          >
            <Flex
              id="nav-menu"
              w="100%"
              justifyContent={"space-between"}
              direction={"row"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  handleClickScroll("home");
                }}
                _hover={{background:'teal',color:'white'}}
                colorScheme="blue"
                variant="ghost"
              >
                <Link className="nav-link home">Home</Link>
              </Button>

              <Button
                colorScheme="blue"
                onClick={() => {
                  handleClickScroll("about");
                }}
                _hover={{background:'teal',color:'white'}}
                variant="ghost"
              >
                <Link className="nav-link about">About</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("skills");
                }}
                _hover={{background:'teal',color:'white'}}
                colorScheme="blue"
                variant="ghost"
              >
                <Link className="nav-link skills">Skills</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("projects");
                }}
                _hover={{background:'teal',color:'white'}}
                colorScheme="blue"
                variant="ghost"
              >
                <Link className="nav-link projects">Projects</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("contact");
                }}
                _hover={{background:'teal',color:'white'}}
                colorScheme="blue"
                variant="ghost"
              >
                <Link className="nav-link contact">Contact</Link>
              </Button>

              <Button
                  id="resume-button-1"
                  _hover={{background:'teal',color:'white'}}
                  onClick={handleResume}
                  colorScheme="teal"
                  size="md"
                >
              <Link
                id="resume-link-1"
                href={Resume}
                className="nav-link resume"
                download
                target="_blank"
              > <Text ml={'4px'} mr={"4px"}>
                    Resume <BiDownload />
                  </Text>
                 </Link>
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          <Box display={{ base: "block", lg: "none" }}>
            <Flex 
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <DrawerExample
                handleClickScroll={handleClickScroll}
                handleResume={handleResume}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
