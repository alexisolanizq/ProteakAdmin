import { useState } from "react";
import { useParams } from "react-router-dom";
import { useJobOrderByIDService } from "src/services/jobOrder/jobOrderService";

const useJobOrderByID = () => {
  const { id } = useParams();
  const [header, setHeader] = useState({});

  const { data: otByID, isLoading, isSuccess } = useJobOrderByIDService(id);

  return {
    otByID,
    header,
    setHeader,
    isLoading,
    isSuccess,
  };
};

export default useJobOrderByID;
