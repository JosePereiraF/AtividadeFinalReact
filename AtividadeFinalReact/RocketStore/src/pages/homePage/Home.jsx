import React from "react";
import { NavBarPadrao } from "../../components/NavBar/NavBarP";
import { Container } from "@mui/material";
import styles from './styles.module.css'; // Importar corretamente o módulo CSS

export const PagPrincipal = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.body}>
      <NavBarPadrao/>
    </div>

    <h1>ALLLLLLLLLLLLLLLLLLLL</h1>
    </div>
    </>
  );
}