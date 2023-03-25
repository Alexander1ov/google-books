import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import Books from './Books/Books';
import DetailsBook from './DetailsBook/DetailsBook';

import { ROUTES } from '../constants/routes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={ROUTES.BOOKS} element={<Books />} />
        <Route path={ROUTES.PRODUCT} element={<DetailsBook />} />
      </Routes>
    </>
  );
}

export default App;
