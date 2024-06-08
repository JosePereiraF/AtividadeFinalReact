import { useState, useEffect } from "react";

export function Carrinho(){
    const carrinho = localStorage.getItem("carrinho");
    return(
        <>
        <div className={styles.body}>
      <NavBarPadrao pokemonFiltro={pokemonFiltro}/>
      </div>
      
        </>
    )
}