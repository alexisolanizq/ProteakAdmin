import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderBottom: 1,
    borderBottomColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: 1,
    borderBottomColor: "#ccc",
  },
  tableColHeader: {
    width: "33.33%",
    borderRight: 1,
    borderRightColor: "#000",
    padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    width: "33.33%",
    borderRight: 1,
    borderRightColor: "#ccc",
    padding: 5,
  },
  footer: {
    marginTop: 30,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "bold",
  },
});
