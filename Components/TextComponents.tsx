import { FC } from "react";

export const Heading: FC = ({ children }) => {
  return (
    <div className="relative max-w-max z-[1]">
      <div className="w-[45%] h-9 rounded-sm bg-primary-500 absolute bottom-1 -right-3 z-[-1]"></div>
      <h1 className="text-[56px] text-light-grey-100 font-semibold">
        {children}
      </h1>
    </div>
  );
};
