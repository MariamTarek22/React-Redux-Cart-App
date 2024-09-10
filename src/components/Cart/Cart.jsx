import { useDispatch, useSelector } from "react-redux";
import style from "./Cart.module.css";
import {
  incrementItemCount,
  decrementItemCount,
  clearCart,
  selectCartTotal,
} from "../../lib/cartslice";

export default function Cart() {
  let { items } = useSelector((state) => state.cart);
  let totalCartPrice = useSelector(selectCartTotal);
  let dispatch = useDispatch();

  return (
    <div className={style.cart}>
      <div className={`${style.cartHead} justify-between`}>
        <div>
          <h3>ITEMS</h3>
        </div>
        <div>
          <button
            className={`letterSpacing ${style.clearButton}`}
            onClick={() => {
              dispatch(clearCart());
            }}
            disabled={!items.length}
          >
            CLEAR
          </button>
        </div>
      </div>
      <div className={style.cartItems}>
        {items.length ? (
          <>
            {items?.map((item) => {
              return (
                <div className={style.cartItem} key={item.id}>
                  <div className={`flex ${style.rightContainer} `}>
                    <img
                      src={item.image}
                      alt={item.title.split(" ").slice(0, 2).join(" ")}
                    />
                    <div className={style.cartItemDetails}>
                      <div className={style.title}>
                        {item.title.split(" ").slice(0, 2).join(" ")}
                      </div>
                      <div className={style.cartPrice}>{item.price} EGP</div>
                      {item.rating.count ? (
                        ""
                      ) : (
                        <h5 className={style.outOfStock}>OutOFStock</h5>
                      )}
                    </div>
                  </div>
                  <div
                    className={` ${style.leftContainer} flex justify-between items-center`}
                  >
                    <button
                      className={style.changeQuantity}
                      onClick={() => {
                        dispatch(decrementItemCount(item.id));
                      }}
                    >
                      {item.quantity == 1 ? (
                        <i className="fa-regular fa-trash-can"></i>
                      ) : (
                        " - "
                      )}
                    </button>
                    <span className={style.quantity}>{item.quantity}</span>
                    <button
                      className={`${style.changeQuantity} ${style.icrementButton}`}
                      onClick={() => {
                        dispatch(incrementItemCount(item.id));
                      }}
                      disabled={!item.rating.count}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
              );
            })}

            <button className={style.payButton}>
              PAY {totalCartPrice} EGP
            </button>
          </>
        ) : (
          <h2 className={style.emptyCart}>Cart Empty</h2>
        )}
      </div>
    </div>
  );
}
