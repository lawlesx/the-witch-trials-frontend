import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../Components/Layouts";
import NFTcard from "../Components/NFTcard";

const Explore: NextPage = () => {
  const router = useRouter();
  return (
    <Layout title="The Witch Trials | Explore">
      <div className="w-full px-10 flex justify-center flex-wrap gap-10">
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
          onClick={() => router.push("/auction")}
        />
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
          onClick={() => router.push("/auction")}
        />
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
          onClick={() => router.push("/auction")}
        />
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
          onClick={() => router.push("/auction")}
        />
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
          onClick={() => router.push("/auction")}
        />
        <NFTcard
          image="/images/bored-ape.svg"
          startTime="03:18:24"
          name="Virtual Art"
          basePrice={4.89}
          onClick={() => router.push("/auction")}
        />
      </div>
    </Layout>
  );
};

export default Explore;
