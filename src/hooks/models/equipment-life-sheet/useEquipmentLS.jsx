// import { useState } from "react";
import { useEquipmentLifeSheetService } from "src/services/equipment-life-sheet/equipmentLifeSheetService";
import EquipmentLifeSheetColumns from "src/views/admin/equipment-life-sheet/EquipmentLifeSheetColumns";

const useEquipmentLS = () => {
//   const [row, setRow] = useState();

  const { data: equipmentLifeSheets, isLoading } =
    useEquipmentLifeSheetService();

//   const onEdit = (data) => {
//     setRow(data);
//   };

//   const onCancel = () => {
//     setRow(null);
//   };

  const columns = EquipmentLifeSheetColumns()

  return {
    columns,
    isLoading,
    equipmentLifeSheets,
  };
};

export default useEquipmentLS;
