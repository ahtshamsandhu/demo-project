const express = require("express")
const app = express();
const bodyParser = require('body-parser');
//const dotenv = require("dotenv")
const Routes = require("./routes/routes.js")
const port = process.env.PORT || 3000


app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// db.sequelize.sync().then(() => {
//   // console.log('db has been re sync');
// });
app.listen(port,()=>{
    console.log(`The server will be connected at ${port}`)
})
app.get('/',(req,res)=> console.log("dsflshdf"))
app.use('/api',Routes);
