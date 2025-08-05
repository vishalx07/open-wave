"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpLeft } from "lucide-react";
import Illustration404 from "~/illustrations/illustration-404.svg";
import { Link } from "@jamsr-ui/next";
import { Text } from "@jamsr-ui/react";
import { APP_ROUTES } from "@/configs/routes";

export default function NotFound() {
  const router = useRouter();

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (counter === 0) {
      router.back();
      return;
    }

    const timer = setTimeout(() => {
      setCounter((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div className="container flex min-h-dvh items-center justify-center">
      <div className="flex max-w-sm flex-col items-center">
        <div className="space-y-4">
          <Text
            as="h1"
            variant="h2"
            className="text-center"
          >
            Page Not Found
          </Text>
          <Text
            variant="paragraph"
            className="text-foreground-secondary text-center"
          >
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Text>
        </div>

        <Illustration404 className="w-full max-w-xs" />

        <div className="mb-6 flex w-full items-center justify-center gap-12">
          <Link
            href={APP_ROUTES.home}
            className="flex items-center gap-2"
          >
            <ArrowUpLeft size={16} />
            Go to Home
          </Link>
          <Link
            href={"#"}
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <ArrowUpLeft size={16} />
            Go Back
          </Link>
        </div>

        <Text className="text-muted-foreground text-center text-sm">
          Redirecting back in {counter} seconds...
        </Text>
      </div>
    </div>
  );
}
