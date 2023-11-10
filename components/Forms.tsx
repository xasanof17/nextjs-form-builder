import CreateFormBtn from "./CreateFormBtn";
import { Separator } from "./ui/separator";

type Props = {};

const Forms = (props: Props) => {
  return (
    <section id="forms" className="flex flex-col items-start">
      <Separator className="my-6" />
      <h2 className="col-span-2 text-3xl font-bold">Your forms</h2>
      <Separator className="my-6" />
      <CreateFormBtn />
    </section>
  );
};

export default Forms;
