import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";

const MachineByIDServiceColumns = ({ onDetails }) => [
  {
    ...commonProperties,
    field: "name",
    minWidth:500,
    headerName: "Servicio",
  },
  {
    ...commonProperties,
    field: "description",
    minWidth:300,
    headerName: "Descripción",
  },
  {
    ...commonProperties,
    field: "Tipo",
    minWidth: 40,
    headerName: "Tipo",
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Configuración",
    minWidth: 60,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row?.id} icon="ri-tools-line" onClick={() => onDetails(row?.id)} />,
    ],
  },
];

export default MachineByIDServiceColumns;
