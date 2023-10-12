import React from "react";
import Navigation from "./Navigation";
import Season from "./Season";
import Roster from "./Roster";
import Weather from "./Weather";
import { Route, Routes } from "react-router-dom";
import ReactCalendar from "./ReactCalendar";



const Layout = () => {
  return (
    <div>
      <Navigation />


      <Routes>
        {/* <Route path="season" element= {<Season />} /> */}
        <Route path="/roster" element= {<Roster />} />
        <Route path="/weather" element= {<Weather />} />
        {/* <Route path="/drill" element= {<Session />} /> */}
      </Routes>
      <ReactCalendar />
      
      <Weather />
    </div>
  );
};

export default Layout;
