import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Button from './components/ui/Button';

import { ReactComponent as PlusIcon } from './assets/icons/plus.svg';
import IconButton from './components/ui/IconButton';
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
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 10
      }}>
        <Button variant="contained" color="primary" component="span">Button 1</Button>
        <Button component={Link} to="/about">Button 2</Button>
        <Button component="a" target="_blank" href="https://google.com">Button 3</Button>
        <Button color="primary" variant="contained" size="small" endIcon={PlusIcon}>Small Button</Button>
        <Button color="primary" variant="contained" size="medium" endIcon={PlusIcon}>Medium Button</Button>
        <Button color="primary" variant="contained" size="large" endIcon={PlusIcon}>Large Button</Button>
        <Button>Button 10</Button>
        <Stack spacing={4} align="center">
          <IconButton icon={PlusIcon} />
          <IconButton size="small" icon={PlusIcon} />
          <IconButton size="large" icon={PlusIcon} />
          <IconButton round size="large" icon={PlusIcon} />
        </Stack>
      </div>
      <nav>
        <ul>
          <li>
            <Button component={Link} to="/about">
              Home
            </Button>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
