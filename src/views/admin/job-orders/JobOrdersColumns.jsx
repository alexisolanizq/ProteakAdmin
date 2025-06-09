import Button from "src/components/common/Button";
import { commonProperties } from "src/components/common/DataTable";
import DateCell from "src/components/common/DateCell";

const JobOrdersColumns = ({ onEdit }) => [
  {
    // ...commonProperties,
    field: "folio",
    headerName: "Folio",
  },
  {
    // ...commonProperties,
    field: "ot_estado_name",
    headerName: "Estado ODT",
  },
  {
    ...commonProperties,
    field: "estado_operativo",
    headerName: "Estado Operatividad",
  },
  {
    ...commonProperties,
    field: "asociado_a",
    headerName: "Asociado",
  },
  {
    ...commonProperties,
    field: "taller",
    headerName: "Taller",
  },
  {
    ...commonProperties,
    field: "created_by",
    headerName: "Creado por",
  },
  {
    ...commonProperties,
    field: "fecha_ini",
    headerName: "Fecha de inicio",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_termino_real} />,
  },
  {
    ...commonProperties,
    field: "fecha_termino_estimado",
    headerName: "Fecha termino estimada",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_termino_real} />,
  },
  {
    ...commonProperties,
    field: "fecha_termino",
    headerName: "Fecha termino real",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_termino_real} />,
  },
  {
    ...commonProperties,
    field: "fecha_solicitada",
    headerName: "Fecha de solicitud",
    renderCell: ({ row }) => <DateCell timestamp={row?.fecha_solicitada} />,
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

export default JobOrdersColumns;
