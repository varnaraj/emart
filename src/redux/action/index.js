//for add item to cart
export const addCart = (product) => {
  console.log("at addcart");
  console.log(product);

  return {
    type: "ADDITEM",
    payload: product,
  };
};

//for delete item from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
