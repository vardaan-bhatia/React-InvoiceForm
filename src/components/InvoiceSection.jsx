import React from "react";
import { Formik, Form } from "formik";
import { CalendarDays, ChevronDown, DollarSign, PlusIcon } from "lucide-react";
import * as Yup from "yup";
import { FormikInput, FormRow } from "./common/FormikFields";

const InvoiceSection = () => {
  const vendorValidationSchema = Yup.object({
    vendor: Yup.string().required("Please select a vendor"),
  });

  const invoiceValidationSchema = Yup.object({
    purchaseOrder: Yup.string().required("Purchase Order is required"),
    invoiceDate: Yup.date().required("Invoice Date is required"),
  });

  const vendors = [
    { value: "A - 1 Exterminators", label: "A - 1 Exterminators" },
  ];

  const purchaseOrders = [
    { value: "PO-001", label: "PO-001" },
    { value: "PO-002", label: "PO-002" },
  ];

  const paymentTerms = [
    { value: "Standard", label: "Standard" },
    { value: "Credit", label: "Credit" },
  ];

  const initialValues = {
    purchaseOrder: "",
    invoiceDate: "",
    paymentTerm: "",
    invoiceDueDate: "",
    glPostDate: "",
  };

  const validationSchema = Yup.object({
    purchaseOrder: Yup.string().required("Purchase Order is required"),
    invoiceDate: Yup.date().required("Invoice Date is required"),
    paymentTerm: Yup.string().required("Payment Term is required"),
    invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
    glPostDate: Yup.date().required("GL Post Date is required"),
  });

  return (
    <div className="invoice-section">
      {/* Vendor Details Section */}
      <div className="vendor-details">
        <h1>
          <span>
            <img src="/src/assests/real-estate-11.png" alt="Vendor Icon" />
          </span>
          Vendor Details
        </h1>
        <h2>Vendor Information</h2>
        <Formik
          initialValues={{ vendor: "" }}
          validationSchema={vendorValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormikInput
                label="Vendor"
                name="vendor"
                type="select"
                options={vendors}
                error={errors.vendor}
                touched={touched.vendor}
              />
              <p>550 Main St., Lynn</p>
              <div className="view-vendor-btn">
                <button type="button" className="btn-link">
                  <ChevronDown /> View Vendor Details
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Invoice Details Section */}
      <div className="vendor-details">
        <h1>
          <span>
            <img src="/src/assests/icons8-receipt-64.png" alt="Invoice Icon" />
          </span>
          Invoice Details
        </h1>
        <h2>General Information</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormikInput
                label="Purchase Order Number"
                name="purchaseOrder"
                type="select"
                options={purchaseOrders}
                error={errors.purchaseOrder}
                touched={touched.purchaseOrder}
              />
              <h1>Invoice Details</h1>
              <FormRow>
                <FormikInput
                  label="Purchase Order"
                  name="purchaseOrder"
                  type="select"
                  options={purchaseOrders}
                  error={errors.purchaseOrder}
                  touched={touched.purchaseOrder}
                />
                <FormikInput
                  label="Invoice Date"
                  name="invoiceDate"
                  type="date"
                  error={errors.invoiceDate}
                  touched={touched.invoiceDate}
                  icon={<CalendarDays />}
                />
              </FormRow>

              <FormRow>
                <FormikInput
                  label="Total Amount"
                  name="totalAmount"
                  type="text"
                  placeholder="Enter amount"
                  prefix="$"
                  error={errors.totalAmount}
                  touched={touched.totalAmount}
                  icon={<DollarSign />}
                />
                <FormikInput
                  label="Payment Term"
                  name="paymentTerm"
                  type="select"
                  options={paymentTerms}
                  error={errors.paymentTerm}
                  touched={touched.paymentTerm}
                />
              </FormRow>

              <FormRow>
                <FormikInput
                  label="Invoice Due Date"
                  name="invoiceDueDate"
                  type="date"
                  error={errors.invoiceDueDate}
                  touched={touched.invoiceDueDate}
                  icon={<CalendarDays />}
                />
                <FormikInput
                  label="GL Post Date"
                  name="glPostDate"
                  type="date"
                  error={errors.glPostDate}
                  touched={touched.glPostDate}
                  icon={<CalendarDays />}
                />
              </FormRow>

              <FormikInput
                label="Invoice Description"
                name="invoiceDate"
                type="textarea"
                error={errors.invoiceDate}
                touched={touched.invoiceDate}
                icon={<CalendarDays />}
              />
            </Form>
          )}
        </Formik>
      </div>

      {/* Expense Section */}
      <div className="vendor-details">
        <h2>Expense Details</h2>
        <Formik
          initialValues={{ purchaseOrder: "", invoiceDate: "" }}
          validationSchema={invoiceValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormRow>
                <FormikInput
                  label="Line Amount"
                  name="purchaseOrder"
                  type="select"
                  options={purchaseOrders}
                  error={errors.purchaseOrder}
                  touched={touched.purchaseOrder}
                />
                <FormikInput
                  label="Department"
                  name="invoiceDate"
                  type="date"
                  error={errors.invoiceDate}
                  touched={touched.invoiceDate}
                  icon={<CalendarDays />}
                />
              </FormRow>

              <FormRow>
                <FormikInput
                  label="Account"
                  name="invoiceDate"
                  type="select"
                  error={errors.invoiceDate}
                  touched={touched.invoiceDate}
                  icon={<CalendarDays />}
                />
                <FormikInput
                  label="Location"
                  name="invoiceDate"
                  type="select"
                  error={errors.invoiceDate}
                  touched={touched.invoiceDate}
                  icon={<CalendarDays />}
                />
              </FormRow>

              <FormikInput
                label=" Description"
                name="invoiceDate"
                type="textarea"
                error={errors.invoiceDate}
                touched={touched.invoiceDate}
                icon={<CalendarDays />}
              />
            </Form>
          )}
        </Formik>
        <button className="add-expense">
          {" "}
          <PlusIcon />
          Add Expense coding
        </button>
      </div>

      {/* Comment section */}
      <div className="vendor-details">
        <h1>
          <span>
            <img
              src="/src/assests/communication_16242323.png"
              alt="Vendor Icon"
            />
          </span>
          Comments
        </h1>

        <Formik
          initialValues={{ vendor: "" }}
          validationSchema={vendorValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormikInput
                name="vendor"
                type="textarea"
                options={vendors}
                error={errors.vendor}
                touched={touched.vendor}
                placeholder="Add a comment and use @Name to tag someone"
              />
            </Form>
          )}
        </Formik>
      </div>
      <div className="buttons">
        <div>ff</div>
        <button type="button" className="btn btn-draft">
          Save as Draft
        </button>
        <button type="button" className="btn btn-submit">
          Submit and New
        </button>
      </div>
    </div>
  );
};

export default InvoiceSection;
