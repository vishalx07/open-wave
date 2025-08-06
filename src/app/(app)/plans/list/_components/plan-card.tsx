"use client";

import Image from "next/image";
import { CheckCircleIcon } from "lucide-react";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { fPercent, fPrice, fValidity } from "@/utils/number";
import { type Plan } from "../../types";
import { PlanPurchaseDialog } from "./plan-purchase-dialog";

type Props = {
  data: Plan;
};

export const PlanCard = ({ data }: Props) => {
  const { name, roi, validity, maxReturn, minInvestment, maxInvestment } = data;
  const priceRange = `${fPrice(minInvestment)} - ${fPrice(maxInvestment)}`;

  const items = [
    {
      label: "ROI",
      value: fPercent(roi),
    },
    {
      label: "Referral Income",
      value: "10%",
    },
    {
      label: "Validity",
      value: fValidity(validity),
    },
    {
      label: "Maximum Return",
      value: fPercent(maxReturn),
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-md">
      <div className="relative">
        <Image
          src={data.image}
          alt={name}
          width={400}
          height={400}
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <Text
          as="h6"
          variant="h3"
          className="absolute bottom-4 left-4 font-bold text-white"
        >
          {name}
        </Text>
      </div>

      <CardContent className="flex flex-col gap-4">
        <div>
          <Text
            as="h4"
            variant="h3"
            gradient="blue"
          >
            {priceRange}
          </Text>
          <Text
            className="text-foreground-secondary"
            variant="paragraph"
          >
            Investment Range
          </Text>
        </div>

        <div className="flex w-full flex-col gap-4">
          {items.map((item, idx) => {
            const { label, value } = item;
            return (
              <div
                key={idx}
                className="flex justify-between"
              >
                <div className="flex gap-1">
                  <CheckCircleIcon
                    size={20}
                    className="text-success"
                  />
                  <Text as="p">{label}</Text>
                </div>
                <Text as="div">{value}</Text>
              </div>
            );
          })}
        </div>
        <PlanPurchaseDialog {...data} />
      </CardContent>
    </Card>
  );
};
