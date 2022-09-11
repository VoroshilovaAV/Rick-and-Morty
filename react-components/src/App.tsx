import { Routes, Route } from 'react-router-dom';

import AppLayout from './pages/AppLayout';
import Home from './pages/Home/Home';
import AboutApp from './pages/AboutApp/AboutApp';
import NotFound from './pages/NotFound/NotFound';
import Forms from './pages/Forms/Forms';
import CardModal from './pages/Home/components/cardModal/CardModal';

const App = () => {
  return (
    <Routes>
      <Route path="/home/:id" element={<CardModal />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="forms" element={<Forms />} />
        <Route path="about" element={<AboutApp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
