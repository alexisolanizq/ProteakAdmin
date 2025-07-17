import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useModal from "src/hooks/common/useModal";
import { useCecoListService } from "src/services/ceco/cecoService";
import { useMachineRowService } from "src/services/machine/machineByIDService";
import { useMachineServices } from "src/services/machine/machineService";
import { useManufacturerListService } from "src/services/manufacturer/manufacturerService";
import { useOperativeStateListService } from "src/services/operative-state/operativeStateService";
import { useOwnerService } from "src/services/owner/ownerService";
import { useZoneService } from "src/services/zone/zoneService";
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
  const { data: operativeState, isLoading: isLoadingOperativeState } =
    useOperativeStateListService(id);
  const { data: zones, isLoading: isLoadingZones } = useZoneService(id);
  const { data: owners, isLoading: isLoadingOwners } = useOwnerService();
  const { data: riskRatingList, isLoading: isLoadingRiskRatingList } = useOwnerService();
  const { data: manufacturerList, isLoading: isLoadingManufacturers } = useManufacturerListService();


  const manufacturers = useMemo(() => {
    if (!manufacturerList || !machine) return null;

    return manufacturerList.find(
      (item) => item.ID === machine?.[0].idfabricante
    );
  }, [manufacturerList, machine]);

  const riskRating = useMemo(() => {
    if (!riskRatingList || !machine) return null;

    return riskRatingList.find(
      (item) => item.ID === machine?.[0].idclasificacionriesgo
    );
  }, [riskRatingList, machine]);

  const opState = useMemo(() => {
    if (!operativeState || !machine) return null;

    return operativeState.find(
      (item) => item.idestadooperativo === machine?.[0].idestadooperativo
    );
  }, [operativeState, machine]);

  const movementZone = useMemo(() => {
    if (!zones || !machine) return null;

    return zones.find((item) => item.idzona_final === machine?.[0].idzona);
  }, [zones, machine]);

  const owner = useMemo(() => {
    if (!owners || !machine) return null;

    return owners.find(
      (item) => item.idpropietario === machine?.[0].idpropietario
    );
  }, [owners, machine]);

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
    owner,
    opState,
    columns,
    machine,
    services,
    isSuccess,
    isLoading,
    riskRating,
    movementZone,
    manufacturers,
    isLoadingCecos,
    isLoadingZones,
    operativeState,
    isLoadingOwners,
    materialsColumns,
    isLoadingServices,
    openMaterialsModal,
    closeMaterialModal,
    isOpenMaterialsModal,
    isLoadingManufacturers,
    isLoadingRiskRatingList,
    isLoadingOperativeState,
    materialServiceComponent,
  };
};

export default useMachineByID;
