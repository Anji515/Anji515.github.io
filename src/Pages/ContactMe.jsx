import { Box, Flex, FormControl, Image, Input, Text,Stack,FormLabel,Heading,Button,Link, Textarea } from "@chakra-ui/react";
import React from "react";
import gmail from "../Logos/gmail.png";
import linkedIn from "../Logos//linkedin.png";
import github from "../Logos/github.png";
import phone from '../Logos/phone.png';
import address from '../Logos/address.png';

function ContactMe() {
  return (
    <div id="contact">
    <Box backgroundColor={"#1a202c"} p="2rem" border={'1px sloid red'}>
      <br />
      <br />
      <br />
      <Flex  borderBottom={"2px solid red"}
        w="90%" m="auto" justifyContent={"center"} fontSize={"2.5rem"} color={"white"} fontWeight="700">
        <Text>Contact </Text>
        <Text color="red" ml="0.5rem">Me</Text>
      </Flex >

      <Stack minH={'60vh'} width='80%' margin={'auto'} direction={{ base: 'column', md: 'row' }} p='-50px' >
      <Box  m="auto" mt={8} w={{base:"100%",sm:"90%",md:"70%",lg:"60%"}}>
        <Flex mt='40px' flexDirection={"column"}  gap="3rem" >

        <Flex   id="contact-address" alignItems={"center"} >
          <Image src={address} w="2rem"></Image>
            <Text>
            <a href="">
                <Text color={"white"} fontWeight="700" fontSize={'xl'} pl={"1rem"}>
                  Hyderabad , Telngana.
                </Text>
              </a>
            </Text>
          </Flex>

          <Flex  id="contact-email"
              justifyContent={"left"} alignItems="center" >
            <Image display={"inline-block"} src={gmail} w="2rem"></Image>
            <Text>
              <a href="mailto:anji.gd17@gmail.com" target={"_blank"} rel="noreferrer">
              
                <Text color={"white"} fontWeight="700" fontSize={'xl'} pl={"1rem"}>anji.gd17@gmail.com</Text>
              </a>
            </Text>
          </Flex>
          <Flex id="contact-linkedin" alignItems={"center"}>
            <Image src={linkedIn} w="2rem" />
            <Text>
              <a href="https://www.linkedin.com/in/anjaneyulu-kommu-648a1613b/" target={"_blank"} rel="noreferrer">
                <Text color={"white"} fontWeight="700" fontSize={'xl'} pl={"1rem"}>
                Kommu_Anjaneyulu_LinkedIn
                </Text>
              </a>
            </Text>
          </Flex>
          <Flex  id="contact-github" alignItems={"center"} >
            <Image src={github} w="2rem"></Image>
            <Text>
              <a href="https://github.com/Anji515" target={"_blank"} rel="noreferrer">
                <Text color={"white"} fontWeight="700" fontSize={'xl'} pl={"1rem"}>
                  Kommu_Anjaneyulu_Github
                </Text>
              </a>
            </Text>
          </Flex>
          <Flex id="contact-phone" alignItems={"center"} >
          <Image src={phone} w="2rem"></Image>
            <Text>
            <a href="tel:7620152833" rel="noreferrer">
                <Text color={"white"} fontWeight="700" fontSize={'xl'} pl={"1rem"}>
                  +91 8466891597
                </Text>
              </a>
            </Text>
          </Flex>
        </Flex>
      </Box>

      
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack color={'white'} spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'3xl'} align={'center'}>Connect With Me</Heading>
          <FormControl id="name">
            <FormLabel>Your Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea type="text" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>
             Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
    </Box>
    </div>
  );
}

export default ContactMe;