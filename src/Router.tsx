import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/myTheme.pages';
import Detail from './pages/themeDetail.pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/theme/:themeId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
