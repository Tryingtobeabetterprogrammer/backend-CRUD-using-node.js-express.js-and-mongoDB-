const express = require('express');
const mongoose=require('mongoose');
const Product = require('./models/product.model.js');
const productsRoute = require('./routes/product.route.js');
const app = express();
app.use(express.json());

//routes
app.use('/api/products',productsRoute);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/',(req, res) => {
    res.send("Hel ");
});



mongoose.connect('mongodb+srv://vijaysharu15:vijay@chemistry.f7gp4vm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CHEMISTRY')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});