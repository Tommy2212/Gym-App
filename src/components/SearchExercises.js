import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography, Button, TextField} from '@mui/material'
import { ImportantDevices } from '@mui/icons-material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import {HorizontalScrollbar} from '../components'
import { useStateContext } from '../Context/ContextProvider';

const SearchExercises = () => {
    const {search,setSearch,exercises,setExercises,bodyParts,setbBodyParts,bodyPart, setBodyPart} = useStateContext()

    useEffect(()=>{
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)

            setbBodyParts(['all',...bodyPartsData])
        }
        fetchExercisesData()
    },[])

    const handleSearch = async ()=>{ 
        if(search){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
        const searchedExercises = exercisesData.filter((exercise)=> exercise.target.toLowerCase().includes(search)
                                                                    ||exercise.equipment.toLowerCase().includes(search)
                                                                    ||exercise.bodyPart.toLowerCase().includes(search))
        setSearch ('')
        setExercises (searchedExercises)
        
    }}

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
        <Typography fontWeight={700} sx={{fontSize:{lg:'40px', xs:'30px'}}} mb="50px" textAlign="center">
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box  mb="72px">
            <TextField sx={{input:{fontWeight:'700', border:'none', borderRadius:'4px'}, width:{lg:'800px', xs:'350px'}, backgroundColor:'#fff', borderRadius:"40px"}} 
                value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder="Search Exercises" type="text"
            />
            <Button className='search-btn' sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px'}}
                    onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box  sx={{position:'relative', width: '100%', p:'20px'}} >
            <HorizontalScrollbar data={bodyParts} isBodyCard='true'/>
        </Box>
    </Stack>
  )
}

export default SearchExercises