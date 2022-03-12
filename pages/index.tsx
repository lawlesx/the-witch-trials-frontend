import type { NextPage } from "next";
import { Button } from "../Components/Button";
import Layout from "../Components/Layouts";
import NFTcard from "../Components/NFTcard";
import { Heading } from "../Components/TextComponents";

const Home: NextPage = () => {
  return (
    <Layout title="The Witch Trials">
      <div className="px-40 py-10 grid grid-cols-2 h-[75vh]">
        <div className="col-span-1 flex flex-col">
          <h1 className="text-gradient-1 font-semibold text-[56px]">
            Adipiscing hendrerit nunc et congue donec sed lorem
          </h1>
          <p className="font-medium text-2xl text-light-grey-500 mt-4 3xl:mt-8 mb-10 3xl:mb-16">
            Tincidunt in integer proin est aliquam purus, potenti id
            scelerisque. Auctor eget blandit tortor mattis mi purus amet.
          </p>
          <Button variant="primary" href="/sell">
            Auction an Item
          </Button>
        </div>
        <div className="col-span-1 flex justify-end">
          <NFTcard />
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Heading>Live Auctions</Heading>
      </div>
    </Layout>
  );
};

export default Home;
