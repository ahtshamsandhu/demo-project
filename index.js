const express = require("express")
const app = express();
const port = process.env.PORT || 4200
app.listen(port,()=>{
    console.log(`The server will be connected at ${port}`)
})