import React, {useState, useEffect} from 'react'
import {Box} from '@mui/material'
import {HeroBanner,SearchExercises,Exercises} from '../components'
import { useStateContext } from '../Context/ContextProvider';

const Home = () => {
    const {exercises,setExercises,bodyParts,setbBodyParts,bodyPart, setBodyPart,setExerciseDetail,setExerciseVideosData} = useStateContext()
    useEffect(()=>{setExercises([])},[])
    useEffect(()=>{setBodyPart('all')},[])
    useEffect(()=>{setExerciseDetail([])},[])
    useEffect(()=>{setExerciseVideosData([])},[])

    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    )
}

export default Home