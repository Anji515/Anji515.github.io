import {SimpleGrid,Flex,Heading,Text,Stack,Box} from '@chakra-ui/react';
import { CarouselComp } from './Silder';

export const About=()=>{
    return (
      <Box
        m={"auto"}
        width={"100%"}
        h={{ base: "auto", md: "600px", lg: "600px" }}
        padding={20}
        border={'0px solid red'}
      >
      <br />
      <br />
        <SimpleGrid
          justifyContent={"space-between"}
          columns={[1,1,1,2]}
          spacing={5}
          p={1}
        >
          
          <Flex
            border={"0px solid blue"}
            alignItems={"center"}
            justifyContent={"center"}
            display={['none','none','none','block']}
          >
            <Box >
              <CarouselComp />
            </Box>  
          </Flex>

          <Stack id="about"  class="about section" marginTop='2%' spacing={4} border={"0px solid red"}>
            <Heading textAlign={{base:'center',md:'left',lg:'left'}} color={"blue.600"}>
              About Me
            </Heading>
            <hr
              style={{ color: "black", height: "3px", fontWeight: "bolder" }}
            />
            <br />
              <Flex
              border={'0px solid red'}
              width={'95%'}
              direction={{ base: "column", md: "row" }}
              justifyContent={"space-around"}
              textAlign="center"
              gap={'5px'}
              // marginBottom={"20px"}
            >
              <Box
                // w="30%"
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -2px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>1200+ Hours</Text>
                <Text>Full Stack Coding</Text>
              </Box>

              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>5+ Major Projects</Text>
                <Text>25+ Mini Projects</Text>
              </Box>

              {/* <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>100+ Hours</Text>
                <Text>Soft Skills</Text>
              </Box> */}

              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>500+ DSA </Text>
                <Text>Problems Solved</Text>
              </Box>
            </Flex>
            <br />
            <br />
            <Text textAlign={"left"} id='user-detail-intro' color={"gray.500"} fontSize={{base:'md',md:'lg',lg:'lg'}}>
              A self-motivated, hard-working, and ambitious Full-Stack Web
              Developer and a good learner with proficiency in JavaScript,ReactJS,NodeJS.
              Having a Problem-solving mindset, and 1200+ hrs of hands-on
              experience in developing fully functional E-commerce applications.
              Looking forward to working as a developer and competent employee
              in an exciting tech company.
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    );
  }