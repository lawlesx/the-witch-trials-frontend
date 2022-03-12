import { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";

export const ConnectWalletButton: FC = () => {
  return (
    <button
      type="button"
      className="px-4 py-3 flex items-center bg-white border border-primary-500 rounded-md"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#8247E5" />
      </svg>
      <h1 className="font-semibold text-base text-primary-500 ml-2">
        Connect to Wallet
      </h1>
    </button>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  type?: "button" | "submit" | "reset" | undefined;
  href?: string;
}

export const Button: FC<ButtonProps> = ({
  variant,
  type = "button",
  href,
  children,
  ...rest
}) => {
  switch (variant) {
    case "primary":
      if (href)
        return (
          <Link href={href}>
            <a className="bg-primary-500 rounded-md w-[288px] py-3 text-2xl font-semibold text-white text-center">
              {children}
            </a>
          </Link>
        );
      return (
        <button
          className="bg-primary-500 rounded-md w-[288px] py-3 text-2xl font-semibold text-white"
          type={type}
          {...rest}
        >
          {children}
        </button>
      );
    case "secondary":
      if (href)
        return (
          <Link href={href}>
            <a className="bg-white border border-primary-500 rounded-md w-full py-3 text-xl font-semibold text-primary-500 text-center">
              {children}
            </a>
          </Link>
        );
      return (
        <button
          className="bg-white border border-primary-500 rounded-md w-full py-3 text-xl font-semibold text-primary-500"
          type={type}
          {...rest}
        >
          {children}
        </button>
      );
  }
};
