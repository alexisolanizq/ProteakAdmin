import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";
import DateCell from "src/components/common/DateCell";

const JobOrdersColumns = ({ onEdit, onDetails }) => [
  {
    ...commonProperties,
    minWidth: 100,
    field: "folio",
    headerName: "Folio",
  },
  {
    ...commonProperties,
    minWidth: 100,
    field: "ot_estado_name",
    headerName: "Estado ODT",
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "estado_operativo",
    headerName: "Estado Operatividad",
  },
  {
    ...commonProperties,
    minWidth: 280,
    field: "asociado_a",
    headerName: "Asociado",
  },
  {
    ...commonProperties,
    minWidth: 300,
    field: "taller",
    headerName: "Taller",
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "created_by",
    headerName: "Creado por",
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "fecha_ini",
    headerName: "Fecha de inicio",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_termino_real} />,
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "fecha_termino_estimado",
    headerName: "Fecha termino estimada",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_termino_real} />,
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "fecha_termino",
    headerName: "Fecha termino real",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_termino_real} />,
  },
  {
    ...commonProperties,
    minWidth: 200,
    field: "fecha_solicitada",
    headerName: "Fecha de solicitud",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_solicitada} />,
  },
  {
    ...commonProperties,
    field: "actions",
    headerName: "Acciones",
    minWidth: 190,
    type: "actions",
    getActions: ({ row }) => [
      <Button key={row} icon="ri-pencil-line" onClick={() => onEdit(row)} />,
      <Button key={row} icon="ri-eye-line" onClick={() => onDetails(row?.idot)} />,
    ],
  },
];

export default JobOrdersColumns;
