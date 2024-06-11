import styles from './style.module.css';
import { useState,useContext } from 'react';
import { cartContext } from "../../context/CarrinhoContext";

export function CardItem({imagem,nome,tipo1,tipo2,quantidadeInicial,input,valor,item,click}){
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const {alterarQuantidade} = useContext(cartContext);
    const handleInputChange = (e) => {
        const novaQuantidade = e.target.value;
        setQuantidade(novaQuantidade);
        alterarQuantidade(novaQuantidade, item);
    };

    const tipo = () => {
        const resposta = tipo2 !== "Nulo" ? tipo2 : "";
        return tipo1 + (resposta ?  `/ ${resposta}` : "");
    };

    function imgBackground(tipo1){
        //compara o primeiro tipo do pokemon e atribuir o card especifico para ele 
        const url = "";
        switch (tipo1) {
            case "bug":
                url = "../../assets/img/backgroudPokmon-bug.png"
                break;
            case "dark":
                url =  "../../assets/img/backgroudPokmon-dark.png"
            default:
                url = "../../assets/img/backgroudPokmon-dragon.png"
                break;
        }
        const divStyle = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
        return divStyle;
    }
/**
 * 

<CardMedia
          component="img"
          height="200"
          image={image}
          alt="pokemon"
        />
 */
    return(
        <>
        <div className={styles.card} style={imgBackground({tipo1})}>
        <div className={styles.divImg}>
        <img src={imagem} alt={nome}className={styles.img}/>
        </div>
        <div className={styles.infos}>

        <p><strong> Nome: {nome}</strong></p>
        <p><strong>Type: {tipo()}</strong></p>
        <p><strong>Valor: R${valor}</strong></p>
        <input type={input} value={quantidade} className={styles.input} onChange={handleInputChange}/>

        </div>
        <button className={styles.botaoRemove} onClick={click}>remover</button>
        </div>
        </>
    )
}