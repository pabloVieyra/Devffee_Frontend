import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "./../../assets/devffee_logo.png";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Nosotros",
    path: "/aboutus",
  },
  {
    name: "Productos",
    path: "/products",
  },
  {
    name: "Sucursales",
    path: "/stores",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
  {
    name: "Franquicias",
    path: "/franchises",
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        background: "#DFD2C6",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} height="90px" alt="logo"></img>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                  <Link className={s.link} to={link.path}>
                    {link.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Link
                className={s.linkButton}
                key={link.name}
                to={link.path}
                onClick={handleCloseNavMenu}
                style={{ my: 2, color: "#8E7560", display: "block" }}
              >  
                {link.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
