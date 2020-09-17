const express = require('express')
require('dotenv').config('.env')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const cors = require('cors')
const fs = require("fs"); 
const fetch = require("node-fetch");

const users = require(__dirname+'/ordersList.json'); 



const app = express()
const PORT = 3001
app.use(express.json())

app.use(cors())
//app.get('/api/shoes', (req,res) => res.json(shoes))

//const stripe = require('stripe')('sk_test_51HMTp2IFKCcAoJyNeaX7h3vb65Mr6W7iJ8r7LcEfdFUJPQRhVbRj1ibIgWUXh7awkWS6h5Y6U20Rdp79hPZYq3rL00I2vZ9OVz');

app.post("/create-checkout-session", async (req, res) => {
  console.log(JSON.stringify(req.body));

  const items=req.body ;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: "http://localhost:3000/done?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/cart",
  });

  res.json({ id: session.id });
});

app.post("/verify-checkout-session", async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.retrieve(req.body.sessionId)
        console.log("Session",session);
        if(session){
            if(session.payment_status==='paid'){
            res.json({isVerfied: true})
            users.push(session); 
            fs.writeFile("ordersList.json", JSON.stringify(users, null, 2), err => { 
     
                // Checking for errors 
                if (err) throw err;  
               
                console.log("Done writing"); // Success 
            });


            }
            else  throw new Error('Not paid')
        }else{
            throw new Error('No session')
        }
    }catch(error){
        console.error(error)
        res.json({isVerfied: false})
    }
})

app.post("/currency-api", async  (req, res) => {
   
   const currency = await fetch(`https://free.currconv.com/api/v7/convert?q=EUR_SEK&compact=ultra&apiKey=06645d528c8331686f2b`)
      .then(response => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  // console.log("K", currency.EUR_SEK);


   res.json(currency.EUR_SEK)

                   
  
  
 });


app.listen(PORT, () => console.log(`### Server is up and running on port ${PORT} ###`))

