import { Text } from "@jamsr-ui/react";
import { mockPlans } from "../_mock/plan";
import { PlanCard } from "./_components/plan-card";

export default function page() {
  return (
    <section className="relative">
      <div className="mb-12 text-center">
        <Text
          as="h1"
          variant="h1"
          className="text-gradient col-span-full text-center"
        >
          Investment Plans
        </Text>
        <Text className="text-foreground-secondary col-span-full text-center">
          Choose the perfect plan that matches your investment goals
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {mockPlans.map((data, ind) => {
          return (
            <PlanCard
              key={ind}
              data={data}
            />
          );
        })}
      </div>
    </section>
  );
}
