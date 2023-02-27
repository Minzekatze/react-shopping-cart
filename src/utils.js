export const decrease = (cart, product) => {
  const newCart = cart.find((items) => items.sku === product.sku);
  if (newCart) {
    if (newCart.qty > 1) {
      newCart.qty--;
      alert(`we have removed ${product.name} from your cart`);
      if (product.stock) {
        product.stock++;
      }
    } else if (newCart.qty === 1) {
      cart.splice(cart.indexOf(newCart), 1);
      alert(`we have removed ${product.name} from your cart`);
      if (product.stock) {
        product.stock++;
      }
    }
  } else {
    alert(`there is no ${product.name} in your cart`);
  }
  const myCart = [...cart];
  return myCart;
};
export const increase = (cart, product) => {
  const newCart = cart.find((items) => items.sku === product.sku);
  if (newCart) {
    newCart.qty++;
    alert(`we have added ${product.name} to your cart`);
    if (product.stock) {
      product.stock--;
    }
  } else {
    cart.push({
      sku: product.sku,
      qty: 1,
      name: product.name,
      price: product.price
    });
    alert(`we have added ${product.name} to your cart`);
    if (product.stock) {
      product.stock--;
    }
  }
  const myCart = [...cart];
  return myCart;
};

export const getTotalPrice = (cart) => {
  const sumCart = cart.reduce(
    (accum, currVal) => accum + currVal.qty * currVal.price,
    0
  );
  return sumCart;
};

export const getTotalItems = (cart) => {
  const sumItems = cart.reduce((accum, { qty }) => accum + qty, 0);
  return sumItems;
};
