
import './App.css';
import NavbarComponent from './Components/NavBar';
import BannerComponent from './Components/Banner';
import Skills from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  (
  <div className="App">
    <NavbarComponent />
    <BannerComponent />
    <Skills />
  </div>
);

export default App;
