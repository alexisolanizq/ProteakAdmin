// import PropTypes from "prop-types";
import GeneralLayout from "src/components/common/GeneralLayout";
import useMachineByID from "src/hooks/models/machine/useMachineByID";
import { formatDate } from "src/utils/dates";

const MachineById = () => {
  const { isLoading, machine, isSuccess } = useMachineByID();

  return (
    <>
      <GeneralLayout
        isLoading={isLoading}
        title={`${machine?.[0].name}`}
        resumen="Se muestran los datos del equipo"
      >
        {isSuccess && (
          <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow p-8 space-y-8 mb-8">
            {/* Información general */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Información general
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Nombre:</strong> {machine?.[0].name}
                </div>
                <div>
                  <strong>Descripción:</strong>{" "}
                  {machine?.[0].description || "—"}
                </div>
                <div>
                  <strong>Serie:</strong> {machine?.[0].serie.trim() || "—"}
                </div>
                <div>
                  <strong>Año:</strong> {machine?.[0].ano_fabricacion}
                </div>
                <div>
                  <strong>Motor:</strong> {machine?.[0].motor}
                </div>
                <div>
                  <strong>ID Matriz:</strong> {machine?.[0].ID}
                </div>
                <div>
                  <strong>Zona:</strong> {machine?.[0].idzona}
                </div>
                <div>
                  <strong>Centro de costo:</strong> {machine?.[0].idcentrocosto}
                </div>
              </div>
            </section>

            {/* Uso */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Uso y operación
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Última hora:</strong> {machine?.[0].UltHr}
                </div>
                <div>
                  <strong>Promedio Hr:</strong> {machine?.[0].promedioHr || "—"}
                </div>
                <div>
                  <strong>Uso diario estimado:</strong>{" "}
                  {machine?.[0].uso_prom_diario || "—"} hrs
                </div>
                <div>
                  <strong>Disponible diario:</strong> {machine?.[0].disponibleDiario}{" "}
                  hrs
                </div>
                <div>
                  <strong>Detenido:</strong> {machine?.[0].tiempoDetenciones} hrs
                </div>
                <div>
                  <strong>Total disponible:</strong>{" "}
                  {machine?.[0].tiempoTotalDisponible} hrs
                </div>
                <div>
                  <strong>Inicio operación:</strong>{" "}
                  {formatDate(machine?.[0].fechainiciooperacionmatri)}
                </div>
              </div>
            </section>

            {/* Mantenimiento */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Parámetros de mantenimiento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Aplica horas:</strong>{" "}
                  {machine?.[0].aplicaHr ? "Sí" : "No"}
                </div>
                <div>
                  <strong>Límite horas:</strong> {machine?.[0].limiteProximosHr}
                </div>
                <div>
                  <strong>Límite fecha:</strong> {machine?.[0].limiteProximosFecha}{" "}
                  días
                </div>
              </div>
            </section>

            {/* Estado */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Estado</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Estado operativo:</strong> {machine?.[0].idestadooperativo}
                </div>
                <div>
                  <strong>Traslado:</strong> {machine?.[0].traslado_state}
                </div>
                <div>
                  <strong>Taller:</strong> {machine?.[0].taller || "N/A"}
                </div>
              </div>
            </section>
          </div>
        )}
      </GeneralLayout>
      <div></div>
    </>
  );
};

// MachineById.propTypes = {
//   id: PropTypes.number,
// };

export default MachineById;
