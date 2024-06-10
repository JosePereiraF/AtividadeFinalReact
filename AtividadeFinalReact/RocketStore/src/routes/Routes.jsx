import { Routes, Route } from "react-router-dom";
import { PagPrincipal } from "../pages/homePage/Home";
import { Carrinho } from "../pages/carrinho/Carrinho";
import { FormPage } from "../pages/Formulario/FormularioCadatros";
import { Login } from "../pages/Login/Login";

export function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<FormPage />} />
        <Route path="/" element={<PagPrincipal />} />
      </Routes>
    </>
  );
}
