import { useState, useEffect } from "react";

const Cart = ({ cart, handleCart, removeCartItem, counter }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [counter]);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-element">
          <button className={active ? "validate-cart" : "btn-disabled"}>
            Valider mon panier
          </button>
          {cart.length > 0 &&
            cart.map((item, index) => {
              return (
                <>
                  <div key={index} className="item-display">
                    <div className="number-selector">
                      <button
                        className="minus-one"
                        onClick={() => {
                          if (item.number === 1) {
                            removeCartItem(item);
                          } else {
                            handleCart(item, "-");
                          }
                        }}
                      >
                        -
                      </button>{" "}
                      <span>{item.number}</span>{" "}
                      <button
                        className="add-one"
                        onClick={() => {
                          handleCart(item, "+");
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span style={{ width: "60%", textAlign: "start" }}>
                      {item.title}
                    </span>
                    <span>$ {Number(item.totalPrice).toFixed(2)}</span>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      {counter > 0 ? (
        <div className="total-price">
          {counter > 1 && (
            <div className="total-no-fee">
              <span>Sous-total</span>
              <span>$ {Number(counter).toFixed(2)}</span>
            </div>
          )}
          {counter > 1 && (
            <div className="shipping">
              <span>Frais de livraison</span>
              <span>$ 2.50</span>
            </div>
          )}

          <div className="total">
            <span>Total</span>
            <span>
              ${" "}
              {counter > 1
                ? (Number(counter) + Number("2.50")).toFixed(2)
                : counter}
            </span>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1>Votre panier est vide</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
