import React from "react";
import SeasonTable from "./SeasonTable";
import GameContextProvider from "../context/GameContext";

const Season = () => {
  return (
    <>
      <GameContextProvider>
        <SeasonTable />
      </GameContextProvider>
    </>
  );
};

export default Season;
