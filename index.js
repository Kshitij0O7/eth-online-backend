const express = require('express');
const dotenv = require('dotenv');
const auctionRoutes = require('./routes/auctionRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auctions', auctionRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
