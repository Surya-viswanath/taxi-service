const express = require('express');


const cors =require("cors");
const app = express();
const dotenv = require('dotenv');
const connection = require('./config/Mongoos');
const router = require('./Router/Routers');

connection();
app.use(express.json());

dotenv.config();
app.use(cors());

app.use('/',router)


const port  = process.env.port || 4000

app.listen(port,console.log(`server is running on ${port}`));