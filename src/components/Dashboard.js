import React from "react";
import Navigation from "./Navigation";
import Season from "./Season";
import Roster from "./Roster";
import Weather from "./Weather";
import { Route, Routes } from "react-router-dom";



const Dashboard = () => {
  return (
    <div>
      <Navigation />

      <h1>Welcome back!</h1>

      <Routes>
        {/* <Route path="season" element= {<Season />} /> */}
        <Route path="/roster" element= {<Roster />} />
        <Route path="/weather" element= {<Weather />} />
        {/* <Route path="/drill" element= {<Session />} /> */}
      </Routes>
      
      <Weather />
    </div>
  );
};

export default Dashboard;
