"use client";

import { Avatar } from "@jamsr-ui/next";
import { Select, SelectItem } from "@jamsr-ui/react";

const countries = [
  {
    id: 1,
    name: "USD",
    image: "/icons/dashboard2/US.svg",
  },
  {
    id: 2,
    name: "EUR",
    image: "/icons/dashboard2/EU.svg",
  },
  {
    id: 3,
    name: "TRY",
    image: "/icons/dashboard2/US.svg",
  },
  {
    id: 4,
    name: "JPY",
    image: "/icons/dashboard2/US.svg",
  },
];

type Props = {
  defaultValue?: string[];
};

export const SelectCountry = ({ defaultValue }: Props) => {
  return (
    <Select
      size="sm"
      className="w-max shrink-0"
      classNames={{
        trigger: "border-0",
      }}
      defaultValue={defaultValue ?? ["USD"]}
      renderValue={(values) => {
        const value = values[0];
        const selectedCountry = countries.find((u) => u.name === value);
        if (!selectedCountry) return null;
        return (
          <div className="flex items-center gap-2">
            <Avatar
              alt={selectedCountry.name}
              className="size-5"
              size="xs"
              src={selectedCountry.image}
              width={50}
              height={50}
            />
            <span className="text-left text-sm">{selectedCountry.name}</span>
          </div>
        );
      }}
    >
      {countries.map((country) => {
        return (
          <SelectItem
            key={country.id}
            value={country.name}
          >
            <div className="flex items-center gap-2">
              <Avatar
                alt={country.name}
                className="size-5 shrink-0"
                size="xs"
                src={country.image}
                width={50}
                height={50}
              />
              <span className="text-left text-sm">{country.name}</span>
            </div>
          </SelectItem>
        );
      })}
    </Select>
  );
};
