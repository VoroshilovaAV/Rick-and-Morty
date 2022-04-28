import { Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Forms from './pages/Forms/Forms';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="forms" element={<Forms />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
