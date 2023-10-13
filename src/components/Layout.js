import React from "react";
import Navigation from "./Navigation";
import Season from "./Season";
import Roster from "./Roster";
import Weather from "./Weather";
import { Route, Routes } from "react-router-dom";
import Dash from "./Dash";
import ReactCalendar from "./ReactCalendar";
import { UserContext } from "./Dash";
import Calendar from "react-calendar";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <div id="mainRow">
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/season" element={<Season />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/weather" element={<Weather />} />
          {/* <Route path="/drill" element= {<Session />} /> */}
        </Routes>

        <Weather />
      </div>
    </div>
  );
};

export default Layout;
