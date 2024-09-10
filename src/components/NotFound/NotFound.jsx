import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css";
export default function NotFound() {
  return (
    <div className={style.notfoundcontainer}>
      <div className={style.notfoundcontent}>
        <h1 className={style.notfoundheading}>404 </h1>
        <p className={style.notfoundmessage}>
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className={style.notfoundbutton}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
