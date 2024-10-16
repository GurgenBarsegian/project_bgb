import React from 'react'
// import { useState } from 'react';
import FirstOrderSale from '../../components/FirstOrderSale';

export default function CartPage() {

  
  // const [allCustomer, setAllCustomer] = useState([]);

  // useEffect(()=> getAllCustomer(setAllCustomer), []);

  // const createNewCustomer = customer => setAllCustomer(prev_state => [...prev_state, customer]);

  return (
    <div>
      <FirstOrderSale />
    </div>
  )
}
