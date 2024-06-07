import React from "react";
import { NavBarPadrao } from "../../components/NavBar/NavBarP";
import { Container, Grid } from "@mui/material";
import styles from './styles.module.css'; // Importar corretamente o módulo CSS
import PokemonCard from "../../components/pokeCard";
import axios from "axios";

export const PagPrincipal = () => {
 const url = axios.create({
  baseURL: 'https://localhost8080/',
 })
  const getPoke = () =>{
    const pegandoPoke = '/pokemon'
    return url.get(pegandoPoke);

  } 

  
  return (
    <>
    <div className={styles.container}>
    <div className={styles.body}>
      <NavBarPadrao/>
    </div>
    <Container maxWidth="false">
      <Grid container>
        <Grid item xs={3}>
      <PokemonCard/>
        </Grid>
        <Grid item xs={3}>
      <PokemonCard/>
        </Grid>
        <Grid item xs={3}>
      <PokemonCard/>
        </Grid>
        <Grid item xs={3}>
      <PokemonCard/>
        </Grid>      
      </Grid>
     
    </Container>
    </div>
    </>
  );
}