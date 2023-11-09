import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="max-h-full w-full flex items-center justify-center">
      <SignIn />
    </div>
  );
}
