
const express = require('express');
const cors = require('cors');
const FormData = require('form-data');
const fetch = require('node-fetch')
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req,res)=>{

    const form_data = new FormData();
  
    form_data.append("lang", "en");
    form_data.append("txt", req.body.nlpTxt);
    form_data.append("key", `${process.env.API_KEY}`);
  
    const requestOptions = {
        method: 'POST',
        body: form_data,
        redirect: 'follow'
    };

   fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => obj = {
            status :  response.status,
            body : response.json()
        })
        .then(obj => res.send(obj.body))
        .catch(error => console.log('error', error));
})

app.listen(process.env.PORT, () => console.log(`Listening to PORT ${process.env.PORT}`))
