import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";

const MachinesColumns = ({ onEdit, details }) => [
  {
    ...commonProperties,
    field: "idmatri",
    headerName: "Matrícula",
  },
  {
    ...commonProperties,
    field: "name",
    headerName: "Equipo",
  },
  {
    ...commonProperties,
    field: "horometro",
    headerName: "Horómetro",
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Acciones",
    minWidth: 90,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row} icon="ri-pencil-line" onClick={() => onEdit(row)} />,
      <Button key={row} icon="ri-eye-line" onClick={() => details(row.id)} />,
    ],
  },
];

export default MachinesColumns;
