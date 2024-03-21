const { configDotenv } = require("dotenv");
const express = require("express");
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

configDotenv(); 

const PORT = process.env.PORT || 3000; // Use PORT from .env file or default to 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// app.get('/',(req,res)=>{
//     if(res.body.auth==="1234"){
//         res.send('Fisrt Request!')
//     }
//     else{
//         res.send(401,"auth invalid")
//     }
    
// })
app.get('/', (req, res) => {
    console.log(req.headers.authkey);
    if (req.headers.authkey === "1234") {
        res.send('First Request!');
    } else {
        res.status(401).send("auth invalid");
    }
});
app.get('/another',(req,res)=>{
    res.send("This is another get request!")
})

app.post('/',(req,res)=>{
    
    res.send(JSON.stringify(req.body));
})

app.put('/p',(req,res)=>{
    
    res.send(JSON.stringify(req.body));
})
// app.use(express.urlencoded({ extended: true }));

// app.post('/post', (req, res) => {
//     console.log(req.body);
//     if (!req.body || Object.keys(req.body).length === 0) {
//         return res.status(400).send("No data provided");
//     }
//     res.status(200).send(`Received data: ${JSON.stringify(req.body)}`);
// });

module.exports=app;

