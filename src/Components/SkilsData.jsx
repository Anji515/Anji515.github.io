import {Box,Center,Heading,Stack,Image} from '@chakra-ui/react';
  
  export default function SkilsData({src ,name}) {
    return (

      <Center bg={'#cbd5e0'} py={12}>
        
        <Box
          role={'group'}
          p={6}
          maxW={'180px'}
          w={'full'}
          
          boxShadow="rgb(1, 255, 242) 0px 3px 8px;"
          rounded={'lg'}
          bg={"white"}
          h={'200px'}
         >
          <Box
            rounded={'lg'}
            mt={0}
            height={'60%'}
            >
            <Image
              className="skills-card-img"
              rounded={'lg'}
              height={120}
              width={100}
              objectFit={'cover'}
              src={src}
              margin="auto"
            />
          </Box>
          <Stack pt={10} align={'center'} className="skills-card-name">
            <Heading fontSize={'15px'} fontFamily={'body'} fontWeight={'bold'}>
              {name}
            </Heading>
          </Stack>
        </Box>
      </Center>
    );
  }