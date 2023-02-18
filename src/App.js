import './App.scss';
import Glassmorphism from './examples/glassmorphism';
import IsoMenu from './examples/iso-menu'

function App() {
  return (
    <div className="App">
      <div>
        <IsoMenu />
      </div>
      <div>
        <Glassmorphism />
      </div>
    </div>
  );
}

export default App;
