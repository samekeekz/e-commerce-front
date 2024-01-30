import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastVisitedPage, setLastVisitedPage] = useState(location.pathname);

  useEffect(() => {
    setLastVisitedPage(location.pathname);
  }, [location]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      navigate(lastVisitedPage);
    }
  }, [lastVisitedPage, navigate]);
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
