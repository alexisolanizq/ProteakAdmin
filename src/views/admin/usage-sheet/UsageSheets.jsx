import GeneralLayout from "src/components/common/GeneralLayout";
import RequestUsageSheet from "./RequestUsageSheet";
import DataTable from "src/components/common/DataTable";
import useUsageSheet from "src/hooks/models/useage-sheet/useUsageSheet";
import { sorting } from "src/utils/sorting";

const UsageSheets = () => {
  const { isLoading, usageSheets, columns } = useUsageSheet();

  return (
    <GeneralLayout
      title="Hoja de uso"
      resumen="Detllaes de ultimas actualizaciones a equipos"
    >
      <RequestUsageSheet />
      <DataTable
        isLoading={isLoading}
        columns={columns}
        data={usageSheets}
        withMarginBottom
        sorting={sorting("date", "desc")}
      />
    </GeneralLayout>
  );
};

export default UsageSheets;
