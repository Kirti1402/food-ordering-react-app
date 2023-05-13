import { CartContext } from "../context/addToCartContext";
import { useContext, useEffect, useState } from "react";

export const Cart = () => {
  const { cartList } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const totalDeliveryTime = cartList.reduce((acc, curr) => {
    acc = acc + curr.delivery_time;
    return acc;
  }, 0);

  useEffect(() => {
    setTotalPrice(
      cartList.reduce((total, currentItemPrice) => {
        total = total + currentItemPrice.price;
        return total;
      }, 0)
    );
  }, []);

  const applyCouponBtnHandle = () => {
    if (!isCouponApplied) {
      setTotalPrice((totalPrice) => totalPrice - 5);
      setIsCouponApplied(true);
    }
  };
  return (
    <>
      <h1 className="heading">CartPage</h1>
      <div className="detail-conatiner">
        <p>Total Delivery Time: {totalDeliveryTime}</p>
        <p>Total Price: {totalPrice}</p>
        <button onClick={applyCouponBtnHandle}>Apply coupon</button>
      </div>
      <div className="food-item-card cart-card">
        {cartList &&
          cartList.map((cartItem) => {
            const { id, name, description, price, image, delivery_time } =
              cartItem;
            return (
              <div key={id} className="card">
                <img src={image} alt={name}></img>
                <p>Name:{name}</p>
                <p>Description:{description}</p>
                <p>Price:{price}</p>
                <p>Delivery:{delivery_time}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
