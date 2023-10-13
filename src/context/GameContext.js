import React, { createContext, useState } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({children}) => {

    const [games, setGames] = useState([
        { gameID: 1, opponent: "Tophat", home: 5, away: 0, result: '5-0', date: "10/06/2023" },
        { gameID: 2, opponent: "Concorde", home: 3, away: 1, result: '3-1', date: "10/06/2023" },
        { gameID: 3, opponent: "AFU", home: 6, away: 2, result: '6-2', date: "10/06/2023" },
        { gameID: 4, opponent: "LSA", home: 4, away: 0, result: '4-0', date: "10/06/2023" },
      ]);

      const addGame = (date, opponent, home, away, result, notes) => {
        const newGameID = generateNewGameID(games);
        setGames([ ...games, { gameID: newGameID, date, opponent, home, away, result, notes }]);
      };
      

      const generateNewGameID = (games) => {
        // Find the highest gameID in the current list of games
        const highestGameID = games.reduce((maxID, game) => {
          return game.gameID > maxID ? game.gameID : maxID;
        }, 0);
      
        // Increment the highest gameID by 1 to generate a new unique gameID
        return highestGameID + 1;
      };
      

      const deleteGame = (gameID) => {
        console.log('Deleted Game')
        console.log(games)
        setGames(games.filter((games) => games.gameID !== gameID))
      }

      const formatDate = (inputDate) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        let newDate = new Date(inputDate).toLocaleDateString(undefined, options);
        console.log(newDate)
        return newDate
      };

      const updateGame = (gameID, updatedGame) => {
        // console.log('Edit Game');
        setGames(games.map((game) => game.gameID === gameID ? updatedGame : game))
      }


  return (
    <div>
        <GameContext.Provider value={{games, addGame, deleteGame, updateGame, formatDate, generateNewGameID}}>
            {children}
        </GameContext.Provider>
    </div>
  )
}

export default GameContextProvider