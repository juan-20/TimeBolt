import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import History from '../pages/History';
import DefaultLayout from '../layouts/DefaultLayouts/DefaultLayout';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout></DefaultLayout>}>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
