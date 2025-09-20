import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from '../components/common/SplashScreen';
import Header from '../layout/Header';
import WhatsAppButton from '../components/common/watsapPage';

const MainPage = lazy(() => import('../pages/MainPage'));

function MainRoutes() {
  const [showSplash, setShowSplash] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Reduced from 3s to 2s

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen loading={false} />
      ) : (
        <Suspense fallback={
        <SplashScreen loading={true} />

        }>
          <Header/><WhatsAppButton/>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}
export default React.memo(MainRoutes);