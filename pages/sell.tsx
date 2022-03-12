import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import Layout from "../Components/Layouts";
import { Heading } from "../Components/TextComponents";
import * as yup from "yup";
import { InputField } from "../Components/Form";

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
  return (
    <Layout title="The Witch Trials | Sell">
      <div className="px-40 py-10 h-[75vh]">
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
          <Form className="flex flex-col w-2/5 mt-14 gap-16">
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
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default Sell;
