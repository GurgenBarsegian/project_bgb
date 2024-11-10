export const sendFirstOrder = (new_customer) => {
    fetch('http://localhost:3333/sale/send', {
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
    fetch('http://localhost:3333/order/send', {
        method: 'POST', 
        headers: {
             "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(new_order)
    })
    .then(res=> res.json())
    .then(json => console.log(json))
}