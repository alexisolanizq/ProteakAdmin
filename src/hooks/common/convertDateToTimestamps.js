export const convertDatesToTimestamps = ({
  startDate = null,
  endDate = null,
  singleDate = null,
} = {}) => {
  const toSeconds = (dateStr) => Math.floor(new Date(dateStr).getTime() / 1000);

  if (singleDate) {
    return { date: toSeconds(singleDate) };
  }

  if (startDate && endDate) {
    return { start: toSeconds(startDate), end: toSeconds(endDate) };
  }

  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  return {
    today: Math.floor(now.getTime() / 1000),
    firstDayOfMonth: Math.floor(firstDayOfMonth.getTime() / 1000),
  };
};
