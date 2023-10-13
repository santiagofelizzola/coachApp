import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GameContext } from "../context/GameContext";

const Form_EditGame = ({theGame, close}) => {

  const {gameID} = theGame;

  const [date, setDate] = useState(theGame.date);
  const [opponent, setOpponent] = useState(theGame.opponent);
  const [home, setHome] = useState(theGame.home);
  const [away, setAway] = useState(theGame.away);
  const [notes, setNotes] = useState(theGame.notes);
  const [result] = useState(theGame.result)
  

  const {updateGame} = useContext(GameContext);
  const {formatDate} = useContext(GameContext);

  const updatedGame = {gameID, date, opponent, home, away, result, notes};

  const handleSubmit = (e) => {
    e.preventDefault();
    updatedGame.result = `${updatedGame.home}-${updatedGame.away}`
    console.log(updatedGame)
    updateGame(gameID, updatedGame);
    close();
  }
  


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>

        <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="First Name"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          ></Form.Control>

          <Form.Label>Opponent</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="Opponent"
            value={opponent}
            onChange={(e) => setOpponent(e.target.value)}
          ></Form.Control>

          <Form.Label>Home</Form.Label>
          <Form.Control
            type="text"
            placeholder="Home"
            name="home"
            value={home}
            onChange={(e) => setHome(e.target.value)}
          ></Form.Control>

          <Form.Label>Away</Form.Label>
          <Form.Control
            type="text"
            placeholder="Away"
            name="away"
            value={away}
            onChange={(e) => setAway(e.target.value)}
          ></Form.Control>

          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Edit Game
        </Button>
      </Form>
    </div>
  );
};

export default Form_EditGame;
