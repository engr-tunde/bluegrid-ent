import * as yup from "yup";

export const validateAddProduct = () => {
  const validationSchema = yup.object({
    product_type: yup.string().required("Select product type"),
    product_name: yup.string().required("Product name is missing"),
    product_code: yup.string().required("Product code is missing"),
    barcode_format: yup.string().required("barcode symbology is not provided"),
    brand: yup.string().required("Brand name is missing"),
    category: yup.string().required("Product category is missing"),
    unit: yup.string().required("How many unit does the product have?"),
    purchase_unit: yup.string().required("Purchse unit is missing"),
    sale_unit: yup.string().required("Sale unit is missing"),
    quantity: yup.number().required("Available quantity is missing"),
    product_cost: yup.number().required("What is the product cost?"),
    profit_margin: yup.number(),
    product_price: yup.number().required("Product price is missing"),
    wholesale_price: yup
      .number()
      .required("Product wholesale price is missing"),
    daily_sale_objective: yup.string(),
    alert_quantity: yup.number().required("Product alert quantity is missing"),
    product_tax: yup.string(),
    tax_method: yup.string(),
    warranty: yup.number(),
    guarantee: yup.number(),
    image: yup.mixed().required("Please upload an image"),
    product_details: yup.string().required("Product details is missing"),
  });

  return validationSchema;
};
