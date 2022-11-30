// Imports
import Navigation from './components/header/Navigation';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Home from './components/home/Home';
// Scss
import './styles/index.scss';

// App
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Banner />
      <Home />
    </div>
  );
};

export default App;
