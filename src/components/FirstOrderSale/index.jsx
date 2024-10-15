import React from "react";
import s from "./index.module.css";
import { addNewCustomer } from "../../requests/post";

export default function FirstOrderSale() {
  //   const dispatch = useDispatch();

  //   const array = [];

  //   const submit = (e) => {
  //     e.preventDefault();

  //     const { name, phone_number, email } = e.target;

  //     const newClient = {
  //       id: Date.now(),
  //       name: name.value,
  //       phone_number: +phone_number.value,
  //       email: email.value,
  //     };

  //     dispatch(addNewClientAction(newClient));
  //     console.log(dispatch(addNewClientAction(newClient)));
  //     e.target.reset();
  //   };

  // import { addNewProduct } from '../../requests/products';

  // export default function AddProductForm({ createNewProduct }) {

  //     const submit = e => {
  //         e.preventDefault();

  //         const { title, description, price, image } = e.target;

  //         const newProduct = {
  //             title: title.value,
  //             price: +price.value,
  //             description: description.value,
  //             categoryId: 1,
  //             images: [image.value]
  //         }

  //         addNewProduct(newProduct, createNewProduct);

  //         e.target.reset()
  //     }

  const submit = (e) => {
    e.preventDefault();
    const { name, phone_number, email } = e.target;

    const newCustomer = {
      name: name.value,
      phone_number: +phone_number.value,
      email: email.value,
    };
    
console.log(newCustomer)
    addNewCustomer(newCustomer);

    e.target.reset();
  };

  return (
    <div className={s.form}>
      <h2>5% off on the first order</h2>
      <form onSubmit={submit}>
        <input type="text" placeholder="Name" name="name" className="input" />
        <input type="" placeholder="Phone number" name="phone_number" />
        <input type="text" placeholder="Email" name="email" />
           <button>Get a discount</button>
           </form>
    </div>
  );
}
