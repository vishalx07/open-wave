import { Share } from "lucide-react";
import { Button } from "@jamsr-ui/react";
import { TEAM_DATA } from "../data";
import { COLUMNS } from "./columns";

export const Export = () => {
  return (
    <>
      <Button
        variant="flat"
        startContent={<Share size={16} />}
        onClick={exportTableToCSV}
      >
        Export
      </Button>
    </>
  );
};

// convert to CSV
function exportTableToCSV() {
  const filename = "table";

  // Extract headers from column definitions
  const headers = COLUMNS.map((column) =>
    typeof column.header === "string" ? column.header : "",
  );

  // Extract rows
  const rows = TEAM_DATA.map((row) => {
    return COLUMNS.map((column) => {
      const key = column.accessorKey as keyof typeof row;

      // Special handling for each key type
      switch (key) {
        case "createdAt":
          return row.createdAt;
        case "plans":
          return row.plans.length > 0 ? row.plans.join("; ") : "No plans";
        case "status":
        case "fullname":
        case "username":
        case "userId":
        case "email":
        case "country":
        case "phoneNumber":
          return row[key];
        default:
          return row[key] ?? "";
      }
    });
  });

  // Combine headers and rows into CSV string
  const csvContent = [
    headers.join(","),
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
