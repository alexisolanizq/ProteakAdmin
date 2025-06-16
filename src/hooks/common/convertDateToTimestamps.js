export const getUTCMidnightTimestamp = (dateString) => {
  const date = new Date(dateString);
  const utcDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return Math.floor(utcDate.getTime() / 1000);
};

export const convertDatesToTimestamps = (startDate, endDate) => {
  const customStartDate = new Date("01/01/2022");

  const getCustomStartDate = getUTCMidnightTimestamp(customStartDate);

  const now = new Date();

  // Primer día del mes actual (UTC)
  const defaultStartDate = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), 1)
  );
  // Hoy (UTC)
  const defaultEndDate = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );

  const startTimestamp = getUTCMidnightTimestamp(
    startDate || defaultStartDate.toISOString().split("T")[0]
  );

  const endTimestamp = getUTCMidnightTimestamp(
    endDate || defaultEndDate.toISOString().split("T")[0]
  );

  return { startTimestamp: getCustomStartDate, endTimestamp };
};
