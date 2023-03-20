import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Button from './components/ui/Button';
import Switch from './components/ui/Switch';
import Badge, { BadgeOrigin } from './components/ui/Badge';
import Radio from './components/ui/Radio';
import Checkbox from './components/ui/Checkbox';

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
  const [vertical, setVertical] = useState<BadgeOrigin['vertical']>('top');

  return (
    <div>
      <Stack align="center" spacing={2} wrap>
        <Badge variant="dot" badgeContent="123">
          <Button component={Link} to="/home" variant="contained">123</Button>
        </Badge>
        <Switch labelPlacement="end" label="123" />
        <Checkbox label={123} className="234" />
        <Radio
          label="Top"
          name="vertical-1"
          value="top"
          checked={vertical === 'top'}
          onChange={(e) => setVertical(e.target.value as typeof vertical)}
        />
        <Radio
          label="Bottom"
          name="vertical-1"
          value="bottom"
          checked={vertical === 'bottom'}
          onChange={(e) => setVertical(e.target.value as typeof vertical)}
        />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
