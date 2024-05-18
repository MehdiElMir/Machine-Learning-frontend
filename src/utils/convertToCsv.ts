export const convertToCSV = (data: any[]) => {
  const header = Object.keys(data[0]).join(",") + "\n";
  const rows = data
    .map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`)
        .join(",")
    )
    .join("\n");

  return header + rows;
};
