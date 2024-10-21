import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { addNewClientAction } from '../../store/reducers/newClientsReducer';



export default function FirstOrderSale() {

  const dispatch = useDispatch();

//   const { register, handleSubmit, formState: {errors }, formState } = useForm({
//     mode: 'onBlur',
//     defaultValues: {
//       name: '',
//       phone_number: '',
//       email: ''
//     }
//   });

//   const onSubmit = data => console.log(data);
//   console.log(errors, formState);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label className={s(styles.label, {
//         [styles.errorLaber] : errors.email
//       })}>
//         email
//       </label>
//       <input type="text" placeholder="Email" name="email" />
//     </form>
//   )
  
// }

  const submit = (e) => {
    e.preventDefault();

    const { name, phone_number, email } = e.target;

    const newClient = {
      id: Date.now(),
      name: name.value,
      phone_number: +phone_number.value,
      email: email.value
    };

    dispatch(addNewClientAction(newClient));
console.log( dispatch(addNewClientAction(newClient)));
    e.target.reset();
  };

  return (
    <form  onSubmit={submit} className={s.form}>
      <h2>5% off on the first order</h2>
      <label>
        <input type="text" placeholder="Name" name="name" />
      </label>
      <label>
       <input type="" placeholder="Phone number" name="phone_number" />
      </label>
      <label>
        <input type="text" placeholder="Email" name="email" />
      </label>
      <button>Get a discount</button>
    </form>
  )
}

