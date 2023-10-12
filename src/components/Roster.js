import React from "react";
import RosterTable from "./RosterTable";
import PlayerContextProvider from "../context/PlayerContext";

const Roster = () => {
  return (
    <>
      <PlayerContextProvider>
        <RosterTable />
      </PlayerContextProvider>
    </>
  );
};

export default Roster;
