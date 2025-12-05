import './App.css'
import Navigation from './components/nav'
import Hero from './components/hero'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from './components/works';
import Designworks from './components/designworks';
import Awalplastics from './components/awalplastics';
import Goodfellows from './components/goodfellows';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/works" element={<Works />} />
        <Route path="/designworks" element={<Designworks />} />
        <Route path="/awalplastics" element={<Awalplastics />} />
        <Route path="/goodfellows" element={<Goodfellows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
