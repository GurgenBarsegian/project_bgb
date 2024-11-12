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
    .then(json => console.log(json))
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
    .then(json => console.log(json))
}