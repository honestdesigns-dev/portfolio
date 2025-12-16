import './App.css'
import Navigation from './components/nav'
import Hero from './components/hero'
import Hero2 from './components/hero2';
import ImageProcessing from './projectslist/imageprocessing';
import UIDesigns from './projectslist/uidesigns';
import MotionDesigns from './projectslist/motiondesigns';
import ThreeDDesigns from './projectslist/3ddesigns';
import About from './about';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CursorProvider } from './context/CursorContext';
import Cursor from './components/Cursor';

function App() {
  return (
    <CursorProvider>
      <Cursor />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Hero2 />
            </>
          } />
          <Route path="/image-processing" element={<ImageProcessing />} />
          <Route path="/uidesigns" element={<UIDesigns />} />
          <Route path="/motiondesigns" element={<MotionDesigns />} />
          <Route path="/3ddesigns" element={<ThreeDDesigns />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CursorProvider>
  );
}

export default App
