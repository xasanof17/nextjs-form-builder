import { getFormStats } from "@/actions/form";
import { Suspense } from "react";
import StatsCards from "@/components/StatsCards";
import { Separator } from "@/components/ui/separator";
import Forms from "@/components/Forms";

export default function Home() {
  return (
    <div className="container flex flex-col pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Forms />
    </div>
  );
}

async function CardStatsWrapper() {
  try {
    const stats = await getFormStats();
    return <StatsCards loading={false} data={stats} />;
  } catch (error) {
    // Handle the error, e.g., show an error message or log it.
    console.error("Error fetching form stats:", error);
    return <div>Error loading stats</div>;
  }
}
