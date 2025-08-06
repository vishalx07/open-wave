import { Card, CardContent } from "@jamsr-ui/react";
import { GenealogyTree } from "@/components/genealogy";
import { mockGenealogyData } from "./_mock/genealogy-data";

export default function page() {
  return (
    <Card className="size-full border-none">
      <CardContent className="absolute inset-0 p-0">
        <div className="size-full overflow-hidden">
          <GenealogyTree nodes={mockGenealogyData} />
        </div>
      </CardContent>
    </Card>
  );
}
