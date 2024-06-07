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
              setPokemons(r.data);
              console.log(r.data);
          })
          .catch((err) => {
              console.error(err);
          });
  }

  useEffect(()=>{
      obterPokemons();
   },[]);



   const pokemonFiltro = (name) => {
    if (name === "") {
      obterPokemons();
      return;
    }

    const filtroPokemon = pokemons.filter(pokemon => (pokemon.name.toLowerCase()).includes(name.toLowerCase()));
    setPokemons(filtroPokemon);
  };
  
  return (
    <>
    <div className={styles.container}>
    <div className={styles.body}>
      <NavBarPadrao pokemonFiltro={pokemonFiltro}/>
      </div>
    <div className={styles.card}> 
    <Container maxWidth="false">
    <Grid container spacing={3}>
            {pokemons && pokemons.map((pokemon) => (
              <Grid item xs={2} key={pokemon.name}>
                <PokemonCard name={pokemon.name} image={pokemon.imagem} />
              </Grid>
            ))}
          </Grid>
     
    </Container>
          </div>
    </div>
    </>
  );
}