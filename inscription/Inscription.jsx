import { Box, Typography, Stack, TextField, Button } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
import {toast} from "react-hot-toast"
import axios from "axios"
import {Link, useNavigate } from 'react-router-dom'

export default function Inscription() {
  const navigate = useNavigate();
  const {handleSubmit, register, formState: { errors }} = useForm();
  const onSubmit = (data) => { 
    if(data.motDePasse !== data.ConfirmMotDePasse){
      toast.error("Les mots de passe ne correspondent pas");
    } else {
      axios.get(` http://localhost:3000/utilisateur?email=${data.email}`).then((res) => {
        if(res.data.length > 0){
          toast.error("Un compte existe déjà avec cette adresse mail");
        } else{
          axios.post("http://localhost:3000/utilisateur", data).then((res) => {
            console.log(res); 
            
            toast.success("Inscription réussie");
            navigate("/connexion");
            }).catch((err) => {
              console.log(err);
              toast.error("Une erreur est survenue");
            });
        }
      })
      
      
    }
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
          Inscription
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
              label="Veillez saisir votre nom" 
              variant="outlined" 
              fullWidth
              size="small"
              {...register("nomUtilisateur", { required: "Veuillez saisir un nom", minLength: { value:5, message: "Veuillez saisir un nom de plus de 5 caractères"}})}
            />
            
            <TextField 
              id="outlined-basic" 
              label="Veillez saisir votre prenoms" 
              variant="outlined" 
              fullWidth
              size="small"
              {...register("prenomUtilisateur", { required: "Veuillez saisir un prénom" })}
            />
        
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
              label="Veillez saisir votre numero de téléphone" 
              variant="outlined" 
              fullWidth
              size="small"
              {...register("telephone", { required: "Veuillez saisir un numéro de téléphone" })}
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
            
            <TextField 
              id="outlined-basic" 
              label="Veillez confirmer votre mot de passe" 
              variant="outlined" 
              fullWidth
              size="small"
              type="password"
              {...register("ConfirmMotDePasse", { 
                required: "Veuillez confirmer votre mot de passe",
                minLength: { value:5, message: "Veuillez saisir un mot de passe de plus de 6 caractères"} 
              })}
            />
          </Stack>
          
          <Button 
            variant="contained"
            sx={{
              marginTop: 2
            }} 
            type="submit">
            Inscription
          </Button>
          <Typography>Etes-vous déjà inscris ?{" "}
            <Link to="/connexion">Cliquez ici</Link>
          </Typography>
        </form>
      </Box>
    </Stack>
  )
}