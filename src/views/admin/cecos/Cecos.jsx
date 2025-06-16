import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import useCeco from "src/hooks/models/ceco/useCeco";
import { sorting } from "src/utils/sorting";

const Cecos = () => {
  const { cecos, columns, isLoading } = useCeco();

  return (
    <GeneralLayout
      title="Centros de costos"
      resumen="Selecciona un item para ver sus detalles"
    >
      <DataTable
        label="Centro de costos"
        rowID="idcentrocosto"
        data={cecos}
        columns={columns}
        isLoading={isLoading}
        sorting={sorting("idcentrocosto")}
        withMarginBottom
      />
    </GeneralLayout>
  );
};

export default Cecos;
