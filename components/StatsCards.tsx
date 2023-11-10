import StatsCard from "./StatsCard";
import { getFormStats } from "@/actions/form";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

const StatsCards = (props: StatsCardProps) => {
  const { data, loading } = props;
  return (
    <div className="grid w-full grid-cols-1 gap-4 pt-0 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        Icon={<LuView className="text-xl text-blue-600" />}
        title="Total visits"
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        Icon={<FaWpforms className="text-xl text-yellow-600" />}
        title="Total submissions"
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        Icon={<HiCursorClick className="text-xl text-green-500" />}
        title="Submission rate"
        helperText="Visits that result in form submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-green-500"
      />
      <StatsCard
        Icon={<TbArrowBounce className="text-xl text-red-600" />}
        title="Bounce Rate"
        helperText="Visits that leaves without interacting"
        value={data?.bounceRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
};

export default StatsCards;
