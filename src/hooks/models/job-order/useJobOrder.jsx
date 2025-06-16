import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/common/Button";
import useModal from "src/hooks/common/useModal";
import { useJobOrderListService } from "src/services/jobOrder/jobOrderService";
import { isValid } from "src/utils/values";
import JobOrdersColumns from "src/views/admin/job-orders/JobOrdersColumns";
import JobOrdersForm from "src/views/admin/job-orders/JobOrdersForm";

const useJobOrder = () => {
  const navigate = useNavigate();
  const [row, setRow] = useState(null);
  const { isOpen, closeModal, openModal } = useModal(false);

  const { data: jobOrders, isLoading } = useJobOrderListService();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onDetails = (id) => navigate(`${id}`);

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = JobOrdersColumns({ onEdit, onDetails });

  const actions = [
    <Button key={1} onClick={() => console.log("Agregando")}>
      Nueva Orden
    </Button>,
  ];

  const jobOrderForm = () => (
    <JobOrdersForm
      isUpdate={isValid(row)}
      row={row}
      onCancel={onCancel}
      onEnd={onCancel}
    />
  );

  return {
    isOpen,
    actions,
    columns,
    onCancel,
    jobOrders,
    isLoading,
    jobOrderForm,
  };
};

export default useJobOrder;
