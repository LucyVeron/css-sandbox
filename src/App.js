import './App.scss';
import GlassLoaders from './examples/glassmorphism';
import IsoMenu from './examples/iso-menu'

function App() {
  return (
    <div className="App">
      <div>
        <IsoMenu />
      </div>
      <div>
        <GlassLoaders />
      </div>
    </div>
  );
}

export default App;
