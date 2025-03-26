import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import ViewAllEmployee from "./Component/ViewAllEmployee";
import CreateEmp from "./Component/CreateEmp";
import ViewSingle from "./Component/ViewSingle";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/viewAll",
          element: <ViewAllEmployee />,
        },
        {
          path: "/CreateEmp",
          element: <CreateEmp />,
        },
        {
          path:"/viewsingle/:id",
          element:<ViewSingle />
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
