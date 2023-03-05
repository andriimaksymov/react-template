import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Switch from './components/ui/Switch';

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
      <Stack align="center" spacing={2} wrap>
        <Switch size="large" />
        <Switch size="medium" />
        <Switch size="small" />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
