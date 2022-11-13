import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SideNav from './components/SideNav';

const client = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
      <SideNav />
    </>
  );
}

export default App;
