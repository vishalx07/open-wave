import { Link } from "@jamsr-ui/next";
import { Card, CardContent, CardFooter, CardHeader } from "@jamsr-ui/react";
import { DATA } from "./data";
import { TopCountriesChart } from "./top-countries-chart";

export const TopCountries = () => {
  const { categories, color } = DATA;
  return (
    <Card>
      <CardHeader
        heading="Top Countries"
        endContent={
          <Link
            href={"#"}
            variant="paragraph"
            className="font-medium"
          >
            Reports
          </Link>
        }
      />
      <CardContent>
        <TopCountriesChart />
      </CardContent>
      <CardFooter className="border-divider border-t border-dashed py-6">
        <div className="text-foreground-secondary flex w-full flex-wrap justify-center gap-4 text-xs">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <span
                className="size-2 rounded-full"
                style={{
                  backgroundColor: `var(--ui-${color[index]})`,
                }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
