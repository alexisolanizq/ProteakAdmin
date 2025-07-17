/* eslint-disable react/prop-types */
import { Document, Page, Text, View } from "@react-pdf/renderer";
import PDFStyles from "src/utils/PDFStyles";

const formatDate = (timestamp) =>
  timestamp ? new Date(timestamp * 1000).toLocaleDateString() : "N/A";

const JobOrderPDF = ({ data }) => {
  const ot = data?.[0];
  const empresa = ot && JSON.parse(ot?.headerdatos)?.[0];

  return (
    <Document>
      <Page size="A4" style={PDFStyles.page}>

        <View>
          <View style={PDFStyles.section}>
            <Text style={PDFStyles.heading}>Orden de Trabajo #{ot?.folio}</Text>
            <Text style={PDFStyles.value}>Emitida por {ot?.created_by}</Text>
          </View>

          <View style={PDFStyles.content}>
            <View style={PDFStyles.block}>
              <Text style={PDFStyles.subheading}>Cliente</Text>
              <Text>
                {empresa?.nameemp} - RUT {empresa?.rutemp}
              </Text>
              <Text>
                {empresa?.addressemp}, {empresa?.comunaemp}, {empresa?.ciudademp}
              </Text>
              <Text>Teléfono: {empresa?.phoneemp}</Text>
            </View>
            <View style={PDFStyles.block}>
              <Text style={PDFStyles.subheading}>Equipo Asociado</Text>
              <View style={PDFStyles.row}>
                <Text>
                  <Text style={PDFStyles.label}>Nombre:</Text> {empresa?.asociado_a}
                </Text>
                <Text>
                  <Text style={PDFStyles.label}>Modelo:</Text>{" "}
                  {empresa?.modelo_matri}
                </Text>
              </View>
              <View style={PDFStyles.row}>
                <Text>
                  <Text style={PDFStyles.label}>Serie:</Text>{" "}
                  {empresa?.serie_matri.trim()}
                </Text>
                <Text>
                  <Text style={PDFStyles.label}>Zona:</Text> {empresa?.zona_matri}
                </Text>
              </View>
            </View>

            <View style={PDFStyles.block}>
              <Text style={PDFStyles.subheading}>Última Medición</Text>
              <View style={PDFStyles.row}>
                {empresa?.aplicaHr ? (
                  <Text>
                    <Text style={PDFStyles.label}>Horas:</Text>{" "}
                    {empresa?.hr_ultima_medicion}
                  </Text>
                ) : null}
                {empresa?.aplicaKm ? (
                  <Text>
                    <Text style={PDFStyles.label}>Km:</Text>{" "}
                    {empresa?.km_ultima_medicion}
                  </Text>
                ) : null}
                {empresa?.aplicaCic ? (
                  <Text>
                    <Text style={PDFStyles.label}>Ciclos:</Text>{" "}
                    {empresa?.cic_ultima_medicion}
                  </Text>
                ) : null}
                <Text>
                  <Text style={PDFStyles.label}>Fecha:</Text>{" "}
                  {formatDate(empresa?.fecha_ultima_medicion)}
                </Text>
              </View>
            </View>

            <View style={PDFStyles.block}>
              <Text style={PDFStyles.subheading}>Estado de la Orden</Text>
              <View style={PDFStyles.row}>
                <Text>
                  <Text style={PDFStyles.label}>Estado:</Text> {ot?.ot_estado_name}
                </Text>
                <Text>
                  <Text style={PDFStyles.label}>Estado Detención:</Text>{" "}
                  {ot?.estado_detencion}
                </Text>
                <Text>
                  <Text style={PDFStyles.label}>Estado Operativo:</Text>{" "}
                  {ot?.estado_operativo}
                </Text>
              </View>
              <View style={PDFStyles.row}>
                <Text>
                  <Text style={PDFStyles.label}>Fecha Inicio:</Text>{" "}
                  {formatDate(ot?.fecha_ini)}
                </Text>
                <Text>
                  <Text style={PDFStyles.label}>Fecha Estimada:</Text>{" "}
                  {formatDate(ot?.fecha_termino_estimado)}
                </Text>
              </View>
            </View>
            <View style={PDFStyles.block}>
              <Text style={PDFStyles.subheading}>Trabajo Solicitado</Text>
              <Text style={{ paddingBottom: 8 }}>
                <Text style={PDFStyles.label}>Taller:</Text> {ot?.taller}
              </Text>
              <Text style={{ paddingBottom: 8 }}>
                <Text style={PDFStyles.label}>Descripción:</Text> {ot?.obs}
              </Text>
            </View>
          </View>
        </View>

        <View style={PDFStyles.footer}>
          <View style={PDFStyles.firmas}>
            <View style={{ alignItems: "center" }}>
              <Text>______________________</Text>
              <Text style={{ marginTop: 4 }}>Gerente de Mantenimiento</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Text>______________________</Text>
              <Text style={{ marginTop: 4 }}>Supervisor</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Text>______________________</Text>
              <Text style={{ marginTop: 4 }}>Técnico</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default JobOrderPDF;
