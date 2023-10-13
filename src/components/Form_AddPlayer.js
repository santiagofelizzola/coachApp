import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PlayerContext } from "../context/PlayerContext";

const Form_AddPlayer = ({close}) => {
  const { addPlayer } = useContext(PlayerContext);

  const [newPlayer, setNewPlayer] = useState({
    firstName: "",
    lastName: "",
    position: "",
    goals: 0,
    assists: 0,
    notes: "",
  });

  const {firstName, lastName, position, goals, assists, notes} = newPlayer;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Add player')
    addPlayer(firstName, lastName, position, goals, assists, notes);
    close()
  };

  const onInputChange = (e) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>
          <Form.Label>Position Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Position"
            name="position"
            value={position}
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
          Add Player
        </Button>
      </Form>
    </div>
  );
};

export default Form_AddPlayer;
