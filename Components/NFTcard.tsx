import { FC } from "react";
import Image from "next/image";
import { Button } from "./Button";

const NFTcard: FC = () => {
  return (
    <div className="w-[25rem] h-[34rem] bg-[#3D2942] p-6 flex flex-col gap-6">
      <div className="h-3/5 w-full relative z-[1]">
        <Image
          src="/images/bored-ape.svg"
          layout="fill"
          objectFit="cover"
          alt="NFT image"
          priority
          className="z-[-1]"
        />
        <div className="font-semibold text-xl tracking-wide px-10 py-2 z-10 absolute bottom-0 left-0 bg-primary-500 text-light-grey-200">
          03:18:24
        </div>
      </div>
      <div className="text-light-grey-200 font-medium text-[28px]">
        Virtual Art
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl text-light-grey-500">Current Bid</p>
        <h1 className="font-bold text-2xl text-light-grey-200">4.89 ETH</h1>
      </div>
      <Button variant="secondary">Place a bid</Button>
    </div>
  );
};

export default NFTcard;
