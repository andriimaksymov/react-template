import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Button from './components/ui/Button';

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
        <Button component={Link} to="/home" variant="contained">123</Button>
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
