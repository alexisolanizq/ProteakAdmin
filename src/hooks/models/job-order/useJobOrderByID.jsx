import { useState } from "react";
import { useParams } from "react-router-dom";
import { useJobOrderByIDService } from "src/services/jobOrder/jobOrderService";

const useJobOrderByID = () => {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();
  const [header, setHeader] = useState({});

  const { data: otByID, isLoading, isSuccess } = useJobOrderByIDService(id);

  const getPDF = () => {
    setFormData({name: ''})
  };

  return {
    otByID,
    getPDF,
    formData,
    header,
    setHeader,
    isLoading,
    isSuccess,
  };
};

export default useJobOrderByID;
