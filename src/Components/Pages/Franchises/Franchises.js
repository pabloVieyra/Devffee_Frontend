import React from "react";
import Title from "../../Title/Title";
import photo from "../../../assets/granos-de-cafe-1.jpg";
import s from "./Franchises.module.css";
import foto1 from "../../../assets/foto1.jpg";
import foto2 from "../../../assets/foto2.jpg";
import foto3 from "../../../assets/foto3.jpg";
import foto4 from "../../../assets/foto4.jpg";

const Franchises = () => {
  return (
    <div>
      <Title imageUrl={photo} titleText="Franquicias" />
      <div className={s.container}>
        <div>
          <img src={foto1} alt="foto" className={s.foto}></img>
        </div>
        <div className={s.Ctexto}>
          <p className={s.texto}>
            Nuestras instalaciones son totalmente climatizadas y en estas vas a
            poder tener una experiencia única para poder tomar un delicioso
            café.
          </p>
        </div>

        <div className={s.Ctexto}>
          <p className={s.texto}>
            Tenemos una amplia variedad de café y de comida, la cual va a estar
            disponible para ver en nuestras cartas.
          </p>
        </div>
        <div>
          <img src={foto2} alt="foto" className={s.foto}></img>
        </div>

        <div>
          <img src={foto3} alt="foto" className={s.foto}></img>
        </div>
        <div className={s.Ctexto}>
          <p className={s.texto}>
            En las instalaciones, tenemos un espacio especial para coworking, en
            el cual vas a poder tener tu enchufe para conectar tu dispositivo
            electrónico y a disponibilidad de diferentes cafes.
          </p>
        </div>

        <div className={s.Ctexto}>
          <p className={s.texto}>
            Obviamente, vas a tener la opción de llevarte tu devffee a cualquier
            parte que vayas y tambien te lo podemos enviar a domicilios cercanos
            a nuestros locales.
          </p>
        </div>
        <div>
          <img src={foto4} alt="foto" className={s.foto}></img>
        </div>
      </div>
    </div>
  );
};

export default Franchises;
