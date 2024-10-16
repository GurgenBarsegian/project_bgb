export const addNewCustomer = (new_customer) => {
    fetch('http://localhost:3333/sale/send', {
        method: 'POST', 
        headers: {
             "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(new_customer)
    })
    .then(res=> res.json())
    .then(json => json)
}