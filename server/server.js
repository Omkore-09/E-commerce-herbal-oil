const express = require('express') 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const cron = require('node-cron');
const axios = require('axios');
const authRouter = require('./routes/auth/auth-routes')

const adminProductsRouter = require('./routes/admin/products-routes')

const shopProductsRouter = require('./routes/shop/products-routes')
const shopCartRouter = require('./routes/shop/cart-routes');
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

//db connection
mongoose.connect('mongodb+srv://adivasinilambariherbalhairoil:Omkar123@cluster0.cwjj9.mongodb.net/')
.then(()=>console.log("DB connected succesfully"))
.catch((error)=> console.log(error));

const app = express()

const PORT = process.env.PORT || 5000 ;

app.use(
    cors({
        origin : 'https://e-commerce-herbal-oil-frontend.onrender.com',
        methods : ['GET' , 'POST' , 'DELETE' , 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/home');
});
app.use('/api/auth', authRouter)
app.use('/api/admin/products', adminProductsRouter)
app.use('/api/shop/products', shopProductsRouter)
app.use('/api/shop/cart' , shopCartRouter)
app.use('/api/shop/address' , shopAddressRouter);
app.use('/api/shop/order', shopOrderRouter)
app.use('/api/admin/orders', adminOrderRouter)

cron.schedule('*/15 * * * *', async () => {
    try {
      await axios.get('https://e-commerce-herbal-oil-backend.onrender.com'); // Change this to your actual backend URL
      console.log('Server pinged successfully');
    } catch (error) {
      console.error('Error pinging server:', error);
    }
 });

app.listen(PORT , ()=> console.log(`server is running on PORT ${PORT}`));
