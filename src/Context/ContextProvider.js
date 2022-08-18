import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()
export const ContextProvider = ({children}) =>{
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
    const [bodyParts, setbBodyParts] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideosData, setExerciseVideosData] = useState([])
    const [targetMuscleExercise, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    return(
        <StateContext.Provider value={{search,setSearch,exercises,setExercises,bodyParts,setbBodyParts,bodyPart, setBodyPart,exerciseDetail, 
                                        setExerciseDetail,exerciseVideosData, setExerciseVideosData,targetMuscleExercise, setTargetMuscleExercises,
                                        equipmentExercises, setEquipmentExercises}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)