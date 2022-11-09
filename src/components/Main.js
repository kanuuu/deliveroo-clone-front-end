import Hero from "./Hero";
import Category from "./Category";
import Cart from "./Cart";
import { useState } from "react";

const Main = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const stringCalc = (string) => {
    const strArr = string.split(" ");
    let result = 0;
    switch (strArr[1]) {
      case "+":
        result = Number(strArr[0]) + Number(strArr[2]);
        break;
      case "-":
        result = Number(strArr[0]) - Number(strArr[2]);
        break;
      default:
        result = "Error";
        break;
    }
    return result;
  };

  const removeCartItem = (item) => {
    setCart(cart.filter((e) => e.id !== item.id));
    setCounter(stringCalc(`${counter} - ${item.price}`));
  };

  const handleChange = (item, str) => {
    cart.map((elem, index) => {
      console.log("elem ", elem);
      if (elem.title === item.title) {
        const newCart = [...cart];
        newCart[index] = {
          title: elem.title,
          number: stringCalc(`${elem.number} ${str} ${1}`),
          price: Number(item.price).toFixed(2),
          totalPrice: stringCalc(`${elem.totalPrice} ${str} ${elem.price}`),
          id: elem.id,
        };
        setCounter(stringCalc(`${counter} ${str} ${item.price}`));
        return setCart(newCart);
      } else {
        return null;
      }
    });
  };

  const handleCart = (item, str) => {
    if (cart.length > 0 && cart.find((e) => e.title === item.title)) {
      handleChange(item, str);
    } else {
      const newCart = [
        ...cart,
        {
          title: item.title,
          number: 1,
          price: Number(item.price).toFixed(2),
          totalPrice: Number(item.price).toFixed(2),
          id: item.id,
        },
      ];
      setCounter(stringCalc(`${counter} + ${item.price}`));
      return setCart(newCart);
    }
  };
  return (
    <>
      <Hero data={data} />
      <div className="section-container">
        <div className="main-card">
          <div className="cat-bg">
            <Category data={data} handleCart={handleCart} />
          </div>
        </div>
        <Cart
          cart={cart}
          removeCartItem={removeCartItem}
          handleCart={handleCart}
          counter={counter}
        />
      </div>
    </>
  );
};

export default Main;
