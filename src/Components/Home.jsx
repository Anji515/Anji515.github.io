import {Button,Flex,Heading,Image,Stack,Text} from '@chakra-ui/react';
  import { DownloadIcon } from '@chakra-ui/icons'
  import { Link } from "react-scroll";


//   const handleDownloadResume = ()=>{ }


  export default function Home() {
    return (
        <Stack id='home' bg={'#c1cbd5'}>
            <Heading
              textAlign={{ base: "center", md: "left", lg: "left" }}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              <Text color={"blue.600"} as={"span"}>
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


        </Stack>
    );
  }