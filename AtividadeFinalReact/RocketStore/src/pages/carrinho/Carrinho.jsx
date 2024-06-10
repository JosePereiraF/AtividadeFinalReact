import { useState, useEffect, useContext } from "react";
import styles from './style.module.css';
import { NavBarPadrao } from "../../components/NavBar/NavBarP";
import { CardItem } from "../../components/cardItem/CardItem";
import { FormaPagamento } from "../../components/FormaPagamento/FormaPagamento";
import ImgFrete from '../../assets/img/Frete.png'
import { cartContext } from "../../context/CarrinhoContext";

export function Carrinho() {
  const [itens, setItens] = useState([]);
  const { valorTotal } = useContext(cartContext);
  const {carrinho} = useContext(cartContext);

  useEffect(() => {
    if (carrinho) {
      setItens(carrinho);
    }
  }, [carrinho]);

  return (
    <>
      <div className={styles.body}>
        <NavBarPadrao />
      </div>
      <div className={styles.container}>
        <div className={styles.informacoes}>
         <div className={styles.top}>
         <FormaPagamento valor={valorTotal}/>
         </div>
         <div className={styles.Bottom}>
          <div className={styles.Bottomleft}>
            <img src={ImgFrete} alt="" className={styles.frete}/>
          </div>
          <div className={styles.Bottomright}> 
            <h2>Frete grátis</h2>
            <br />
            <p>Garantimos a entrega do seu pedido por nossa conta.</p>
          </div>
         </div>
        </div>
        <div className={styles.carrinho}>
          {itens.map((item, index) => (
            <CardItem
              key={index}
              imagem={item.imagem}
              nome={item.name}
              tipo1={item.tipoPrimario}
              tipo2={item.tipoSecundario} 
              quantidadeInicial={item.quantidade}
              input={"number"}
              valor={item.valorUnitario}
            />
          ))}
        </div>
      </div>
    </>
  );
}