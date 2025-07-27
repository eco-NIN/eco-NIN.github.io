/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-26 23:51:32
 * @FilePath: /eco-NIN.github.io/src/App.jsx
 * @Descripttion: 
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import './i18n';
import './App.css';

// Page imports
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Life from './pages/Life';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Homepage from './pages/Homepage';

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <div className="relative">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/life" element={<Life />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;
