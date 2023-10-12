import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GameContext } from "../context/GameContext";

const Form_AddGame = () => {
  const { addGame } = useContext(GameContext);

  const [newGame, setNewGame] = useState({
    date: "",
    us: "",
    them: "",
    notes: "",
  });

  const {date, us, them, notes} = newGame;

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(date, us, them, notes)
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
          <Form.Label>Us</Form.Label>
          <Form.Control
            type="text"
            placeholder="us"
            name="us"
            value={us}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Them</Form.Label>
          <Form.Control
            type="text"
            placeholder="them"
            name="them"
            value={them}
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
