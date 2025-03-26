import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ViewAllEmployee = () => {
  let [fetcheddata, setFetchedData] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/employees");
    const data = await res.json();
    setFetchedData(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>View All Employee Details</h1>
      <table border="1px" cellPadding="10px" cellSpacing="0px">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan={3}>Options</th>
          </tr>
        </thead>
        <tbody>
          {fetcheddata.map((val, ind) => {
            // console.log(val);
            let { name, email, department, id } = val;
            return (
              <tr key={ind}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{department}</td>
                <td>
                    <NavLink to={`/viewsingle/${id}`}><button >view more</button></NavLink>
                  
                </td>
                <td>
                    <NavLink><button >Edit</button></NavLink>
                </td>
                <td>
                    <NavLink><button >Delete</button></NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewAllEmployee;
