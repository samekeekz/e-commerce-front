import { Navigate, Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import { RootLayout } from './layouts/RootLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Navigate to={`/women`} />} />
          <Route path="/women" element={<h1>Women</h1>} />
          <Route path="/men" element={<h1>Men</h1>} />
          <Route path="/kids" element={<h1>Kids</h1>} />
          <Route path="/:page/category/:categoryName" element={<CategoryPage />} />
          <Route
            path="/:page/category/:categoryName/subcategory/:subcategoryName"
            element={<h1>subcagetory Page</h1>}
          />
          <Route
            path="/:page/category/:categoryName/subcategory/:subcategoryName/:productName"
            element={<h1>Product Page</h1>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
