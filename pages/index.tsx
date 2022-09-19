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
            A place for a NFT Auction
          </h1>
          <p className="font-medium text-2xl text-light-grey-500 mt-4 3xl:mt-8 mb-10 3xl:mb-16">
            Have an NFT that needs to be sold? We got you covered.
            Why not try our auction platform?
            Get the best price for your NFT.
          </p>
          <Button variant="primary" href="/sell">
            Auction an Item
          </Button>
        </div>
        <div className="col-span-1 flex justify-end">
          <NFTcard
            image="/images/bored-ape.svg"
            startTime="03:18:24"
            name="Virtual Art"
            basePrice={4.89}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-20 gap-10">
        <Heading>Live Auctions</Heading>
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
        />
      </div>
    </Layout>
  );
};

export default Home;
