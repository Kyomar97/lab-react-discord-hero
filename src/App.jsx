// src/App.jsx
import "./App.css";
import discordBackground from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

export default function App() {
  return (
    <div className="App">
      <img
        className="background-image"
        src={discordBackground}
        alt="Discord Background"
      />

      <header className="header">
        <img className="logo" src={discordLogo} alt="Logo" />
        <img className="menu-icon" src={menuIcon} alt="Menu Icon" />
      </header>

      <main className="main">
        <h1 className="h1">IMAGINE A PLACE...</h1>
        <p className="text-intro">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="buttons">
          <button className="download-mac">Download for Mac</button>
          <button className="browser">Open Discord in your browser</button>
        </div>
      </main>
    </div>
  );
}
