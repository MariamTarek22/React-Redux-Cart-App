import style from "./Home.module.css";
import Navbar from "../../components/NavBar/Navbar";
import { Helmet } from "react-helmet-async";
import Products from "../../components/Products/Products";
import { useSelector } from "react-redux";
import Cart from "./../../components/Cart/Cart";

export default function Home() {
  let { isCartOpen } = useSelector((state) => state.cart);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={`myRow ${style.home}`}>
        <div className={isCartOpen ? style.ProductsWidth : ""}>
          <Products />
        </div>
        
        {isCartOpen ? (
          <div className={style.cartWidth}>
            <Cart />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
