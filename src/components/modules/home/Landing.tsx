import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

export default function Landing() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/fruits.png')] bg-no-repeat bg-cover bg-center ">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="search.."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-sm " />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
