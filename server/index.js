import express from 'express';

const app = express();

app.use(express.json())
 
app.get('/',(req,res) => {
    res.send("Welcome..")
})

app.get('/test',(req,res) =>{
    res.send ("Test....test")
})

app.post('/testinghost',(req,res) =>{
    res.send (req.body.name)
})

app.listen('8000',()=>{ console.log("Listening on port 8000")})

