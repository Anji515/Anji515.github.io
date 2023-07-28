import Slider from "react-slick";
import {Box, Heading} from "@chakra-ui/react"
import SkilsData from "../Components/SkilsData";


const SkillsImg = [

    {src:'https://sachin-kumar-keshri-portfolio.netlify.app/static/media/html_logo.2fcf94ab.png' , name : 'HTML'},
    {src:'https://cdn-icons-png.flaticon.com/512/919/919826.png' , name : 'CSS'},
    {src:'https://sachin-kumar-keshri-portfolio.netlify.app/static/media/JavaScript_Logo.2e10b2a2.png' , name : 'JavaScript'},
    {src:'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp' , name : 'React'},
    {src:'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' , name : 'Redux'},
    {src:'https://www.styled-components.com/atom.png' , name : 'Styled Component'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8k95PVlJ5vQq--K_3EE1gdcfGsqXS8e74OrSPZZ6xTQ&s' , name : 'Node.js'},
    {src:'https://external-preview.redd.it/bpj8UAYC3vJ1Zvve83Ai-x0_iNl-pZVaD7YswP7-jp4.jpg?width=640&crop=smart&auto=webp&s=2ff425fecc739489ea39cb1f9f7e75865508aea4' , name : 'Chakra UI'},
    {src:'https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg', name : 'Express.js'},
    {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' , name : 'Angular'},
    {src:'https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc' , name : 'Python'},
    {src:'https://banner2.cleanpng.com/20180809/hvf/kisspng-flask-by-example-web-framework-python-bottle-sebastian-estenssoro-5b6c0aa33b3b57.9170119715338072672426.jpg' , name : 'Flask'},
    ]

function Skills() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <Box id="skills" h={"fit-content"} bg={"#cbd5e0"}>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading textAlign={"center"} color={"blue.600"}>
        Technical Skills
      </Heading>
      <Slider {...settings}>
        {SkillsImg.map((el) => (
          <SkilsData key={el.src} src={el.src} name={el.name} />
        ))}
      </Slider>
    </Box>
  );
}

export default Skills