const express = require('express'); 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios'); // Add axios for self-pinging

const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes');
const shopProductsRouter = require('./routes/shop/products-routes');
const shopCartRouter = require('./routes/shop/cart-routes');
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
const reviewRoutes= require("./routes/shop/review_model");

// db connection
mongoose.connect('mongodb+srv://adivasinilambariherbalhairoil:Omkar123@cluster0.cwjj9.mongodb.net/')
    .then(() => console.log("DB connected successfully"))
    .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: ['http://localhost:5173', 'https://e-commerce-herbal-oil-frontend.onrender.com'],
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

// API routes
app.get('/', (req, res) => {
    res.redirect('/home');
});
app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);
app.use('/api/shop/products', shopProductsRouter);
app.use('/api/shop/cart', shopCartRouter);
app.use('/api/shop/address', shopAddressRouter);
app.use('/api/shop/order', shopOrderRouter);
app.use('/api/admin/orders', adminOrderRouter);
app.use("/api/reviews", require("./routes/shop/review_model"));

// Static files (serving frontend)
app.use(express.static(path.join(__dirname, 'client/dist')));

// Catch-all route to handle frontend routing (React Router)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Self-pinging mechanism to keep the server alive on Render
const url = `https://e-commerce-herbal-oil-backend.onrender.com`; // Replace with your Render URL
const interval = 60000; // Interval in milliseconds (30 seconds)

function reloadWebsite() {
    axios.get(url)
        .then(response => {
            console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
        })
        .catch(error => {
            console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
        });
}

setInterval(reloadWebsite, interval);

// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
