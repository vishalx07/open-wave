"use client";

import { LogOut } from "lucide-react";
import {
  Button,
  Card,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text,
  Tooltip,
  useConfirmation,
} from "@jamsr-ui/react";
import { Logos } from "@/configs/icon";
import { TRUSTED_DEVICES } from "../data";

export const TrustedDevices = () => {
  const { confirm } = useConfirmation();

  const handleLogoutAll = () =>
    confirm({
      message: "Are you sure you want to logout all devices?",
      title: "Logout All",
      onConfirm() {},
      onCancel() {},
    });

  const handleLogout = () =>
    confirm({
      message: "Are you sure you want to logout this device?",
      title: "Logout",
      onConfirm() {},
      onCancel() {},
    });

  return (
    <Card>
      <CardHeader
        heading="Login Sessions"
        endContent={
          <Button
            size="sm"
            variant="outlined"
            startContent={<LogOut size={16} />}
            onClick={handleLogoutAll}
          >
            Logout All
          </Button>
        }
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
                  <Tooltip
                    showArrow
                    title="Logout this device"
                  >
                    <IconButton
                      label="Logout"
                      size="sm"
                      variant="light"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};
