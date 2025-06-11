import { useMachineMaterialsService } from "src/services/machine/machineService";
import MaterialsServiceColumns from "src/views/admin/machines/materials/MaterialsServiceColumns";

const useMachineMaterialsServiceHook = ({ id = "", onEnd = () => {} }) => {

  const { data: materials, isLoading } = useMachineMaterialsService(id);

  const columns = MaterialsServiceColumns();

  return {
    onEnd,
    columns,
    materials,
    isLoading,
  };
};

export default useMachineMaterialsServiceHook;
