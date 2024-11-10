import { React, useState } from "react";
import CartContainer from "../../components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { sendOrder } from "../../requests/post";
import SuccessMessage from "../../components/SuccessMessage";
import { useForm } from "react-hook-form";

export default function CartPage() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const cartState = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nameRegister = register("name", {
    required: '*The field "Name" is required',
    pattern: {
      value: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
      message: "*Please start your name with a letter",
    },
  });

  const phoneNumberRegister = register("phonenumber", {
    required: '*The field "Phone number" is required',
    pattern: {
      value: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
      message: "*Please, enter valid phone number",
    },
  });

  const emailRegister = register("email", {
    required: '*The field "Email" is required',
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "*Please, enter valid email",
    },
  });

  const newOrder = (data) => {
    sendOrder({
      ...data,
      total: totalSum,
      count: totalCount,
      items: cartState,
    });
    setIsSuccessful(true);
    reset();
  };

  // const submit = (e) => {
  //   e.preventDefault();
  //   const { name, phone_number, email } = e.target;

  //   const newCustomer = {
  //     name: name.value,
  //     phone_number: +phone_number.value,
  //     email: email.value,
  //   };

  //   console.log(newCustomer);
  //   sendOrder(newCustomer);
  //   setIsSuccessful(true);
  //   e.target.reset();
  // };

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalSum = +cartState
    .reduce((acc, el) => acc + el.price * el.count, 0)
    .toFixed(2);

  const closeSuccessMessage = () => {
    setIsSuccessful(false);
  };

  return (
    <div className={s.cart}>
      <h2>Shopping Cart</h2>
      {cartState.length === 0 ? (
        <div>
          <p>Looks like you have no items in your basket currently</p>
          <Link to="/all_products">
            <button type="button">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div className={s.cart1}>
          <div className={s.list}>
            <CartContainer cartState={cartState} />
          </div>
          <div className={s.order_form}>
            <p className={s.order_details}>Order details </p>
            <p className={s.items}>{totalCount} items</p>
            <p className={s.total_price}>Total</p>
            <p className={s.price}>${totalSum}</p>

            <form onSubmit={handleSubmit(newOrder)}>
              <input
                type="text"
                placeholder="Name"
                // name="name"
                {...nameRegister}
                className={s.input}
                required
              />
              {errors.name && <p>{errors.name?.message}</p>}
              <input
                type="tel"
                placeholder="Phone number"
                // name="phone_number"
                {...phoneNumberRegister}
                className={s.input}
                required
              />
              {errors.phonenumber && <p>{errors.phonenumber?.message}</p>}

              <input
                type="email"
                placeholder="Email"
                // name="email"
                {...emailRegister}
                className={s.input}
                required
              />
              {errors.email && <p>{errors.email?.message}</p>}
              <button type="submit" className={s.button}>
                Order
              </button>
            </form>
          </div>
        </div>
      )}

      {isSuccessful && <SuccessMessage onClose={closeSuccessMessage} />}
    </div>
  );
}
