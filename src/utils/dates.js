export const formatDate = (timestamp) => timestamp ? new Date(timestamp * 1000).toLocaleDateString() : "—";
