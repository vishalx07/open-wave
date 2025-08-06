import Excel from "exceljs";
import { saveAs } from "file-saver";
import { EllipsisVertical } from "lucide-react";
import { IconButton, Menu, MenuItem } from "@jamsr-ui/react";
import { fDateTime } from "@/utils/time";
import { TEAM_DATA } from "../data";

export const MoreActions = () => {
  return (
    <Menu
      trigger={
        <IconButton
          label="More Actions"
          variant="light"
          size="sm"
        >
          <EllipsisVertical size={16} />
        </IconButton>
      }
    >
      <MenuItem onClick={exportTableToCSV}>Export to CSV</MenuItem>
      <MenuItem onClick={exportTableToExcel}>Export to Excel</MenuItem>
    </Menu>
  );
};

// convert to Excel
async function exportTableToExcel() {
  const filename = "all-members";

  const headers = [
    { key: "fullname", label: "Fullname" },
    { key: "email", label: "Email" },
    { key: "userId", label: "User ID" },
    { key: "username", label: "Username" },
    { key: "country", label: "Country" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "status", label: "Status" },
    { key: "plans", label: "Plans" },
    { key: "createdAt", label: "Created At" },
  ] as const;

  const workSheetName = "Worksheet-1";

  const workbook = new Excel.Workbook();

  const rows = TEAM_DATA.map((row) => {
    return headers.map((header) => {
      const key = header.key;

      switch (key) {
        case "createdAt":
          return fDateTime(row.createdAt);
        case "plans":
          return row.plans.length > 0 ? row.plans.join(", ") : "No plans";
        default:
          return row[key] ?? "";
      }
    });
  });

  try {
    // creating one worksheet in workbook
    const worksheet = workbook.addWorksheet(workSheetName);

    // add worksheet columns
    // each columns contains header and its mapping key from data
    worksheet.columns = headers.map((header) => ({
      header: header.label,
      key: header.key,
    }));

    // updated the font for first row & first column.
    worksheet.getRow(1).font = { bold: true };
    worksheet.getColumn(1).font = { bold: true };

    // loop through all of the columns and set the alignment with width.
    worksheet.columns.forEach((column) => {
      column.width = column.key!.length + 5;
      if (column.key === "email") {
        column.width = 25;
      } else if (column.key === "plans") {
        column.width = 20;
      } else if (column.key === "createdAt") {
        column.width = 20;
      }
      column.alignment = { horizontal: "left" };
    });

    // loop through data and add each one to worksheet
    rows.forEach((singleData) => {
      worksheet.addRow(singleData);
    });

    // loop through all of the rows and set the outline style.
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      // store each cell to currentCell
      const currentCell = row._cells;

      // loop through currentCell to apply border only for the non-empty cell of excel
      currentCell.forEach((singleCell) => {
        // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
        const cellAddress = singleCell._address;

        // apply border
        worksheet.getCell(cellAddress).border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    // write the content using writeBuffer
    const buf = await workbook.xlsx.writeBuffer();

    // download the processed file
    saveAs(new Blob([buf]), `${filename}.xlsx`);
  } catch (error: any) {
    console.error("<<<ERRROR>>>", error);
    console.error("Something Went Wrong", error.message);
  } finally {
    // removing worksheet's instance to create new one
    workbook.removeWorksheet(workSheetName);
  }
}

// convert to CSV
function exportTableToCSV() {
  const filename = "all-members";

  const headers = [
    { key: "fullname", label: "Fullname" },
    { key: "email", label: "Email" },
    { key: "userId", label: "User ID" },
    { key: "username", label: "Username" },
    { key: "country", label: "Country" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "status", label: "Status" },
    { key: "plans", label: "Plans" },
    { key: "createdAt", label: "Created At" },
  ] as const;

  // Extract rows
  const rows = TEAM_DATA.map((row) => {
    return headers.map((header) => {
      const key = header.key;

      switch (key) {
        case "createdAt":
          return fDateTime(row.createdAt);
        case "plans":
          return row.plans.length > 0 ? row.plans.join(", ") : "No plans";
        default:
          return row[key] ?? "";
      }
    });
  });

  // Combine headers and rows into CSV string
  const csvContent = [
    headers.map((header) => header.label).join(","),
    ...rows.map((row) =>
      row
        .map((cell) => {
          const escaped = String(cell).replace(/"/g, '""'); // escape double quotes
          return `"${escaped}"`;
        })
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
