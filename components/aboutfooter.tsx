'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Logo from '../public/logs.png';
import Image from 'next/image';
export default function SmallWithNavigation() {
  return (
    <div className='foot'>
      <Image  style={{borderRadius:'100px',display:'flex',alignItems:'center',justifyContent:'center',margin:'auto'}} src={Logo} alt='' />
    <Box
      
      sx={{color:'white'}}>
      <Container
        as={Stack}
        paddingTop={'50px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}}  >
            Home
          </Box>
          <Box as="a" href={'/about'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
            About
          </Box>
          <Box as="a" href={'/stake'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
            Profile
          </Box>
          <Box as="a" href={'/stake'}  sx={{fontFamily:'sans-serif',color:'white',fontSize:'20px'}} >
            Stake
          </Box>
        </Stack>
      
      </Container>
    </Box>
   
    <Text  sx={{fontFamily:'sans-serif',color:'white',fontSize:'15px',display:'flex',alignItems:'center',justifyContent:'center'  }}  >Copyright 2023. All Rights Reserved Project Coliseum  </Text>


    </div>
  )
}