
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import mongoose from 'mongoose';


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";




const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.POR || 4000;
const DB = process.env.DB_URL;


//DB connection
try {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,


    });
    console.log("Database successfully connected");

} catch (error) {
    console.log("Error :",error);
}

//define routes
app.use("/book",bookRoute);

app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})