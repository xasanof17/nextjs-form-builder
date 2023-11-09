import { UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <header className="sticky left-0 top-0 w-full border-b border-border py-2">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-3">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
