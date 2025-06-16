import { commonProperties } from "src/components/common/DataTable";

const MaterialsServiceColumns = () => [
  {
    ...commonProperties,
    field: "idmaquinaservicio_materiales",
    headerName: "Item",
    minWidth: 100,
  },
  {
    ...commonProperties,
    field: "name",
    minWidth: 500,
    headerName: "Nombre",
  },
  {
    ...commonProperties,
    field: "code",
    headerName: "Código",
    minWidth: 180,
  },
  {
    ...commonProperties,
    field: "cantidad",
    headerName: "Cantidad",
    minWidth: 180,
  },
];

export default MaterialsServiceColumns;
