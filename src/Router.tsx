import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/list.pages';
import Detail from './pages/detail.pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
