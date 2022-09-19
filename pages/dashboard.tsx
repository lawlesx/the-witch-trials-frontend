import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../Components/Layouts'
import NFTcard from '../Components/NFTcard'
import { Heading } from '../Components/TextComponents'

const Dashboard = () => {
  const router = useRouter();
  return (
    <Layout title="The Witch Trials">
      <div className="flex flex-col items-center">
        <Heading>Marked Auction</Heading>
        <div className="w-full px-10 flex justify-center flex-wrap gap-10 m-10">
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
      </div>
      <div className="flex flex-col items-center">
        <Heading>Your NFTs for Auction</Heading>
        <div className="w-full px-10 flex justify-center flex-wrap gap-10 m-10">
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
      </div>
    </Layout>
  )
}

export default Dashboard