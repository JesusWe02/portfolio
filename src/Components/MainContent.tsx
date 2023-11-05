import './MainContent.css';
import profile from '../imgs/profile.png';

export function MainContent() {
  return (
    <main className="main-container">
      <div className="main-img">
        <img src={profile} alt="profile" />
      </div>
      <div className="main-description">
        <div className="main-about">
          <h1>JesusWe</h1>
          <h2>Flexibilidad, Comunicación y Compromiso</h2>
          <p>
            Sobre mi Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Fuga atque nihil incidunt modi! Atque fugiat dolor laborum
          </p>
          <div className="main-button">
            <button>Linkedin</button>
          </div>
        </div>
      </div>
    </main>
  );
}
