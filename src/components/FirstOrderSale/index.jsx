import React from 'react'
import s from './index.module.css'
import { addNewCustomer } from '../../requests/post';



export default function FirstOrderSale() {
  //   const dispatch = useDispatch();

  //   const array = [];


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
      <div className={s.form_container}>
      <img src="https://s3-alpha-sig.figma.com/img/a3b6/9a2d/df1657885446d076034889d1f0f9f714?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ6JSn6ZwNG7Rd~QQ8FO2vDDIOB4dyKVRX2t~niCsDrPdOeueGa7PWL4nLCBNHbgVJUwNpZfAr0e7FMJqy7dGpmREl6uUCedpDi7C~wyRnTiDdD1R24fPQVZYCA6dKMbMxs6frsgvUTTAeWooYfaysCsK672t9S1AOp1DDMHD-tQY4f0iVf7ACkrYCxnTcjZ0Xu6laJVzIBbu95RJIz3ImTp1qObM808vnCAo2CVs9HhV~6Iq9YOyU2LtNyuqZw-BfCNCQcq8EOuGqHRmopN3N2K3QVqLJWzTrJMgabQxiY6yXca~AzFGIgx~pdzDup4bti2SjhDLzWBroJnUfcl0A__" alt="form_background" />

      <form onSubmit={submit}>
        <input type="text" placeholder="Name" name="name" className="input" />
        <input type="" placeholder="Phone number" name="phone_number" />
        <input type="text" placeholder="Email" name="email" />
           <button>Get a discount</button>
           </form>
           </div>
    </div>
  );
}
