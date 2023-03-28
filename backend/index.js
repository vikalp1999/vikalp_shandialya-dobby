require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./src/config/db");
const Auth= require("./src/routes/auth.route");
const Picture= require("./src/routes/picture.routes")

const PORT= process.env.PORT;


const app= express();
app.use(express.json());
app.use(cors());

app.use("/",Auth)
app.use("/",Picture)



app.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})
