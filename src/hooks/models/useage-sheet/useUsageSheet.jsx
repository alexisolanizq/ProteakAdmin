import {convertDatesToTimestamps} from "src/hooks/common/convertDateToTimestamps";
import { useUsageSheetService } from "src/services/usage-sheet/usageSheetService";
import UsageSheetColumns from "src/views/admin/usage-sheet/UsageSheetColumns";

const useUsageSheet = () => {
  const { startTimestamp, endTimestamp } = convertDatesToTimestamps();

  const { data: usageSheets, isLoading } = useUsageSheetService({
    timestamp_start: startTimestamp,
    timestamp_end: endTimestamp,
  });

  const columns = UsageSheetColumns();

  return {
    columns,
    isLoading,
    usageSheets,
  };
};

export default useUsageSheet;
