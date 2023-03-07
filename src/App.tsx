import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Switch from './components/ui/Switch';
import Checkbox from './components/ui/Checkbox';

import {ReactComponent as BookmarkIcon} from './assets/icons/bookmark.svg';
import {ReactComponent as BookmarkFilledIcon} from './assets/icons/bookmark-filled.svg';

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
        <Checkbox icon={BookmarkIcon} checkedIcon={BookmarkFilledIcon} label="123" labelPlacement="start" />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
