import React, { useContext, useState } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form_AddPlayer from './Form_AddPlayer';
import Player from './Player';

const RosterTable = () => {


    const {players} = useContext(PlayerContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(players)

  return (
    <div>
        <div className='table-title'>
            <div className='table-title-text'>
                <h1>Manage <b>Roster</b></h1>
            </div>
            <div className='table-title-btn'>
                <Button className='btn btn-success' data-toggle='modal' onClick={handleShow}>Add Player</Button>
            </div>
        </div>


        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <tr key={player.id}>
                        <Player player={player} />
                    </tr>
                ))}
            </tbody>
        </table>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Player</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form_AddPlayer />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>


    </div>
  )
}

export default RosterTable