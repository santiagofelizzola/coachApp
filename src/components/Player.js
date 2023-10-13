import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form_EditPlayer from "./Form_EditPlayer";

const Player = ({ player }) => {

  const { deletePlayer } = useContext(PlayerContext);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <td>{player.firstName}</td>
      <td>{player.lastName}</td>
      <td>{player.position}</td>
      <td>{player.goals} </td>
      <td>{player.assists} </td>
      <td>
        <button onClick={handleShow} className="btn btn-act text-danger" data-toggle='modal' >edit</button>
        <button onClick={() => deletePlayer(player.id)} className="btn btn-act text-danger" data-toggle='modal' >delete</button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form_EditPlayer close={handleClose} thePlayer={player} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="seconday" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Player;
