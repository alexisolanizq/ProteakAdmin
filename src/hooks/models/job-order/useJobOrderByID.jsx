import { useParams } from "react-router-dom";
import { useJobOrderByIDService } from "src/services/jobOrder/jobOrderService";

const useJobOrderByID = () => {
  const { id } = useParams();
  
  const { data: otByID, isLoading, isSuccess } = useJobOrderByIDService(id);

  return {
    otByID,
    isLoading,
    isSuccess,
  };
};

export default useJobOrderByID;
