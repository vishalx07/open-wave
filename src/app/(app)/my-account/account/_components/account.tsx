import React from "react";
import { Copy, SquarePen } from "lucide-react";
import {
  Avatar,
  Card,
  CardHeader,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@jamsr-ui/react";
import { Logos } from "@/configs/icon";
import { ACCOUNT } from "../data";

export const Account = () => {
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
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>150x150px JPEG, PNG Image</TableCell>
            <TableCell className="flex items-center justify-center">
              <Avatar
                src={ACCOUNT.avatarUrl}
                alt={ACCOUNT.name}
                size="xl"
                className="mx-auto"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>
              <p className="text-foreground">{ACCOUNT.name}</p>
            </TableCell>
            <TableCell className="text-center">
              {EditButton("Edit Name")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Availability</TableCell>
            <TableCell>
              <Chip
                size="sm"
                variant="flat"
                color="success"
              >
                {ACCOUNT.availability}
              </Chip>
            </TableCell>
            <TableCell className="text-center">
              {EditButton("Edit Status")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{ACCOUNT.email}</TableCell>
            <TableCell className="text-center">
              {EditButton("Edit Email")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Password</TableCell>
            <TableCell>
              Password last changed {ACCOUNT.passwordLastChanged}
            </TableCell>
            <TableCell className="text-center">
              {EditButton("Edit Password")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sign-in with</TableCell>
            <TableCell>
              <div className="flex gap-2.5">
                {ACCOUNT.signInWith.map((item) => {
                  return (
                    <React.Fragment key={item}>
                      <div className="border-divider flex size-8 items-center justify-center rounded-full border">
                        {item === "google" && (
                          <Logos.Google className="size-4" />
                        )}
                        {item === "facebook" && (
                          <Logos.Facebook className="size-4" />
                        )}
                        {item === "apple" && <Logos.Apple className="size-4" />}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </TableCell>
            <TableCell className="text-center">
              {EditButton("Edit Sing-in")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Referral Link</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <p className="text-foreground">{ACCOUNT.referralLink}</p>
                <Copy
                  size={16}
                  className="cursor-pointer"
                />
              </div>
            </TableCell>
            <TableCell className="text-center">
              {EditButton("Edit Name")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

function EditButton(label: string) {
  return (
    <IconButton
      label={label}
      size="sm"
      variant="light"
      className="text-primary"
    >
      <SquarePen size={16} />
    </IconButton>
  );
}
