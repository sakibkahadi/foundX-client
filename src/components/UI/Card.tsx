import { IPost } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Card as NextUiCard, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";

const Card = ({ post }: { post: IPost }) => {
  const { title, category, images, city, dateFound, _id } = post || {};

  return (
    <NextUiCard isFooterBlurred className="border-none h-96 w-full" radius="lg">
      <CardHeader className="absolute top-1 z-10 flex-col items-center">
        <p className="absolute -top-0 ring-1 rounded-full bg-black px-2 text-tiny uppercase">
          {category?.name}
        </p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white">
          {title}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Woman listing to music"
        className="object-cover scale-120 z-0 h-full w-full -translate-y-6 bg-white "
        height={2000}
        src={images[0]}
        width={200}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-300">
        <div>
          <p className="text-tiny text-black">{city}</p>
          <p className="text-tiny text-black">
            {format(new Date(dateFound), "dd MMMM, yyyy")}
          </p>
        </div>
        <Button
          className="text-tiny text-white bg-black/20"
          radius="full"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;
