import { LogOut } from "lucide-react";
import { Link } from "@jamsr-ui/next";
import {
  Card,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
} from "@jamsr-ui/react";
import { Logos } from "@/configs/icon";
import { TRUSTED_DEVICES } from "../data";

export const TrustedDevices = () => {
  return (
    <Card>
      <CardHeader
        heading="Account"
        className="border-divider border-b p-4"
      />
      <Table
        allowHover
        variant="bordered"
        className="rounded-none"
        classNames={{
          td: "p-4 text-foreground-secondary",
        }}
      >
        <TableBody>
          {TRUSTED_DEVICES.map((device, index) => {
            const { location, lastActive, os } = device;
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2.5">
                    <Logos.Chrome className="size-6" />
                    <div className="space-y-0.5">
                      <Text
                        variant="paragraph"
                        className="text-foreground"
                      >
                        Chrome
                      </Text>
                      <Text variant="caption">
                        {location.city}, {location.country} {location.flag}
                      </Text>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-0.5">
                    <Text variant="paragraph">{os}</Text>
                    <Text variant="paragraph2">Active: {lastActive}</Text>
                  </div>
                </TableCell>
                <TableCell>
                  <IconButton
                    label="Logout"
                    size="sm"
                    variant="light"
                  >
                    <LogOut size={16} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center p-4">
        <Link
          href={"#"}
          underline="always"
          variant="paragraph2"
        >
          Manage Trusted Devices
        </Link>
      </div>
    </Card>
  );
};
