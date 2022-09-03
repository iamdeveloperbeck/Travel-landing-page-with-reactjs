import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Activities from './components/Activities/Activities';
import AdviceandTips from './components/AdviceandTips/AdviceandTips';
import Destanations from './components/Destinations/Destanations';
import Header from './components/Header/Header';
import Restaurants from './components/Restaurants/Restaurants';
import Footer from './container/Footer/Footer';
import Navbar from './container/Navbar/Navbar';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Header />
      <Destanations />
      <Restaurants />
      <AdviceandTips />
      <Activities />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
