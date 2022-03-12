import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { FC, useState } from "react";
import Layout from "../Components/Layouts";
import { Heading } from "../Components/TextComponents";
import * as yup from "yup";
import { Button } from "../Components/Button";
import Image from "next/image";

const formSchema = yup.object({
  bidAmount: yup
    .string()
    .matches(/^([0-9]*[.])?[0-9]*$/, "Please enter only numbers")
    .required("Bid Amount is required"),
});

type FormTypes = yup.InferType<typeof formSchema>;

const Auction: NextPage = () => {
  const [winner, setWinner] = useState(false);

  return (
    <Layout title="The Witch Trials | Auction">
      {winner ? (
        <Winner />
      ) : (
        <div className="w-full px-40 grid grid-cols-2">
          <div className="col-span-1 flex flex-col gap-10 w-full">
            <div className="flex items-center">
              <span className="w-6 h-6 bg-success-500 rounded-full mr-2"></span>
              <Heading>Live Auction</Heading>
            </div>
            <div className="flex items-center justify-between w-3/4">
              <div>
                <Title>12554 MATIC</Title>
                <Subtitle>Base Price</Subtitle>
              </div>
              <div>
                <Title>14:32:23</Title>
                <Subtitle>Ends in</Subtitle>
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-dark-grey-700 text-light-grey-600 font-semibold text-base w-4/5">
              Highest bid reverts time back to{" "}
              <span className="text-light-grey-100">5min.</span>
            </div>
            <div className="flex items-center justify-between w-3/4">
              <div>
                <Title>50 MATIC</Title>
                <Subtitle>Price Increment</Subtitle>
              </div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-dark-grey-700 text-light-grey-600 font-semibold text-base w-4/5">
              Auction ID:{" "}
              <span className="text-light-grey-100">1AYUETS4584</span>
            </div>
            <div className="flex items-center justify-between">
              <Title dim>Highest Bid</Title>
              <div className="px-4 py-3 bg-white rounded-md outline-none flex items-center justify-between w-1/2">
                <h1 className="text-dark-grey-100 font-semibold text-lg">
                  7.3125
                </h1>
                <h1 className="text-dark-grey-100 font-semibold text-lg">
                  MATIC
                </h1>
              </div>
            </div>
            <Formik<FormTypes>
              initialValues={{
                bidAmount: "",
              }}
              validationSchema={formSchema}
              onSubmit={(values) => {
                console.log(values);
                setWinner(true);
              }}
            >
              <Form className="w-full">
                <div className="flex items-center justify-between mb-16 relative">
                  <Title>Your Bid</Title>
                  <div className="px-4 py-3 bg-white rounded-md outline-none flex items-center justify-between w-1/2">
                    <Field
                      name="bidAmount"
                      className="text-black font-semibold text-lg outline-none w-3/4"
                      placeholder="Your Bid"
                    />
                    <h1 className="text-black font-semibold text-lg">MATIC</h1>
                  </div>
                  <ErrorMessage
                    component="p"
                    name="bidAmount"
                    className="text-error-400 text-sm font-medium ml-1 absolute -bottom-6 right-1"
                  />
                </div>
                <Button variant="primary" type="submit">
                  Place a bid
                </Button>
              </Form>
            </Formik>
          </div>
          <div className="col-span-1 pl-20 w-full">
            <div className="relative w-full h-4/5 3xl:h-full">
              <Image
                src="/images/bored-ape.svg"
                layout="fill"
                objectFit="cover"
                alt="NFT image"
                className="ml-20"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Auction;

const Title: FC<{ dim?: boolean }> = ({ dim, children }) => {
  return (
    <h1
      className={`font-semibold text-[32px] ${
        dim ? "text-light-grey-600" : "text-light-grey-100"
      }`}
    >
      {children}
    </h1>
  );
};

const Subtitle: FC = ({ children }) => {
  return (
    <p className="font-semibold text-base text-light-grey-600">{children}</p>
  );
};

const Winner: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Heading>Congratulations !</Heading>
      <h1 className="font-medium text-2xl text-light-grey-600">
        You`ve won{" "}
        <span className="font-semibold text-light-grey-100">The Bored Ape</span>
      </h1>
      <div className="relative w-1/5 h-[50vh] overflow-hidden rounded-lg">
        <Image
          src="/images/bored-ape.svg"
          layout="fill"
          objectFit="cover"
          alt="NFT image"
          className="ml-20"
        />
      </div>
      <div className="px-4 py-3 rounded-lg bg-dark-grey-700 text-light-grey-600 font-semibold text-base">
        Winning Bid: <span className="text-light-grey-100">721.25 MATIC</span>
      </div>
      <Button variant="primary" href="/dashboard">
        Go to Dashboard
      </Button>
    </div>
  );
};

const Loser: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Heading>Better luck next time </Heading>
      <h1 className="font-medium text-2xl text-light-grey-600">
        We are sorry you didn’t win this time
      </h1>
      <div className="relative w-1/5 h-[50vh] overflow-hidden rounded-lg">
        <Image
          src="/images/bored-ape.svg"
          layout="fill"
          objectFit="cover"
          alt="NFT image"
          className="ml-20"
        />
      </div>
      <div className="px-4 py-3 rounded-lg bg-dark-grey-700 text-light-grey-600 font-semibold text-base">
        Winning Bid: <span className="text-light-grey-100">721.25 MATIC</span>
      </div>
      <Button variant="primary" href="/dashboard">
        Go to Dashboard
      </Button>
    </div>
  );
};
