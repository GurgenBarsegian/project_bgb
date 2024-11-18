import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { changeSingleProductStatusAction } from "../../store/reducers/singleProductReducer";
import { getSingleProduct } from "../../requests/products";
import s from './index.module.css';
import { getCategory } from "../../requests/categories";
import { addProductToCartAction } from "../../store/reducers/cartReducer";
import { domain } from "../../domain";

export default function SingleProductPage() {
  const { product_id } = useParams();
  let [count, setCount] = useState(1);

  const incrCount = () => setCount(++count);
  const decrCount = () => {
    if (count > 1) {
      setCount(--count);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
    dispatch(changeSingleProductStatusAction());
  }, [product_id, dispatch]);

  const singleProductState = useSelector(store => store.singleProduct);
  const categoryState = useSelector(store => store.category);

  useEffect(() => {
    if (singleProductState.data.categoryId) {
      dispatch(getCategory(singleProductState.data.categoryId));
    }
  }, [singleProductState.data.categoryId]);

  const { id, image, title, description, price, discont_price } = singleProductState.data;
  const discontPercent = Math.round(100 - ((discont_price / price) * 100));

  return (
    <div>
      {
        singleProductState.status === 'loading'
          ? <p>Product info is loading...</p>
          : <div className={s.singleProduct}>
            <div className={s.breadCrums}>
              <Link to="/">Main Page</Link>
              <hr />
              <Link to="/categories">Categories</Link>
              <hr />
              <Link to={`/categories/${singleProductState.data.categoryId}`}>{categoryState.data.title}</Link>
              <hr />
              <span>{title}</span>
            </div>

            <h3 className={s.hiddenTitle}>{title}</h3>

            <div className={s.info}>
              <div className={s.imageContainer}>
                <img src={`http://localhost:3333${image}`} alt={title} className={s.image} />
                <span className={s.hiddenDiscontPercent}>-{discontPercent}%</span>
              </div>
              <div className={s.allText}>

                <h3>{title}</h3>

                <div className={s.value}>
                  {
                    discont_price === null
                      ? (<span className={s.price}>${price}</span>)
                      : (<><span className={s.price}>${discont_price}</span>
                        <span className={s.oldPrice}>${price}</span>
                        <span className={s.discontPercent}>-{discontPercent}%</span></>)
                  }
                </div>

                <div className={s.addToCart}>
                  <div>
                    <div onClick={decrCount} className={s.calcButton}>-</div>
                    <p className={s.count}>{count}</p>
                    <div onClick={incrCount} className={s.calcButton}>+</div>
                  </div>
                  <button onClick={() => dispatch(addProductToCartAction({ id, image, title, price, count }))}>Add to cart</button>
                </div>
                <div className={s.description}>
                  <p>Description</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>

            <div className={s.hiddenDescription}>
              <p>Description</p>
              <p>{description}</p>
            </div>
          </div>

      }
    </div>
  );
}


