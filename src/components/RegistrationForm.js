import React from "react";

const RegistrationForm = () => {
  return (
    <div className="registrationForm">
      <form style={{width: '300px'}}>
        <label>Email: </label><br></br>
        <input placeholder="Email" type="email" /><br></br>
        <label>First Name: </label><br></br>
        <input placeholder="First Name" type="text" /><br></br>
        <label>Last Name: </label><br></br>
        <input placeholder="Last Name" type="text" /><br></br>
        <label>Team Name: </label><br></br>
        <input placeholder="Team Name" type="text" /><br></br>
        <label>Age: </label><br></br>
        <select className="registrationForm-ageDropdown">
          <option></option>
          <option>U8</option>
          <option>U9</option>
          <option>U10</option>
          <option>U11</option>
          <option>U12</option>
          <option>U13</option>
          <option>U14</option>
          <option>U15</option>
          <option>U16</option>
          <option>U17</option>
          <option>U19</option>
        </select><br></br>
        <label>Level: </label><br></br>
        <select className="registrationForm-levelDropdown">
          <option></option>
          <option>MLS Next</option>
          <option>ECNL</option>
          <option>ECNL-RL</option>
          <option>SCCL</option>
          <option>SCCL Premier</option>
          <option>SCCL Premier 1</option>
          <option>SCCL Premier 2</option>
          <option>SCCL Premier 3</option>
          <option>SCCL Premier 4</option>
        </select><br></br>
        <label>Password: </label><br></br>
        <input placeholder="Password" type="password" />
      </form>
    </div>
  );
};

export default RegistrationForm;
