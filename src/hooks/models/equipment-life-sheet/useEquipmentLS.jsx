// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMachineActiveListService } from "src/services/machine/machineService";
import EquipmentLifeSheetColumns from "src/views/admin/equipment-life-sheet/EquipmentLifeSheetColumns";
import { useEquipmentLifeSheetService } from "src/services/equipment-life-sheet/equipmentLifeSheetService";
import { useWorkshopListService } from "src/services/workshop/workshopService";
import { useState } from "react";
import { isValid } from "date-fns";
import { useNavigate } from "react-router-dom";

const useEquipmentLS = () => {
  const navigate = useNavigate();
  const [machine, setMachine] = useState(0);
  const [service, setService] = useState(0);
  const [workshop, setWorkshop] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      matri: 0,
      service: 0,
      taller: 0,
    },
  });

  const {
    isLoading,
    data: equipmentLifeSheets,
    refetch,
  } = useEquipmentLifeSheetService(machine, service, workshop);

  const { data: machines, isLoading: isLoadingMachines } =
    useMachineActiveListService();

  const { data: workshops, isLoading: isLoadingWorkshops } =
    useWorkshopListService();

  const onLoadData = async (data) => {
    console.log(data);
    if (
      isValid(data.matri) ||
      isValid(data.service) ||
      isValid(data.workshop)
    ) {
      setMachine(data.matri);
      setService(data.service ?? 0);
      setWorkshop(data.workshop ?? 0);
    }
    await refetch();
  };

  const onDetails = (id) => {
    console.log(id);

    navigate(`/ordenes-de-trabajo/${id}`);
  };

  const columns = EquipmentLifeSheetColumns({ onDetails });

  return {
    errors,
    columns,
    control,
    machines,
    isLoading,
    workshops,
    onLoadData,
    handleSubmit,
    isLoadingMachines,
    equipmentLifeSheets,
    isLoadingWorkshops,
  };
};

export default useEquipmentLS;
