export const persistUpload = (): void => {
  localStorage.setItem("upload", "true");
};

export const readUpload = (): string => {
  return localStorage.getItem("upload") || "";
};

export const deleteUpload = (): void => localStorage.removeItem("upload");
