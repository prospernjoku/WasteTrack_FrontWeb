import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MasterLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile , setIsMobile] = useState(false)
  const toggleCollapsed = () => {
      setCollapsed(!collapsed);
  };

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth < 992) {
        setCollapsed(true)
        setIsMobile(true)
      } else{
        setIsMobile(false)
        setCollapsed(false)
      }
    }
    // Add an event listener to handle window resize
    window.addEventListener('resize', handleWindowResize);
    // Call handleWindowResize initially to set the initial state
    handleWindowResize();
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if(isMobile && !collapsed){
    document.body.style.overflow = "hidden"
  }else{
    document.body.style.overflow ="initial"
  }

  return (
      <div className="d-flex">
        <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} isMobile={isMobile} />
        <main className={`content-wrapper ${collapsed ? isMobile ? 'sidebar-close' :  'sidebar-collapse':''}`}>
        
          <Navbar collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
         
          <div className="main-content" > 
          {isMobile && !collapsed ? <div className="disable-overlap" onClick={()=>toggleCollapsed(false)}></div> : ""}
            <Outlet/>
          </div>
        </main>
      </div>
  );
}
export default MasterLayout;
