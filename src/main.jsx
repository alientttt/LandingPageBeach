import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import HeroBanner from './components/HeroBanner/HeroBanner.jsx';
import BoxText from './components/BoxText/BoxText.jsx';
import BoxText2 from './components/BoxText2/BoxText2.jsx';
import MediumBanner from './components/MediumBanner/MediumBanner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='header relative w-screen min-h-[800px]'>
      <Navbar/>
      <HeroBanner/>
    </div>
    <div className='main-content p-25 relative min-h-[800px]'>
      <BoxText/>
      <BoxText2/>
      <MediumBanner/>
      <App />
    </div>
  </StrictMode>,
)
