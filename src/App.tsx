import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Button from './components/ui/Button';
import Tooltip from './components/ui/Tooltip';

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
      <Stack justify="center" style={{
        padding: '10rem'
      }}
      >
        <Tooltip arrow content="Tooltip" placement="right">
          <Button>
            Elevation 1
          </Button>
        </Tooltip>
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
