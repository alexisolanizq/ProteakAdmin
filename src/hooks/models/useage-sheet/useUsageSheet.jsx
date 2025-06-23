import { useMemo, useState } from "react";
import { convertDatesToTimestamps } from "src/hooks/common/convertDateToTimestamps";
import useModal from "src/hooks/common/useModal";
import { useUsageSheetService } from "src/services/usage-sheet/usageSheetService";
import { isValid } from "src/utils/values";
import UsageSheetColumns from "src/views/admin/usage-sheet/UsageSheetColumns";
import UsageSheetForm from "src/views/admin/usage-sheet/UsageSheetForm";

const useUsageSheet = () => {
  const [row, setRow] = useState(null);
  const {
    closeModal,
    isOpen,
    openModal,
  } = useModal();
  const { today, firstDayOfMonth } = useMemo(() => {
    return convertDatesToTimestamps();
  }, []);

  const { data: usageSheets, isLoading } = useUsageSheetService({
    timestamp_start: firstDayOfMonth,
    timestamp_end: today,
  });

  const onDetails = (row) => {
    setRow(row);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = UsageSheetColumns({ onDetails });

  const usageSheetForm = () => (
    <UsageSheetForm
      row={row}
      onEnd={onCancel}
      onCancel={onCancel}
      isUpdate={isValid(row)}
    />
  );

  return {
    row,
    isOpen,
    columns,
    onCancel,
    isLoading,
    closeModal,
    usageSheets,
    usageSheetForm,
  };
};

export default useUsageSheet;
