import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Calendar from "react-calendar";

const Dash = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [loggerClicked, setLoggerClicked] = useState(false);
  const [log, setLog] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputData, setInputData] = useState("");
  const [dateInfo, setDateInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserExists(true);
  };

  const logNotes = () => {
    setLoggerClicked(true);
    const logBtn = document.getElementById('logBtn')
    logBtn.style.visibility = 'hidden'
  };

  const dateChange = (newDate) => {
    setSelectedDate(newDate);
    if (dateInfo[selectedDate.toDateString()]) {
      setShowInfo(true);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogSubmit(e) {
    e.preventDefault();
    setDateInfo({
      ...dateInfo,
      [selectedDate.toDateString()]: inputData,
    });
    setInputData("");
    setLoggerClicked(false)
    setShowInfo(true)
    const logBtn = document.getElementById('logBtn')
    logBtn.style.visibility = 'visible'
    
  }

  return (
    <>
      {!userExists ? (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Enter
            </Button>
          </Form>
        </>
      ) : (
        <div className="greeting">
          <h1>Welcome Coach {firstName}</h1>
          <h3>How was your day today?</h3>
          <Button id="logBtn" onClick={logNotes}>Daily Notes</Button>
          {loggerClicked && (
            <>
              <Calendar 
              onChange={dateChange}
              onClickDay={handleShow}
              value={selectedDate}/>
              <Form onSubmit={handleLogSubmit}>
                <Form.Group controlId="FormInput">
                  {/* <Form.Label>Notes</Form.Label> */}
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
              </Form>
            </>
          )}
          {showInfo &&
            typeof dateInfo[selectedDate.toDateString()] != "undefined" && (
              <div>
                <h4>Date: {selectedDate.toDateString()}</h4>
                <p>Info: {dateInfo[selectedDate.toDateString()]}</p>
              </div>
            )}
        </div>
      )}
    </>
  );
};

export default Dash;
