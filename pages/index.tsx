import type { NextPage } from "next";
import { Button } from "../Components/Button";
import Layout from "../Components/Layouts";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="px-40 py-10 grid grid-cols-2 h-[75vh]">
        <div className="col-span-1 flex flex-col">
          <h1 className="text-gradient-1 font-semibold text-[56px]">
            Adipiscing hendrerit nunc et congue donec sed lorem
          </h1>
          <p className="font-medium text-2xl text-light-grey-500 mt-4 3xl:mt-8 mb-10 3xl:mb-16">
            Tincidunt in integer proin est aliquam purus, potenti id
            scelerisque. Auctor eget blandit tortor mattis mi purus amet.
          </p>
          <Button variant="primary">Sell</Button>
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="border border-primary-100 p-4 flex flex-col w-1/2 h-full">
            <h1 className="font-semibold text-2xl text-primary-100">
              Bored Ape
            </h1>
            <div className="h-full w-full relative">
              <Image
                src="/images/bored-ape.svg"
                layout="fill"
                alt="Bored Ape"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
