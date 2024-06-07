import React from "react";
import { useState, useEffect } from "react";
import { NavBarPadrao } from "../../components/NavBar/NavBarP";
import { Container, Grid } from "@mui/material";
import styles from './styles.module.css'; // Importar corretamente o módulo CSS
import PokemonCard from "../../components/pokeCard";
import axios from "axios";
import { GetAllPokemon } from "../../services/produto";


export const PagPrincipal = () => {

  const [pokemons, setPokemons]= useState([]);

  function obterPokemons() {
      GetAllPokemon()
          .then((r) => {
              setPokemons(r.results);
              console.log(r.data[0].name);
          })
          .catch((err) => {
              console.error(err);
          });
  }

  useEffect(()=>{
      obterPokemons();
   },[]);
  
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