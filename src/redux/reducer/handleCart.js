const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  console.log("line 4: ", action);
  switch (action.type) {
    case "ADDITEM":
      //check is there already
      console.log("Add item: ", action);
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        console.log("Came to if part", action.payload);

        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
        
      } else {
        console.log("Came to else part", action.payload);
        const product = action.payload;

        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
    
      // alert("Hii")
      return state;
      break;
  }
};

export default handleCart;
