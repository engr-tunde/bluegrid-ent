

export const addProductValues = (data) => {
  const initialValues = {
    product_type: data ? data.product_type : "",
    product_name: data ? data.product_name : "",
    product_code: data ? data.product_code : "",
    barcode_format: data ? data.barcode_format : "",
    brand: data ? data.brand : "",
    category: data ? data.category : "",
    unit: data ? data.unit : "",
    purchase_unit: data ? data.purchase_unit : "",
    sale_unit: data ? data.sale_unit : "",
    quantity: data ? data.quantity : "",
    product_cost: data ? data.product_cost : "",
    profit_margin: data ? data.profit_margin : "",
    product_price: data ? data.product_price : "",
    wholesale_price: data ? data.wholesale_price : "",
    daily_sale_objective: data ? data.daily_sale_objective : "",
    alert_quantity: data ? data.alert_quantity : "",
    product_tax: data ? data.product_tax : "",
    tax_method: data ? data.tax_method : "",
    warranty: data ? data.warranty : "",
    guarantee: data ? data.guarantee : "",
    image: data ? data.image : "",
    product_details: data ? data.product_details : "",
  };
  return initialValues;
};

