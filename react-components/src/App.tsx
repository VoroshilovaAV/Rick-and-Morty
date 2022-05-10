import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import AppLayout from './pages/AppLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Forms from './pages/Forms/Forms';
import { AppContext, GlobalState, reducer } from './reducer/reducer';
import CardModal from './pages/Home/components/cardModal/CardModal';

const App = () => {
  const [state, dispatch] = useReducer(reducer, GlobalState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/home/:id" element={<CardModal />} />
          <Route path="forms" element={<Forms />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
