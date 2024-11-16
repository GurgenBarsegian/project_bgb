import { domain } from "../domain"

export const sendFirstOrder = (new_customer) => {
    fetch(`${domain}/sale/send`, {
        method: 'POST', 
        headers: {
             "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(new_customer)
    })
    .then(res=> res.json())
    .then(json => console.log(json)) //this post request is for the form on the MainPage where the store offers the 5%sale for the new customer 
}

export const sendOrder = (new_order) => {
    fetch(`${domain}/order/send`, {
        method: 'POST', 
        headers: {
             "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(new_order)
    })
    .then(res=> res.json())
    .then(json => console.log(json))//this post request retrieved data from orderFrom and send this to the backend
}