import s from "../About/About.module.css";
import l from "./Contact.module.css";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import photo from "../../../assets/granos-de-cafe-1.jpg";
import Title from "../../Title/Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const Contact = () => {
  function onClick() {
    Swal.fire("Enviado!", "Muchas gracias", "success");
  }

  return (
    <div>
      <Title imageUrl={photo} titleText="Contacto" />
      <div className={s.container}>
        <div className={s.aboutus}>
          <section className={s.first_section}>
            Dejanos tus comentarios o sugerencias para mejorar la experiencia en
            nuestros locales!<br></br>
            También podés llamarnos sin cargo al 0800-999-3000 o escribirnos un
            mail a sugerencias@devffee.com.ar
          </section>
          <div className={l.container}>
            <p>Motivo de contacto</p>
            <Box>
              <TextField
                label="Motivo de Contacto"
                variant="filled"
                sx={{ width: "100%" }}
              />
            </Box>
            <p>Mensaje</p>
            <Box>
              <TextField
                label="Mensaje"
                variant="filled"
                sx={{ width: "100%" }}
              />
            </Box>
            <p>Nombre y apellido</p>
            <Box>
              <TextField
                label="Nombre y apellido"
                variant="filled"
                sx={{ width: "100%" }}
              />
            </Box>
            <p>Telefono</p>
            <Box>
              <TextField
                label="Telefono"
                variant="filled"
                sx={{ width: "100%" }}
              />
            </Box>
            <p>Email</p>
            <Box>
              <TextField
                label="Email"
                variant="filled"
                sx={{ width: "100%" }}
              />
            </Box>

            <div
              style={{
                marginTop: "2rem",
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  background: "black",
                }}
                onClick={onClick}
              >
                Enviar
              </Button>
            </div>
          </div>

          <h1>Redes</h1>
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 4">
                <a
                  className={l.link}
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/marketplace/110905088931384/?hoisted_items=459774549151389"
                >
                  <FaFacebook className={l.icons} />
                </a>
              </Box>
              <Box gridColumn="span 4">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/niniolobo/"
                >
                  <FaInstagram className={l.icons} />
                </a>
              </Box>
              <Box gridColumn="span 4">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/etherealdior/status/1499701186575884293/photo/1"
                >
                  <FaTwitterSquare className={l.icons} />
                </a>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
