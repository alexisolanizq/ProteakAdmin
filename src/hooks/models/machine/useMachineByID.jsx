import { useState } from "react";
import { useParams } from "react-router-dom";
import useModal from "src/hooks/common/useModal";
import { useCecoListService } from "src/services/ceco/cecoService";
import { useMachineRowService } from "src/services/machine/machineByIDService";
import { useMachineServices } from "src/services/machine/machineService";
import MachineByIDServiceColumns from "src/views/admin/machines/MachineByIDServiceColumns";
import MaterialsService from "src/views/admin/machines/materials/MaterialsService";
import MaterialsServiceColumns from "src/views/admin/machines/materials/MaterialsServiceColumns";

const useMachineByID = () => {
  const [rowID, setRowID] = useState(null);
  const {
    openModal: openMaterialsModal,
    closeModal: closeMaterialModal,
    isOpen: isOpenMaterialsModal,
  } = useModal(false);
  const { id } = useParams();
  const { data: cecos, isLoading: isLoadingCecos } = useCecoListService(id);
  const { data: machine, isLoading, isSuccess } = useMachineRowService(id);
  const { data: services, isLoadingServices } = useMachineServices(id);

  const onDetails = (data) => {
    setRowID(data);
    openMaterialsModal();
  };

  const onCancel = () => {
    setRowID(null);
    closeMaterialModal();
  };

  const columns = MachineByIDServiceColumns({ onDetails });
  const materialsColumns = MaterialsServiceColumns();

  const materialServiceComponent = () => (
    <MaterialsService id={rowID} onEnd={onCancel} />
  );

  return {
    rowID,
    cecos,
    columns,
    machine,
    services,
    isSuccess,
    isLoading,
    isLoadingCecos,
    materialsColumns,
    isLoadingServices,
    openMaterialsModal,
    closeMaterialModal,
    isOpenMaterialsModal,
    materialServiceComponent,
  };
};

export default useMachineByID;
