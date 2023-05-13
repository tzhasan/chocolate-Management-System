import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewChocolate from './Component/NewChocolate.jsx';
import UpdateData from './Component/UpdateData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      fetch(
        "https://chocolate-management-server-tzhasan.vercel.app/chocolates"
      ),
  },
  {
    path: "/newChocolate",
    element: <NewChocolate></NewChocolate>,
  },
  {
    path: "/updateData/:id",
    element: <UpdateData></UpdateData>,
    loader: ({ params }) =>
      fetch(
        `https://chocolate-management-server-tzhasan.vercel.app/chocolates/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
