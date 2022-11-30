// Imports
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Header from './components/Header';
import Home from './components/Home';
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
