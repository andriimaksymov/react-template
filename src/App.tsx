import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Combobox from './components/ui/Combobox';
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
      <Stack align="center"  spacing={4}>
        <Button component={Link} to="/">
          123
        </Button>
        <Combobox
          items={[
            { key: 1, value: '10' },
            { key: 2, value: '20' },
            { key: 3, value: '30' },
          ]}
          onChange={(e) => console.log(e)}
        />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
