import axios from "axios";
import React, { useState } from "react";

const CreateEmp = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/employees", formData);

    //after posting
    setFormData({
      name: "",
      email: "",
      department: "",
    });
  };
  return (
    <div>
      <h1>Enter New Employee Data</h1>
      <form onSubmit={handleForm}>
        <h4>Enter the Name :</h4>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChanges}
        ></input>
        <h4>Enter the Email :</h4>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChanges}
        ></input>
        <h4>Enter the Department :</h4>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChanges}
        ></input>
        <input type="submit" name="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default CreateEmp;
