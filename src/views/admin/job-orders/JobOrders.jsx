import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import Modal from "src/components/common/Modal";
import useJobOrder from "src/hooks/models/job-order/useJobOrder";
import { sorting } from "src/utils/sorting";

const JobOrders = () => {
  const { isLoading, jobOrders, isOpen, onCancel, jobOrderForm, columns } =
    useJobOrder();

  return (
    <>
      <GeneralLayout
        title="Ordenes de trabajo"
        resumen="Listado de ordenes de trabajo. Selecciona para ver detalles"
      >
        <DataTable
          rowID="idot"
          data={jobOrders}
          columns={columns}
          isLoading={isLoading}
          sorting={sorting("fecha_solicitada", "desc")}
          withMarginBottom
        />
      </GeneralLayout>

      <Modal isShow={isOpen} onClose={onCancel} title="Orden de trabajo">
        {jobOrderForm()}
      </Modal>
    </>
  );
};

export default JobOrders;
