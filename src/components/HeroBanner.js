import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box mt={{lg:'212px', xs:'70px'}} ml={{sm:'50px'}} sx={{position:'relative'}}>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} fontSize={{lg:'44px', xs:'40px'}} mb="23px" mt="30px">
            Smart, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4} >
            Check out the most effective exercises
        </Typography>
        <Button variant="contained" color='error' href='#exercises' sx={{backgroundcolor:"#ff2625",padding:"10px"}} >Explore Exercises</Button>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' style={{borderRadius:'0px 0px 0px 150px'}}/>
        <Typography fontWeight={600} fontSize='200px' color='#ff2625' sx={{opacity:0.1, display:{lg:'block', xs:'none'}}}>
            Exercises
        </Typography>

    </Box>
  )
}

export default HeroBanner