import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail.pages';
import Charge from './pages/charge';
import MyTheme from './pages/myTheme';
import Setting from './pages/setting';
import Store from './pages/store';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyTheme />} />
        <Route path="/store" element={<Store />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/theme:themeid" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
