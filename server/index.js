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

app.post("/create-checkout-session", async (req, res) => {

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
            const items= await stripe.checkout.sessions.listLineItems(req.body.sessionId);
            const result = users.find( ( user => user.url === items.url ));

            if(!result){
            users.push(items); 
            fs.writeFile("ordersList.json", JSON.stringify(users, null, 2), err => { 
     
                // Checking for errors 
                if (err) throw err;  
               
                console.log("Done writing"); // Success 
            });
          }

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


   res.json(currency.EUR_SEK)

                   
  
  
 });


app.listen(PORT, () => console.log(`### Server is up and running on port ${PORT} ###`))

