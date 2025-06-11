const renderDato = (label, value, suffix = "") => (
  <div>
    <p className="font-medium text-gray-600">{label}</p>
    <p>
      {value ?? "—"}
      {value && suffix}
    </p>
  </div>
);

export default renderDato;
