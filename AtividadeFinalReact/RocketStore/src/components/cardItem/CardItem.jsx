import styles from './style.module.css';
import { useState } from 'react';

export function CardItem({imagem,nome,tipo1,tipo2,quantidadeInicial,input,valor}){
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const handleInputChange = (e) => {
        setQuantidade(e.target.value);
      };

    const tipo = () => {
        const resposta = tipo2 !== "Nulo" ? tipo2 : "";
        return tipo1 + (resposta ?  `/ ${resposta}` : "");
    };

    return(
        <>
        <div className={styles.card}>
        <div className={styles.divImg}>
        <img src={imagem} alt={nome}className={styles.img}/>
        </div>
        <div className={styles.infos}>
        <p>Nome: {nome}</p>
        <p>Type: {tipo()}</p>
        <p>Valor: R${valor}</p>
        <input type={input} value={quantidade} className={styles.input} onChange={handleInputChange}/>
        </div>
        </div>
        </>
    )
}