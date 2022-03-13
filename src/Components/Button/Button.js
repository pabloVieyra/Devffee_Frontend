import React from "react";
import s from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ text, href, styles }) => {
  return (
    <Link to={href} className={s.a} style={styles}>
      {text}
    </Link>
  );
};

export default Button;
