import express from 'express'
import{Welcome}from './controllers/Welcome.controllers.js'
import AllRoutes from './routes/index.js'
import Payment from './routes/index.js'
import Cart from './routes/index.js'

const app = express();

app.get('/',Welcome) 

app.use('/api/v1',AllRoutes)

app.use('/api/v1',Payment)

app.use('/api/v1',Cart)
// '/api/v1' + '/auth' + '/login',()=>{}

app.listen(8000,()=>{console.log("Running on port 8000.")})