import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Calendar from "react-calendar";
import '../styles/Calendar.css'
import Form from "react-bootstrap/Form";

const ReactCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputData, setInputData] = useState('')
  const [dateInfo, setDateInfo] = useState([])
  const [show, setShow] = useState(false);

 
  const dateChange = (newDate) => setSelectedDate(newDate);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleInputChange = (e) =>  setDateInfo(e.target.value);
  
  function handleSubmit(e) {
    e.preventDefault();
    setDateInfo({
      ...dateInfo, [selectedDate.toDateString()]:inputData
    });
    setInputData('');
  }

const test = () => {
  console.log((dateInfo))
}
  

  return (
    <div>
      <Calendar onChange={dateChange} onClickDay={handleShow} value={selectedDate} />
      <Button onClick={handleSubmit}>Click</Button>
      <Button variant="secondary" onClick={test}>Console</Button>

      <p>{selectedDate.toString()}</p>
      <p>{selectedDate.toDateString()}</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="FormInput">
          <Form.Label>Label</Form.Label>
          <Form.Control
          as="textarea"
          placeholder="Notes"
          rows={3}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      {/* {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Modal</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )} */}
    </div>
  );
};

export default ReactCalendar;
