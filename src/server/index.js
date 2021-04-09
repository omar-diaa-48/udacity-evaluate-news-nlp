
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    const txt = req.query.txt;
    let reversedTxt = '';
    if(typeof txt == "string")
        reversedTxt = txt.split('').reverse().join('');
    res.send(`Hello ${txt} your reversed name is ${reversedTxt}`);
})

app.listen(process.env.PORT, () => console.log(`Listening to PORT ${process.env.PORT}`))
