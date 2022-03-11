import { FC } from "react";
import Link from "next/link";
import { ConnectWalletButton } from "./Button";

const Navbar: FC = () => {
  return (
    <div className="w-full py-10 px-40 flex justify-between items-center">
      <div className="text-lg font-bold text-primary-100">The Witch Trials</div>
      <div className="flex items-center gap-12">
        <NavLinks name="Explore" link="#" />
        <NavLinks name="Dashboard" link="#" />
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Navbar;

interface Props {
  link: string;
  name: string;
}

const NavLinks: FC<Props> = ({ link, name }) => {
  return (
    <Link href={link}>
      <a className="text-primary-100 font-semibold text-base">{name}</a>
    </Link>
  );
};
