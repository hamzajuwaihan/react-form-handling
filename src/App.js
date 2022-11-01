
import './App.css';
import Nav from './Nav';
import Register from './Register';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Slider />
          <div className="col-8">
            <Nav />
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
