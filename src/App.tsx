import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';

import {ReactComponent as BookmarkIcon} from './assets/icons/bookmark.svg';
import Chip from './components/ui/Chip';

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
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Chip
          onClick={() => null}
          onDelete={() => null}
        >
          12345
        </Chip>
        <Chip
          variant="outlined"
          deleteIcon={BookmarkIcon}
          onClick={() => null}
          onDelete={() => null}
        >
          12345
        </Chip>
        <Chip
          round
          onClick={() => null}
          onDelete={() => null}
        >
          12345
        </Chip>
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
