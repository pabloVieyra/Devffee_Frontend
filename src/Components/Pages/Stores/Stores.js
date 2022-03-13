import React from "react";
import Title from "../../Title/Title";
import photo from "../../../assets/granos-de-cafe-1.jpg";
import ImagenSlider from "../../ImagenSlider/ImagenSlider";
import { SliderData } from "../../ImagenSlider/SliderData";
import s from "../About/About.module.css";
import { FaStore } from "react-icons/fa";

const Stores = () => {
  return (
    <div>
      <Title imageUrl={photo} titleText="Sucursales" />
      <div className={s.container}>
        <div style={{ marginBlock: "4rem" }}>
          <ImagenSlider slides={SliderData}></ImagenSlider>
        </div>
        <div className={s.aboutus}>
          <section className={s.first_section}>
            <h1>Lugares:</h1>
          </section>
          <ul>
            <li>CABA </li>
            <ul>
              <FaStore /> Obelisco - Calle: Le Noris 4394
            </ul>
            <ul>
              <FaStore /> Floresta - Calle: Hector Ludeña 1023
            </ul>
            <ul>
              <FaStore /> Caballito - Calle: Los Nogales 5438
            </ul>
            <li>Buenos Aires</li>
            <ul>
              <FaStore /> Mar Del Plata - Calle: Le Noris 4394
            </ul>
            <ul>
              <FaStore /> Lomas de Zamora - Calle: Hector Ludeña 1023
            </ul>
            <ul>
              <FaStore /> Lanús - Calle: Los Nogales 5438
            </ul>

            <li>Interior del país</li>
            <ul>
              <FaStore /> Santa Fe capital - Calle : Provincini 4523
            </ul>
            <li>Próximamente</li>
            <ul>
              <FaStore /> Sucursal Plaza de Mayo
            </ul>
            <ul>
              <FaStore /> Sucursal Bahía Blanca
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stores;
