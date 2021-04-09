
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    let txt = req.query.txt;
    if(typeof txt == "string")
        txt = txt.split('').reverse().join('');
    res.send(`Hello ${txt}`)
})

app.listen(process.env.PORT, () => console.log(`Listening to PORT ${process.env.PORT}`))
