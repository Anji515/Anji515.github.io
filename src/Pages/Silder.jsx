
import { Image } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselComp=()=> {
  return (
    <Carousel
      style={{
        width: "100%",
        height: "350px",
        border: "0px solid red",
        color:'black'
      }}
    >
      <Carousel.Item
        style={{ border: "0px solid yellow", width: "100%", height: "350px" }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          className="d-block w-100"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/08/gravit-designer-review-featured-iamge.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item
        style={{ border: "0px solid yellow", width: "100%", height: "350px" }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          className="d-block w-100"
          src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/07/23161205/Career-Software-Engineer-1024x639.png"
          alt="Second slide"
          />
      </Carousel.Item>
      <Carousel.Item
        style={{ border: "0px solid yellow", width: "100%", height: "350px" }}
        >
        <Image
          style={{
              width: "100%",
            height: "100%",
          }}
          className="d-block w-100"
              src="https://camo.githubusercontent.com/95a8f8600af35a1848f10a6d8caf6db62d1d46bee79f0f0055719ba4d0fac628/68747470733a2f2f7777772e6d79776562776f726c642e696e2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f7765622d64657369676e2d6b6572616c612e676966"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

