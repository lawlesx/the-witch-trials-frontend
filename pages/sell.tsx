import { Form, Formik } from "formik";
import type { NextPage } from "next";
import Layout from "../Components/Layouts";
import { Heading } from "../Components/TextComponents";
import * as yup from "yup";
import { InputField } from "../Components/Form";
import { Button } from "../Components/Button";
import { FC, useState } from "react";

const formSchema = yup.object({
  nftAddress: yup.string().required("Required"),
  basePrice: yup
    .string()
    .matches(/^([0-9]*[.])?[0-9]*$/, "Please enter only numbers")
    .required("Required"),
  startTime: yup.string().required("Start time should be specified"),
});

type FormTypes = yup.InferType<typeof formSchema>;

const Sell: NextPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Layout title="The Witch Trials | Sell">
      {isSubmitted ? (
        <AuctionItemPlaced />
      ) : (
        <div className="px-40 py-10">
          <Heading>Enter NFT Details to start an Auction</Heading>
          <Formik<FormTypes>
            initialValues={{
              nftAddress: "",
              basePrice: "",
              startTime: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="flex flex-col items-center w-2/5 mt-14 gap-16">
              <InputField
                name="nftAddress"
                title="NFT Address"
                placeholder="0x3D02B87ae906F1D6f130832f67E5c10C9f8692XY"
                description="NFT should exist on Matic Network (chain 137 or 80001)"
              />
              <InputField
                name="basePrice"
                title="Base Price"
                placeholder="12"
                description="Please Enter Matic Amount"
              />
              <InputField
                name="startTime"
                title="Start Time"
                placeholder="12 PM IST"
              />
              <Button
                type="submit"
                variant="primary"
                onClick={() => setIsSubmitted(true)}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      )}
    </Layout>
  );
};

export default Sell;

const AuctionItemPlaced: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16">
      <svg
        width="296"
        height="296"
        viewBox="0 0 296 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="148" cy="148" r="148" fill="#2D9017" />
        <path
          d="M195.325 117.884L135.093 178.116L104.977 148"
          stroke="#0F1D40"
          strokeWidth="13.7674"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Heading>Your NFT has been listed successfully</Heading>
      <Button variant="primary" href="/">
        Go to Dashboard
      </Button>
    </div>
  );
};
