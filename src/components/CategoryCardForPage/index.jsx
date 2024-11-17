import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import { domain } from "../../domain";


export default function CategoryCardForPage({ id, title, image }) {

  return (
    <Link to={`/categories/${id}`} className={s.category_card}>
      <img src={`${domain}${image}`} alt={title} />
      <p>{title}</p>
    </Link>
  );
}
