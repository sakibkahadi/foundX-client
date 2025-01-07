import { delay } from "@/src/utils/delay";

export default async function page() {
  await delay(2000);
  //   throw new Error("error");

  return (
    <div>
      <h1 className="text-orange-200">This is parallel route 1</h1>
    </div>
  );
}
