import './App.scss';
import GlassLoaders from './examples/glass-loaders';
import IsoMenu from './examples/iso-menu'
import RayTracing from './examples/raytracing';

function App() {
  return (
    <div className="App">
      <div>
        <IsoMenu />
      </div>
      <div>
        <GlassLoaders />
      </div>
      <div>
        <RayTracing />
      </div>
    </div>
  );
}

export default App;
