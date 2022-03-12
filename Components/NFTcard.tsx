import { FC, MouseEventHandler } from "react";
import Image from "next/image";
import { Button } from "./Button";

interface Props {
  onClick?: MouseEventHandler;
  image: string;
  startTime: string;
  name: string;
  basePrice: number;
}

const NFTcard: FC<Props> = ({ onClick, basePrice, name, startTime, image }) => {
  return (
    <div className="w-[25rem] h-[34rem] bg-[#3D2942] p-6 flex flex-col gap-6">
      <div className="h-3/5 w-full relative z-[1]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="NFT image"
          priority
          className="z-[-1]"
        />
        <div className="font-semibold text-xl tracking-wide px-10 py-2 z-10 absolute bottom-0 left-0 bg-primary-500 text-light-grey-200">
          {startTime}
        </div>
      </div>
      <div className="text-light-grey-200 font-medium text-[28px]">{name}</div>
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl text-light-grey-500">Base Price</p>
        <h1 className="font-bold text-2xl text-light-grey-200">
          {basePrice} MATIC
        </h1>
      </div>
      <Button variant="secondary" onClick={onClick}>
        Place a bid
      </Button>
    </div>
  );
};

export default NFTcard;
