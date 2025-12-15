import './App.css'
import Navigation from './components/nav'
import Hero from './components/hero'
import Hero2 from './components/hero2';
import ImageProcessing from './projectslist/imageprocessing';
import UIDesigns from './projectslist/uidesigns';
import MotionDesigns from './projectslist/motiondesigns';
import ThreeDDesigns from './projectslist/3ddesigns';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App
