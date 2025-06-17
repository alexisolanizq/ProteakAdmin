import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";
import DateCell from "src/components/common/DateCell";

const UsageSheetColumns = ({ onDetails }) => [
  {
    ...commonProperties,
    field: "nrohojauso",
    headerName: "N°",
    minWidth: 100,
  },
  {
    ...commonProperties,
    field: "zona",
    headerName: "Zona",
    minWidth: 350,
  },
  {
    ...commonProperties,
    field: "matri",
    headerName: "Matrícula",
    minWidth: 450,
  },
  {
    ...commonProperties,
    field: "medicionHr",
    headerName: "Horómetro",
    minWidth: 250,
  },
  {
    ...commonProperties,
    field: "medicionHrAnt",
    headerName: "Horómetro Anterior",
    minWidth: 250,
  },
  {
    ...commonProperties,
    field: "medicionKm",
    headerName: "Kilometraje",
    minWidth: 250,
  },
  {
    ...commonProperties,
    field: "medicionKmAnt",
    headerName: "Kilometraje Anterior",
    minWidth: 250,
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "date",
    headerName: "Fecha",
    renderCell: ({ row }) => <DateCell timestamp={row?.date} />,
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Acciones",
    minWidth: 190,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row} icon="ri-eye-line" onClick={() => onDetails(row)} />,
    ],
  },
];

export default UsageSheetColumns;
