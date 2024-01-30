import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import CategoryPage from './pages/CategoryPage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="women" element={<h1>Women</h1>} />
            <Route path="men" element={<h1>Men</h1>} />
            <Route path="kids" element={<h1>Kids</h1>} />
            <Route path="category" element={<CategoryPage />} />
            {/* <Route path="category/{categoryName}" element={<CategoryPage />} /> */}
            {/* <Route path="category/{categoryName}/subcagetoryName" element={<CategoryPage />} /> */}
            {/* <Route path="{productName}" element={<ProductPage />} /> */}
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
