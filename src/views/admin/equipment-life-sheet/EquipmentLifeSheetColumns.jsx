import { commonProperties } from "src/components/common/DataTable";
import StatusCell from "src/components/common/StatusCell";
import { formatDate } from "src/utils/dates";

const EquipmentLifeSheetColumns = () => [
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
];

export default EquipmentLifeSheetColumns;
