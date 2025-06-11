import GeneralLayout from "src/components/common/GeneralLayout";
import StatusCell from "src/components/common/StatusCell";
import useJobOrderByID from "src/hooks/models/job-order/useJobOrderByID";

const JobOrderByID = () => {
  const { isLoading, otByID, isSuccess } = useJobOrderByID();

  //   const header = JSON.parse(otByID?.[0].headerDatos)[0];

  return (
    <GeneralLayout
      isLoading={isLoading}
      title={`OT: ${otByID?.[0].folio}`}
      resumen={`Creada por ${otByID?.[0].created_by}`}
    >
      {isSuccess && (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="text-gray-500">Tipo de orden:</span>
              <div className="font-semibold text-gray-800">
                {otByID?.[0].tipo}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Asociado a:</span>
              <div className="font-semibold text-gray-800">
                {otByID?.[0].asociado_a}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Taller:</span>
              <div className="font-semibold text-gray-800">
                {otByID?.[0].taller}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Estado Detención:</span>
              <div className="ml-2 bg-red-100 text-red-700 font-semibold px-2 py-1 rounded inline-block">
                {otByID?.[0].estado_detencion}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Estado Operativo:</span>
              <div className="ml-2 bg-yellow-100 text-yellow-700 font-semibold px-2 py-1 rounded inline-block">
                {otByID?.[0].estado_operativo}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Estado OT:</span>
              <div className="ml-2 bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded inline-block">
                {StatusCell(otByID?.[0].ot_estado_name)}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Responsable:</span>
              <div className="font-semibold text-gray-800">
                {otByID?.[0].responsable || "No asignado"}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Creado por:</span>
              <div className="font-semibold text-gray-800">
                {otByID?.[0].created_by}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Observación:</span>
              <div className="font-semibold text-gray-800">
                {otByID?.[0].obs}
              </div>
            </div>
            {/* <div>
              <span className="text-gray-500">Modelo:</span>
              <div className="font-semibold text-gray-800">
                {header?.modelo_matri}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Zona:</span>
              <div className="font-semibold text-gray-800">
                {header?.zona_matri}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Serie:</span>
              <div className="font-semibold text-gray-800">
                {header?.serie_matri.trim()}
              </div>
            </div> */}
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition">
              Ver Orden
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition">
              Informe General
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition">
              Detalle Checklist
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition">
              Detalle Materiales
            </button>
          </div>
        </div>
      )}
    </GeneralLayout>
  );
};

export default JobOrderByID;
