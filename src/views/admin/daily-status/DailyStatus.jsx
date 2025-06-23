import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import useDailyStatus from "src/hooks/models/daily-status/useDailyStatus";

const DailyStatus = () => {
  const { isLoading, dailyStatuses, columns } = useDailyStatus();

  return (
    <GeneralLayout
      title="Estado diario"
      resumen="Resumen del estado diario de los equipos y componentes"
    >
      <DataTable
        isRandomID
        columns={columns}
        data={dailyStatuses}
        isLoading={isLoading}
      />
    </GeneralLayout>
  );
};

export default DailyStatus;
