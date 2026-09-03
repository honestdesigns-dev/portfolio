import { useState } from "react";
import './App.css'
import Navigation from './components/nav'
import Hero from './components/hero'
import UIDesigns from './projectslist/uidesigns';
import MotionDesigns from './projectslist/motiondesigns';
import ThreeDDesigns from './projectslist/3ddesigns';
import ViewResume from './viewresume'; // Retro Resume Reader App Route
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CursorProvider } from './context/CursorContext';
import Cursor from './components/Cursor';
import ContactForm from './components/mail';
import ThreeDBtn from './components/3dbtn';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CursorProvider>
      <Cursor />
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/uidesigns" element={<UIDesigns />} />
            <Route path="/motiondesigns" element={<MotionDesigns />} />
            <Route path="/3ddesigns" element={<ThreeDDesigns />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/resume" element={<ViewResume />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </BrowserRouter>
      )}
    </CursorProvider>
  );
}

export default App
