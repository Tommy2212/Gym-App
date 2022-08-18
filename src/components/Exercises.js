import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { useStateContext } from '../Context/ContextProvider';
import ExerciseCard from './ExerciseCard';


const Exercises = () => {
  const {exercises,setExercises,bodyPart} = useStateContext()
  const [currentPage,setCurrentPage] = useState(1)
  const exercisePerPage = 9
  const indexOfLastExercise = currentPage * exercisePerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate = (e,val) => {
    setCurrentPage(val)
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(() =>{const fetchExerciseData = async()=>{
    let exercisesData = []
    if(bodyPart === 'all'){
      console.log(bodyPart)
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      
    } else {
      console.log('bodyPart2')
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      
    }
    setExercises(exercisesData)

  };fetchExerciseData()},[bodyPart])


  return (
    <Box id="exercises" sx={{mt: {lg:'80px', xs:'50px'}}} p='20px'>
      <Typography variant='h3' pb='40px'>
        Showing Results
      </Typography>
      
      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack  mt='100px' alignItems='center'>
          {exercises.length > exercisePerPage && (
            <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisePerPage)} page={currentPage} onChange={paginate} size='large'/>
          )}
      </Stack>
    </Box>
  )
}

export default Exercises