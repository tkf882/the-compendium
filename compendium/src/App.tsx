import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage.tsx'
import { PortfolioPage } from './pages/portfolio/PortfolioPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';

// import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="about" element={<AboutPage />} />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App