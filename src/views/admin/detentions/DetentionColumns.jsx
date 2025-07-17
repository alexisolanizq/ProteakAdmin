import { commonProperties } from "src/components/common/DataTable"
import DateCell from "src/components/common/DateCell"

const DetentionColumns = () => [
    {
        ...commonProperties,
        field: "dateunix_ini",
        // minWidth: 140,
        headerName: "Fecha inicio de detención",
        renderCell: ({ row }) => <DateCell timestamp={row?.dateunix_ini} />,
    },
    {
        ...commonProperties,
        field: "obs_ini",
        minWidth: 340,
        headerName: "Comentarios iniciales",
    },
    {
        ...commonProperties,
        field: "promesa_liberacion",
        // minWidth: 140,
        headerName: "Promesa de fin en días",
    },
    {
        ...commonProperties,
        field: "dateunix_end",
        headerName: "Fecha fin de detención",
        renderCell: ({ row }) => <DateCell timestamp={row?.dateunix_end} />,
    },
    {
        ...commonProperties,
        field: "obs_end",
        minWidth: 340,
        headerName: "Comentarios finales",
    },
]

export default DetentionColumns