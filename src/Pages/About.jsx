import {SimpleGrid,Flex,Heading,Text,Stack,Box} from '@chakra-ui/react';
import { CarouselComp } from './Silder';

export const About=()=>{
    return (
      <Box
        
        m={"auto"}
        width={"90%"}
        h={{ base: "auto", md: "500px", lg: "500px" }}
        pt={10}
      >
        <SimpleGrid
          justifyContent={"space-between"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          p={5}
        >
          <Flex
            border={"0px solid blue"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box >
              <CarouselComp />
            </Box>
          </Flex>

          <Stack id="about"  class="about section" marginTop='40%' spacing={4} >
            <Heading textAlign={{base:'center',md:'left',lg:'left'}} color={"blue.600"}>
              About Me
            </Heading>
            <hr
              style={{ color: "black", height: "3px", fontWeight: "bolder" }}
            />
            <Text textAlign={"left"} id='user-detail-intro' color={"gray.500"} fontSize={{base:'md',md:'lg',lg:'lg'}}>
              A self-motivated, hard-working, and ambitious Full-Stack Web
              Developer and a good learner with proficiency in JavaScript.
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