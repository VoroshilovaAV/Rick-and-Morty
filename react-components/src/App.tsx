import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
