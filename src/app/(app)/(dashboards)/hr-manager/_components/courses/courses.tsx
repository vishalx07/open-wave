import { Search } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  DataTable,
  Input,
  Kbd,
  Text,
} from "@jamsr-ui/react";
import { Icons } from "@/configs/icon";
import { COLUMNS } from "./columns";
import { COURSES } from "./data";

export const Courses = () => {
  return (
    <Card className="col-span-2">
      <CardContent>
        <div className="flex h-12 items-center gap-2 pb-4">
          <Icons.WalletOutlined className="text-foreground-secondary size-5" />
          <Text
            as="h3"
            className="flex-1 font-medium"
          >
            Courses
          </Text>
          <div className="flex gap-3">
            <Input
              placeholder="Search..."
              startContent={<Search className="size-5" />}
              endContent={<Kbd keys={["command"]}>K</Kbd>}
              classNames={{
                inputWrapper: "border",
              }}
            />
            <Button
              size="sm"
              variant="outlined"
              className="text-foreground-secondary"
            >
              See All
            </Button>
          </div>
        </div>

        {/* Table */}
        <DataTable
          allowHover
          hidePagination
          data={COURSES}
          columns={COLUMNS}
          rowCount={COURSES.length}
          classNames={{
            base: "p-0 rounded-none pb-1",
            td: "h-16 py-0 md:group-hover/tr:bg-content2/50",
          }}
        />
      </CardContent>
    </Card>
  );
};
