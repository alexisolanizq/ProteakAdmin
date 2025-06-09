import { useState } from "react";
import useModal from "src/hooks/common/useModal";
import { useCecoListService } from "src/services/ceco/cecoService";
import CecosColumns from "src/views/admin/cecos/CecosColumns";

const useCeco = () => {
  const [row, setRow] = useState(null);
  const { isOpen, closeModal, openModal } = useModal(false);

  const { data: cecos, isLoading } = useCecoListService();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = CecosColumns({ onEdit });

  return {
    row,
    cecos,
    isOpen,
    columns,
    isLoading,
    onCancel,
  };
};

export default useCeco;
