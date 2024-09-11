import { useEffect, useState } from "react";
import style from "./Products.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../lib/cartslice";

export default function Products() {
  let dispatch = useDispatch();
  let { isCartOpen } = useSelector((state) => state.cart);

  const [Products, setProducts] = useState([]);
  async function getAllProducts() {
    let response = await axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => res)
      .catch((err) => err);
    console.log(response.data);
    if (response.status == 200) {
      setProducts(response.data);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={style.container}>
      <div className={Products.length == 0 ? ` ${style.loader} ` : `myRow`}>
        {Products.length > 0 ? (
          Products.map((product) => {
            return (
              <div
                className={isCartOpen ? style.itemWhenCartIsOpen : style.item}
                key={product.id}
              >
                <div className={style.product}>
                  <div className={style.imageContainer}>
                    <img
                      src={product.image}
                      alt={product.title.split(" ").slice(0, 3).join(" ")}
                    />
                    <span className={style.price}>{product.price} EGP</span>
                    <span className={style.rating}>  <div>
                     
                      <i className="fa-solid fa-star"> </i>  {product.rating.rate}
                    </div></span>
                  </div>
                  <div className={style.productContent}>
                    <div className={style.content}>
                      <h3>{product.title.split(" ").slice(0, 3).join(" ")}</h3>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          dispatch(addProductToCart(product));
                        }}
                      >
                        ADD <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}
