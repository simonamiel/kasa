import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Lodgings from './pages/Lodgings/Lodgings';
import About from './pages/About/About';
import Notfound from './pages/Notfound/Notfound';

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodgings" element={<Lodgings />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default Router;