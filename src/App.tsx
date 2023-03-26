import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Stack align="center"  spacing={4}>
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
