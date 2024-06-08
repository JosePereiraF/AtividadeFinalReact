import React from "react";
import { useState, useEffect } from "react";
import { NavBarPadrao } from "../../components/NavBar/NavBarP";
import { Container, Grid } from "@mui/material";
import styles from './styles.module.css';
import PokemonCard from "../../components/pokeCard";
import axios from "axios";
import { GetAllPokemon } from "../../services/produto";


export const PagPrincipal = () => {

  const [pokemons, setPokemons]= useState([]);
  const [pokemonsPorPagina, setPokemonsPorPagina] = useState(30)
  const [paginaAtual, setPaginaAtual] = useState(0)

  const pages = Math.ceil(pokemons.length / pokemonsPorPagina)
  const startIndex = paginaAtual * pokemonsPorPagina;
  const endIndex = startIndex + pokemonsPorPagina;
  const pokemonPagina = pokemons.slice(startIndex, endIndex)


  function obterPokemons() {
    GetAllPokemon()
          .then((r) => {
              setPokemons(r.data);
          })
          .catch((err) => {
              console.error(err);
          });
  }

  useEffect(()=>{
      obterPokemons();
   },[]);

   useEffect(()=>{
    setPaginaAtual(0)
   },[pokemonsPorPagina])

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
    <div className={styles.body}>
      <NavBarPadrao pokemonFiltro={pokemonFiltro}/>
      </div>
    <div>
      <div> 
    <Container maxWidth="100vw">
    <Grid container spacing={3}>
            {pokemonPagina.map((pokemon) => (
              <Grid item xs={2} key={pokemon.name}>
                <PokemonCard name={pokemon.name} image={pokemon.imagem} type1={pokemon.tipoPrimario} type2={pokemon.tipoSecundario} valor={pokemon.valorUnitario}/>
              </Grid>
            ))}
          </Grid>
     
    </Container>
          </div>
          <div>
            {Array.from(Array(pages),(pokemons, index)=>{
              return <button className={styles.botaoPaginacao} value={index} onClick={(e) => setPaginaAtual(Number(e.target.value))}>{index + 1}</button>
            })}
          </div>
          <div>
            <select className={styles.selectMenu} value={pokemonsPorPagina} onChange={(e) => setPokemonsPorPagina(Number(e.target.value))}>
            <option value={30}>padrão</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={60}>60</option>
            </select>
          </div>
    </div>
    </>
  );
}