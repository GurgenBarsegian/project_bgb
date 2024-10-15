import React from 'react';
import s from './index.module.css';

export default function ChangeStateProducts() {
  return (
    <div className={s.change}>
        <div>
            <label for="chk1">Price: </label>
            <input type="number" placeholder="from"/>
            <input type="number" placeholder="to"/>
        </div>
        <div>
            <label for="chk1">Discounted items</label>
            <input type="checkbox" id="chk1"></input>
        </div>
        <div >
            <label >Sorted</label>
            <select>
                <option value="-">by default</option>
                <option value="upside">upside</option>
                <option value="downside">downside</option>
                <option value="in alphabetic order">in alphabetic order</option>
            </select>
        </div>


        <div></div>

    </div>
  )
}
