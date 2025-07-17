import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  section: { marginBottom: 40 },
  heading: {
    fontSize: 16,
    marginBottom: 4,
    color: "#1a202c",
    fontWeight: "bold",
  },
  subheading: { fontSize: 12, fontWeight: "bold", marginBottom: 8 },
  label: { fontWeight: "bold", color: "#4a5568" },
  value: { color: "#2d3748" },
  row: {
    gap: 10,
    marginBottom: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content:{
    display: "flex",
    flexDirection: 'column',
    gap: 20,
  },
  block: {
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
    paddingBottom: 8,
    marginBottom: 2,
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
  },
  firmas: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 10,
  },
});
