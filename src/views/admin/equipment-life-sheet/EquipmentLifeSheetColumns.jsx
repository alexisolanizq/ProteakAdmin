import { commonProperties } from "src/components/common/DataTable";
import StatusCell from "src/components/common/StatusCell";
import { formatDate } from "src/utils/dates";

const EquipmentLifeSheetColumns = () => [
  {
    ...commonProperties,
    field: "folio",
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
    minWidth: 250,
  },
  {
    ...commonProperties,
    field: "ot_estado_name",
    headerName: "Estado",
    minWidth: 100,
    renderCell: ({ row }) => StatusCell(row?.ot_estado_code),
  },
  {
    ...commonProperties,
    field: "fecha_ini",
    headerName: "Fecha inicio",
    renderCell: ({ row }) => formatDate(row?.fecha_ini),
  },
  {
    ...commonProperties,
    field: "fecha_cierre",
    headerName: "Fecha inicio",
    renderCell: ({ row }) => formatDate(row?.fecha_ini),
  },
];

export default EquipmentLifeSheetColumns;
