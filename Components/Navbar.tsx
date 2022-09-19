import { FC } from "react";
import Link from "next/link";
import { ConnectWalletButton } from "./Button";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <div className="w-full py-8 px-40 flex justify-between items-center sticky top-0 z-10 backdrop-blur-xl">
      <Link href="/">
        <a className="text-lg font-bold text-primary-100">The Witch Trials</a>
      </Link>
      <div className="flex items-center gap-12">
        <NavLinks
          name="Sell"
          link="/sell"
          selected={router.asPath === "/sell"}
        />
        <NavLinks
          name="Explore"
          link="/explore"
          selected={router.asPath === "/explore"}
        />
        <NavLinks name="Dashboard" link="/dashboard" selected={router.asPath === "/dashboard"} />
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Navbar;

interface Props {
  link: string;
  name: string;
  selected?: boolean;
}

const NavLinks: FC<Props> = ({ link, name, selected }) => {
  return (
    <Link href={link}>
      <a
        className={`font-semibold text-base ${selected ? "text-primary-400" : "text-primary-100"
          }`}
      >
        {name}
      </a>
    </Link>
  );
};
