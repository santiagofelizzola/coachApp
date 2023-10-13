import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form_EditGame from "./Form_EditGame";

const Game = ({ game }) => {

  const { deleteGame } = useContext(GameContext);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <td>{game.date}</td>
      <td>{game.opponent}</td>
      <td>{game.result}</td>
      <td>
        <button onClick={handleShow} className="btn btn-act text-danger" data-toggle='modal' >Edit</button>
        <button onClick={() => deleteGame(game.gameID)} className="btn btn-act text-danger" data-toggle='modal' >Delete</button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form_EditGame close={handleClose} theGame={game} />
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

export default Game;
