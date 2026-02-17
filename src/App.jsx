import './App.css'
import { Routes, Route } from 'react-router-dom';
import MainSection from './Components/MainSection/MainSection.jsx'
import Works from './Components/Works/Works.jsx'
import Contact from './Components/Contact/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
