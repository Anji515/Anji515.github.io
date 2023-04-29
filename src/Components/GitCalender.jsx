import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from 'react'
import GitHubCalendar from "react-github-calendar";

const GitCalender = () => {
  return (
    <Box
      className="react-activity-calendar"
      pt={{ base: 3, md: 4, lg: 8 }}
      pb={{ base: 5, md: 6, lg: "30px" }}
      border={"0px solid blue"}
      h={"auto"}
    >
      <Heading textAlign={"center"} color={"blue.600"}>
        GitHub Calender
      </Heading>

      <Flex justify={"center"} align={"center"} mt={{ base: 6, md: 7, lg: 8 }}>
        <Box
          bg={'#7690ac'}
          w={"fit-content"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          p={4}
          borderRadius={"10px"}
          _hover={{
            boxShadow: "rgb(1, 255, 242) 0px 3px 8px",
            transition: "2s",
          }}
        >
          <GitHubCalendar
            style={{ border: "0px solid red",backgroundColor:'#7690ac', width: "100%",padding:'20px' }}
            username="Anji515"
            private={false}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
          <Image
            w={"100%"}
            h={{ base: "100px", md: "150px",lg:'200px'}}
            style={{ border: "0px solid red",backgroundColor:'#7690ac',padding:'20px' }}
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?count_private=true&user=Anji515&theme=light&background=cbd5e0"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}

export default GitCalender ;