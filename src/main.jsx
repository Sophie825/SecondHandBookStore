import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";

import Works from "./routes/works/Works/Works";
import To_do_list from "./routes/activity/to_do_list";
import River_order from "./routes/purchase/river_order";
import Store_order from "./routes/purchase/store_order";
import Internet_order from "./routes/purchase/internet_order";
import Deliver_goods from "./routes/record/deliver_goods";
import Notes from "./routes/notes/notes";
import Home from "./routes/works/Home";
import EmployeeManage from "./routes/EmployeeManage";

import ErrorPage from "./routes/error-page";
// import { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "/deliver_goods",
        element: <Deliver_goods />,
        // loader: workLoader,
      },
      {
        path: "/Works",
        element: <Works />,
        // loader: workLoader,
      },
      {
        path: "/internet_order",
        element: <Internet_order />,
        // loader: workLoader,
      },
      {
        path: "/store_order",
        element: <Store_order />,
        // loader: workLoader,
      },
      {
        path: "/river_order",
        element: <River_order />,
        // loader: workLoader,
      },
      {
        path: "/to_do_list",
        element: <To_do_list />,
        // loader: workLoader,
      },
      {
        path: "/Note",
        element: <Notes />,
        // loader: workLoader,
      },
      {
        path: "/Home",
        element: <Home />,
        // loader: workLoader,
      },
      {
        path: "/EmployeeManage",
        element: <EmployeeManage />,
        // loader: workLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);