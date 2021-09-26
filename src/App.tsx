import React from 'react';
import './App.css';
import WeeklyPost from './components/WeeklyPost';
import FilterNav from './components/FilterNav';
import { useState } from 'react';
import { Hidden, Drawer, SwipeableDrawer } from '@material-ui/core';

const App = () => {
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleFilterToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="App">
      <h1>Weekly Reflections</h1>
      <button className="filterBtn" onClick={handleFilterToggle}>Filters</button>

      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onOpen={() => setMobileOpen(true)}
          onClose={handleFilterToggle}
          disableBackdropTransition={!iOS} disableDiscovery={iOS}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="navSidebar"
        >
          <FilterNav />
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          anchor="right"
          open
          className="navSidebar"
        >
          <FilterNav />
        </Drawer>
      </Hidden>

      <WeeklyPost />
      <button>Show Older Posts</button>
    </div>
  );
}

export default App;
