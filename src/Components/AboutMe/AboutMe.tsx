import "./AboutMe.css";
import imgProfileSmall from "../../imgs/profile300px.png";
import imgProfileMedium from "../../imgs/profile400px.png";
import imgProfileLarge from "../../imgs/profile500px.png";

export function AboutMe() {
  return (
    <main className="main-container" id="about">
      <div className="container-img">
        <picture>
          <source media="(min-width: 1500px)" srcSet={imgProfileLarge} />
          <source media="(min-width: 1025px)" srcSet={imgProfileMedium} />
          <img src={imgProfileSmall} alt="profileImg" />
        </picture>
      </div>
      <div className="container-info">
        <div className="about-info">
          <h1>JesusWe</h1>
          <h2>Flexibility, Communication & Commitment</h2>
          <p className="p-description">"Make the world recall your name"</p>
          <div className="button-info">
            <button>LinkedIn</button>
          </div>
        </div>
      </div>
    </main>
  );
}
