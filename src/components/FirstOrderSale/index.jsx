import React from "react";
import s from "./index.module.css";
import { sendFirstOrder } from "../../requests/post";
import { useForm } from "react-hook-form";

export default function FirstOrderSale() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //created the validation of form. The retrieved data is sent to the backend via a POST request.

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

  const firstOrder = (data) => {
    sendFirstOrder({
      ...data,
    });
    reset();
  };

  return (
    <div className={s.form}>
      <h2>5% off on the first order</h2>
      <div className={s.form_container}>
        <img
          src="https://s3-alpha-sig.figma.com/img/a3b6/9a2d/df1657885446d076034889d1f0f9f714?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ6JSn6ZwNG7Rd~QQ8FO2vDDIOB4dyKVRX2t~niCsDrPdOeueGa7PWL4nLCBNHbgVJUwNpZfAr0e7FMJqy7dGpmREl6uUCedpDi7C~wyRnTiDdD1R24fPQVZYCA6dKMbMxs6frsgvUTTAeWooYfaysCsK672t9S1AOp1DDMHD-tQY4f0iVf7ACkrYCxnTcjZ0Xu6laJVzIBbu95RJIz3ImTp1qObM808vnCAo2CVs9HhV~6Iq9YOyU2LtNyuqZw-BfCNCQcq8EOuGqHRmopN3N2K3QVqLJWzTrJMgabQxiY6yXca~AzFGIgx~pdzDup4bti2SjhDLzWBroJnUfcl0A__"
          alt="form_background"
        />

        <form onSubmit={handleSubmit(firstOrder)}>
          <input
            type="text"
            placeholder="Name"
            className="input"
            {...nameRegister}
          />
           {errors.name && <p>{errors.name?.message}</p>}
         

          <input
            type="text"
            placeholder="Phone number"
            {...phoneNumberRegister}
          />
          {errors.phonenumber && <p>{errors.phonenumber?.message}</p>}

          <input type="text" placeholder="Email" {...emailRegister} />
          {errors.email && <p>{errors.email?.message}</p>}

          <button>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
