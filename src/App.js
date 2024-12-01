import './scss/style.scss';
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Cave from "./assets/cave.png";
function App() {
  return (
    <div className="App">
      <Menu />
        <img className="cave__image" src={Cave} alt="cave"/>
        <div className="timer__position">
            <Timer />
        </div>
    </div>
  );
}

export default App;
