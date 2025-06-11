import { GridLogicOperator } from "@mui/x-data-grid";

export const filterStatus = (nameStatus, value) => ({
  items: [{ id: 1, field: nameStatus, operator: "is", value: value ?? "true" }],
  linkOperator: GridLogicOperator.And,
});

export const sorting = (field, sort = "asc") => ({
  sortModel: [{ field, sort }],
});

export const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  return window.crypto.subtle.digest("SHA-256", data).then((hashBuffer) => {
    // Convertimos el ArrayBuffer en una cadena hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
};
