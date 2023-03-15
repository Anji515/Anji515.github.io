import { Box, Heading, Text } from "@chakra-ui/react";
import React from 'react'

const Footer = () => {
  return (
    <Box bg={"#2a2b2b"} w={"100%"} h={"170px"} color={"white"} border={"2px solid black"} p={6}>
      <Heading  fontFamily={"Fugaz One, cursive"}>
        Thank you for visiting.😀
      </Heading>
      <Text fontWeight={"500"} textAlign={"center"} color={"white"}>
        © 2023 Designed and Built by Kommu Anjaneyulu
      </Text>
    </Box>
  );
}

export default Footer