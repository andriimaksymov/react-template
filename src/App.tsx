import React, { MouseEvent, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Button from './components/ui/Button';
import Menu from './components/ui/Menu';
import MenuItem from './components/ui/MenuItem';

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
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);

  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <div>
      <Stack justify="center" style={{
        padding: '10rem'
      }}
      >
        <Button onClick={handleMenuOpen}>
          Elevation 1
        </Button>
        <Menu
          anchorEl={anchorEl}
          isOpen={isOpen}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          anchorPosition={{
            top: 10,
            left: 10
          }}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            Account
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            Logout
          </MenuItem>
        </Menu>
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
