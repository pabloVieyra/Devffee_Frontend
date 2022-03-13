import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import logo from "../../assets/devffee_logo.png";

function Copyright() {
  return (
    <div>
      <Typography
        align="center"
        variant="body1"
        color="text.secondary"
        sx={{ alignSelf: "center" }}
      >
        {"Copyright © "}
        Devffee {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: "#DFD2C6",
        // scrollSnapAlign: "start",
      }}
    >
      <Container maxWidth="sm" className={s.container}>
        <div className={s.footer_description}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/aboutus">Nosotros</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
          <div className={s.footer_logo_container}>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <Link to="/stores">Sucursales</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/franchises">Franquicias</Link>
            </li>
          </ul>
        </div>
        <Copyright />
      </Container>
    </Box>
  );
}
