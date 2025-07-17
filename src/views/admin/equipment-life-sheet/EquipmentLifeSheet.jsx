import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import useEquipmentLS from "src/hooks/models/equipment-life-sheet/useEquipmentLS";
import { sorting } from "src/utils/sorting";
import EquipmentLifeSheetFilters from "./EquipmentLifeSheetFilters";

const EquipmentLifeSheet = () => {
  const {
    columns,
    control,
    machines,
    isLoading,
    workshops,
    onLoadData,
    handleSubmit,
    isLoadingMachines,
    isLoadingWorkshops,
    equipmentLifeSheets,
  } = useEquipmentLS();

  return (
    <GeneralLayout
      title="Hoja de vida máquina"
      resumen="Listado de hoja de vida de equipos"
    >
      <EquipmentLifeSheetFilters
        control={control}
        machines={machines}
        onSubmit={onLoadData}
        workshops={workshops}
        handleSubmit={handleSubmit}
        isLoadingMachines={isLoadingMachines}
        isLoadingWorkshops={isLoadingWorkshops}
      />
      <DataTable
        rowID="idot"
        withMarginBottom
        columns={columns}
        isLoading={isLoading}
        data={equipmentLifeSheets}
        label="Hoja de vida de equipos"
        sorting={sorting("fecha_ini", "desc")}
      />
    </GeneralLayout>
  );
};

export default EquipmentLifeSheet;
