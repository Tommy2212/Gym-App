import React, { createContext, useState } from 'react';
import {Box} from '@mui/material';
import {useParams } from 'react-router-dom';

import {youtubeOptions, exerciseOptions, fetchData} from '../utils/fetchData';
import {Detail,ExerciseVideos,SimilarExercises} from '../components'
import { useStateContext } from '../Context/ContextProvider';

 const ExerciseDetail = () => {
    const {setExerciseDetail, setExerciseVideosData,setTargetMuscleExercises,setEquipmentExercises} = useStateContext()
    const {id} = useParams ()


    useState(()=>{
      const fetchExerciseSData = async ()=>{
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'


        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
        setExerciseDetail(exerciseDetailData)
        
        const youtubeVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
        setExerciseVideosData(youtubeVideosData.contents)

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);
  
        const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equimentExercisesData)     

        console.log('equimentExercisesData: ',equimentExercisesData)
        console.log('targetMuscleExercisesData: ',targetMuscleExercisesData)

      }
      fetchExerciseSData()
    },[id])

   return (
     <Box>
        <Detail />
        <ExerciseVideos />
        <SimilarExercises />
     </Box>
   )
 }
 
 export default ExerciseDetail