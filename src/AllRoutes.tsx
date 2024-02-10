import { Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import DemoPage from './screens/DemoPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutPage from './screens/AboutPage';

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen mt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AllRoutes;
