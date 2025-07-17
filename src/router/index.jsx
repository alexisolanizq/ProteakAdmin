import { createBrowserRouter } from "react-router-dom";
import Examples from "src/components/common/Examples";
import Layout from "src/components/common/Layout";
import Cecos from "src/views/admin/cecos/Cecos";
import DailyStatus from "src/views/admin/daily-status/DailyStatus";
import Detentions from "src/views/admin/detentions/Detentions";
import EquipmentLifeSheet from "src/views/admin/equipment-life-sheet/EquipmentLifeSheet";
import Index from "src/views/admin/Index";
import JobOrderByID from "src/views/admin/job-orders/JobOrderByID";
import JobOrderPDF from "src/views/admin/job-orders/JobOrderPDF";
import JobOrders from "src/views/admin/job-orders/JobOrders";
import Machines from "src/views/admin/machines/Machine";
import MachineById from "src/views/admin/machines/MachineById";
import Orders from "src/views/admin/orders";
import Request from "src/views/admin/orders/request";
import UsageSheets from "src/views/admin/usage-sheet/UsageSheets";
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
        path: "panel",
        element: <Index />,
      },
      {
        path: "ordenes-de-trabajo",
        children: [
          {
            path: "",
            element: <JobOrders />,
          },
          {
            path: ":id",
            element: <JobOrderByID />,
          },
          {
            path: ":id/:id",
            element: <JobOrderPDF />,
          },
        ],
      },
      {
        path: "ordenes",
        children: [
          {
            path: "",
            element: <Orders />,
          },
          {
            path: "solicitudes",
            element: <Request />,
          },
        ],
      },
      {
        path: "maquinas",
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
        path: "hoja-de-uso",
        element: <UsageSheets />,
      },
      {
        path: "hoja-de-vida-equipos",
        element: <EquipmentLifeSheet />,
      },
      {
        path: "estado-diario",
        element: <DailyStatus />,
      },
      {
        path: "detenciones",
        element: <Detentions />,
      },
      {
        path: "pdf",
        element: <JobOrderPDF />,
      },
    ],
  },
  {
    path: "example",
    element: <Examples />,
  },
]);

export default routes;
