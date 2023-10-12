import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PlayerContext } from "../context/PlayerContext";

const Form_EditPlayer = ({thePlayer}) => {

  const id = thePlayer.id;

  const [firstName, setFirstName] = useState(thePlayer.firstName);
  const [lastName, setLastName] = useState(thePlayer.lastName);
  const [position, setPosition] = useState(thePlayer.position);
  const [goals, setGoals] = useState(thePlayer.goals);
  const [assists, setAssists] = useState(thePlayer.assists);
  const [notes, setNotes] = useState(thePlayer.notes)

  const {updatePlayer} = useContext(PlayerContext);

  const updatedPlayer = {firstName, lastName, position, goals, assists, notes};

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer(id, updatedPlayer)
  }


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
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></Form.Control>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Position"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></Form.Control>
          <Form.Label>Goals</Form.Label>
          <Form.Control
            type="number"
            placeholder="Goals"
            name="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          ></Form.Control>
          <Form.Label>Assists</Form.Label>
          <Form.Control
            type="number"
            placeholder="Assists"
            name="assists"
            value={assists}
            onChange={(e) => setAssists(e.target.value)}
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
          Edit Employee
        </Button>
      </Form>
    </div>
  );
};

export default Form_EditPlayer;
