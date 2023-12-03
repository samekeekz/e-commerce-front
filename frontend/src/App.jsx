import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './layouts/RootLayout';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="women" element={<h1>Women</h1>} />
          <Route path="men" element={<h1>Men</h1>} />
          <Route path="kids" element={<h1>Kids</h1>} />
          <Route path="category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
