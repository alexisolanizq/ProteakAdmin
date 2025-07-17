import { pdf } from "@react-pdf/renderer";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useEmployeeListService } from "src/services/employee/employeeService";
import { useJobOrderByIDService } from "src/services/jobOrder/jobOrderService";
import JobOrderPDF from "src/views/admin/job-orders/JobOrderPDF";

const useJobOrderByID = () => {
  const { id } = useParams();

  const { data: otByID, isLoading, isSuccess } = useJobOrderByIDService(id);
  const { data: employees, isLoading: isLoadingEmployees } = useEmployeeListService()

  const employee = useMemo(() => {
    if (!employees || !otByID) return null
    return employees.find((emp) => emp.id === otByID?.[0]?.responsable)
  }, [employees, otByID])

  const getPDF = async () => {
    const doc = <JobOrderPDF data={otByID} />;
    const blobPDF = await pdf(doc).toBlob();

    const blobUrl = URL.createObjectURL(blobPDF);

    // Crear un enlace temporal
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `OT ${otByID?.folio} ${otByID?.obs}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl); // Limpieza
  };

  return {
    otByID,
    getPDF,
    employee,
    isLoading,
    isSuccess,
    isLoadingEmployees
  };
};

export default useJobOrderByID;
