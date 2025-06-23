import { commonProperties } from "src/components/common/DataTable";

const DailyStatusColumns = () => [
  {
    ...commonProperties,
    minWidth: 150,
    field: "modelo",
    headerName: "Modelo",
  },
  {
    ...commonProperties,
    minWidth: 400,
    field: "matri",
    headerName: "Equipo",
  },
  {
    ...commonProperties,
    minWidth: 220,
    field: "estadooperativo",
    headerName: "Estado",
  },
  {
    ...commonProperties,
    minWidth: 220,
    field: "zona",
    headerName: "Zona",
  },
];

export default DailyStatusColumns;
