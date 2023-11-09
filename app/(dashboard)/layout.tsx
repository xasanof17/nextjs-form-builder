import { Navbar } from "@/layouts";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex max-h-screen min-h-screen min-w-full flex-col bg-background">
      <Navbar />
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}
