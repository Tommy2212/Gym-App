import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import {Home, ExerciseDetail} from './pages'
import {Footer,Navbar} from './components';



function App() {
  return (
    <Box width='400px' sx={{width:{xl: '1480px'}, pl:{xs:'10px'}}} m="auto" > 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Gym-App" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>

        <Footer />
    </Box>
  );
}

export default App;
