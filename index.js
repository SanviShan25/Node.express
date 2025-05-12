//GETTING STARTED WITH EXPRESS
const express = require('express');
const app = express();
console.dir(app);

let port=3000;//8080

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});


//HANDLING REQUESTS
app.use((req,res)=>{
    console.log("new incoming request");
});


//SENDING A RESPONSE
app.use((req,res)=>{
    console.log(req);
    console.log("request received");
});

const cors = require('cors');
app.use(cors());