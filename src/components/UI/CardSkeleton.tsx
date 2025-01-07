import { Skeleton } from "@nextui-org/skeleton";
import { Card as NextUiCard, CardFooter, CardHeader } from "@nextui-org/card";

const CardSkeleton = () => {
  return (
    <NextUiCard isFooterBlurred className="border-none h-96 w-full" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-60 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="flex items-center justify-between p-2">
        <div className="w-3/4">
          <Skeleton className="my-2 w-2/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-3/5  rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-danger-300" />
          </Skeleton>
        </div>
        <div className="w-1/4">
          <Skeleton className="my-2 w-full rounded-full">
            <div className="h-8 w-full rounded-full bg-default-200" />
          </Skeleton>
        </div>
      </div>
    </NextUiCard>
  );
};

export default CardSkeleton;
