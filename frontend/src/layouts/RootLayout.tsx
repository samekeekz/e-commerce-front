import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../index.css';

export const RootLayout = () => {
  return (
    <div className="min-h-full max-w-[1440px] px-10">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
