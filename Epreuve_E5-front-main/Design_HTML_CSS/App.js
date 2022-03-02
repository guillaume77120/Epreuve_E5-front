import caddie from './img/caddie.PNG'
import m2l from './img/m2l.PNG'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navb">
        <div class="m2l"></div>
        <img src={caddie} alt="" className="caddie"></img>
        <a className="Signup">Inscription</a>
        <a className="Login">Connexion</a>
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">

                <div class="stylemenu">
                <a>Menu</a>
                </div>
              <a href="#Presentation"><li>Nos accéssoires</li></a>
              <a href="#Projet"><li>Réserver une séance</li></a>
              <a href="#PresentationBts"><li>Mon profile</li></a>


            </ul>
    </div>
      </nav>
     
      <div class="Logo"></div>
      <p className="font1">Maison des</p>
       <p className="font2">ligues</p>
       
      <footer className="foot">
        <a className="About">A propos</a><br></br>
        <a className="Contact">Nous contacter</a>
      </footer>
    </div>
  );
}

export default App;
