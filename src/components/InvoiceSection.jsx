import React from "react";
import { Formik, Form } from "formik";
import {
  CalendarDays,
  ChevronDown,
  DollarSign,
  PlusIcon,
  EllipsisVertical,
} from "lucide-react";
import { FormikInput, FormRow } from "./common/FormikFields";
import { validationSchema } from "./validationSchema"; // Import validation schema

const InvoiceSection = () => {
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
    vendor: "",
    purchaseOrder: "",
    invoiceDate: "",
    paymentTerm: "",
    invoiceDueDate: "",
    glPostDate: "",
    totalAmount: "",
    invoiceDescription: "",
    lineAmount: "",
    department: "",
    account: "",
    location: "",
    comment: "",
  };

  return (
    <div className="invoice-section">
      {/* Vendor Details Section */}
      <div className="vendor-details">
        <h1>
          <span>
            <img src="/real-estate-11.png" alt="Vendor Icon" />
          </span>
          Vendor Details
        </h1>
        <h2>Vendor Information</h2>
        <Formik
          initialValues={{ vendor: "" }}
          validationSchema={validationSchema}
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
            <img src="/icons8-receipt-64.png" alt="Invoice Icon" />
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
                name="invoiceDescription"
                type="textarea"
                error={errors.invoiceDescription}
                touched={touched.invoiceDescription}
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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              {/* First Row: Amount Input */}
              <FormRow>
                <FormikInput
                  label="Amount"
                  name="lineAmount"
                  type="text"
                  placeholder="Enter amount"
                  error={errors.lineAmount}
                  touched={touched.lineAmount}
                  icon={<DollarSign />}
                />
                <FormikInput
                  label="Department"
                  name="department"
                  type="select"
                  options={[
                    { value: "HR", label: "HR" },
                    { value: "Finance", label: "Finance" },
                    { value: "IT", label: "IT" },
                    { value: "Marketing", label: "Marketing" },
                  ]}
                  error={errors.department}
                  touched={touched.department}
                />
              </FormRow>

              {/* Second Row: Select Inputs (Department and Account) */}
              <FormRow>
                <FormikInput
                  label="Account"
                  name="account"
                  type="select"
                  options={[
                    { value: "Revenue", label: "Revenue" },
                    { value: "Expenses", label: "Expenses" },
                  ]}
                  error={errors.account}
                  touched={touched.account}
                />{" "}
                <FormikInput
                  label="Location"
                  name="department"
                  type="select"
                  options={[
                    { value: "New York", label: "New York" },
                    { value: "Los Angeles", label: "Los Angeles" },
                    { value: "Chicago", label: "Chicago" },
                  ]}
                  error={errors.department}
                  touched={touched.department}
                />
              </FormRow>

              {/* Additional Row: Description */}
              <FormikInput
                label="Description"
                name="expenseDescription"
                type="textarea"
                error={errors.expenseDescription}
                touched={touched.expenseDescription}
              />

              {/* Add Expense Button */}
              <button className="add-expense">
                <PlusIcon />
                Add Expense
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Comment Section */}
      <div className="vendor-details">
        <h1>
          <span>
            <img src="/communication_16242323.png" alt="Vendor Icon" />
          </span>
          Comments
        </h1>
        <Formik
          initialValues={{ comment: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormikInput
                name="comment"
                type="textarea"
                placeholder="Add a comment and use @Name to tag someone"
                error={errors.comment}
                touched={touched.comment}
              />
            </Form>
          )}
        </Formik>
      </div>

      <div className="buttons">
        <div>
          <EllipsisVertical />
        </div>
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
