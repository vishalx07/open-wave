import { Share } from "lucide-react";
import { Button } from "@jamsr-ui/react";
import { fDateTime } from "@/utils/time";
import { TEAM_DATA } from "../../data";

export const Export = () => {
  return (
    <Button
      variant="flat"
      startContent={<Share size={16} />}
      onClick={exportTableToCSV}
    >
      Export
    </Button>
  );
};

// convert to CSV
function exportTableToCSV() {
  const filename = "my-referrals";

  // Extract headers from column definitions
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
