import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Progress from './components/ui/Progress';

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
      <Progress striped progress={60} />
      <Stack align="center"  spacing={2} wrap>
        <Progress striped progress={10} />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
