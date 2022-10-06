import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
