import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashScreen from '../components/common/SplashScreen';
import Header from '../layout/Header';

const MainPage = lazy(() => import('../pages/MainPage'));

export default function MainRoutes() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Suspense fallback={<SplashScreen loading={true} />}>
          <Header/>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}
