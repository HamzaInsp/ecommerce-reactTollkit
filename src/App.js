import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import HeroSection from './Components/HeroSection'
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <Product />
    </div>
  );
}

export default App;
