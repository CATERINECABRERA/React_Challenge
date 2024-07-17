import './App.css';
import Nav from './Nav/Nav';
import { VideoProvider } from './VideosContext/VideosContext';

function App() {
  return (
    <div className="App">
      <VideoProvider>
        <div className="container">
          <Nav />
        </div>
        <footer className="allura-footer">
          <img src="/alluraflix_logo.png" width="150" height="50" alt='logo' />
        </footer>
      </VideoProvider>
    </div>
  );
}

export default App;
