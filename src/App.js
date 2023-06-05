import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import HeroSection from './Components/HeroSection'
import 'tailwindcss/tailwind.css';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <Product />
    </div>
  );
}

export default App;
