import "./AboutMe.css";
import imgProfile from "../../imgs/profile.png";

export function AboutMe() {
  return (
    <main className="main-container">
      <div className="container-img">
        <img src={imgProfile} alt="profileImg" />
      </div>
      <div className="container-info">
        <div className="about-info">
          <h1>JesusWe</h1>
          <h2>Flexibilidad, Comunicación y Compromiso</h2>
          <p className="p-description">
            Sobre mi Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Fuga atque nihil incidunt modi
          </p>
          <div className="button-info">
            <button>LinkedIn</button>
          </div>
        </div>
      </div>
    </main>
  );
}
