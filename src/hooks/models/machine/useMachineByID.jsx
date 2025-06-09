import { useParams } from "react-router-dom";
import { useMachineRowService } from "src/services/machine/machineByIDService";

const useMachineByID = () => {
  const { id } = useParams();
  const { data: machine, isLoading, isSuccess } = useMachineRowService(id);

  return {
    machine,
    isSuccess,
    isLoading,
  };
};

export default useMachineByID;
