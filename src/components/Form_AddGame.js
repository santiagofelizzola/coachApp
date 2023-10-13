import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GameContext } from "../context/GameContext";

const Form_AddGame = ({close}) => {
  const { addGame } = useContext(GameContext);

  const [newGame, setNewGame] = useState({
    date: "",
    opponent: "",
    home: "",
    away: "",
    result: "",
    notes: "",
  });


  const {date, home, away, result, opponent, notes} = newGame;

  const handleSubmit = (e) => {
    e.preventDefault();
    newGame.result = `${newGame.home}-${newGame.away}`
    console.log(newGame.result)
    addGame(date, opponent, result, home, away, notes);
    close();
  };

  const onInputChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date"
            placeholder="Date"
            name="date"
            value={date}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Opponent</Form.Label>
          <Form.Control
            type="text"
            placeholder="Opponent"
            name="opponent"
            value={opponent}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Home</Form.Label>
          <Form.Control
            type="text"
            placeholder="home"
            name="home"
            value={home}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Away</Form.Label>
          <Form.Control
            type="text"
            placeholder="away"
            name="away"
            value={away}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Notes"
            name="notes"
            value={notes}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Add Game
        </Button>
      </Form>
    </div>
  );
};

export default Form_AddGame;
