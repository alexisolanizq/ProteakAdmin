// import PropTypes from "prop-types";
import renderDato from "src/components/common/CardText";
import DataTable from "src/components/common/DataTable";
import GeneralLayout from "src/components/common/GeneralLayout";
import Modal from "src/components/common/Modal";
import useMachineByID from "src/hooks/models/machine/useMachineByID";
import { formatDate } from "src/utils/dates";

const MachineById = () => {
  const {
    isLoading,
    machine,
    isSuccess,
    cecos,
    services,
    isLoadingServices,
    columns,
    materialServiceComponent,
    closeMaterialModal,
    isOpenMaterialsModal,
    rowID,
  } = useMachineByID();

  const ceco = cecos.find(
    (item) => item.idcentrocosto === machine?.[0].idcentrocosto
  );

  return (
    <>
      <GeneralLayout
        isLoading={isLoading}
        title={`${machine?.[0].name}`}
        resumen="Se muestran los datos del equipo"
        isFullWidth={false}
      >
        {isSuccess && (
          <>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              {/* Identificación */}
              <section>
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Identificación
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderDato("ID Matriculación", machine?.[0].idmatri)}
                  {renderDato("Centro de Costo", ceco?.code)}
                  {renderDato("Serie", machine?.[0].serie)}
                </div>
              </section>
            </div>
            {/* Fabricación y Técnica */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <section>
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Especificaciones Técnicas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderDato("Año Fabricación", machine?.[0].ano_fabricacion)}
                  {renderDato("Voltaje", machine?.[0].voltaje, " V")}
                  {renderDato("Capacidad", machine?.[0].capacidad)}
                  {renderDato("Masa", machine?.[0].masa)}
                  {renderDato("Peso", machine?.[0].peso)}
                  {renderDato("Motor", machine?.[0].motor)}
                  {renderDato("Motores", machine?.[0].motors)}
                </div>
              </section>
            </div>

            {/* Uso y operación */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <section>
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Uso y Operación
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderDato("Uso Prom. Diario", machine?.[0].uso_prom_diario)}
                  {renderDato("Promedio Horas", machine?.[0].promedioHr)}
                  {renderDato("Promedio Km", machine?.[0].promedioKm)}
                  {renderDato("Promedio Ciclos", machine?.[0].promedioCic)}
                  {renderDato(
                    "Disponibilidad Real",
                    machine?.[0].disponibleReal,
                    " hrs"
                  )}
                  {renderDato(
                    "Disponibilidad Teórica",
                    machine?.[0].disponibleDiario,
                    " hrs"
                  )}
                  {renderDato(
                    "Tiempo Total Disponible",
                    machine?.[0].tiempoTotalDisponible,
                    " hrs"
                  )}
                  {renderDato(
                    "Tiempo Detenciones",
                    machine?.[0].tiempoDetenciones,
                    " hrs"
                  )}
                  {renderDato(
                    "Inicio Operación",
                    formatDate(machine?.[0].fechainiciooperacionmatri)
                  )}
                  {renderDato(
                    "Fecha Compra",
                    formatDate(machine?.[0].fechacompra)
                  )}
                </div>
              </section>
            </div>

            {/* Últimos registros */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <section>
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Últimos Registros
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderDato("Última Hora", machine?.[0].UltHr)}
                  {renderDato("Último Km", machine?.[0].UltKm)}
                  {renderDato("Último Ciclo", machine?.[0].UltCic)}
                  {renderDato(
                    "Última Fecha",
                    formatDate(machine?.[0].UltFecha)
                  )}
                </div>
              </section>
            </div>

            {/* Límites próximos */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <section>
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Límites Próximos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderDato("Por Hora", machine?.[0].limiteProximosHr)}
                  {renderDato("Por Km", machine?.[0].limiteProximosKm)}
                  {renderDato("Por Ciclo", machine?.[0].limiteProximosCIc)}
                  {renderDato("Por Fecha", machine?.[0].limiteProximosFecha)}
                </div>
              </section>
            </div>

            {/* Otros datos */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <section>
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  Otros Datos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {renderDato(
                    "Estado Operativo",
                    machine?.[0].idestadooperativo
                  )}
                  {renderDato(
                    "Estado de Traslado",
                    machine?.[0].traslado_state
                  )}
                  {renderDato("Zona", machine?.[0].idzona)}
                  {renderDato("Taller", machine?.[0].taller ?? "—")}
                  {renderDato("Fabricante", machine?.[0].idfabricante)}
                  {renderDato("Propietario", machine?.[0].idpropietario)}
                  {renderDato(
                    "Clasificación Riesgo",
                    machine?.[0].idclasificacionriesgo
                  )}
                  {renderDato("Categoría", machine?.[0].idcategoriamaquina)}
                  {renderDato(
                    "Subcategoría",
                    machine?.[0].idsubcategoriamaquina
                  )}
                </div>
              </section>
            </div>
          </>
        )}

        <DataTable
          label="Servicios"
          isLoading={isLoadingServices}
          data={services}
          columns={columns}
          withMarginBottom
        />
      </GeneralLayout>

      {rowID && (
        <Modal
          isShow={isOpenMaterialsModal}
          onClose={closeMaterialModal}
          title="Materiales"
        >
          {materialServiceComponent()}
        </Modal>
      )}
    </>
  );
};

// MachineById.propTypes = {
//   id: PropTypes.number,
// };

export default MachineById;
