
import { Box, Text, Heading, Flex, SimpleGrid, Link } from "@chakra-ui/react";
import React from 'react'
import style from "./Projects.module.css"

const DeployedLink = {
  gadgetValut_D_Link :"https://fanciful-mermaid-4e6fb4.netlify.app/",
  kfc_D_Link: "https://transcendent-stardust-f3081b.netlify.app/",
  royalRento_D_Link: "https://royal-rento.vercel.app/",
  cosmoCosmotic_D_Link: "https://dapper-cheesecake-326981.netlify.app/",
};

const GithubLink = {
    gadgetValutGithub :"https://github.com/Anji515/immune-mint-7522",
    kfcGithub :"https://github.com/Rishav048/-unique-stretch-3372",
    royalRentoGithub : "https://github.com/Anji515/fortunate-fog-6612",
    cosmoCosmoticGithub : "https://github.com/Anji515/zesty-whistle-6002"
}

const { gadgetValut_D_Link, kfc_D_Link, royalRento_D_Link, cosmoCosmotic_D_Link } =
  DeployedLink;
const { gadgetValutGithub, kfcGithub, royalRentoGithub, cosmoCosmoticGithub } =
  GithubLink;


const Projects = () => {


      return (
        <>
          <div id="projects">
            <br />
            <br />
            <br />
            <Heading textAlign={"center"} color={"blue.600"}>
              Projects
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2 }}
              gap={"40px"}
              className={style.portfolio}
            >
              {/* ................ 1st Project(Gadget Vault) .................. */}

              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box height='350px' className="project-card" >
                    <div className={style.projectName}>
                      <h3 className="project-title">
                        <img
                          className={style.logoImg}
                          src="https://fanciful-mermaid-4e6fb4.netlify.app/static/media/Logo.6c8dc0b4976f93aa7f2a.png"
                          alt="Logo"
                        />{" "}
                        GadgetVault - Clone
                      </h3>
                    </div>
                    <div className={style.aboutProject}>
                      <p  style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p className="project-description" style={{ fontSize: "14px", textAlign: "left" }}>
                      GadgetVault is online products selling website. 
                      It sells Laptops, Mobiles, Fitness products and 
                      Health care products. Here I Implemented functionalities 
                      like Carousel, filter, sorting, pagination, dynamic 
                      products per page, adding products.
                      </p>
                    </div>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://i.ibb.co/bdxjpLd/Screenshot-1717.png"
                      alt="Gadget Vault"
                    />
                  </Box>
                  <br></br>
                  <div className="project-tech-stack" >
                  <div className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      Next.js | Redux | CSS | Chakra UI
                    </p>
                    </div>
                  </div>
                  <Flex mt={"30px"} pt={"20px"} justifyContent={"space-evenly"}>
                      <a className="project-github-link">
                    <button className={style.btn}>
                      <Link href={gadgetValutGithub} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>
                      </a>

                      <a className="project-deployed-link">
                    <button className={style.btn}>
                      <Link href={gadgetValut_D_Link} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                      </a>
                  </Flex>
                </div>
              </div>

              {/* ................ 2nd Project - (KFC) .................. */}

              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box height='350px' className="project-card">
                    <div className={style.projectName}>
                      <img
                        className={style.logoImg}
                        src="data:image/png;base64,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"
                        alt="Logo"
                      />
                      <h3  className="project-title">KFC - Clone</h3>
                    </div>
                    <Box className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p className="project-description" style={{ fontSize: "14px", textAlign: "left" }}>
                        An American online food ordering and delivery
                        platform,that specializes in fried chicken. Here I Built
                        the website's Product's page, added search and filter
                        functionality, Adding & Removing products from cart,
                        Helped in making dynamic admin dashboard.
                      </p>
                    </Box>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-12/Screenshot%20%2843%29_774980.png"
                      alt="KFC SS"
                    />
                  </Box>
                  <br></br>
                  <div className="project-tech-stack" >
                  <Box  className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      HTML | CSS | JavaScript{" "}
                      <Text display={{ md: "null", lg: "none" }}>Adjust</Text>
                    </p>
                  </Box>
                  </div>
                  <Flex
                    border={"0px solid red"}
                    mt={"30px"}
                    pt={"20px"}
                    justifyContent={"space-evenly"}
                  >
                    <button className={style.btn}>
                      <a className="project-github-link" >
                      <Link href={kfcGithub} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                      </a>
                    </button>

                    <a className="project-deployed-link">
                    <button className={style.btn}>
                    <Link href={kfc_D_Link} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                     
                    </button>
                    </a>
                  </Flex>
                </div>
              </div>

              {/* ****************** 3rd Project RoyalRento ********************* */}
              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box height='350px' className="project-card">
                    <div className={style.projectName}>
                      <img
                        className={style.logoImg}
                        src="https://i.ibb.co/StxKCFC/fortunate-fog-6612.jpg"
                        alt="Logo"
                      ></img>
                      <h3  className="project-title">RoyalRento - Clone</h3>
                    </div>
                    <div className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p className="project-description" style={{ fontSize: "14px", textAlign: "left" }}>
                        RoyalRento is online rental website where you can 
                        book Furniture, Electronics, Vehicles And Fitness 
                        Products on Monthly basis. Here I built the
                        website's Home, Product's, Cart page. Implemented
                        functionalities like Carousel, filter, pagination,
                        dynamic products per page, adding & removing products.
                      </p>
                    </div>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://i.ibb.co/VT4HQB1/Screenshot-1718.png"
                      alt="Royal Rento"
                    />
                  </Box>
                  <br></br>
                  <div className="project-tech-stack" >
                  <div className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      React | JavaScript | HTML | CSS | Chakra UI{" "}
                    </p>
                  </div>
                  </div>
                  <Flex
                    border={"0px solid red"}
                    mt={"30px"}
                    pt={"20px"}
                    justifyContent={"space-evenly"}
                  >
                    <a className="project-github-link">
                    <button className={style.btn}>
                      <Link href={royalRentoGithub} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>
                    </a>

                    <a className="project-deployed-link">
                    <button className={style.btn}>
                      <Link  href={royalRento_D_Link} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                    </a>
    
                  </Flex>
                </div>
              </div>


              {/* ................ 4rth Project - (Cosmo Cosmotic) .................. */}

              <div className={style.portfoliocontent}>
                <div className={style.portfolioimg}>
                  <Box height='350px' className="project-card">
                    <div className={style.projectName}>
                      <h3 className="project-title">
                        <img
                          className={style.logoImg}
                          src="https://dapper-cheesecake-326981.netlify.app/images/CosmeticLogoi.png"
                          alt="Logo"
                        />{" "}
                        CosmoCosmotic - Clone
                      </h3>
                    </div>
                    <div className="project-tech-stack" >

                    <div className={style.aboutProject}>
                      <p style={{ textAlign: "left", color: "blue" }}>
                        About Project :
                      </p>
                      <p className="project-description" style={{ fontSize: "14px", textAlign: "left" }}>
                       Cosmo Cosmetic is an online beauty products-based website.
                       Here I implemented some functionalities like Login, Signup, 
                       Product's Page, Filtering, Adding & Removing products from cart, 
                       Implemented functionalities like Carousel and the mega
                       dropdown menu, etc.
                      </p>
                    </div>
                    </div>
                    <br></br>
                    <img
                      className={style.projectimg}
                      src="https://i.ibb.co/F0GMDwV/Screenshot-1719.png"
                      alt="Cosmo Cosmotic"
                    />
                  </Box>
                  <br></br>
                  <div className={style.Techstacks}>
                    <p style={{ textAlign: "left", color: "blue" }}>
                      Tech Stacks :
                    </p>
                    <p style={{ fontSize: "13px" }}>HTML | CSS | JavaScript</p>
                  </div>
                  <Flex mt={"30px"} pt={"20px"} justifyContent={"space-evenly"}>
                    <a className="project-github-link" >
                    <button className={style.btn}>
                      <Link href={cosmoCosmoticGithub} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                          alt="GitIcon"
                        />{" "}
                        Github
                      </Link>
                    </button>
                    </a>

                    <a className="project-deployed-link">
                    <button className={style.btn}>
                      <Link href={cosmoCosmotic_D_Link} target="_blank">
                        <img
                          style={{
                            borderRadius: "50%",
                            background: "white",
                            marginRight: "5px",
                            display: "inline",
                            width: "20px",
                            height: "20px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                          alt="PlayIcon"
                        />{" "}
                        Live
                      </Link>
                    </button>
                    </a>
            
                  </Flex>
                </div>
              </div>
            </SimpleGrid>
          </div>
        </>
      );
}

export default Projects