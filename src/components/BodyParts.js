import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'
import { useStateContext } from '../Context/ContextProvider';


const BodyParts = ({item}) => {
  const {bodyPart, setBodyPart} = useStateContext()
  return (
    <Stack className='bodyPart-card' type='button' alignItems='center' justifyContent='center'
            sx={{
              borderTop: bodyPart === item ?  '4px solid #ff2625' : '', 
              backgroundColor:'#fff', 
              borderBottomLeftRadius:'20px', 
              width:'270px', 
              height:'280px', 
              gap:'47px', 
              cursor:'poiter'}}
            onClick={()=>{
              setBodyPart(item)
              window.scrollTo({top:1800, left:100, behavior:'smooth'})
            }}
      >
        <img src={Icon} alt="dumbbell" style={{width:'40px', height:'40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyParts