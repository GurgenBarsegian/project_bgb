import React from 'react';
import s from './index.module.css';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function SuccessMessage({ onClose }) {
  return (
    <div className={s.overlay}>
      <div className={s.successMessage}>
        <h2>Congratulations!</h2>
        <div>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to cinfirm your order.</p>
        </div>
        <Link to='/'>
            <IoMdClose />
        </Link>
      </div>
    </div>
  );
}
