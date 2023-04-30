import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  return (
    <Box id="projects" textAlign={"center"} pt="10px" mt={"10"}>
      <br />
      <br />
      <br />
      <br />
      <Heading>Projects</Heading>
        <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "2" }}
        spacing={{ base: "10px", md: "10px" }}
        w={{ base: "95%", md: "81%" ,xl: "100%"}}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <ProjectCard key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image:`https://i.ibb.co/bdxjpLd/Screenshot-1717.png`,
    title: "GadgetVault - Clone",
    desc: "GadgetVault is online products selling website. It sells Laptops, Mobiles, Fitness products and Health care products. Here I Implemented functionalities like Carousel, filter, sorting, pagination, dynamic products per page, adding products.",
    techStack: ["React", "Redux", "CSS", "JavaScript","Chakra"],
    github: "https://github.com/Anji515/immune-mint-7522",
    deploy: "https://fanciful-mermaid-4e6fb4.netlify.app/",
  },
  {
    image:`https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-12/Screenshot%20%2843%29_774980.png`,
    desc: "An American online food ordering and delivery platform,that specializes in fried chicken. Here I Built the website's Product's page, added search and filter functionality, Adding & Removing products from cart, Helped in making dynamic admin dashboard.",
    title: "KFC - Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rishav048/-unique-stretch-3372",
    deploy: "https://transcendent-stardust-f3081b.netlify.app/",
  },
  {
    image:`https://i.ibb.co/VT4HQB1/Screenshot-1718.png`,
    desc: "RoyalRento is online rental website where you can book Furniture, Electronics, Vehicles And Fitness Products on Monthly basis. Here I built thewebsite's Home, Product's, Cart page. Implementedfunctionalities like Carousel, filter, pagination,dynamic products per page, adding & removing products.",
    title: "Royal Rento - Clone",
    techStack: ["React", "Chakra UI", "Json-Server", "CSS", "JavaScript"],
    github: "https://github.com/Anji515/fortunate-fog-6612",
    deploy: "https://royal-rento.vercel.app/",
  },
  {
    image:`https://i.ibb.co/3yDpyLP/Screenshot-1781.png`,
    desc: "Cosmo Cosmetic is an online beauty products-based website.Here I implemented some functionalities like Login, Signup, Product's Page, Filtering, Adding & Removing products from cart, Implemented functionalities like Carousel and the megadropdown menu, etc.",
    title: "CosmoCosmotic - Clone",
    techStack: ["HTML", "CSS", "JavaScript", "Json-Server" ],
    github: "https://github.com/Anji515/zesty-whistle-6002",
    deploy: "https://dapper-cheesecake-326981.netlify.app/",
  },
  ];

export default Projects;