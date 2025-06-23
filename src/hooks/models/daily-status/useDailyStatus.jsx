import { useDailyStatusService } from "src/services/daily-status/dailyStatusService";
import DailyStatusColumns from "src/views/admin/daily-status/DailyStatusColumns";

const useDailyStatus = () => {
  const { data: dailyStatuses, isLoading } = useDailyStatusService();

  const columns = DailyStatusColumns();

  return {
    columns,
    isLoading,
    dailyStatuses,
  };
};

export default useDailyStatus;
