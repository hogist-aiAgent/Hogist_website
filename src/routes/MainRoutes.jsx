import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from '../components/common/SplashScreen';
import Header from '../layout/Header';
import WhatsAppButton from '../components/common/watsapPage';
import EnquiryForm from '../layout/EnqueryForm';

const MainPage = lazy(() => import('../pages/MainPage'));

export default function MainRoutes() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen loading={false} />
      ) : (
        <Suspense fallback={<></>}>
          <Header/><WhatsAppButton/>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}
