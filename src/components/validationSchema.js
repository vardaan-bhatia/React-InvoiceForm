// validationSchema.js
import * as Yup from "yup";

export const validationSchema = Yup.object({
  vendor: Yup.string().required("Please select a vendor"),
  purchaseOrder: Yup.string().required("Purchase Order is required"),
  invoiceDate: Yup.date().required("Invoice Date is required"),
  paymentTerm: Yup.string().required("Payment Term is required"),
  invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
  glPostDate: Yup.date().required("GL Post Date is required"),
  totalAmount: Yup.number()
    .required("Total Amount is required")
    .positive("Amount must be positive"),
  invoiceDescription: Yup.string().required("Invoice Description is required"),
  lineAmount: Yup.string().required("Amount is required"),
  department: Yup.string().required("Department is required"),
  account: Yup.string().required("Account is required"),
  location: Yup.string().required("Location is required"),
  comment: Yup.string().required("Comment is required"),
});
