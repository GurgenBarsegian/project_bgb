<<<<<<< HEAD
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
          src="https://images-ext-1.discordapp.net/external/yF4dS0WwUrXmfrtECx-JHB0Td3AFKmZvd2V6pD8tDJM/%3FExpires%3D1732492800%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4%26Signature%3DY6K2wTesf6pI9uJbBGbeS-DflV0ARfbO4ULl5zlFKC3p51G8B2vHMoBUdoZMEoMpSRfkhoOBqtg56hv7t2uY1NoTPEtRAlpmccCoefJP8TEYnQl9eAcVUl2ONdXXCLIqK9WvdKDgPJAxtgMB4dUyZ5AewhVwPwkbUkWif0n8DytxoPXxxdKs3iZkoUa6l-MYUdeULKAzkcQDxmShHxrKZ8I7iK4O7cU6SJAPP8w7cob-7uZJga6RYeIXB4SIzPampc32QhygqnKkAsfDdtoOewElcU-~5nNcMi9jLxz2w7ochxBcmAOtBMcLeCpmXLmxlEguInBAxvhvTbQXteSxvQ__/https/s3-alpha-sig.figma.com/img/a3b6/9a2d/df1657885446d076034889d1f0f9f714?format=webp&width=1231&height=663"
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
=======

>>>>>>> fe11390c72764016f42d1b9c35eb708b0333b5d3
