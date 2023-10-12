import React, { createContext, useState } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({children}) => {

    const [games, setGames] = useState([
        { id: 1, us: 5, them: 0, result: "5 - 0", date: "10/06/2023" },
        { id: 2, us: 3, them: 1, result: "3 - 1", date: "10/06/2023" },
        { id: 3, us: 6, them: 2, result: "6 - 2", date: "10/06/2023" },
        { id: 4, us: 4, them: 0, result: "4 - 0", date: "10/06/2023" },
      ]);

      const addGame = (firstName, lastName, position, goals, assists, notes) => {
        setGames([...games, {firstName, lastName, goals, assists, position, notes}])
      }

      const deleteGame = (id) => {
        console.log('Deleted Game')
        console.log(games)
        setGames(games.filter((games) => games.id !== id))
      }

      const formatDate = (inputDate) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        let newDate = new Date(inputDate).toLocaleDateString(undefined, options);
        console.log(newDate)
        return newDate
      };

      const updateGame = (id, updatedGame) => {
        // console.log('Edit Game');
        setGames(games.map((games) => games.id === id ? updatedGame : games))
      }


  return (
    <div>
        <GameContext.Provider value={{games, addGame, deleteGame, updateGame, formatDate}}>
            {children}
        </GameContext.Provider>
    </div>
  )
}

export default GameContextProvider