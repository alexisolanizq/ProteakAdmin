import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMachineListService } from "src/services/machine/machineService";
import { useZoneListService } from "src/services/zone/zoneService";
import MachinesColumns from "src/views/admin/machines/MachinesColumns";
// import { isValid } from "src/utils/values";

const useMachine = () => {
  const navigate = useNavigate();

  const [row, setRow] = useState(null);
  const { data: machines, isLoading } = useMachineListService();
  const { data: zones } = useZoneListService();


  const onEdit = (data) => {
    setRow(data);
  };

  const onCancel = () => {
    setRow(null);
  };

  const details = (id) => navigate(`${id}`);

  const columns = MachinesColumns({ onEdit, details, zones });

  return {
    row,
    onEdit,
    columns,
    onCancel,
    machines,
    isLoading,
  };
};

export default useMachine;
