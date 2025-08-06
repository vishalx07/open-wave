"use client";

import { CircleCheck, Coins, Network } from "lucide-react";
import {
  Avatar,
  Card,
  CardContent,
  CopyToClipboard,
  Divider,
  Text,
  toast,
} from "@jamsr-ui/react";
import { USER_REFERRAL_STATS } from "../data";

export const ReferralDetails = () => {
  const {
    fullName,
    avatarUrl,
    referralUrl,
    commissions,
    numberOfReferrals,
    verifiedReferrals,
    referralCode,
    sales,
  } = USER_REFERRAL_STATS;

  const onSuccess = () => {
    toast.success("Copied to clipboard");
  };

  const onError = () => {
    toast.error("Failed to copy to clipboard");
  };

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3.5">
            <Avatar
              alt={fullName}
              src={avatarUrl}
              size="xl"
              width={100}
              height={100}
            />
            <div className="space-y-0.5">
              <Text
                as="h3"
                variant="body2"
                className="font-semibold"
              >
                {fullName}
              </Text>
              <CopyToClipboard
                content={referralUrl}
                onSuccess={onSuccess}
                onError={onError}
              >
                {referralUrl}
              </CopyToClipboard>
            </div>
          </div>

          <div className="space-y-0.5">
            <Text
              variant="body1"
              className="font-medium"
            >
              Cummissions
            </Text>
            <Text
              variant="body4"
              className="font-semibold"
            >
              ${commissions}
            </Text>
          </div>
        </div>

        <Divider className="my-4" />

        <div className="flex flex-wrap items-center gap-6 lg:gap-12">
          <div className="flex items-center gap-2">
            <Network size={20} />
            <Text
              variant="paragraph"
              className="font-semibold"
            >
              {numberOfReferrals}
            </Text>
            <Text
              variant="paragraph2"
              className="text-foreground-secondary"
            >
              Number of referrals
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck size={20} />
            <Text
              variant="paragraph"
              className="font-semibold"
            >
              {verifiedReferrals}
            </Text>
            <Text
              variant="paragraph2"
              className="text-foreground-secondary"
            >
              Referral {referralCode}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Coins size={20} />
            <Text
              variant="paragraph"
              className="font-semibold"
            >
              {sales}
            </Text>
            <Text
              variant="paragraph2"
              className="text-foreground-secondary"
            >
              Sales
            </Text>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
