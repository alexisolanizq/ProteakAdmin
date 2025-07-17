import { formatDate } from "src/utils/dates";
import StatusCell from "src/components/common/StatusCell";
import { commonProperties } from "src/components/common/DataTable";
import Button from "src/components/common/Button";

const EquipmentLifeSheetColumns = ({ onDetails }) => [
  {
    ...commonProperties,
    field: "folio",
    minWidth: 180,
    headerName: "Folio",
  },
  {
    ...commonProperties,
    field: "matri",
    headerName: "Equipo",
    minWidth: 250,
  },
  {
    ...commonProperties,
    field: "taller",
    headerName: "Taller",
    minWidth: 250,
  },
  {
    ...commonProperties,
    field: "detalle",
    headerName: "Observación",
    minWidth: 350,
  },
  {
    ...commonProperties,
    field: "ot_estado_name",
    headerName: "Estado",
    minWidth: 200,
    renderCell: ({ row }) => StatusCell(row?.ot_estado_code),
  },
  {
    ...commonProperties,
    field: "fecha_ini",
    headerName: "Fecha inicio",
    minWidth: 160,
    renderCell: ({ row }) => formatDate(row?.fecha_ini),
  },
  {
    ...commonProperties,
    field: "fecha_cierre",
    headerName: "Fecha cierre",
    minWidth: 160,
    renderCell: ({ row }) => formatDate(row?.fecha_cierre),
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Acciones",
    minWidth: 190,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row} onClick={() => onDetails(row?.idot)}>
        {row?.folio}
        <i className="ri-external-link-line ml-2" />
      </Button>,
    ],
  },
];

export default EquipmentLifeSheetColumns;
