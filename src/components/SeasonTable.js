import React, { useContext, useState } from 'react';
import { GameContext } from '../context/GameContext';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form_AddGame from './Form_AddGame';
import Game from './Game';
import ReactCalendar from './ReactCalendar'

const SeasonTable = () => {


    const {games} = useContext(GameContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showSeason = () => console.log(games)

  return (
    <div>
        <button style={{'display':'none'}} onClick={showSeason}>season</button>
        <div className='table-title'>
            <div className='table-title-text'>
                <h1>Manage <b>Season</b></h1>
            </div>
            <div className='table-title-btn'>
                <Button className='addBtn btn btn-success' data-toggle='modal' onClick={handleShow}>Add Game</Button>
            </div>
        </div>


        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Opponent</th>
                    <th>Result</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.gameID}>
                        <Game game={game} />
                    </tr>
                ))}
            </tbody>
        </table>

        <ReactCalendar />


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form_AddGame close={handleClose} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>


    </div>
  )
}

export default SeasonTable