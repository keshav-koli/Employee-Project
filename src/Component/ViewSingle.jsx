import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ViewSingle = () => {
  let { id } = useParams();
  //   console.log(id);
  console.log(
    `Now i will make a request to http://localhost:4000/employees/${id}`
  );

  let [fetcheddata, setFetcheddata] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
  });
  console.log(fetcheddata);

  let getData = async () => {
    let { data } = await axios.get(`http://localhost:4000/employees/${id}`);
    // ! OR
    // let  response  = await fetch("http://localhost:4000/employees/"+id);
    // let data=await response.json();
    // console.log(data);
    setFetcheddata(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let { name, email, department } = fetcheddata;
  return (
    <>
      <h3>Id :{id}</h3>
      <h3>Name :{name}</h3>
      <h3>Email :{email}</h3>
      <h3>Department :{department}</h3>
    </>
  );
};

export default ViewSingle;
