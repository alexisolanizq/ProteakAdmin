import GeneralLayout from "src/components/common/GeneralLayout";
import RequestUsageSheet from "./RequestUsageSheet";
import DataTable from "src/components/common/DataTable";
import useUsageSheet from "src/hooks/models/useage-sheet/useUsageSheet";
import { sorting } from "src/utils/sorting";
import Modal from "src/components/common/Modal";

const UsageSheets = () => {
  const { isLoading, usageSheets, columns, isOpen, usageSheetForm, onCancel } =
    useUsageSheet();

  return (
    <>
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
      <Modal isShow={isOpen} onClose={onCancel} title="Hoja de uso">
        {usageSheetForm()}
      </Modal>
    </>
  );
};

export default UsageSheets;
