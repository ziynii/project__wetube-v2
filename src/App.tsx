import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SideNav from './components/SideNav';
import { OpenSideNavProvider } from './context/OpenSideNavContext';
import { DarkModeProvider } from './context/DarkModeContext';
import ThemeButton from './components/ThemeButton';
import ScrollToTop from './util/scrollToTop';

const client = new QueryClient();

function App() {
  return (
    <>
      <ScrollToTop />
      <DarkModeProvider>
        <OpenSideNavProvider>
          <Header />
          <SideNav />

          <QueryClientProvider client={client}>
            <Outlet />
          </QueryClientProvider>
        </OpenSideNavProvider>

        <ThemeButton />
      </DarkModeProvider>
    </>
  );
}

export default App;
