import { useEffect, useState } from "react";
import { GetAllPokemon } from "../../services/produto";

export function ListarPokemon(){
    const [pokemons, setPokemons]= useState([]);

    function obterPokemons() {
        GetAllPokemon()
            .then((r) => {
                setPokemons(r.results);
                console.log(r.data[0].name);
            })
            .catch((err) => {
                console.error('Erro ao obter pokemons:', err);
            });
    }

    useEffect(()=>{
        obterPokemons();
     },[]);
     return(
        <>
        <h1>Lista de Pokemons</h1>
        </>
     )
}