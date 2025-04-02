import React from 'react'
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import { Box} from  '@mui/material'
//import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import Acceuil from './components/Acceuil';
import Service from './components/Service';
import Apropos from './components/Apropos';
import Pourquoi from './components/Pourquoi';
import Cripto from './components/Cripto'
import Annonce from './components/Annonce';
import Footer from './components/Footer'




export default function Dashboard() {
  const navigate = useNavigate();
 // useEffect(() => {
   // if(localStorage.getItem("utilisateur")) {
    //  navigate("/inscription");
   // }
 // });
  return (
    <Box>
      <HomePage/>
      <Box mt={10}>
        <Acceuil />
      </Box>
      <Box mt={10}>
        <Annonce/>
      </Box>
      <Box mt={10}>
        <Service/>
      </Box>
      <Box mt={10}>
        <Apropos/>
      </Box>
      <Box mt={10}>
        <Pourquoi/>
      </Box>
      <Box mt={10}>
        <Cripto/>
      </Box>
      <Box mt={10}>
        <Footer/>
      </Box>
    </Box>
    
  )
}
