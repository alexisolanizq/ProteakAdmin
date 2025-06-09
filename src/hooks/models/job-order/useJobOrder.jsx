import { useState } from "react";
import useModal from "src/hooks/common/useModal";
import { useJobOrderListService } from "src/services/jobOrder/jobOrderService";
import { isValid } from "src/utils/values";
import JobOrdersColumns from "src/views/admin/job-orders/JobOrdersColumns";
import JobOrdersForm from "src/views/admin/job-orders/JobOrdersForm";

const useJobOrder = () => {
  const [row, setRow] = useState(null);
  const { isOpen, closeModal, openModal } = useModal(false);

  const { data: jobOrders, isLoading } = useJobOrderListService();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = JobOrdersColumns({ onEdit });

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
    columns,
    onCancel,
    jobOrders,
    isLoading,
    jobOrderForm,
  };
};

export default useJobOrder;
