import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCartStatus } from "../../lib/cartslice";

export default function Navbar() {
  let { items } = useSelector((state) => state.cart);
  let dispatch = useDispatch();


  return (
    <nav>
      <div className={style.navContainer}>
        <div className={style.logo}>
          <Link to="">S H O P</Link>
        </div>
        <div
          onClick={() => {
            dispatch(changeCartStatus());
          }}
        >
          <i className={`fas fa-shopping-cart ${style.icon}`}>
            {items.length ? (
              <span className={style.itemsCount}>{items.length} </span>
            ) : (
              ""
            )}
          </i>
        </div>
      </div>
    </nav>
  );
}
