import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/img/logoPokestore.png";
import styles from "./styles.module.css";
import carrinho from "../../assets/img/Carrinho-selecionado.png";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export function NavBarPadrao({ pokemonFiltro }) {
  const handleSearchChange = (event) => {
    pokemonFiltro(event.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: "1em" }}>
        <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
          <Toolbar>
            <img
              src={logo}
              alt="Logo"
              style={{ height: 85, width: 205, marginRight: "16px" }}
            />
            <Typography
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div className={styles.header}>
                <Link to="/" className={styles.Home}>
                  HOME
                </Link>
                <Link to ="/sobre" className={styles.Home}>
                  SOBRE NOS
                </Link>
                  <Link to="/login" className={styles.Home}>Login</Link>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={handleSearchChange}
                    
                  
                  />
                </Search>
                <Link to="/carrinho">
                  <img
                    src={carrinho}
                    alt="Carrinho"
                    style={{ height: 100, width: 205, justifyContent: "left" }}
                  />
                </Link>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
