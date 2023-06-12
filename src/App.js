import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is an E-Commerce Front-end. Still in progress...
        </p>
       
       
        <div className="windowFrame"> This is the window/Curtin.
            <div className="windowDoorL"></div>
            <div className="windowDoorR"></div>
        </div>

        <div className="cameraLenseFrame"> Camera Open Lense.
            <div className="coverTL"></div>
            <div className="coverTR"></div>
            <div className="coverBL"></div>
            <div className="coverBR"></div>
        </div>

        
        <div class="wrapper">
            <header className="things">
                <image class="background">Background</image>
                <image class="foreground">Foreground</image>
                <h class="title">Welcome!</h>
            </header>
        </div>

      </header>
    </div>
  );
}

export default App;
