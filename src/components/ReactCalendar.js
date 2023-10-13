import React, { useState, createContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Calendar from "react-calendar";
import "../styles/Calendar.css";
import Form from "react-bootstrap/Form";
import { type } from "@testing-library/user-event/dist/type";

export const CalendarContext = createContext();

const ReactCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputData, setInputData] = useState("");
  const [dateInfo, setDateInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const dateChange = (newDate) => {
    setSelectedDate(newDate);
    if (dateInfo[selectedDate.toDateString()]) {
      setShowInfo(true);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleInputChange = (e) => setInputData(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    setDateInfo({
      ...dateInfo,
      [selectedDate.toDateString()]: inputData,
    });
    setInputData("");
  }

  const test = () => {
    console.log(dateInfo);
    console.log(typeof(selectedDate.toDateString()));
    console.log(typeof(dateInfo[selectedDate.toDateString()]));
  };

  return (
    <div>
      <Calendar
        onChange={dateChange}
        onClickDay={handleShow}
        value={selectedDate}
      />
     <Button onClick={handleSubmit}>Click</Button>
      <Button variant="secondary" onClick={test}>
        Console
      </Button> {/*

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
            onChange={(e) => setInputData(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}

      {showInfo && typeof(dateInfo[selectedDate.toDateString()]) != "undefined" && (
        <div>
          <h4>Date: {selectedDate.toDateString()}</h4>
          <p>Info: {dateInfo[selectedDate.toDateString()]}</p>
        </div>
      )}
      
    </div>
  );
};

export default ReactCalendar;
