import express from 'express';
import AllRoutes from './routes/index.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cros from 'cors'
import ProductRoutes from './routes/ProductRoutes.js'
const app = express();

app.use(express.json());
app.use(cros())
dotenv.config();


app.get('/', (req, res) => {
    res.send("Welcome..")
})

app.use('/api/v1', AllRoutes)
app.use('/Product', ProductRoutes)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database connected.")
})

app.listen(8000, () => { console.log("Listening on port 8000.") })