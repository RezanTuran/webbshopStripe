const express = require('express')
require('dotenv').config('.env')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const cors = require('cors')

// const shoes = [{
//   id: 0,
//   name : "Adidas - Superstar classic",
//   description: "Unik design",
//   extraDescription: "Superstar Ftwr White/Black/White är tillverkade av en kombination av olika material. Den välkända snäcktån är tillverkad av gummi, något som ger skorna en unik design samtidigt som den skyddar foten mot regn. Större delen av skon är tillverkad av läder, syntet och tyg. Detta gör skorna bekväma att bära samtidigt som de håller formen länge.",
//   size: 41,
//   price: 899,
//   img: "Adidas5.png"
// }]

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
    // line_items: [
    //   {
    //     price_data: {
    //       currency: "sek",
    //       product_data: {
    //         name: "T-shirt",
    //       },
    //       unit_amount: 2000,
    //     },
    //     quantity: 1,
    //   },
    // ],
    mode: "payment",
    success_url: "http://localhost:3000/done",
    cancel_url: "http://localhost:3000",
  });

  res.json({ id: session.id });
});


app.listen(PORT, () => console.log(`### Server is up and running on port ${PORT} ###`))

