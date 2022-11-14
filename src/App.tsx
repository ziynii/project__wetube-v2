import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SideNav from './components/SideNav';
import { OpenSideNavProvider } from './context/OpenSideNavContext';

const client = new QueryClient();

function App() {
  return (
    <>
      <OpenSideNavProvider>
        <Header />
        <SideNav />
      </OpenSideNavProvider>

      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
