import { useState } from "react";
// import sampleImg from "./../../assets/sample.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CardActionArea } from "@mui/material";
import s from "./ProductCard.module.css";

const ProductCard = ({ name, imageUrl, description, ingredients, price }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        sx={{ width: 200, backgroundColor: "#EFEFEF" }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: "140px" }}
            image={imageUrl}
            alt="coffee"
          />
          <CardContent>
            <h2
              style={{ color: "#46382E", fontSize: "1.6rem", height: "50px" }}
            >
              {name}
            </h2>

            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{
                color: "#ECE4DD",
                borderRadius: "20px",
                backgroundColor: "#8D8D8D",
                marginInline: "2rem",
                marginTop: "1.2rem",
              }}
            >
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={s.modal}>
          <div className={s.modal_img_container}>
            <img className={s.modal_img} src={imageUrl} alt="" />
          </div>
          <div className={s.modal_content}>
            <h3>{name}</h3>
            <p className={s.modal_description}>{description}</p>
            <h4 style={{ marginBottom: ".7rem" }}>Ingredients</h4>
            {ingredients.map((ingredient) => (
              <Chip
                key={ingredient}
                label={ingredient}
                sx={{ margin: "0.2rem" }}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
