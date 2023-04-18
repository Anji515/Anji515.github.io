import {Button,Flex,Heading,Image,Stack,Text} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons'
import { Link } from "react-scroll";
import React from "react";
import resume from '../DownloadPDF/Kommu-Anjaneyulu-Resume.pdf'
// console.log('resume:', resume)

  export default function Home() {

    return (
      <div id='home'>

      <Stack
      border={"0px solid black"}
      h={{ base: "auto", md: "500px", lg: "500px" }}
      padding="20px 20px"
      direction={{ base: "column", md: "row" }}
      bg="#cbd5e0"
      boxShadow="2xl"
      zIndex={99}
    >
      <Flex
        border={"0px solid black"}
        w={['100%','100%','100%','75%']}
        // ,{ base: "100%", md: "100%", lg: "70%" }
        p={{ base: "20px", md: "15px", lg: "10px" }}
        justifyContent={"center"}
      >
        <Image
          className="home-img"
          alt={"Anji Image"}
          objectFit={"cover"}
          borderRadius={"50%"}
          border="5px solid teal"
          boxShadow="2xl"
          width={'52%'}
          src={
            "https://i.ibb.co/Q9HgQnN/MyPhotos.jpg"
          }
        />
      </Flex>
      <Flex
        w={{ base: "100%", md: "50%", lg: "50%" }}
        align={"center"}
        justify={"center"}
        
        >
        <Stack
          // spacing={6}
          w={{ base: "92%", md: "98%", lg: "100%" }}
          // marginLeft='-350px'
          >
          <Heading
            id="user-detail-name"
            textAlign={{ base: "center", md: "left", lg: "left" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            <Text  color={"blue.500"} as={"span"}>
              Hi 👋, I'am
              <br />
              Kommu Anjaneyulu
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.800"}
            textAlign={{ base: "left", md: "left", lg: "left" }}
          >
            Detailed-oriented and responsible Full-Stack Web Developer with a
            great knowledge of Web Development. Capable of writing efficient
            code using ReactJS, CSS, NodeJS and Express. Passionate about
            coding and looking for an opportunity in software development.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <a href={resume} download>
              <Button
                // onClick={handleDownloadResume}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                id="resume-button-2"
                _hover={{
                  bg: "gray.200",
                  color: "black",
                }}
              >
                <Text m={"4px"}>Resume</Text>
                <DownloadIcon />
              </Button>
                </a>
           
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
              >
              <Button to='contact'
                rounded={"full"}
                _hover={{
                  bg: "blue.400",
                  color: "white",
                }}
              >
                {" "}
                Contact Me
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
     </Stack>
          </div>
      );
  }
