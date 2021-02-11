import React, { Component, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout'

function Payment() {

    const [product, setproduct] = useState({
        name: "Payment for the Day",
        price: 10,
        productBy: 'RamNshyaM'
    })

    const makePayment = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application.json"
        }

        return fetch(`http://localhost:9000/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE", response);
        })
            .catch((err) => console.log(err))
    }
    return (
        <StripeCheckout
            stripeKey="pk_test_51IGPM0G0tBNKqg0qve5Fu0tM6DgmgmQRlwpsYziM4hHSsDqnnQXcD7MYJnxCbIjAzGCQimaHn0g0vT0xIR2GutHu00LMx9G7QK"
            token={makePayment}
            name="Payment for the Day"
            amount={product.price * 100}
        >
            <button>Pay!!! {product.price}</button>
        </StripeCheckout>
    )
}

export default Payment