import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Avatar from '../assets/images/avatar.jpg'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' ml='-10px'>
        <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
          <Typography variant='h5' pb='40px' mt='20px'>
            Made with ❤️ by Tien Pham
          </Typography>
        </Stack>
    </Box>
  )
}

export default Footer