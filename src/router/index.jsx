import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/common/Layout";
import Cecos from "src/views/admin/cecos/Cecos";
import EquipmentLifeSheet from "src/views/admin/equipment-life-sheet/EquipmentLifeSheet";
import Index from "src/views/admin/Index";
import JobOrders from "src/views/admin/job-orders/JobOrders";
import Machines from "src/views/admin/machines/Machine";
import MachineById from "src/views/admin/machines/MachineById";
import Orders from "src/views/admin/orders";
import Request from "src/views/admin/orders/request";
import AuthLayout from "src/views/auth/AuthLayout";
import Login from "src/views/auth/Login";
import Register from "src/views/auth/Register";
import RequiereAuth from "src/views/auth/RequiereAuth";

const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RequiereAuth>
        <Layout />
      </RequiereAuth>
    ),
    children: [
      {
        path: "dashboard",
        element: <Index />,
      },
      {
        path: "job-orders",
        element: <JobOrders />,
      },
      // {
      //   path: "machines",
      //   children: [
      //     {
      //       path: "",
      //       element: <Machines />,
      //     },
      //   ],
      // },
      {
        path: "orders",
        children: [
          {
            path: "",
            element: <Orders />,
          },
          {
            path: "requests",
            element: <Request />,
          },
        ],
      },
      {
        path: "machines",
        children: [
          {
            path: "",
            element: <Machines />,
          },
          {
            path: ":id",
            element: <MachineById />,
          },
        ],
      },
      {
        path: "cecos",
        element: <Cecos />,
      },
      {
        path: "equipment-life-sheet",
        element: <EquipmentLifeSheet />,
      },
    ],
  },
]);

export default routes;
