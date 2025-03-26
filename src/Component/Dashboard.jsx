import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}>
      <header>
        <h1>I am Header</h1>
      </header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "50px",
          border: "solid blue",
          padding: "5px",
        }}
      >
        <div>Logo</div>
        <div
          style={{
            display: "flex",
            gap: "50px",
          }}
        >
          <NavLink to="CreateEmp"> CreateEmp</NavLink>
          <NavLink to="viewAll">ViewAllEmployee</NavLink>
        </div>
      </nav>
      <section
        style={{ border: "solid red", height: "500px", display: "flex" }}
      >
        <aside
          style={{
            border: "solid yellow",
            width: "200px",
            height: "490px",
            padding: "1rem",
          }}
        >
          Aside
        </aside>
        <main style={{ margin: "2rem" }}>
          <Outlet />
        </main>
      </section>
      <footer style={{ border: "solid green", height: "50px" }}>
        {" "}
        I am Footer
      </footer>
    </div>
  );
};

export default Dashboard;
