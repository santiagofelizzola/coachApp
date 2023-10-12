import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GameContext } from "../context/GameContext";

const Form_EditGame = ({theGame}) => {

  const id = theGame.id;

  const [date, setDate] = useState(theGame.date);
  const [us, setUs] = useState(theGame.us);
  const [them, setThem] = useState(theGame.them);
  const [notes, setNotes] = useState(theGame.notes)

  const {updateGame} = useContext(GameContext);
  const {formatDate} = useContext(GameContext)

  const updatedGame = {date, us, them,notes};

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGame(id, updatedGame)
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

          <Form.Label>Us</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="us"
            value={us}
            onChange={(e) => setUs(e.target.value)}
          ></Form.Control>

          <Form.Label>Them</Form.Label>
          <Form.Control
            type="text"
            placeholder="them"
            name="them"
            value={them}
            onChange={(e) => setThem(e.target.value)}
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
