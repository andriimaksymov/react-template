import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import './global.sass';

import Home from './pages/Home';
import Stack from './components/ui/Stack';
import Button from './components/ui/Button';
import Tooltip from './components/ui/Tooltip';
import Tabs from './components/ui/Tabs';

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
  const [activeTab, setActiveTab] = useState(1);
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
        <Tabs
          tabs={[
            { element: <>1</>, index: 1, label: '1' },
            { element: <>2</>, index: 2, label: '2' }
          ]}
          selectedTab={activeTab} onClick={setActiveTab}
        />
      </Stack>
      <Outlet />
    </div>
  );
}

export default App;
