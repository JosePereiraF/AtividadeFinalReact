import { createContext, useState,useEffect } from "react";

const cartContext = createContext();

const CartProvider = (props) =>{

    const [carrinho, setCarrinho] = useState([]);
    
    const [valorTotal, setValorTotal] = useState(0);
    
    useEffect(() => {
        const savedCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        setCarrinho(savedCarrinho);
      }, []);
    
    function valorTotalCarrinho() {
      let total = 0;
      carrinho.forEach((item) => {
        total += item.quantidade * item.valorUnitario;
      });
      setValorTotal(total);
    }
    // function adicionarItem(item) {
    //   setCartItens((additem) => {
    //     if (cartItens.includes(item)) {
    //       return additem.map((itemadd) =>
    //         itemadd.name === item.name
    //           ? { ...item, quantidade: item.quantidade + 1 }
    //           : ""
    //       );
    //     } else {
    //       return additem([...cartItens, item]);
    //     }
    //   });
    // }
    function adicioanrItem(item){
        const itens = [...carrinho];
        const indexItem = itens.findIndex(i =>i.name == item.name);
        if(indexItem !== "") itens[indexItem].quantidade +=1;
        else setCarrinho(...carrinho, item);
        setCarrinho(itens);
        localStorage.setItem("carrinho",JSON.stringify(itens));
    };
    function removeritem(item){
        const itens = [...carrinho];
        const indexItem = itens.findIndex(i =>i.name == item.name);
        if(indexItem !== ""&& itens[indexItem].quantidade <=1) itens.splice(indexItem,1); 
        if(indexItem !== "") itens[indexItem].quantidade -=1;
        else console.log('item não encontrado');
        setCarrinho(itens);
        localStorage.setItem("carrinho",JSON.stringify(itens));
    }
    function limparCarrinho(){
        localStorage.setItem("carrinho",([]));
    }
    return (
        <cartContext.Provider
        value={{
          carrinho,
          adicioanrItem,
          removeritem,
          limparCarrinho,
          valorTotalCarrinho,
        }}
        >
            {props.children}
        </cartContext.Provider>
    );
};
export {cartContext,CartProvider};