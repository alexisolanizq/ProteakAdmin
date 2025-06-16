/* eslint-disable react/prop-types */
import { Document, Page, Text, View } from "@react-pdf/renderer";
import PDFStyles from "src/utils/PDFStyles";

const JobOrderPDF = ({ ot = { workOrderID: "1" } }) => {
  const { workOrderID } = ot;

  return (
    <Document>
      <Page size="A4" style={PDFStyles.page}>
        <Text>Orden de trabajo #{workOrderID}</Text>
        <View style={PDFStyles.section}>
          <Text style={PDFStyles.sectionTitle}>Datos del Cliente</Text>
          <Text>Nombre:</Text>
          <Text>Teléfono:</Text>
          <Text>Dirección:</Text>
          <Text>Fecha: </Text>
        </View>

        <View style={PDFStyles.section}>
          <Text style={PDFStyles.sectionTitle}>Servicios</Text>
          <View style={PDFStyles.table}>
            <View style={PDFStyles.tableHeader}>
              <Text style={PDFStyles.tableColHeader}>Descripción</Text>
              <Text style={PDFStyles.tableColHeader}>Cantidad</Text>
              <Text style={PDFStyles.tableColHeader}>Precio</Text>
            </View>
            {[].map((item, idx) => (
              <View style={PDFStyles.tableRow} key={idx}>
                <Text style={PDFStyles.tableCol}></Text>
                <Text style={PDFStyles.tableCol}></Text>
                <Text style={PDFStyles.tableCol}>$</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={PDFStyles.footer}>
          <Text>
            Total: ${[].reduce((sum, s) => sum + s.quantity * s.price, 0)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default JobOrderPDF;
