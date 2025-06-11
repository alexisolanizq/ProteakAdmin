import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import useEquipmentLS from "src/hooks/models/equipment-life-sheet/useEquipmentLS";

const EquipmentLifeSheet = () => {
  const { columns, equipmentLifeSheets, isLoading } = useEquipmentLS();

  return (
    <GeneralLayout
      title="Hoja de vida de equipos"
      resumen="Listado de hoja de vida de equipos"
    >
      <DataTable
        rowID="idot"
        isLoading={isLoading}
        data={equipmentLifeSheets}
        columns={columns}
        withMarginBottom
      />
    </GeneralLayout>
  );
};

export default EquipmentLifeSheet;
