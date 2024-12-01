import PORT from "./config.js"
import express from "express";


const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log("server ok, puerto: ", PORT);
});