import { createContext, useState,useEffect } from "react";

const cartContext = createContext();

const CartProvider = (props) =>{

    const [carrinho, setCarrinho] = useState([]);
    
    const [valorTotal, setValorTotal] = useState(0);
    
    useEffect(() => {
        const savedCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        setCarrinho(savedCarrinho);
      }, []);
      useEffect(() => {
        valorTotalCarrinho(carrinho); // Calcular o total sempre que o carrinho mudar
    }, [carrinho]);
    
    function valorTotalCarrinho() {
      let total = 0;
      carrinho.forEach((item) => {
        total += item.quantidade * item.valorUnitario;
      });
      setValorTotal(total);
    }

    function adicionarItem(item){
        const itemadd ={
          index: carrinho.length+1,
          ...item,
          quantidade:1
        }

        const itens = [...carrinho];
        adicionando();
    function adicionando() {
      
        if (itens.length < 1) {
            itens.push(itemadd);
        } else { 
            for (let i = 0; i < itens.length; i++) {
                if (itens[i].name.toLowerCase() === itemadd.name.toLowerCase()) {
                  itens[i].quantidade += 1; 
                  return;
                }
            }
            itens.push(itemadd);
        }
    }


    
    setCarrinho(itens);
    localStorage.setItem("carrinho", JSON.stringify(itens));
}
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
          adicionarItem,
          removeritem,
          limparCarrinho,
          valorTotalCarrinho,
          valorTotal,
        }}
        >
            {props.children}
        </cartContext.Provider>
    );
};
export {cartContext,CartProvider};