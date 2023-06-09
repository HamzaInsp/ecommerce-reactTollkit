import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import HeroSection from './Components/HeroSection'
import 'tailwindcss/tailwind.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';
import Contact from './Components/pages/Contact';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* <Route index element={<Dashboard />}></Route> */}
      <Route index element={<HeroSection />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Route>
  ))
  return (
    <div className="App">
      {/* <HeroSection /> */}
      {/* <Product /> */}
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;
