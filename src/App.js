import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home/home.js';
import About from './pages/About/about.js';
import Gallery from './pages/Gallery/gallery.js';

import Layout from './layout/Layout.js';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Layout>
  );
}

export default App;
