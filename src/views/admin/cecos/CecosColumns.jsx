import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";

const CecosColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: "name",
    minWidth: 300,
    headerName: "Nombre",
  },
  {
    ...commonProperties,
    field: "code",
    minWidth: 200,
    headerName: "Ceco",
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Acciones",
    minWidth: 90,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row} icon="ri-pencil-line" onClick={() => onEdit(row)} />,
    ],
  },
];

export default CecosColumns;
