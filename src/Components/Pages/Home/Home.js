import s from "./Home.module.css";
import Button from "../../Button/Button";
import LeafletMap from "../../LeafletMap/LeafletMap";
import hero from "./../../../assets/hero.png";
import coffees from "./../../../assets/coffees.png";
import story from "./../../../assets/story.png";
import franchise from "./../../../assets/franchise.png";

const Home = () => {
  return (
    <div>
      <main className={s.hero}>
        <img className={s.hero_image} src={hero} alt="coffee beans" />
        <h2 className={s.hero_title}>Desde 2022</h2>
        <h2 className={s.hero_title}>EL MEJOR CAFE DEL MUNDO</h2>
      </main>

      <div className={s.container}>
        <section className={s.coffees}>
          <h2 className={s.coffees_title}>Conoce nuestra variedad de cafés</h2>
          <div className={s.coffees_image_container}>
            <img
              className={s.coffees_image}
              src={coffees}
              alt="cup of coffee"
            />
            <Button
              text="Nuestros cafés"
              href="/products"
              styles={{ position: "absolute" }}
            />
          </div>
        </section>
        <section className={s.story}>
          <img className={s.story_image} src={story} alt="cup of coffee" />
          <div>
            <Button text={"Conoce nuestra historia"} href={"/aboutus"} />
          </div>
        </section>
        <section className={s.franchise}>
          <div className={s.franchise_button_container}>
            <Button
              text={"Conoce nuestras instalaciones"}
              href={"/franchises"}
            />
          </div>
          <img
            className={s.franchise_image}
            src={franchise}
            alt="cup of coffee"
          />
        </section>
        <section className={s.stores}>
          <h2 className={s.stores_title}>Mapa de nuestras sucursales</h2>
          <LeafletMap
            center={[-34.6077, -58.4714]}
            markers={[
              [-34.6071, -58.4401],
              [-34.62867, -58.4905],
              [-34.59755, -58.38435],
              [-38.02472, -57.53958],
              [-34.70184, -58.36446],
              [-34.7497, -58.4027],
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
