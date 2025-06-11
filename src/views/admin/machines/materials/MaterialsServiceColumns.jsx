import { commonProperties } from "src/components/common/DataTable";

const MaterialsServiceColumns = () => [
  {
    ...commonProperties,
    field: "idmaquinaservicio_materiales",
    headerName: "Item",
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
  },
  {
    ...commonProperties,
    field: "cantidad",
    headerName: "Cantidad",
  },
];

export default MaterialsServiceColumns;
