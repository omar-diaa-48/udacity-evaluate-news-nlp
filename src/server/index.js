
const express = require('express');
const cors = require('cors');
const FormData = require('form-data');
const fetch = require('node-fetch')
const dotenv = require('dotenv');
const { response } = require('express');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req,res)=>{

    const formdata = new FormData();
  
    formdata.append("lang", "en");
    formdata.append("txt", req.body.nlpTxt);
    formdata.append("key", `${process.env.API_KEY}`);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

   fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => response.json())
        .then(response => res.send(response))
        .catch(error => console.log('error', error));
})

app.listen(process.env.PORT, () => console.log(`Listening to PORT ${process.env.PORT}`))
