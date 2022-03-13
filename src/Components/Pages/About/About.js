import Button from "../../Button/Button";
import s from "./About.module.css";
import logo from "./../../../assets/devffee_logo.png";
import Title from '../../Title/Title';
import photo from '../../../assets/granos-de-cafe-1.jpg'

const About = () => {
  return (<div>
    <Title imageUrl={photo} titleText='Nosotros'/>
    <div className={s.container}>
      <div className={s.aboutus}>
        <section className={s.first_section}>
          <p>
            Somos una startup con sede en Mar del Plata cuyo inicio se remonta a
            fines del 2021. Devffee nació a partir de una casual charla entre
            sus fundadores e impulsores, Pablo Vieyra y Gabriel Shimabuku.
          </p>
          <div className={s.logo_container}>
            <img src={logo} alt="devffee logo" className={s.logo} />
          </div>
        </section>
        <p>
          En una reunión sobre “cafelogía”, se habló sobre cómo las personas
          ponen al café como motor de su producitividad, siendo esto lo que
          impulsó el desarrollo de un espacio que promueva el buen rendimiento
          con la infaltable compañía de la cafeína.
        </p>
        <p style={{ width: "80%" }}>
          Actualmente, Devfee cuenta con 7 sucursales distribuidas por Buenos
          Aires. Próximamente se abrirán nuevas sucursales en todo el país.
        </p>

        <div className={s.stores_button_container}>
          <Button href="/stores" text="Ver sucursales" />
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default About;
