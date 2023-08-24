import { useState } from 'react';
import "./App.css";
import "./assets/css/common.css";
import Header from "./layout/header/header";
import Sidebar from "./layout/sidebar/sidebar";
import Dashboard from './screens/dashboard';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Dashboard />
    </>
  );
}

export default App;
