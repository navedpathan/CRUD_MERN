import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import bodyParser from "body-parser";

// import Router from "./router/route.js";
import Connection from "./db.js";

const app = express();
app.use(express.json());

// initiliazed env file
dotenv.config();
// for data crossing from front-end to backend (to cross the different server)

let originUrl = process.env.ORIGIN_URL;
app.use(cors(
  {
        origin: {originUrl},
        // origin: "https://crud-react-js-client.vercel.app",
        methods:["POST","GET","PUT","DELETE","*"],
        credentials:true
    }  
  ));

// app.use(cors());

// squence should be maintain

// // node js can't understand body recevied from frontend so we use body parser
// app.use(bodyParser.json({ extended: true }));

// // if any spaces leaves in url it convert into some code so it helps to decode it
// app.use(bodyParser.urlencoded({extended:true}));

// using different function on f=different route
// app.use('/',Router);

const PORT = 9900;

Connection();
app.listen(PORT,() => {console.log(`Server running on PORT ${PORT}`)});
