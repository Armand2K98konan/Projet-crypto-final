import { Box, Typography, Stack, TextField, Button } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
import {toast} from "react-hot-toast"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
//import { useEffect } from 'react'

export default function Connexion() {
  const navigate = useNavigate();
 // useEffect(() => {
   // if(localStorage.getItem("utilisateur")) {
   //   navigate("/");
  //  }
 // });
  const {handleSubmit, register, formState: { errors }} = useForm();
  const onSubmit = (data) => { 
    axios.get(`http://localhost:3000/utilisateur?email=${data.email}&motDePasse=${data.motDePasse}`)
      .then(res => {
        if (res.data.length > 0) {
          localStorage.setItem("utilisateur", JSON.stringify(res.data[0]));
          toast.success("Connexion réussie");
          navigate("/");
        } else {
          toast.error("Les identifiants sont incorrects");
        }
      })
      .catch(err => {
        console.log(err);
        toast.error("Une erreur est survenue");
      });
  };
  
  return (
    <Stack alignItems={"center"} 
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#f5f5f5"}>
      <Box
        width={500}
        sx={{
          backgroundColor:"#fff",
          padding: 3,
        }}
      >
        <Typography variant="h4">
          Connexion
        </Typography>
        <form
          style={{
            marginTop: 4,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} gap={2}>
            
            <TextField 
              id="outlined-basic" 
              label="Veillez saisir votre mail" 
              variant="outlined" 
              fullWidth
              size="small"
              type="email"
              {...register("email", { 
                required: "Veuillez saisir un email",
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: "Adresse email invalide" 
                }
              })}
            />
            
            
            
            <TextField 
              id="outlined-basic" 
              label="Veillez saisir un mot de passe" 
              variant="outlined" 
              fullWidth
              size="small"
              type="password"
              {...register("motDePasse", { 
                required: "Veuillez saisir un mot de passe",
                minLength: { value:5, message: "Veuillez saisir un mot de passe de plus de 5 caractères"} 
              })}
            />
            
            
          </Stack>
          
          <Button 
            variant="contained"
            sx={{
              marginTop: 2
            }} 
            type="submit">
            Se connecter
          </Button>
          <Typography>Avez-vous déjà un compte ?{" "}
            <Link to="/inscription">Cliquez ici</Link>
          </Typography>
        </form>
      </Box>
    </Stack>
  )
}