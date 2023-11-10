import { FC, ReactElement } from "react";
import { IconType } from "react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type StatsCardType = {
  loading: boolean;
  title: string;
  Icon: ReactElement<IconType>;
  helperText: string;
  value: string;
  className: string;
};

const StatsCard: FC<StatsCardType> = ({
  loading,
  title,
  Icon,
  helperText,
  value,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium tabular-nums text-muted-foreground">
          {title}
        </CardTitle>
        {Icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="pt-1 text-xs text-muted-foreground">{helperText}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
