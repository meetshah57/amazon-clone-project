const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51IjpkASIviUAuZQ31cAvbZDT0DN4YyMOyGHlu3oodczaAJH9WVNZOhcs4olKxYMKvMfdKjHHCLJOwVo0MSEsfUIc004QifGfRI')



const app = express();


app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
      });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })

     

})


exports.api = functions.https.onRequest(app)