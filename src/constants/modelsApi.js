export const API_AUTH_LOGIN = "/login";
export const API_AUTH_REGISTER = "/register";
export const API_MACHINES = "/machines";
export const API_JOB_ORDERS = "/work-orders";

export const API_LOGIN_SOFTMANTTO = "/auth/Login";
export const API_MACHINES_SOFTMANTTO = "/Matris/6";
export const API_CECOS_SOFTMANTTO = "/CentroCosto/6";
export const API_OT_STATUS_SOFTMANTTO = "/EstadosOT";
export const API_WORKSHOP_SOFTMANTTO = "/taller/6/0";
export const API_OWNER_SOFTMANTTO = `/Propietario/6/0`;
export const API_CATEGORIES_SOFTMANTTO = `/CategoriaMaquina/6/0`;
export const API_MACHINE_BY_ID_SOFTMANTTO = "/Matri/idmatri";
export const API_RISK_RATING_SOFTMANTTO = "/ClasificacionRiesgo/6/0";
export const API_RESUME_REPORT_SOFTMANTTO = "/Informe/HojaVida/Matri/6/0/0/0";
export const API_DAILY_STATUS_SOFTMANTTO =
  "/Informe/EstadoDiario/6/0/0/0?utc_offset=-180";

export const API_OT_SOFTMANTTO = "/OT/6/1490/1420070400/1759814400";
export const API_ZONE_SOFTMANTTO = (matri) =>
  `/Matri/Zona/Movimiento/6/${matri}`;
export const API_OPERATIVE_STATE_SOFTMANTTO = (matri) =>
  `/EstadoOperativo/Matri/Historial/${matri}`;
export const API_EQUIPMENT_LIFE_SHEET_SOFTMANTTO =
  "/Informe/HojaVida/Matri/6/230/0/0";
export const API_AREA_SOFTMANTTO = "/Zona/6/0";
export const API_MACHINE_OT_SOFTMANTTO = ({ user = 1438, ot }) =>
  `OT/6/${user}?idot=${ot}`;

export const API_MACHINE_SERVICES = ({ id }) =>
  `MaquinaServicio/Compartimiento/6/0/${id}/0`;
export const API_MACHINE_MATERIALS_SERVICE = ({ id }) =>
  `MaquinaServicio/Materiales/1/0/${id}`;
export const API_USAGE_SHEETS_SOFTMANTTO = ({
  timestamp_start,
  timestamp_end,
}) => `/HojaUso/6/${timestamp_start}/${timestamp_end}/0`;
