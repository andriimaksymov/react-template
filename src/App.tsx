import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Button from './components/ui/Button';
import Switch from './components/ui/Switch';
import Badge from './components/ui/Badge';

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
        <Badge variant="dot" badgeContent="123">
          <Button component={Link} to="/home" variant="contained">123</Button>
        </Badge>
        <Switch labelPlacement="end" label="123" />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
