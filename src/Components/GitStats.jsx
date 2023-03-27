import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const GitStats = () => {
  return (
    <Box
      pt={{ base: 3, md: 4, lg: 8 }}
      pb={{ base: 5, md: 6, lg: "30px" }}
      border={"0px solid blue"}
      h={"auto"}
      
    >
      <Heading textAlign={"center"} color={"blue.600"}>
        GitHub Stats
      </Heading>
      <Flex
        justifyContent={"center"}
        h={{ base: "150px", md: "200px", lg: "220px" }}
        w={{ base: "95%", md: "80%", lg: "65%" }}
        bg={"#ffffff"}
        padding='5px'
        m={"auto"}
        mt={{ base: "20px", md: "30px", lg: "40px" }}
        border={"0px solid red"}
        borderRadius={"10px"}
        _hover={{
          boxShadow: "rgb(1, 255, 242) 0px 3px 8px",
          transition: "2s",
        }}
      >
        <Image
          h="100%"
          w="60%"
          bg={"#ffffff"}
          borderRadius={"10px"}
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=Anji515&count_private=true&show_icons=true&bg_color=20232a&text_color=0bc0f1&icon_color=#166980&title_color=0bc0f1&hide_border=false"
        ></Image>
        <Image
          h="100%"
          w="40%"
          bg={"#ffffff"}
          borderRadius={"10px"}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anji515&count_private=true&show_icons=true&bg_color=20232a&text_color=166980&icon_color=#166980&title_color=3b7087&hide_border=false"
        ></Image>
      </Flex>
    </Box>
  );
};

export default GitStats;