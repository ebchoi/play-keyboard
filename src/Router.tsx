import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Charge from './pages/charge/charge';
import MyTheme from './pages/mytheme/myTheme';
import Setting from './pages/settingPage/setting';
import Store from './pages/store/store';

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
