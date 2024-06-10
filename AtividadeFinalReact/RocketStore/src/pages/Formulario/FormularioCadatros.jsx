import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export function FormPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cadastrado, setCadastrado] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleCadastrar = () => {
    // Validar todos os campos aqui antes de prosseguir com o cadastro
    if (
      !nome ||
      !telefone ||
      !email ||
      !cpf ||
      !senha ||
      !confirmarSenha ||
      !endereco
    ) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    // Validar o formato do email
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }
    // Validar o telefone
    if (!/^\d{10}$/.test(telefone)) {
      alert("Por favor, insira um número de telefone válido com 10 dígitos.");
      return;
    }
    // Validar o CPF
    if (!/^\d{11}$/.test(cpf)) {
      alert("Por favor, insira um CPF válido com 11 dígitos.");
      return;
    }
    // Validar a senha
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    // Se todos os campos passaram nas validações prosseguir com o cadastro
    console.log("Informações do usuário:");
    console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    console.log("Endereço:", endereco);
    // handleCadastrar() pode ser chamado aqui
    setCadastrado(true); // apenas para demonstração, substitua pela lógica real de cadastro
  };

  const mostrarOuOcultarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Formulário</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nome}
          onChange={(event) =>
            setNome(event.target.value.replace(/[^a-zA-Z\s]/g, "").trim())
          }
        />
        <TextField
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) =>
            setTelefone(event.target.value.replace(/\D/g, "").substr(0, 10))
          }
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value.trim())}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cpf}
          onChange={(event) =>
            setCpf(event.target.value.replace(/\D/g, "").substr(0, 11))
          }
        />
        <TextField
          id="senha"
          label="Senha"
          type={mostrarSenha ? "text" : "password"}
          variant="outlined"
          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          InputProps={{
            endAdornment: (
              <>
                {mostrarSenha ? (
                  <VscEyeClosed
                    onClick={mostrarOuOcultarSenha}
                    className="iconeOlho"
                  />
                ) : (
                  <VscEye
                    onClick={mostrarOuOcultarSenha}
                    className="iconeOlho"
                  />
                )}
              </>
            ),
          }}
        />
        <TextField
          id="confirmarSenha"
          label="Confirmar Senha"
          type={mostrarSenha ? "text" : "password"}
          variant="outlined"
          margin="dense"
          fullWidth
          value={confirmarSenha}
          onChange={(event) => setConfirmarSenha(event.target.value)}
        />
        <TextField
          id="endereco"
          label="Endereço"
          variant="outlined"
          margin="dense"
          fullWidth
          value={endereco}
          onChange={(event) => setEndereco(event.target.value)}
        />
        <Button
          type="button"
          className="btn-form"
          variant="contained"
          color="primary"
          onClick={handleCadastrar}
        >
          Cadastrar
        </Button>
      </form>
      {cadastrado && (
        <Typography variant="h6" color="secondary" className="mensagem-sucesso">
          Usuário cadastrado com sucesso!
        </Typography>
      )}
    </Container>
  );
}

export default FormPage;
