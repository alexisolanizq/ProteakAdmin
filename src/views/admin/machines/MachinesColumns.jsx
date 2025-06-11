import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";

const MachinesColumns = ({ onEdit, details }) => [
  {
    ...commonProperties,
    field: "idmatri",
    minWidth: 140,
    headerName: "Matrícula",
  },
  {
    ...commonProperties,
    field: "name",
    minWidth: 300,
    headerName: "Equipo",
  },
  {
    ...commonProperties,
    field: "horometro",
    minWidth: 160,
    headerName: "Horómetro",
  },
  {
    field: "state",
    headerName: "Estatus",
    type: "boolean",
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Acciones",
    minWidth: 140,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row} icon="ri-pencil-line" onClick={() => onEdit(row)} />,
      <Button key={row} icon="ri-eye-line" onClick={() => details(row.id)} />,
    ],
  },
];

export default MachinesColumns;
