"use client";

import React from "react";
import { SquarePen } from "lucide-react";
import {
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
import { fDateTime } from "@/utils/time";
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
          td: "p-4 text-foreground-secondary h-[65px]",
        }}
      >
        <TableBody>
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
            <TableCell>User Id</TableCell>
            <TableCell>
              <p>{ACCOUNT.userId}</p>
            </TableCell>
            <TableCell className="text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>
              <p>{ACCOUNT.username}</p>
            </TableCell>
            <TableCell className="text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>
              <Chip
                size="sm"
                variant="flat"
                color="success"
              >
                {ACCOUNT.status}
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
            <TableCell>Last changed {ACCOUNT.passwordLastChanged}</TableCell>
            <TableCell className="text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Plans</TableCell>
            <TableCell>
              <div className="flex flex-wrap items-center gap-2.5">
                {ACCOUNT.activePlans.map((item) => (
                  <Chip
                    key={item}
                    size="sm"
                    color="success"
                    variant="dot"
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-center"></TableCell>
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
            <TableCell className="text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Referral Id</TableCell>
            <TableCell>{ACCOUNT.referralId}</TableCell>
            <TableCell className="text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Members Since</TableCell>
            <TableCell>{fDateTime(ACCOUNT.referralId)}</TableCell>
            <TableCell className="text-center"></TableCell>
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
