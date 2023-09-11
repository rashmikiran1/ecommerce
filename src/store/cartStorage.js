export const saveCartData = (email, cartData) => {
    localStorage.setItem(email, JSON.stringify(cartData));
  };
  
export  const getCartData = (email) => {
    const cartData = localStorage.getItem(email);
    return cartData ? JSON.parse(cartData) : [];
  };
  