import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import useMachine from "src/hooks/models/useMachine";

const Machine = () => {
  const { machines, columns, isLoading } = useMachine();

  return (
    <GeneralLayout
      title="Máquinas"
      resumen="Selecciona una máquina para configurar"
    >
      <DataTable isLoading={isLoading} columns={columns} data={machines} />
    </GeneralLayout>
  );
};

export default Machine;
